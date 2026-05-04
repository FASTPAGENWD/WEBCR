This is a [Next.js](https://nextjs.org) project (App Router in `src/app`).

## Lokaal

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub

Deze map is de **repository-root**: hier staan `package.json`, `src/app/`, `public/`, enz.

```bash
git init -b main   # alleen als er nog geen repo is
git add -A
git commit -m "Initial commit"
git remote add origin https://github.com/JOUW-USER/JOUW-REPO.git
git push -u origin main
```

(Zet eerst je naam en e-mail voor Git indien nodig: `git config user.name` / `user.email`.)

## Vercel

1. [New Project](https://vercel.com/new) → importeer je GitHub-repo.
2. **Root Directory**: leeg laten (`.` = root van de repo), omdat `package.json` en `src/app` hier staan.
3. Build: `npm run build`, Output: automatisch (Next.js). Geen extra `vercel.json` nodig.

**Let op:** zet geen volledige andere Next-site als submap in dit project (zoals een kopie van `gasdelivery.nl`); dat breekt typecheck en deploy. Eén app per repo-root, zoals bij gasdelivery.

## Meer

- [Next.js docs](https://nextjs.org/docs)
- [Deploying](https://nextjs.org/docs/app/building-your-application/deploying)
