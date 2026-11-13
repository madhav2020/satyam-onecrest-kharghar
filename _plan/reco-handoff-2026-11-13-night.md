# Reco: handoff for a new chat (13 Nov 2026, night)

Adds to `reco-handoff-2026-11-13-evening.md`. Attach **both** files, plus `one-crest-site-copy-v3.md`.
Standing rules, terminal map, safety rules: same as the evening handoff.

---

## 1. Done today (after the evening handoff)

### A. Old site metrosatyamshowstoper.com (`show_stopper_lp`): WhatsApp site, LIVE
- **`de5fb7b`** (pushed + uploaded + purged, verified live):
  - MahaRERA **PR1270002601519** + real QR in the footer; "Coming Soon" removed from the page, `index.md`, `llms.txt` and `llms-full.txt`
  - Broken `metrosatyamshowstoper.co./` fixed (og:image, twitter:image, schema); new `assets/banners/share-1200x630.jpg`. **The WhatsApp preview works** (Madhav checked).
  - Videos 46 → 8 MB (sound removed); each device loads only its own video
  - clubhouse / pool / chat icon images shrunk; honest gallery alt text
  - `dummyQR1.png` and `test_data.json` deleted; cache-bust `?v=20261113`
- **`6044be5`** (pushed): `llms*.txt` possession → "MahaRERA Dec 2031, developer target Dec 2030". ⚠️ **Check that `llms.txt` and `llms-full.txt` were uploaded to Hostinger + purged** (not confirmed).
- Old site keeps its **old prices** (₹2.40 Cr…) for WhatsApp lead sourcing only. It goes **noindex on the new site's launch day** (decision D1).

### B. New One Crest site: folder `~/Desktop/Real-Estate-Landing-Pages/satyam_one_crest/`
- `README.md`, `.gitignore` (`_inputs/`), `_inputs/` (10 numbered folders; brochure, cost sheet, QR, logo, blurred unit plans inside), `_plan/one-crest-site-plan.md`, `_plan/2026-11-13-one-crest-google-research.md`
- `assets/`: 23 brochure renders (WebP), 7 floor plates, 6 blurred unit plans (`one-crest-kharghar-<type>-floor-plan-blurred.webp`), QR, share image, logos
- **Reusable template:** `~/Desktop/Real-Estate-Landing-Pages/_TEMPLATE_landing-page/`. Everything is optional; the minimum to build is name + sector + developer + 1 elevation image + starting price; RERA no. + QR is required before ads.

### C. Not yet saved on the Mac (the connection dropped)
- `one-crest-site-copy-v3.md` (the site text, final draft) → save to `satyam_one_crest/_plan/`
- Plan notes to add to `one-crest-site-plan.md`: hero = **one image with a slow zoom**, then a **small video (≤1.5 MB) fades in on phone AND desktop** (vertical / landscape versions, skipped on Data Saver); no One Crest video yet

## 2. One Crest facts (source of truth: `_inputs/00_project-facts.md`)
- MahaRERA **PR1270002601519** (registered as "One Crest Wing AB"); QR → maharerait project 64383
- Developer: Satyam Developers (R. Gulati Group) & Metro Group JV
- Plot 23/24/25/26, Sector 20, Kharghar 410210; **near Shilp Chowk, opposite Raghunath Vihar**; pin 19.04713, 73.0731347; Maps `https://maps.google.com/?cid=2911503321084153366`
- Land **3.46 acres**; one new **G+31** tower (Wings A+B). Don't mention the land history on the site.
- Possession: **Dec 2031 as per MahaRERA, developer target Dec 2030** (RERA date always first)
- Cost sheet 18 Jul 2026, 5th floor (current, use on the new site). RERA carpet / usable / agreement value:
  2 BHK Label 859/951 ₹2.48 Cr · 3 BHK Luxe 1232/1480 ₹3.81 Cr · 3 BHK Couture 1275/1567 ₹4.02 Cr · 4 BHK Atelier 1942/2320 ₹5.99 Cr · 4 BHK Maison En-Suite 2012/2390 ₹6.17 Cr · Jodi "on request"
- Public: RERA carpet + "from" prices + what's included + tax rates. **Behind the form:** full rupee breakdown (all-in ₹2.79–6.92 Cr) and the brochure download (web PDF ≤8 MB, PDFs blocked in robots.txt).
- Roberto Cavalli Home Interiors: Stellar Lobby + Verve Clubhouse only (not the flats)
- Metro: Central Park and Kharghar Gaon, both ~3 min
- Agent shown on the site: Madhav Kumar Mishra, MahaRERA agent A031272503707, Reco Property LLP
- Unit plans: show **blurred only**; the caller shares the clear ones
- Open: domain, phone, hosting (new host), One Crest video

## 3. Next steps (in order)
1. Save the files from 1C to the Mac
2. Madhav approves `one-crest-site-copy-v3.md`
3. **Step 4: build** the site in `satyam_one_crest/` (static HTML; reuse the Raheja code structure; GTM only; form → CRM; URL clean-up script; first/last-touch capture)
4. Step 5: local test → step 6: launch (domain, CRM Landing Page record + `lp_` key, GTM/GA4/Meta same IDs as the old site, Search Console, Bing, IndexNow) + old site noindex the same day

## 4. Google research summary (13 Nov)
- Old site is #1 for "codename showstopper kharghar"; not in the results for "one crest kharghar"
- The market is confused: G+31 vs G+40, 3.46 vs 4 acres, prices ₹2.00–2.48 Cr, Dec 2030 vs 2031. Clear, sourced facts are our edge.
