# One Crest site: build v1 notes (13 Nov 2026)

Built in the cloud workspace while the Mac connection was down. **Copy the contents of this zip into `~/Desktop/Real-Estate-Landing-Pages/satyam_one_crest/`** (it adds `index.html`, `style.css`, `main.js`, `404.html`, `robots.txt`, `sitemap.xml`, `llms.txt`, `.htaccess` and new folders under `assets/`; it doesn't touch `_inputs/`).

## What's in v1
- One page built from `one-crest-site-copy-v3.md` (all sections, 20 FAQs), plain HTML: every fact is in the page source
- **Hero:** tower image with a slow CSS zoom (mobile: tower-only crop, 53 KB; desktop: 87 KB). The video slot is ready: put file names in `data-mobile` / `data-desktop` on `<video class="hero-video">`. The video loads after the page is ready, fades in when playing, and is skipped on Data Saver / 2G / reduced-motion.
- **Price:** public table (RERA carpet first). The full breakdown comes from `/assets/data/cost-breakdown.json` and only opens after the form.
- **Brochure:** web version 7.7 MB (from 32 MB), downloads after the form. `robots.txt` blocks `*.pdf` and `/assets/data/`; `.htaccess` adds `X-Robots-Tag: noindex` to PDF/JSON.
- **Floor plans:** 6 blurred unit plans with areas in the text; 7 building plans in a fold-out.
- **Schema:** RealEstateAgent (Reco, agent A031272503707), WebSite, RealEstateListing → ApartmentComplex (alternateName incl. Codename Showstopper, geo, RERA), 5 Offers, BreadcrumbList. No FAQ schema (Google dropped FAQ rich results in May 2026; the FAQ is in the HTML).
- **Tracking:** GTM `GTM-K48K7ZCM` (D2), **not loaded on localhost**. dataLayer events: `form_open`, `form_submit_success`, `brochure_download`, `phone_click`, `whatsapp_click`.
- Map loads only on click; gallery has 800 px versions for phones; no web fonts; no libraries.

## v1.1 (13 Nov, evening)
- **Video tiles** ("One Crest videos" section): Project film + Sample flat walkthrough. Image + play button only (no text on the button, Madhav's choice); the title sits under the tile. Click → form ("We'll send the video to you on WhatsApp") → the caller sends the video. dataLayer `form_intent`: `video-film` / `video-sample`. **No VideoObject schema** (there's no video on the page, so that would be misleading).
- **Soft gold shine** across the gold buttons every 5 s; a gentle ring around the play buttons. Both off for reduced-motion users.
- The top bar turns solid after scrolling.
- Images outside the hero were already lazy-loaded (first screen = hero + logo only).

## v1.2 (13 Nov, night)
- **Building floor plans:** first 2 shown (typical + ground), then "Show all floor plans (5 more)".
- **Zoom icon** (dark circle with a magnifier) on all 13 plans → form (once) → building plans open full size. Flat plans: we only have **blurred** files, so after the form the visitor sees "Our team will send the full plan on WhatsApp". To show clear flat plans on screen, add the clear files and put their paths in `data-plan-full` on each flat plan's `.zoom-tile` in `index.html`.
- **Gallery** slides every 4 s while on screen, with ‹ › arrows; it stops on hover/touch and restarts 8 s later; off for reduced-motion users.
- **Prompts:** desktop: timed pop-up after 35 s + exit-intent pop-up (mouse leaving the top, after 12 s), each once per visit. **Phones: a small slide-up card after 35 s, never a full pop-up** (Google lowers mobile rankings for pop-ups that cover the page). Never shown to someone who already filled a form. Timings are in `CONFIG` in `main.js`.
- **Remember the visitor for 48 h** (`localStorage` key `oc_lead_v1`: name, mobile, email, time; this browser only; deleted after 48 h). Later requests (price, brochure, video, plan) go straight through without the form, and are still sent to the CRM with their intent. dataLayer event `repeat_request`.
  - ⚠️ The **privacy policy** must say that the form details are kept in the visitor's own browser for 2 days so they aren't asked again.
- dataLayer events now: `form_open`, `form_submit_success`, `repeat_request`, `brochure_download`, `prompt_show`, `prompt_close`, `phone_click`, `whatsapp_click`; `form_intent` = `price | brochure | video-film | video-sample | plan | exit`.
- Fixed: the gallery viewer's close button couldn't be clicked.

## v1.3 (13 Nov, night)
- Form pop-up title always on **one line** (desktop and phone; titles shortened where needed, e.g. "Before you go: get the price list").
- Form line now: "Your details go only to the developer's authorised sales team." (accurate: Reco is the authorised channel partner; required for a correct notice under the DPDP Act).
- **Prompts repeat:** a new pop-up (desktop) / slide-up card (phone) **10 s after the last one was closed**, never while typing or when the tab is hidden; they stop for good once a form is filled. Setting: `CONFIG.promptEverySec` in `main.js`. Advice: 30 s is safer for the Google Ads landing-page experience.
- **Zoom icon only on the 7 building floor plans**, in the new style: dark layer over the image + gold circle with a magnifier. Flat plans have no zoom; their "Get full plan" button opens the plan form, and the caller sends the clear plan on WhatsApp.

## v1.4 (13 Nov, night)
- Video forms: no line under the title (only the title, the fields and the button). After sending: "Our team will send … on WhatsApp shortly."
- Gallery arrows: SVG chevrons, exactly centred in the circle; the scrollbar line under the gallery is hidden.
- **Small phones down to 300 px:** the form fits (title on one line, all fields inside), the slide-up card stacks, hero buttons go full width, tighter padding. Checked at 300 / 320 / 360 / 1280 px: no sideways scrolling.
- No empty gap above the form's bottom line.

## v1.5 (13 Nov, night)
- **Video tiles move:** a slow camera-like zoom + sideways drift, 12 s one way then 12 s back (no jump; was 20 s, sped up 13 Nov). The two tiles drift in different directions. Runs only while the tiles are on screen; still for reduced-motion users. CSS only (same images, no extra download); CLS stays 0. The hero keeps its own 18 s zoom.

## v1.7 (13 Nov, night): form connected to the RECO CRM
- Same calls and fields as show_stopper_lp / Raheja: `POST {api}/visitors/track` on page load and `POST {api}/landing-leads` on each form (apiKey, name, phone, email, countryCode +91, message, customFields, utm, visitorId). The UTM keys are the same 12 as the other sites (direct/none defaults).
- `customFields`: `cta_heading` + `source` = what was asked (Price list / Price list (exit prompt) / Brochure download / Project film video / Sample flat walkthrough video / Floor plan), `interest`, `request_detail` (which plan), `service_type: Property Enquiry`. `message` = "Requested: … · Interested in …".
- **Test leads:** open the site with `?reco_test=1` → `customFields.reco_test = "true"` and the message starts with "reco_test ·". ⚠️ At the launch test, confirm in the CRM that this lead is hidden from Campaign Analytics (the server rule for reco_test wasn't checked from here).
- **localhost never sends leads** (demo only; the CRM refuses localhost anyway).
- **The URL clean-up script** (removes name/contact/email/phone/mobile from the address before GTM runs) is in `<head>`, the same as the other sites.
- **Remaining for launch:** paste the new Landing Page `lp_` key into `CONFIG.recoApiKey` in `main.js` (until then a live site shows "Sorry, that did not go through").
- Checked with a fake domain + a test key + intercepted CRM calls (no real leads made): bodies correct, URL cleaned, reco_test flag set, a remembered visitor's plan request sent without the form, and a CRM refusal shows an error and doesn't remember the visitor.

## v1.9 (14 Nov): ready for Cloudflare
- **Hosting = Cloudflare Workers, static assets only** (Cloudflare's recommended way for new static sites in 2026), deployed from GitHub on every push to `main`.
  - `wrangler.jsonc`: name `onecrest-kharghar`, assets from the repo root, `not_found_handling: 404-page`, `html_handling: auto-trailing-slash` (so `/privacy-policy` works and `/privacy-policy.html` redirects to it).
  - `.assetsignore`: keeps `_plan/`, `_inputs/`, `README.md`, `wrangler.jsonc`, `.git*`, `.htaccess` off the website.
  - `_headers` replaces `.htaccess` (deleted): nosniff, referrer policy, `Link` headers for llms.txt + sitemap, `X-Robots-Tag: noindex` on the brochure and cost data, 1-year cache on images.
  - HTTPS and the www → non-www redirect are set in the Cloudflare dashboard (Redirect Rule), not in files.
- **Phone / WhatsApp:** +91 97026 73966 (call + WhatsApp buttons, footer, privacy and terms contact).
- **Legal links are now extensionless:** `/privacy-policy`, `/terms` (canonicals too).
- **New page `/codename-showstopper-is-now-one-crest/`:** what changed / what stayed (developer, site, RERA, tower, homes), links to price, plans, amenities, location; Article + Breadcrumb schema; in the sitemap and llms.txt; linked from the home page's name section.
- Checked in Cloudflare's local simulator (`wrangler dev` 4.162): all pages 200, `.html` → clean URL, unknown URL → real 404 with our 404 page, private folders → 404, headers correct; browser: phone/WhatsApp buttons work, no errors.

## Checks done
- JSON-LD parses; 1 H1; all local files exist (except privacy/terms, see below); JS syntax OK
- Headless Chrome, phone (390 px) and desktop (1440 px): no console errors, no failed requests, **CLS 0.000**, LCP = H1 at ~0.1 s (local)
- Form: a bad phone number is rejected; a valid one → demo success on localhost → breakdown opens, events fire
- All images load on scroll; full-scroll transfer on a phone ≈ 1.85 MB

## Still to do (in this order)
1. ~~Wire the form to the CRM~~ done in v1.7. Left: the `lp_` key at launch; first/last-touch capture (B4–B5) later.
2. ~~Privacy policy + Terms pages~~ done (v1.8): run by Reco Property LLP, contact = One Crest site office (no email, Madhav's choice); privacy covers the 2-day browser memory, analytics/ad tools and DPDP Act 2023 rights. ⚠️ Add the phone number to both pages when it's decided; adding a privacy email later is recommended (the DPDP Act expects an easy way to reach you).
3. ~~Phone / WhatsApp~~ done (v1.9).
4. ~~Domain~~ done 14 Nov: **https://onecrest-kharghar.com** (GoDaddy) is in index.html, robots.txt, sitemap.xml, llms.txt, .htaccess, privacy-policy.html and terms.html. Still to do: point the domain's DNS to the new host, and turn on HTTPS there.
5. ~~Name-change page~~ done (v1.9).
6. Launch checklist: PageSpeed (mobile), Rich Results Test, WhatsApp preview, fake URL → 404, form → lead in the CRM, Search Console + Bing + IndexNow, old site noindex the same day.
