# MiniMeMagic — New Project Brief
Updated: 2026-10-28

## Project identity
- Working brand: **MiniMeMagic** (domain, trademark and social handles not yet cleared).
- Brand line: **Real People. Imaginary Magic.**
- Core hook: **What would our baby look like?**
- "Give Me Your Genes" remains an optional campaign name, not the primary brand.
- Preserve the original working website, code and commit history. This is a new **planning phase**, not authorization to delete or replace the original repository.

## What exists and must be preserved
- Existing repository: babyinme/give-me-your-genes, main branch.
- Existing production site: https://give-me-your-genes-babyinme.vercel.app
- Existing Vercel project: give-me-your-genes.
- Working fictional AI baby portrait generator, adult photo upload (one joint photo or two separate), consent requirement, four image styles, access-code-controlled testing, baby naming, saving, personalized keepsake card, mobile sharing, and reset.
- OpenAI API key and demo access code are configured as sensitive Vercel production environment variables. Never expose credentials or copy them into public documents.
- Preserve deployed functionality during design work; verify production deployment before reporting work as live.
- Current 3D figurines, NFC/magnetic stands, printing pipeline, fulfillment and checkout are **concepts, not live products**.

## Visual and UX direction
- Redesign to match the previously approved polished white/pink MiniMeMagic mockup throughout the actual site, rather than just changing labels.
- Premium, consistent, mobile-first design; excellent typography, clear CTAs, high-quality baby portrait examples and realistic studio-style 3D product renders.
- Remove cheesy emoji/flat cartoon placeholder graphics, mismatched stock photos and misleading depictions.
- Borrow established user-experience patterns from Funko Pop! Yourself (customized collectible), Mixbook (easy creation), Wonderbly (personalized emotional gifting) and Shutterfly (gift merchandising and repeat purchases). Do not copy protected branding or artwork.
- Label illustrative AI results and future product concepts clearly.

## Core customer journey
1. Customer sees appealing examples and a clear invitation to create.
2. Uploads photos of consenting adults and selects style.
3. Receives a fictional AI baby portrait, not a genetic prediction.
4. Names, downloads, saves/shares the result.
5. Future phase: chooses a printable character/figurine or bundle, reviews a 3D preview, approves proof, purchases.
6. Order routes to approved in-house or third-party print partner; product shipped with tracking and customer support.
7. Follow-up offers: matching family minis, stands, gifts, seasonal accessories and repeat orders.

## Critical business requirement: profitable outsourced printing
MiniMeMagic owns the customer relationship, branded storefront, design/creation workflow, production-ready model specifications, checkout, quality standards, order routing, support and marketing. Qualified independent print shops provide manufacturing capacity under contract.

Design for a **hybrid fulfillment network**: print internally when economical; otherwise outsource by location, machine capability, material, capacity, quality, turnaround and landed cost. Creality K2 can serve as a pilot/test platform, not a dependency.

**Unit economics (calculate per SKU and verify with real partner quotes):**
- Net sale revenue = customer payment less discounts, refunds and sales tax collected on behalf of authorities.
- Contribution margin = net sale revenue minus payment processing, model preparation/art labor, partner print fee, material/finishing, packaging, shipping subsidy, reprint/refund reserve, platform/AI costs, and customer acquisition cost.
- Require a positive contribution margin and a minimum target margin before activating any SKU. Example only: $79 retail less $25 outsourced print/finish, $8 shipping/packaging, $4 processing/AI, $7 model prep, $5 expected returns/reprints, and $12 acquisition = **$18 contribution (~23%)**. This is illustrative, not a vendor quote or forecast.
- Compare wholesale print-price model, per-order production fee, and revenue-share model. Prefer fixed quoted production cost per approved SKU for predictable margins. Partners should not control customer pricing or customer data.
- Price for **fully landed outsourced cost** from the beginning, even when printing in-house, so scaling does not destroy margins.
- Charge for high-effort custom sculpting separately or amortize across bundles; distinguish one-time model creation from repeat prints.
- Consider digital-only baby portraits and keepsake cards as low-fulfillment-cost offerings, subject to measured AI costs and payment fees.

## Outsourcing requirements to validate
- Standardized print-ready STL/3MF plus color/texture and assembly instructions as appropriate; model must be genuinely printable, not just a rendered image.
- Quality specs: size, detail, colors, acceptable defects, material safety, support removal, post-processing, packaging, tolerances and magnet/NFC integration.
- NDA/IP and customer-photo protection; model license limited to each paid order; no partner resale or use for training; deletion/retention terms.
- Test orders from at least two independent vendors, including shipping and reprint performance, before launch.
- Automated or semi-automated partner routing and order-status updates; proof approval before manufacture for complex products.
- Clear customer policies for personalization, defects, shipping, replacements and refunds.
- Validate IP/trademark rights and applicable privacy, consumer protection and sales tax obligations.

## Phased roadmap
**Phase 1 — Brand and site:** complete cohesive MiniMeMagic redesign while preserving working generator; verify on desktop and mobile; secure naming/domain checks.
**Phase 2 — Monetization test:** instrument consented funnel analytics and actual per-generation AI cost; explore a paid digital keepsake or pilot preorders only after reliable delivery and policies.
**Phase 3 — 3D feasibility:** source realistic printable model workflow, sample STL/3MF, test on K2, develop sample products, packaging, and unit-cost sheet.
**Phase 4 — Outsourced fulfillment pilot:** solicit at least three print partners, order samples from two, compare all-in costs and SLAs, launch limited SKU/bundle pilot with manual approval.
**Phase 5 — Scale:** automated partner dispatch, quality metrics, volume pricing, regional routing, repeat-purchase bundles and gifts.

## Open decisions
- Verify MiniMeMagic name availability and legal clearance before purchasing domains or renaming the production URL.
- Select first physical SKU (baby mini, adult mini, keychain or family set) based on test-print quality, margin and demand.
- Choose how detailed/realistic physical figurines must be, and whether full-color outsourced printing or painted multi-color FDM is feasible at the target price.
- Confirm retail price points, target margin, maximum acquisition cost and fulfillment promise using supplier quotes.
- Decide if a separate new GitHub repository / Vercel project is desired; current live site should remain intact until a replacement is approved.

## Working principles
- Keep the original work and its history; don't silently destroy or migrate it.
- Reuse proven business patterns, not competitor IP.
- Be explicit about what is live versus concept.
- Make outsourcing profitable by design.
- Keep future project discussions focused on this brief and verified implementation details.

## Proven website and app design reference policy (2026-10-28)
- Default to established, demonstrated consumer experiences rather than inventing new UI patterns. Borrow workflows, not logos, proprietary artwork or distinctive protected designs.
- **Funko Pop! Yourself:** guided customization, obvious preview, personalization options, gift bundles, named packaging and collecting (https://funko.com/pop-yourself.html).
- **Mixbook mobile:** easy camera-roll photo intake, simple guided creation, cross-device continuity, project review and order tracking (https://www.mixbook.com/mobile).
- **Shopify / Shop Pay:** familiar, low-friction checkout and order tracking when physical sales launch; verify platform fit, fees and eligibility before implementing (https://www.shopify.com/shop-pay).
- **Wonderbly:** emotionally engaging gift presentation and personalization; **Shutterfly:** product collections, occasion-based gifting and repeat sales.
- Design requirements: mobile-first, fast-loading, polished original product photography or high-quality 3D renders, one clear primary CTA, short upload-to-reveal flow, transparent pricing, trust/privacy disclosures, strong accessibility, no misleading placeholder products.
- Research and document the specific reference pattern before each major design feature; prototype, test with users, and measure completion, sharing and conversion instead of assuming competitor success guarantees ours.
- Future partner-printing flow must fit the storefront: preview/proof approval, transparent delivery estimate, payment, routing to vetted manufacturer, quality control and shipment tracking. Maintain contribution margin after partner costs.
