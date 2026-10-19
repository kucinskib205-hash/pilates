# Pilates Studio

Next.js App Router starter for a Pilates studio website.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Important

The schedule and class availability are **demo data**. The booking dialog is informational: it does not create reservations. Database schema exists separately on the Pilates Supabase project but is not connected to this frontend yet. Implement authentication, transactional capacity checks, booking API, admin tools, and payment integration before accepting real reservations.

Vercel: connected to the Pilates project. Production changes deploy from the main branch.

Admin interface: `/admin` (requires Supabase environment variables and an authorized staff account).
