# Give Me Your Genes — AI generator integration
The current website is a static single-page site with a Vercel Node serverless function at `api/generate.js`. Do not rebuild it.

## Configuration
1. Add `OPENAI_API_KEY` as an **encrypted/sensitive** Vercel environment variable for the intended environment(s). Never put the key in HTML, JavaScript served to browsers, commits, or chat messages.
2. Redeploy after adding the variable.
3. Run an authorized test with photos of two consenting adults. Confirm image generation, download, errors, mobile behavior and billing before inviting the public.
4. Verify the image API's current model/tool support, commercial terms, image consent requirements and costs against official documentation. This endpoint uses the Responses API image_generation tool; it has not yet been tested with a configured API key.

## Security work required BEFORE public launch
- Rate limiting, abuse prevention, quotas and spending limits. Do not expose unlimited paid generation to the public.
- Review the image provider's data retention and user privacy terms; publish accurate notices and a deletion policy.
- Verify both photographed subjects are consenting adults. A checkbox alone is not a reliable age/consent check.
- Protect against oversized request bodies and validate decoded images on the server.
- Moderation, content safety and failure recovery.
- End-to-end testing on Vercel including deployment logs, with no sensitive photo logging.

## Current behavior
The frontend collects one photo by default, offers a second optional photo, and asks for confirmation before sending images. The endpoint returns a clear configuration error until an API key exists. It does not produce genetic predictions, 3D printable models, or NFC hardware interactions. The Save Image button downloads the generated image only after successful generation.
