# One Crest — new landing site plan

**Date:** 13 Nov 2026 · **Folder:** `~/Desktop/Real-Estate-Landing-Pages/satyam_one_crest/`
**Follows:** `real-estate-landing-page-seo-aeo-playbook.md` (12 Nov 2026)
**Status:** plan only. Nothing is built yet. The `_plan/` folder is never uploaded to the website.

---

## 1. What changed today

The old plan (12 Nov) was to rebuild metrosatyamshowstoper.com as the One Crest site.
**New plan (Madhav, 13 Nov):** two sites, two jobs.

| Site | Job | Name on it | Fake "recent activity" pop-ups |
|---|---|---|---|
| metrosatyamshowstoper.com (`show_stopper_lp`) | WhatsApp blasts | Codename Showstopper (as now) | Kept (Madhav's call) |
| **New domain** (`satyam_one_crest`) | Google + Meta + Google Ads | **One Crest** (old name shown as "formerly Codename Showstopper") | **None** |

**Why two domains makes sense:** WhatsApp blast links often get reported as spam. Meta can then block that domain on Facebook/Instagram too. Keeping the ads site on a clean domain protects the ads.

**The risk (playbook rule 5 / 1.4):** two look-alike sites for one project can be treated by Google as doorway spam, and they split Google's trust between them.
**Fix (recommended):** once the new site is indexed, set the old site to `noindex`. It keeps working for WhatsApp, but only the new site lives in Google. See decision D1.

---

## 2. Decisions (Madhav)

| # | Question | Recommended |
|---|---|---|
| D1 | Old site in Google after the new site is live | `noindex` on the old site after the new site is indexed (2–4 weeks) |
| D2 | Tracking on two sites | One GTM container (`GTM-K48K7ZCM`), one GA4 property, one Meta dataset on **both** sites. Reports split by hostname. CRM gets **two Landing Page records** (two `lp_` keys) so each lead shows which site it came from. |
| D3 | Old-site quick fixes (section 4) | Do them before the next WhatsApp blast |
| D4 | Hosting for the new domain | Hostinger, same account as the other 5 sites (until the new 50-site hosting is chosen) |
| D5 | Lead event names on the new site | Push `form_submit_success` and `whatsapp_click` (matches readiness step TRK-META-05). The old site keeps `form_submission`. |

**Answers (13 Nov):**
- D1: **noindex the old site on the same day the new site goes live** (changed 13 Nov, so that Google shows only one price).
- D2: **same GTM / GA4 / Meta IDs on both sites**, plus two CRM Landing Page records.
- D3: **old-site fixes first** (section 4).
- D4: **new hosting** (the host being chosen for ~50 sites). The upload, cache and `.htaccess` steps must be checked for that host before launch.
- D5: recommended default, unless Madhav says otherwise.

---

## 3. Details needed from Madhav

> **From 13 Nov the single source of truth for facts is `_inputs/00_project-facts.md`.** It includes the cost sheet (18 Jul 2026), possession Dec 2030 and the ⚠️ price/area conflict. The list below is history.

### A. Must have before the build
- [ ] **New domain name** (bought? at which registrar?)
- [ ] **Exact names:** "One Crest" spelling, the developer's legal name (the creatives show *Satyam Developers (R. Gulati Group)* + *Metro Group*). Is it "One Crest by Satyam Metro"?
- [ ] **MahaRERA project registration number + QR code.** Ads must show both (MahaRERA rule since Aug 2023, with penalties). **No ads go live without them.**
- [ ] **Your agent MahaRERA number and the channel-partner authorisation letter** (shown on the site as "Authorised channel partner — not the developer's website")
- [ ] **Current price sheet:** price + carpet area for 2 BHK, Luxe 3 BHK, Couture 3 BHK, Atelier 4 BHK, Jodi. Plus the EOI/booking amount and the payment plan.
- [ ] **Project facts:** possession date (the RERA date), land area, number of wings/towers, floors (old site says G+31), total units, car parks per flat
- [ ] **One Crest creatives:** logo, renders (exterior day/night, lobby, clubhouse, pool, sample flat), brochure PDF, **one floor plan per configuration** (2/3/4 BHK, Jodi)
- [ ] **Exact Google Maps pin** of the site (Sector 20, Kharghar)
- [ ] **Phone / WhatsApp number** for the new site. Note: the old site's number and the "Call now" number inside the reel video are **different**. Which one is correct?
- [ ] **Agent for the About section:** name, photo, years of experience; Reco Property office address

### Received on 13 Nov (from Madhav + brochure `Satyam One Crest Brochure_12x12 IN_Part 01_R5`, 52 pages)
- **MahaRERA project no.: PR1270002601519.** The QR opens `maharerait.maharashtra.gov.in/project/view/64383`. It matches the number in the brochure.
- **Old-site facts are correct** (Madhav): configurations, prices, carpet areas, floor plans, location list.
- **Developer:** Satyam Developers (R. Gulati Group) & Metro Group
- **Site address:** One Crest, Plot No. 23/24/25/26, Sector 20, Kharghar, Navi Mumbai 410210
- **Project hallmarks:** co-branded Italian living, **furnished with Roberto Cavalli Home Interiors** (Stellar Lobby + Verve Clubhouse), **G+31 signature tower**, **"30% larger carpet size"**, 35+ amenities. The brochure calls it "Navi Mumbai's first co-branded residences".
- **Amenities.** Club Verve: Runway swimming pool, Contour gymnasium, Playoffs indoor games room, Level Up virtual arcade, Footloose dance studio, Calm yoga & meditation room. Verde Podium Garden: Flex multipurpose court, Little Stars kids play area, Spotlight amphitheatre, Sizzle BBQ zone, Vogue flower garden, Shrine temple, Reflexology pathway, Encore jacuzzi. Also: QCon luxury business centre, Repose outdoor sit-outs, covered parking, private security, fire management.
- **Location points (brochure):** Atal Setu, Navi Mumbai Metro, International Corporate Park (proposed), Kharghar–Turbhe Link Road (upcoming), Navi Mumbai International Airport
- **Developer track record (brochure):** 3 decades, 3+ million sq ft delivered, 4+ million sq ft under construction

### Still needed / to check
- [ ] **Possession date and land area.** The MahaRERA page has a CAPTCHA, so Claude can't read it. Madhav, please open the QR link and send the "Proposed date of completion" and the land area.
- [ ] **New domain name**
- [ ] **One Crest logo** (PNG with a transparent background, or SVG). The Metro Group logo too, if available.
- [ ] **Phone / WhatsApp number** for the new site (the brochure, the old site and the old reel all show different numbers)
- [ ] **Corporate address mismatch:** the old site says "Maithilli Signet … Vashi 400703"; the brochure says "12th Floor, Maithili Signet … Vashi 400705". Which is right? (The brochure is newer.)
- [ ] **Developer stats mismatch:** the old site says "20+ years, 50+ completed projects"; the brochure says "3 decades, 3+ million sq ft delivered". Use the brochure's figures on the new site?
- [ ] **Roberto Cavalli name and logo:** OK to use the name in the text, as the developer's brochure does. The logo appears inside some of the developer's renders. Confirm the developer allows partners to use these creatives (part of the channel-partner letter).
- [ ] Agent RERA no. + channel-partner letter (for the trust section)

### B. Good to have (this is what makes us rank above other partner sites)
- [ ] 10–20 real buyer questions from your calls and WhatsApp chats (for the FAQ)
- [ ] Drive times you measured yourself (station, metro, airport, Central Park)
- [ ] Dated site photos (for the construction status)
- [ ] 2–3 nearby projects buyers compare it with
- [ ] All-in cost example for one flat (agreement value + stamp duty + registration + GST)

---

## 4. Old site (metrosatyamshowstoper.com): fixes for the WhatsApp blast

Small, safe changes. They make the WhatsApp link preview and the phone speed right.

1. **Fix the broken share image.** In 4 places in `index.html` (`og:image`, `twitter:image`, schema image and logo), the domain is written as `metrosatyamshowstoper.co./`. Right now **WhatsApp previews show no image**. Fix it and add a 1200×630 share image.
2. **Shrink the videos:** reel 35.6 MB → ~4–5 MB, landscape 9.7 MB → ~4 MB. Remove the silent sound tracks.
3. **Load only one video per device.** Today the script loads both on every phone (~46 MB).
4. **Shrink the big images:** swimmingpool 961 KB, clubhouse 672 KB, chat icon 275 KB → about 200 KB / 200 KB / 10 KB.
5. **Fix the wrong gallery captions** (for example, a clock creative is captioned "Gym" and a fashion creative "Pool View").
6. **RERA (received 13 Nov):** replace `dummyQR1.png` with the real QR, and replace every "RERA: Coming Soon" with **PR1270002601519** (page, `index.md`, `llms.txt`, `llms-full.txt`, schema), plus the MahaRERA website line. The number goes in a font at least as large as the phone number.
7. **Later (D1):** `noindex` once the new site is indexed.

Done: the 3 junk files were deleted on 13 Nov (`.DS_Store` ×2, `test_data.json`). Not yet committed.

---

## 5. New site: pages and URLs

Plain static HTML. Every word is in the HTML (AI crawlers don't run JavaScript). Clean URLs with a trailing slash.

| Page | URL | Content |
|---|---|---|
| Home | `/` | Hero, quick-facts box, configs + prices table, highlights, amenities list, location + distances, short FAQ, RERA block, lead form |
| Price | `/price/` | Full price list, carpet areas, EOI, payment plan, all-in cost example |
| Floor plans | `/floor-plans/` | One plan per configuration + podium/parking plans, "tentative" note |
| RERA & approvals | `/rera/` | Project RERA number + QR, MahaRERA website, agent RERA, partner letter note |
| FAQ | `/faq/` | 15–20 real questions (visible on the page, same text in the schema) |
| Name change guide | `/codename-showstopper-is-now-one-crest/` | What changed, what stayed. Catches old-name searches. |
| About / contact | `/about/` | Reco Property, agent, office, map, phone |
| Thank-you | `/thank-you.html` | `noindex`, blocked in robots |
| 404 | `/404.html` | A real 404 status |
| Privacy, Terms | `/privacy-policy/`, `/terms/` | Rewritten for the new domain |

Location and Amenities stay as sections on the home page until there is enough unique content for their own pages (playbook 3.1).

---

## 6. Content rules

- **Both names everywhere it matters:** "One Crest Kharghar (formerly Codename Showstopper)". The old site lost every "One Crest" search because it only had the old name.
- **Quick-facts box near the top:** name + old name, developer, MahaRERA no., location, land area, wings/floors, configs + carpet areas, starting price, possession, status, **last updated date**.
- **Answer first,** with question headings: "What is the price of One Crest Kharghar?"
- **Sentences that stand alone:** "One Crest Kharghar starts at ₹2.40 Cr*", not "It starts at…"
- **All text written fresh.** No copying from the old site or other sites (facts are fine).
- **No unprovable claims.** For example "3 minutes to the metro" must say which station and whether it is open.
- **No fake pop-ups, fake reviews or star ratings.**
- **Title example:** `One Crest Kharghar | 2, 3 & 4 BHK from ₹2.48 Cr*` (under 60 characters)
- **Prices (decided 13 Nov):** cost-sheet prices. RERA carpet + "from" price per type public in HTML; the full rupee breakdown only after the lead form (name, phone, email). See `_inputs/00_project-facts.md` section 6.
- **Everything is optional (decided 13 Nov):** sections and pages are built only from material that exists in `_inputs/`. No empty sections, no "coming soon" blocks. Start with one strong page and add pages as content arrives.

### SEO risk: old site with old prices (decided: old site keeps them)
Until the old site is `noindex`, Google and AI tools can see **two prices** for one project (₹2.40 Cr on the old site vs ₹2.48 Cr on the new one). AI answers often repeat the older fact. **Recommended:** set the old site to `noindex` on the **same day** the new site goes live (not 2–4 weeks later), then request indexing of the new site in Search Console. The old site still works for WhatsApp links. See decision D1.

---

## 7. Images, videos and gallery (review of the old site's assets)

| Asset (old site) | What it is | New site |
|---|---|---|
| `banners/building.jpeg` | The only real tower render | **Keep:** hero image (WebP, ≤200 KB, preloaded) + 1200×630 share image |
| `configuration/…page-0009` | Typical floor plan | **Keep:** rename `one-crest-kharghar-typical-floor-plan.webp` |
| `configuration/…page-0002…0007` | Podium / parking level plans (car counts, Wing A & B) | **Keep** on `/floor-plans/` with correct names (e.g. `one-crest-kharghar-podium-level-1-parking-plan.webp`). The old site wrongly calls them "Ground Floor", "First Floor". |
| `amenities/*` (7 photos) | **Generic stock photos** (a pool table room, a generator, an aerial car park…), not this project | **Drop.** They add no SEO value and could look like false claims in ads. Use the developer's renders or an icon list instead. |
| `banners/banner2, 4, 5, 6` | Developer mood creatives, text baked into the image | **Maybe one**, with honest alt text. Put their feature words (Signature Club Verve, branded Italian furniture, concierge) in HTML text. |
| `banners/banner8, banner_1.jpg, banner_1.png` | Creatives that say "Codename Showstopper / Coming soon" | **Drop** (old name, "coming soon"). `banner_1.png` is also low-res (384 px). |
| `videos/*.mp4` | Both say "Codename Showstopper"; the reel shows "Coming soon" and a different phone number | **Don't reuse.** Ask the developer for a One Crest video. If used: ≤1.5 MB, poster image, no video on mobile. |
| `misc/location.jpg` | Google Maps screenshot | **Drop.** Use a click-to-load map + a distances table in text. |
| `rera/dummyQR1.png` | Placeholder | **Never on the new site.** Real QR: `assets/rera/one-crest-maharera-qr.png` |
| Logos | Old Showstopper logos | Need the One Crest logo |

**Done 13 Nov: `satyam_one_crest/assets/` (5.3 MB, 35 files)**
- `images/`: **23 One Crest renders from the brochure**, 1600×800 WebP, 100–230 KB each (tower night/evening, aerial podium, Stellar Lobby, Verve Clubhouse ×2, pools, gym, games, arcade, yoga, dance, court, jacuzzi, sit-outs, QCon, sample living/master bedroom/bedroom/kitchen/bath, location map)
- `floor-plans/`: the 7 old-site plans with clean names (`one-crest-kharghar-typical-floor-plan.webp`, ground/first/second/third/fourth/other floors)
- `rera/one-crest-maharera-qr.png`: the real QR (checked, it opens MahaRERA project 64383)
- `share/one-crest-kharghar-share.jpg`: 1200×630 for WhatsApp/Facebook previews
- `logos/`: the Satyam logo + one old-site developer logo (to be replaced when the One Crest logo arrives)
- The renders have text baked in (e.g. "THE RUNWAY"), as in the brochure. Each image gets a "Artist's impression" note on the page, matching the brochure disclaimer.
- The hero for mobile will be cut from the tower render during the build.

**Gallery on the new site:** 6–10 images only, all developer-supplied One Crest renders. File names like `one-crest-kharghar-clubhouse.webp`, alt text that says what is in the picture, width/height set, lazy-loaded (except the hero).

---

## 7b. Hero: zoom-effect image until the video plays (Madhav's idea, 13 Nov)

**Goal:** the first screen shows a picture **at once**, gently zooming (the "Ken Burns" effect), so it feels like a video. If a video exists, it fades in over the image once it's ready to play.

**How (and why it's safe for SEO and speed):**
- The hero image is a normal `<img>` in the HTML: WebP, ≤200 KB, `fetchpriority="high"`, preloaded, **not lazy-loaded**. It is the page's LCP element, so Google's speed score stays good.
- The zoom uses only CSS `transform: scale()`, starting at normal size. It moves no layout (CLS stays 0) and costs almost nothing on phones.
- The H1 and the key facts are real HTML text over the image, not inside it.
- People who turn off motion on their phone (`prefers-reduced-motion`) get a still image.
- **Video (when we have a One Crest video):** loads only after the page is ready, only on desktop / good connections (skipped if the phone has Data Saver on), and fades in on its `playing` event. ≤1.5 MB, no sound track. Until then the zoom image alone is the hero.
- **Note:** we have **no One Crest video yet**. The old videos say "Codename Showstopper / Coming soon" and won't be used. So at launch the hero is the zoom effect only (one image, or 2–3 renders crossfading).
- **Image:** the brochure's tower renders have text baked in (logo, "Roberto Cavalli"). Mobile uses a tower-only crop. Desktop uses the tower render with the H1 placed so it doesn't clash. A clean render without text, from the developer, would be better (optional ask).

**Decided (13 Nov):** at launch the hero is **3 renders crossfading, each slowly zooming**: tower → Stellar Lobby → Verve Clubhouse. Only the first (tower) image loads at first; the other two load after the page is ready. When a One Crest video arrives, it plays on **desktop only**; phones keep the zoom images.

## 8. Technical build checklist

- [ ] Static HTML/CSS/JS. Reuse the code structure from `Raheja_District_Prime_2` (newest), but write all text fresh.
- [ ] **Speed budget (mobile):** home page under ~1.5 MB in total, hero ≤200 KB, LCP ≤2.5 s, CLS ≤0.1. No heavy chat widget. The Swiper and Font Awesome CDNs are replaced or loaded late.
- [ ] Schema (JSON-LD) per playbook T3: RealEstateAgent (Reco Property), WebSite, RealEstateListing → ApartmentComplex (`alternateName`: Codename Showstopper), one Offer per configuration, BreadcrumbList, FAQPage. **No star ratings.**
- [ ] Open Graph + Twitter tags with the **correct full URL** and a 1200×630 image
- [ ] `robots.txt` (T4), `sitemap.xml` with real `lastmod` (T6), `.htaccess` HTTPS + non-www + real 404 + cache (T5), `llms.txt` matching the page (T7)
- [ ] **Lead form → Reco CRM** with the new site's `lp_` key. The URL clean-up script on every page. `reco_test` for test leads.
- [ ] **GTM only** (HTML snippet, "GTM loaded by: html"). No Pixel or gtag code on the site. `data.js` keeps `gtmId: ''`.
- [ ] dataLayer pushes: `form_submit_success`, `whatsapp_click`, `phone_click`
- [ ] The first/last-touch capture script (B4–B5: UTM + gclid/gbraid/wbraid/fbclid + `_fbc`/`_fbp`, 90 days). The new site is a clean place to start it.
- [ ] Accessible form: real labels, clear button text
- [ ] "Last updated: [date]" visible

---

## 9. Tracking and CRM

- **CRM Landing Page record** for the new domain (Madhav creates it in the CRM; it gives the `lp_` key). Its `tracking` block gets the GTM, GA4 and Meta IDs (per D2).
- **Readiness checklist …011053:** switch its main landing page to the new domain. As designed, the 37 page-specific Tracking items go back to "Needs attention". Access items stay done.
- **Rename the CRM property** "Satyam Show Stoppers" → One Crest, keeping the old name as an alias (handoff step 3). Do it now, before the new site's lead routing is set up.
- **Meta Form Mappings:** switch Override Caller from Caller01 to the real caller and map the ads form (handoff section 5, item 3).
- **GA4 IDs and the Meta dataset ID** still need saving in the CRM (handoff step 1). With D2, the same IDs serve both sites.

---

## 10. Build order (one step at a time)

| # | Step | Who |
|---|---|---|
| 1 | Decisions D1–D5 + facts pack (section 3A) | Madhav |
| 2 | Old-site WhatsApp fixes (section 4) → review → commit → upload → check the WhatsApp preview | Claude builds, Madhav reviews / uploads |
| 3 | Research: Google top 10 + 10 AI questions (playbook 2.2, 2.3) → list of wrong/missing facts | Claude (browser) |
| 4 | Write all page text → Madhav reviews the wording and facts | Claude, then Madhav |
| 5 | Prepare images (rename, WebP, sizes) | Claude |
| 6 | Build the site in `satyam_one_crest/` | Claude |
| 7 | Local test (`python3 -m http.server 8080`, block `*://*.recoproperty.com/*`) | Madhav |
| 8 | CRM Landing Page record → `lp_` key into `data.js` | Madhav, then Claude |
| 9 | `git init` + GitHub repo (backup) | Madhav (T4) |
| 10 | New host (D4): domain, SSL, upload, cache purge. Check that `.htaccess` works there, or convert the rules. | Madhav |
| 11 | GTM triggers/tags for the new site, then publish | Madhav (with the readiness guide) |
| 12 | Live check: pre-launch list (playbook 5.14) + one `reco_test` lead | Madhav + Claude |
| 13 | Search Console (Domain property), sitemap, request indexing; Bing import; IndexNow | Madhav + Claude |
| 14 | Launch day: `noindex` the old site (D1) | Claude builds, Madhav uploads |

## 11. After launch

- Weekly for 8 weeks: Search Console + Bing (queries, positions)
- Monthly: the 10 AI questions (T8). Fix the page wherever AI is wrong.
- Same-day updates when price, RERA, possession or offers change (page + date + sitemap + IndexNow)
- Off-site: portals, YouTube/Reels with both names + the RERA number, Google Business Profile for the Reco office
