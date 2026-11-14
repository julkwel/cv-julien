# julkwel.netlify.app — portfolio de Julien Rajerison

Site statique [Astro](https://astro.build), sans framework côté client : HTML/CSS, un seul petit script TypeScript pour les interactions.

- Contenu : `src/data/profile.ts` (expériences, compétences, projets, contacts)
- Sections : `src/components/*.astro` · styles globaux : `src/styles/global.css` · interactions : `src/scripts/main.ts`
- Thème clair/sombre, `prefers-reduced-motion` respecté, polices auto-hébergées (Fraunces, Inter, JetBrains Mono)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build dans build/
npm run preview
```

Déploiement : un push sur `master` déclenche Netlify (`netlify.toml` : `npm run build`, publication de `build/`, Node 24).
