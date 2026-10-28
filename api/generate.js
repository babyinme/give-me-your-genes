// Server-only Vercel function. Requires OPENAI_API_KEY in Vercel project settings.
const ALLOWED = new Set(['image/jpeg','image/png','image/webp']);
const MAX = 1.8*1024*1024;
const MAX_TOTAL_ENCODED = 3.7*1024*1024;
export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'Method not allowed'});}
  if(!process.env.OPENAI_API_KEY || !process.env.DEMO_ACCESS_CODE)return res.status(503).json({error:'The private demo is not configured yet.'});
  if(Number(req.headers['content-length']||0)>MAX_TOTAL_ENCODED)return res.status(413).json({error:'Images are too large. Please choose smaller photos.'});
  if(req.headers.origin){try{if(new URL(req.headers.origin).host!==req.headers.host)return res.status(403).json({error:'Request origin not allowed.'});}catch{return res.status(403).json({error:'Invalid origin.'});}}
  try{
    const {photos,style,consent,accessCode}=req.body||{};
    if(typeof accessCode!=='string'||accessCode!==process.env.DEMO_ACCESS_CODE)return res.status(403).json({error:'Incorrect demo access code.'});
    if(consent!==true||!Array.isArray(photos)||photos.length<1||photos.length>2)return res.status(400).json({error:'Consent and one or two photos are required.'});
    let bytes=0;
    const content=[{type:'input_text',text:'Create one imaginative, adorable portrait of a fictional baby around 10 months old, in premium realistic-inspired 3D animated-film illustration style. Use the consenting adults pictured only as visual inspiration for features; this is NOT a genetic prediction. Centered baby, friendly smile, tasteful soft studio background, fully clothed, no text, no adult faces in the output. Style preference: '+String(style||'Realistic').slice(0,30)+'.'}];
    for(const p of photos){
      if(!p||!ALLOWED.has(p.type)||typeof p.data!=='string'||!p.data.startsWith('data:'+p.type+';base64,'))return res.status(400).json({error:'Unsupported photo format.'});
      const b64=p.data.split(',')[1];
      if(!/^[A-Za-z0-9+/]+={0,2}$/.test(b64)||b64.length>Math.ceil(MAX*4/3)+8)return res.status(413).json({error:'Photo is too large or invalid.'});
      bytes+=Math.floor(b64.length*3/4);content.push({type:'input_image',image_url:p.data});
    }
    if(bytes>2*MAX)return res.status(413).json({error:'Photos are too large.'});
    const abort=new AbortController();const timeout=setTimeout(()=>abort.abort(),55000);
    let response;
    try{response=await fetch('https://api.openai.com/v1/responses',{method:'POST',signal:abort.signal,headers:{Authorization:'Bearer '+process.env.OPENAI_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({model:'gpt-4.1',tools:[{type:'image_generation'}],input:[{role:'user',content}],tool_choice:{type:'image_generation'}})});}finally{clearTimeout(timeout);}
    if(!response.ok){console.error('Image provider status',response.status);return res.status(502).json({error:'The image service is temporarily unavailable.'});}
    const data=await response.json();const img=(data.output||[]).find(x=>x.type==='image_generation_call'&&x.result);
    if(!img)return res.status(502).json({error:'No image was returned. Please try another photo.'});
    return res.status(200).json({image:'data:image/png;base64,'+img.result});
  }catch(e){console.error('Image request failed',e?.name||'error');return res.status(502).json({error:'Unable to create the image right now. Please try again.'});}
}
