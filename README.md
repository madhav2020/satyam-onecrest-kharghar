# One Crest, Kharghar: landing site

This folder is for **one** real estate landing site. Three parts, kept apart:

| Folder | What goes in | Who fills it | Uploaded to the website? |
|---|---|---|---|
| `_inputs/` | Raw files from the developer and the team (brochure, cost sheet, RERA, plans, renders, logos…) | **Madhav / team** | **Never** |
| `_plan/` | The plan and notes | Claude | Never |
| `assets/` + the site files (`index.html`, …) | Web-ready images and code | Claude | Yes |

## Nothing here is compulsory

Every project is different. In pre-launch you may only have **one elevation image and a starting price**. That is enough to start. Add the rest as it comes.

| Level | What | What it gives |
|---|---|---|
| **Minimum to build** | Project name · locality/sector · developer name · 1 elevation image · starting price | A one-page site |
| **Required before any ad goes live** (MahaRERA law) | Project MahaRERA no. + QR code | Ads can run |
| **Add when you get it** | Everything else (cost sheet, plans, renders, photos, videos, FAQs…) | New sections, then new pages, switch on |

Every numbered folder below is **optional**. Leave a folder empty if you don't have its material.

### SEO rules when material is thin
- **Start with one strong page.** Add a separate page (e.g. `/floor-plans/`) only when there is real content for it. Thin pages hurt the whole site.
- **No empty sections, no "coming soon" blocks, no placeholder or stock images.** A missing section is simply left out.
- **Never guess a fact.** If it's not in `_inputs/`, it's not on the site.
- **When new material arrives, add it the same day.** Update "Last updated" and the sitemap date. Fresh, correct facts win in Google and in AI answers.
- **One price everywhere.** The page text, the schema, `llms.txt`, ads and portals must show the same numbers.

**Start here:** fill in what you know in `_inputs/00_project-facts.md` (★ = minimum), then drop the files into the numbered folders. Each folder has a `README.md` saying what to put there and how to name it.

## Naming rules (all folders)
- Lowercase, words joined with `-`, **no spaces, no commas, no brackets**
- Dated files start with the date: `YYYY-MM-DD_…` (e.g. `2026-07-18_cost-sheet.pdf`)
- Never overwrite an old version. Add the new file with a newer date.
- Keep the **original** file. Claude makes the small web versions in `assets/`.

## Never put here
- Customer names, phone numbers or emails
- Passwords, API keys, `lp_` keys, tokens (tracking IDs live in the CRM's Landing Page record)

## Git
`_inputs/` is in `.gitignore` (private price sheets, big PDFs). It stays on the laptop only, so keep the laptop backed up.
