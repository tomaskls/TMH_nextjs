# tmh.lt

Tomorrow's Media House svetainė: Shopify el. parduotuvių kūrimas, automatizacija,
priežiūra ir reprezentacinės svetainės. Tik lietuvių kalba.

Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS 4.

## Paleidimas

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produkcinis build'as
npm run lint
```

## Kur ką keisti

| Ką                                        | Failas                    |
| ----------------------------------------- | ------------------------- |
| Kontaktai, meniu, GA ID                   | `config/site.ts`          |
| Kainos (rodomos visuose puslapiuose)      | `config/pricing.ts`       |
| Darbų sąrašas (portfolio)                 | `config/projects.ts`      |
| Darbų ekrano nuotraukos (1440×900)        | `public/projects/`        |
| Spalvos, šriftai                          | `app/globals.css`         |
| Puslapių tekstai                          | `app/**/page.tsx`         |
| Seni adresai (`/lt/...`, `/en/...`) → nauji | `next.config.ts` redirects |

## Puslapiai

- `/` – pagrindinis
- `/shopify-el-parduotuves` – Shopify parduotuvių kūrimas, perkėlimas, priežiūra
- `/shopify-automatizacija` – automatizacija ir integracijos
- `/svetainiu-kurimas` – reprezentacinės svetainės
- `/kontaktai` – užklausos forma (FormSubmit → info@tmh.lt)
