// Client-side interactions. Everything degrades gracefully: without JS the page is complete and readable.

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) => root.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) => [...root.querySelectorAll<T>(s)];

export function init() {
  theme();
  menu();
  scrollChrome();
  reveal();
  activeNav();
  clock();
  typer();
  magnetic();
  spotlight();
  tilt();
  parallaxAndTimeline();
  copy();
  counters();
  const start = () => field();
  if ('requestIdleCallback' in window) requestIdleCallback(start, { timeout: 1200 });
  else setTimeout(start, 300);
}

/* ---------- theme ---------- */
function theme() {
  const btn = $<HTMLButtonElement>('#theme-toggle');
  if (!btn) return;
  const root = document.documentElement;
  const sync = () => {
    const next = root.dataset.theme === 'dark' ? 'clair' : 'sombre';
    btn.setAttribute('aria-label', `Activer le thème ${next}`);
  };
  sync();
  btn.addEventListener('click', () => {
    const apply = () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', root.dataset.theme);
      } catch {}
      sync();
    };
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !reduced()) doc.startViewTransition(apply);
    else apply();
  });
}

/* ---------- mobile menu ---------- */
function menu() {
  const btn = $<HTMLButtonElement>('#menu-toggle');
  const nav = $('#nav');
  if (!btn || !nav) return;
  const set = (open: boolean) => {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };
  btn.addEventListener('click', () => set(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) set(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      set(false);
      btn.focus();
    }
  });
}

/* ---------- header state + progress bar ---------- */
function scrollChrome() {
  const header = $('.site-header');
  const bar = $('.progress');
  let last = 0;
  let ticking = false;
  const update = () => {
    const y = scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    bar?.style.setProperty('--p', String(max > 0 ? y / max : 0));
    header?.classList.toggle('is-scrolled', y > 40);
    const menuOpen = $('#nav')?.classList.contains('is-open');
    header?.classList.toggle('is-hidden', y > last && y > 600 && !menuOpen && !header.contains(document.activeElement));
    last = y;
    ticking = false;
  };
  addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

/* ---------- reveal on scroll ---------- */
function reveal() {
  // above-the-fold hero content animates in right away
  $$('.hero [data-reveal]').forEach((el) => el.classList.add('is-in'));
  const els = $$('[data-reveal]:not(.hero [data-reveal]), [data-split]');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- current section in nav ---------- */
function activeNav() {
  const links = $$<HTMLAnchorElement>('[data-nav]');
  const map = new Map(links.map((a) => [a.hash.slice(1), a]));
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        links.forEach((a) => a.removeAttribute('aria-current'));
        map.get(e.target.id)?.setAttribute('aria-current', 'true');
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  map.forEach((_, id) => {
    const s = document.getElementById(id);
    if (s) io.observe(s);
  });
}

/* ---------- Antananarivo clock ---------- */
function clock() {
  const el = $('#clock');
  if (!el) return;
  const fmt = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Indian/Antananarivo' });
  const tick = () => {
    el.textContent = fmt.format(new Date());
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- typewriter ---------- */
function typer() {
  const el = $('#typer');
  if (!el) return;
  const words: string[] = JSON.parse(el.dataset.words || '[]');
  if (words.length < 2 || reduced()) return;
  let i = 0;
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const run = async () => {
    for (;;) {
      await sleep(2400);
      const cur = words[i % words.length]!;
      for (let n = cur.length; n >= 0; n--) {
        el.textContent = cur.slice(0, n);
        await sleep(22);
      }
      i++;
      const next = words[i % words.length]!;
      for (let n = 1; n <= next.length; n++) {
        el.textContent = next.slice(0, n);
        await sleep(45 + Math.random() * 40);
      }
    }
  };
  void run();
}

/* ---------- magnetic buttons ---------- */
function magnetic() {
  if (!finePointer() || reduced()) return;
  for (const el of $$('[data-magnetic]')) {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--x', '0px');
      el.style.setProperty('--y', '0px');
    });
  }
}

/* ---------- spotlight on skill cards ---------- */
function spotlight() {
  if (!finePointer()) return;
  for (const card of $$('.bento .card')) {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  }
}

/* ---------- portrait tilt ---------- */
function tilt() {
  if (!finePointer() || reduced()) return;
  for (const el of $$('[data-tilt]')) {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--ry', `${px * 14}deg`);
      el.style.setProperty('--rx', `${-py * 14}deg`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  }
}

/* ---------- parallax mockups + timeline progress ---------- */
function parallaxAndTimeline() {
  const items = $$('[data-parallax]');
  const timeline = $('#timeline');
  const tlItems = $$('[data-tl]');
  if (reduced()) {
    timeline?.style.setProperty('--progress', '1');
    tlItems.forEach((el) => el.classList.add('is-lit'));
    return;
  }
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = innerHeight;
    for (const el of items) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      const k = Number(el.dataset.parallax || 1);
      const off = (r.top + r.height / 2 - vh / 2) * -0.08 * k;
      el.style.setProperty('--py', `${off.toFixed(1)}px`);
    }
    if (timeline) {
      const r = timeline.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
      timeline.style.setProperty('--progress', p.toFixed(3));
      const line = vh * 0.6;
      for (const li of tlItems) li.classList.toggle('is-lit', li.getBoundingClientRect().top < line);
    }
  };
  addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  addEventListener('resize', update, { passive: true });
  update();
}

/* ---------- copy email ---------- */
function copy() {
  const toast = $('#toast');
  let t: ReturnType<typeof setTimeout> | undefined;
  for (const btn of $$<HTMLButtonElement>('[data-copy]')) {
    btn.addEventListener('click', async () => {
      const value = btn.dataset.copy || '';
      let ok = false;
      try {
        await navigator.clipboard.writeText(value);
        ok = true;
      } catch {}
      if (!toast) return;
      toast.textContent = ok ? 'Adresse copiée ✓' : value;
      toast.classList.add('is-on');
      clearTimeout(t);
      t = setTimeout(() => toast.classList.remove('is-on'), 2200);
    });
  }
}

/* ---------- count-up metrics ---------- */
function counters() {
  if (reduced()) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        io.unobserve(e.target);
        const el = e.target as HTMLElement;
        const end = Number(el.dataset.count);
        if (!Number.isFinite(end)) continue;
        const t0 = performance.now();
        const dur = 1400;
        const step = (now: number) => {
          const k = Math.min(1, (now - t0) / dur);
          el.textContent = String(Math.round(end * (1 - Math.pow(1 - k, 4))));
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    },
    { threshold: 0.6 },
  );
  $$('[data-count]').forEach((el) => io.observe(el));
}

/* ---------- hero ASCII field ----------
   A slow wave field of glyphs; the cursor carves a bright ripple into it. */
function field() {
  const canvas = $<HTMLCanvasElement>('#field');
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx) return;
  const glyphs = ' .·:;-=+*o#%@';
  let w = 0;
  let h = 0;
  let cell = 16;
  let cols = 0;
  let rows = 0;
  let dpr = 1;
  let ink = '#efe9dc';
  let accent = '#ff5a36';
  const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
  let visible = true;
  let raf = 0;
  let lastFrame = 0;

  // Glyphs are pre-rendered once into an atlas (rows: ink alpha levels + accent levels),
  // so each frame is a series of cheap drawImage calls instead of fillText.
  const LEVELS = 8;
  const atlas = document.createElement('canvas');
  const actx = atlas.getContext('2d')!;
  let fps = 30;

  const readColors = () => {
    const cs = getComputedStyle(document.documentElement);
    ink = cs.getPropertyValue('--ink').trim() || ink;
    accent = cs.getPropertyValue('--accent').trim() || accent;
  };
  const buildAtlas = () => {
    const c = Math.ceil(cell * dpr);
    atlas.width = c * glyphs.length;
    atlas.height = c * LEVELS * 2;
    actx.clearRect(0, 0, atlas.width, atlas.height);
    actx.font = `${c * 0.78}px "JetBrains Mono Variable", ui-monospace, monospace`;
    actx.textAlign = 'center';
    actx.textBaseline = 'middle';
    for (let row = 0; row < LEVELS * 2; row++) {
      const isAccent = row >= LEVELS;
      const k = (row % LEVELS) / (LEVELS - 1);
      actx.fillStyle = isAccent ? accent : ink;
      actx.globalAlpha = isAccent ? 0.35 + k * 0.65 : 0.07 + k * 0.28;
      for (let g = 0; g < glyphs.length; g++) actx.fillText(glyphs[g]!, g * c + c / 2, row * c + c / 2);
    }
    actx.globalAlpha = 1;
  };
  const resize = () => {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = r.width;
    h = r.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const small = w < 700;
    cell = small ? 18 : 16;
    fps = small ? 15 : 30;
    cols = Math.ceil(w / cell);
    rows = Math.ceil(h / cell);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    buildAtlas();
  };

  const draw = (time: number) => {
    const t = time * 0.00022;
    mouse.x += (mouse.tx - mouse.x) * 0.12;
    mouse.y += (mouse.ty - mouse.y) * 0.12;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const R = Math.min(w, 900) * 0.2;
    const c = Math.ceil(cell * dpr);
    const x0 = Math.floor(cols * 0.25); // field fades out on the left so the name stays readable
    for (let y = 0; y < rows; y++) {
      const py = y * cell + cell / 2;
      const ny = y / rows;
      const rowMask = (1 - ny * 0.35) * Math.min(1, py / 140); // calm under the header
      const dy = py - mouse.y;
      const nearRow = Math.abs(dy) < R;
      for (let x = x0; x < cols; x++) {
        const px = x * cell + cell / 2;
        const nx = x / cols;
        const mask = Math.min(1, (nx - 0.25) * 1.6) * rowMask;
        let m = 0;
        let d = 0;
        if (nearRow) {
          const dx = px - mouse.x;
          d = Math.sqrt(dx * dx + dy * dy);
          m = d < R ? 1 - d / R : 0;
        }
        if (mask < 0.05 && m === 0) continue;
        let v =
          Math.sin(nx * 6.2 + t * 3) * 0.5 +
          Math.sin(ny * 7.1 - t * 2.2 + nx * 3) * 0.35 +
          Math.sin((nx + ny) * 9 + t * 1.6) * 0.25;
        v = (v + 1.1) / 2.2;
        const ripple = m > 0 ? Math.sin(d * 0.09 - time * 0.006) * 0.5 * m + m * 0.6 : 0;
        const val = Math.max(0, Math.min(0.999, v * mask * 0.85 + ripple));
        if (val < 0.12) continue;
        const g = Math.floor(val * glyphs.length);
        const row = m > 0.15 ? LEVELS + Math.min(LEVELS - 1, Math.floor(m * LEVELS)) : Math.floor(val * (LEVELS - 1));
        ctx.drawImage(atlas, g * c, row * c, c, c, Math.round(x * cell * dpr), Math.round(y * cell * dpr), c, c);
      }
    }
  };

  const loop = (time: number) => {
    raf = requestAnimationFrame(loop);
    if (time - lastFrame < 1000 / fps - 1) return; // 15–30 fps is plenty
    lastFrame = time;
    draw(time);
  };

  readColors();
  resize();
  canvas.classList.add('is-on');

  new MutationObserver(() => {
    readColors();
    buildAtlas();
    if (reduced()) draw(0);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  addEventListener('resize', () => {
    resize();
    if (reduced()) draw(0);
  });

  if (reduced()) {
    draw(0);
    return;
  }

  const hero = canvas.parentElement!;
  hero.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.tx = e.clientX - r.left;
    mouse.ty = e.clientY - r.top;
    if (mouse.x < -1000) {
      mouse.x = mouse.tx;
      mouse.y = mouse.ty;
    }
  });
  hero.addEventListener('pointerleave', () => {
    mouse.tx = mouse.ty = -9999;
    mouse.x = mouse.y = -9999;
  });

  new IntersectionObserver(([e]) => {
    visible = !!e?.isIntersecting;
    cancelAnimationFrame(raf);
    if (visible && !document.hidden) raf = requestAnimationFrame(loop);
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(raf);
    if (visible && !document.hidden) raf = requestAnimationFrame(loop);
  });
}
