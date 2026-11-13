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

## Checks done
- JSON-LD parses; 1 H1; all local files exist (except privacy/terms, see below); JS syntax OK
- Headless Chrome, phone (390 px) and desktop (1440 px): no console errors, no failed requests, **CLS 0.000**, LCP = H1 at ~0.1 s (local)
- Form: a bad phone number is rejected; a valid one → demo success on localhost → breakdown opens, events fire
- All images load on scroll; full-scroll transfer on a phone ≈ 1.85 MB

## Still to do (in this order)
1. **Wire the form to the CRM:** copy the old site's working lead call (`show_stopper_lp/script.js`) into `submitLead()` in `main.js`; set `recoApiUrl` and the NEW landing page's `lp_` key (CRM Landing Page record, made at launch). Keep `reco_test` for test leads. Add the URL clean-up script and first/last-touch capture (B4–B5).
2. **Privacy policy + Terms pages** (`/privacy-policy.html`, `/terms.html`): adapt from the old site (currently missing → links 404).
3. **Phone / WhatsApp:** set `CONFIG.phone` and `CONFIG.whatsapp` in `main.js`; the buttons appear by themselves.
4. **Domain:** replace every `__SITE_URL__` (index.html, robots.txt, sitemap.xml, llms.txt, .htaccess) with `https://<domain>` (no trailing slash). The pre-launch check: `grep -rn __SITE_URL__ .` must print nothing.
5. **Name-change page** `/codename-showstopper-is-now-one-crest/` (before the old site goes noindex).
6. Launch checklist: PageSpeed (mobile), Rich Results Test, WhatsApp preview, fake URL → 404, form → lead in the CRM, Search Console + Bing + IndexNow, old site noindex the same day.
