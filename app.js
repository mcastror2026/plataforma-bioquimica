/* Propuesta de diseño · usa los mismos contenidos (content.js) y el mismo progreso guardado */
(function () {
  "use strict";
  const KEY = "bqe_progress_v1";
  const EXTERNAL = [
    { t: "Enzimas", m: "Desafío · se abre en otra pestaña", url: "https://enzimas.netlify.app/" },
    { t: "Introducción al metabolismo", m: "Desafío · se abre en otra pestaña", url: "https://intromet.netlify.app/" }
  ];
  const SOON = [
    { t: "Metabolismo de lípidos", m: "Próximamente" },
    { t: "Aminoácidos y ciclo de la urea", m: "Próximamente" }
  ];
  const BOT_URL = "https://bot-bioquimico.zapier.app/";
  const QUIZ_SIZE = 8;
  const PASS = 70; // % de correctas para considerar un tema listo
  const app = document.getElementById("app");

  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const store = {
    get() { try { return JSON.parse(localStorage.getItem(KEY)) || { q: {}, g: {} }; } catch (e) { return { q: {}, g: {} }; } },
    set(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  };
  QUESTIONS.forEach((q, i) => { q.id = q.m + "-" + i; });
  const mod = (id) => MODULES.find((m) => m.id === id);
  const qsOf = (id) => QUESTIONS.filter((q) => q.m === id);
  const failedQs = () => { const p = store.get().q; return QUESTIONS.filter((q) => p[q.id] && p[q.id].c === false); };
  const record = (q, ok) => { const s = store.get(); s.q[q.id] = { c: ok }; store.set(s); };
  function mastery(id) {
    const p = store.get().q, list = qsOf(id);
    const done = list.filter((q) => p[q.id] && p[q.id].c).length;
    const seen = list.filter((q) => p[q.id]).length;
    return { done, seen, total: list.length, pct: list.length ? Math.round((done / list.length) * 100) : 0 };
  }
  const pick = (list, n) => { const p = store.get().q; const g = (q) => (p[q.id] ? (p[q.id].c ? 2 : 0) : 1); return shuffle(list).sort((a, b) => g(a) - g(b)).slice(0, n); };

  const ICON = {
    ext: '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    next: '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
    back: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>',
    ok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
    bad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };
  const ring = (pct) => { const c = 2 * Math.PI * 19; return `<svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true"><circle class="track" cx="22" cy="22" r="19" fill="none" stroke-width="3"/><circle class="fill" cx="22" cy="22" r="19" fill="none" stroke-width="3" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - pct / 100)).toFixed(1)}"/></svg>`; };

  /* ---------- enrutador ---------- */
  function route() {
    const p = (location.hash.replace(/^#\/?/, "") || "").split("/");
    if (p[0] === "m" && mod(p[1])) return viewModule(p[1], p[2] || "resumen");
    if (p[0] === "repaso") return viewReview();
    viewHome();
  }
  window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });

  /* ---------- inicio ---------- */
  function viewHome() {
    const failed = failedQs().length;
    const next = MODULES.find((m) => mastery(m.id).pct < PASS && m.id !== "casos") || MODULES[0];
    const k = mastery(next.id), started = k.seen > 0;
    let n = 2;
    const stops = [
      ...EXTERNAL.map((e, i) => `
        <li class="stop ext"><a href="${e.url}" target="_blank" rel="noopener">
          <span class="node">${ring(0)}<b>${String(i + 1).padStart(2, "0")}</b></span>
          <span><span class="t">${esc(e.t)}</span><span class="m">${esc(e.m)}</span></span>
          <span class="c">${ICON.ext}</span></a></li>`),
      ...MODULES.map((m, i) => { const q = mastery(m.id), num = String(i + 1 + n).padStart(2, "0"); return `
        <li class="stop${q.pct >= PASS ? " done" : ""}"><a href="#/m/${m.id}">
          <span class="node">${ring(q.pct)}<b>${q.pct >= PASS ? ICON.ok.replace("<svg", '<svg width="18" height="18"') : num}</b></span>
          <span><span class="t">${esc(m.title)}</span><span class="m">${esc(m.tag)}</span></span>
          <span class="c">${q.seen ? q.done + "/" + q.total : q.total + " preg."}</span></a></li>`; }),
      ...SOON.map((s) => `
        <li class="stop soon ext"><a href="#/" aria-disabled="true">
          <span class="node">${ring(0)}<b>··</b></span>
          <span><span class="t">${esc(s.t)}</span><span class="m">${esc(s.m)}</span></span><span class="c"></span></a></li>`)
    ];
    app.innerHTML = `
      <div class="home">
        <section class="intro">
          <h1 class="display">Conceptos básicos para Bioquímica</h1>
          <p class="lead">Resúmenes, preguntas y aplicaciones.</p>
          <div class="resume">
            <a class="btn btn-primary" href="#/m/${next.id}/${started ? "quiz" : "resumen"}">${started ? "Continuar con" : "Empezar con"} ${esc(next.title)}</a>
            ${started ? `<span class="stat">${k.done} de ${k.total} correctas en este tema</span>` : ""}
          </div>
          ${failed ? `<div class="review"><span><b>${failed}</b> pregunta${failed > 1 ? "s" : ""} para repasar</span><a href="#/repaso">Repasar errores</a></div>` : ""}
        </section>
        <div class="rcol">
          <ol class="route" aria-label="Ruta del curso">${stops.join("")}</ol>
          <a class="helper" href="${BOT_URL}" target="_blank" rel="noopener">
            <img src="assets/bot-bioquimico.webp" alt="" width="48" height="48">
            <span><strong>¿Tienes dudas?</strong><span>Pregunta al Bot Bioquímico · se abre en otra pestaña</span></span>
            ${ICON.ext}
          </a>
        </div>
      </div>`;
  }

  /* ---------- módulo ---------- */
  function shell(m, tab, inner) {
    const idx = MODULES.indexOf(m) + 3;
    if (tab === "quiz") return `
      <div class="topbar"><a class="back" href="#/m/${m.id}/resumen">${ICON.back} ${esc(m.title)}</a></div>
      <div style="padding-top:8px">${inner}</div>`;
    return `
      <div class="topbar"><a class="back" href="#/">${ICON.back} Ruta del curso</a></div>
      <header class="mhead">
        <span class="eyebrow">Módulo ${String(idx).padStart(2, "0")}</span>
        <h1 class="display">${esc(m.title)}</h1>
        <p class="lead">${esc(m.blurb)}</p>
        <div class="chips"><span class="chip">${esc(m.tag)}</span></div>
      </header>
      <nav class="seg" aria-label="Secciones del módulo">
        <a href="#/m/${m.id}/resumen" ${tab === "resumen" ? 'aria-current="page"' : ""}>Resumen</a>
        <a href="#/m/${m.id}/quiz" ${tab === "quiz" ? 'aria-current="page"' : ""}>Preguntas · ${qsOf(m.id).length}</a>
      </nav>${inner}`;
  }

  function viewModule(id, tab) {
    const m = mod(id);
    if (tab === "quiz") { app.innerHTML = shell(m, tab, '<div id="body" class="narrow"></div>'); return runQuiz(m, qsOf(id), document.getElementById("body")); }
    const facts = (m.facts || []).map((f) => `<div class="fact"><b>${esc(f[0])}</b><span>${esc(f[1])}</span></div>`).join("");
    const blocks = m.summary.map((s) => `
      <section class="block${/pr[aá]ctica/i.test(s.h) ? " clinical" : ""}">
        <h2>${esc(s.h)}</h2><ul>${s.items.map((i) => `<li>${i}</li>`).join("")}</ul></section>`).join("");
    app.innerHTML = shell(m, "resumen", `
      <div class="layout">
        <div style="display:grid;gap:14px">${blocks}</div>
        ${facts ? `<aside class="side" aria-label="Para recordar"><p class="eyebrow" style="margin-bottom:10px">Para recordar</p><div class="facts">${facts}</div></aside>` : ""}
      </div>
      <div class="dock"><a class="btn btn-primary" href="#/m/${m.id}/quiz">Practicar con preguntas</a></div>`);
  }

  function viewReview() {
    app.innerHTML = `<div class="topbar"><a class="back" href="#/">${ICON.back} Repaso de errores</a></div><div id="body" class="narrow" style="padding-top:8px"></div>`;
    runQuiz(null, failedQs(), document.getElementById("body"));
  }

  /* ---------- preguntas ---------- */
  function runQuiz(m, pool, body) {
    if (!pool.length) { body.innerHTML = `<div class="block"><h2>Todo al día</h2><p>No hay preguntas para repasar.</p></div>`; return; }
    const st = { i: 0, ok: 0, wrong: [], list: pick(pool, QUIZ_SIZE) };
    const L = "ABCD";
    render();
    function render() {
      const q = st.list[st.i];
      const opts = shuffle(q.o.map((t, k) => ({ t, ok: k === 0 })));
      let answered = false;
      body.innerHTML = `
        <div class="bars" role="progressbar" aria-valuemin="1" aria-valuemax="${st.list.length}" aria-valuenow="${st.i + 1}">${st.list.map((_, k) => `<i class="${k < st.i ? "on" : k === st.i ? "cur" : ""}"></i>`).join("")}</div>
        <div class="qmeta"><span>Pregunta ${st.i + 1} de ${st.list.length}</span></div>
        ${q.case ? `<div class="case"><b>Caso clínico</b>${esc(q.case)}</div>` : ""}
        <h2 class="q">${esc(q.q)}</h2>
        <div class="opts">${opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="k">${L[k]}</span><span>${esc(o.t)}</span><span class="st"></span></button>`).join("")}</div>
        <div id="fb" aria-live="polite"></div>
        <div class="dock"><button class="btn btn-ghost" id="hint" ${q.hint ? "" : "disabled"}>Ver pista</button><button class="btn btn-primary" id="next" hidden>${st.i + 1 === st.list.length ? "Ver resultado" : "Siguiente"}</button></div>`;
      const fb = body.querySelector("#fb"), hint = body.querySelector("#hint"), next = body.querySelector("#next");
      hint.onclick = () => { if (answered) return; fb.innerHTML = `<div class="hint">${esc(q.hint)}</div>`; hint.disabled = true; };
      body.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
        if (answered) return; answered = true;
        const o = opts[+b.dataset.k];
        body.querySelectorAll(".opt").forEach((x, k) => {
          x.disabled = true;
          if (opts[k].ok) { x.classList.add("ok"); x.querySelector(".st").innerHTML = ICON.ok; }
          else if (x === b) { x.classList.add("bad"); x.querySelector(".st").innerHTML = ICON.bad; }
          else x.classList.add("dim");
        });
        if (o.ok) st.ok++; else st.wrong.push(q);
        record(q, o.ok);
        fb.innerHTML = `<div class="fb ${o.ok ? "ok" : "bad"}"><strong>${o.ok ? "Correcto" : "Incorrecto"}</strong>${esc(q.e)}</div>`;
        hint.hidden = true; next.hidden = false; next.focus({ preventScroll: true });
        fb.scrollIntoView({ block: "center", behavior: "smooth" });
      });
      next.onclick = () => { st.i++; st.i < st.list.length ? (render(), window.scrollTo(0, 0)) : end(); };
    }
    function end() {
      const n = st.list.length, c = 2 * Math.PI * 56, f = st.ok / n;
      const msg = st.ok === n ? "Dominas este tema por ahora." : st.ok >= n * 0.7 ? "Vas muy bien. Repasa lo que falló." : "Vuelve al resumen y prueba otra ronda.";
      body.innerHTML = `
        <div class="result">
          <div class="ring"><svg width="132" height="132" viewBox="0 0 132 132" aria-hidden="true"><circle cx="66" cy="66" r="56" fill="none" stroke="var(--line)" stroke-width="10"/><circle cx="66" cy="66" r="56" fill="none" stroke="var(--brand)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - f)).toFixed(1)}"/></svg><b>${st.ok}/${n}</b></div>
          <h2>${msg}</h2>
          ${st.wrong.length ? `<div class="wrong"><h3>Para reforzar</h3>${st.wrong.map((q) => `<div><b>${esc(q.q)}</b><small>Correcta: ${esc(q.o[0])}</small><small>${esc(q.e)}</small></div>`).join("")}</div>` : ""}
          <div class="actions"><button class="btn btn-primary" id="again">Otra ronda</button>${m ? `<a class="btn btn-ghost" href="#/m/${m.id}/resumen">Volver al resumen</a>` : `<a class="btn btn-ghost" href="#/">Ruta del curso</a>`}</div>
        </div>`;
      body.querySelector("#again").onclick = () => (m ? runQuiz(m, qsOf(m.id), body) : runQuiz(null, failedQs(), body));
    }
  }

  route();
})();
