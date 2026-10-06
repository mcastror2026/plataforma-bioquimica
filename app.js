/* Plataforma de apoyo · lógica. Los contenidos viven en content.js */
(function () {
  "use strict";
  const KEY = "bqe_progress_v1";
  const ENZIMAS_URL = "https://enzimas.netlify.app/";
  const QUIZ_SIZE = 8;
  const app = document.getElementById("app");

  /* ---------- utilidades ---------- */
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

  function record(q, ok) { const s = store.get(); s.q[q.id] = { c: ok }; store.set(s); }
  function mastery(id) {
    const p = store.get().q, list = qsOf(id);
    const done = list.filter((q) => p[q.id] && p[q.id].c).length;
    return { done, total: list.length, pct: list.length ? Math.round((done / list.length) * 100) : 0 };
  }
  // prioriza: falladas → sin ver → acertadas
  function pickQuestions(list, n) {
    const p = store.get().q;
    const g = (q) => (p[q.id] ? (p[q.id].c ? 2 : 0) : 1);
    return shuffle(list).sort((a, b) => g(a) - g(b)).slice(0, n);
  }

  /* ---------- enrutador ---------- */
  function route() {
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    if (parts[0] === "m" && mod(parts[1])) return viewModule(parts[1], parts[2] || "resumen", parts[3]);
    if (parts[0] === "repaso") return viewQuiz(null, failedQs());
    viewHome();
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });

  /* ---------- inicio ---------- */
  function viewHome() {
    const failed = failedQs().length;
    app.innerHTML = `
      <h1>¿Qué quieres practicar hoy?</h1>
      <p class="lead">Resúmenes breves, preguntas con pistas, juegos y casos clínicos para reforzar cada tema del curso.</p>
      ${failed ? `<div class="banner"><span>Tienes <b>${failed}</b> pregunta${failed > 1 ? "s" : ""} para repasar.</span><a class="btn" href="#/repaso">Repasar mis errores</a></div>` : ""}
      <div class="grid">
        <a class="card ext" href="${ENZIMAS_URL}" target="_blank" rel="noopener">
          <span class="num">01</span>
          <h3>Enzimas</h3>
          <span class="tag">Desafío · se abre en otra pestaña</span>
          <p>Cinética, inhibición y regulación enzimática.</p>
        </a>
        ${MODULES.map((m, n) => { const k = mastery(m.id); return `
          <a class="card" href="#/m/${m.id}">
            <span class="num">${String(n + 2).padStart(2, "0")}</span>
            <h3>${esc(m.title)}</h3>
            <span class="tag">${esc(m.tag)}</span>
            <p>${esc(m.blurb)}</p>
            <div class="meta"><span title="Preguntas que respondiste bien la última vez">${k.done} de ${k.total} correctas</span><span>${k.pct}%</span></div>
            <div class="bar" role="progressbar" aria-valuenow="${k.pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${k.pct}%"></i></div>
          </a>`; }).join("")}
        <div class="card soon"><span class="num">··</span><h3>Metabolismo de lípidos</h3><span class="tag">Próximamente</span><p>β-oxidación, cuerpos cetónicos y lipoproteínas.</p></div>
        <div class="card soon"><span class="num">··</span><h3>Aminoácidos y ciclo de la urea</h3><span class="tag">Próximamente</span><p>Transaminación, desaminación e integración metabólica.</p></div>
      </div>`;
  }

  /* ---------- módulo ---------- */
  function viewModule(id, tab, gi) {
    const m = mod(id);
    const tabs = [["resumen", "Resumen"], ["quiz", "Preguntas"]];
    if (m.games.length) tabs.push(["juego", "Juegos"]);
    if (!tabs.find((t) => t[0] === tab)) tab = "resumen";
    const nav = `
      <a class="crumb" href="#/">← Todos los módulos</a>
      <h1>${esc(m.title)}</h1>
      <p class="lead">${esc(m.blurb)}</p>
      <nav class="tabs" aria-label="Secciones del módulo">
        ${tabs.map((t) => `<a href="#/m/${id}/${t[0]}" ${t[0] === tab ? 'aria-current="page"' : ""}>${t[1]}</a>`).join("")}
      </nav><div id="body"></div>`;
    app.innerHTML = nav;
    const body = document.getElementById("body");
    if (tab === "resumen") return viewSummary(m, body);
    if (tab === "quiz") return viewQuiz(m, qsOf(id), body);
    if (tab === "juego") return viewGames(m, body, gi);
  }

  function viewSummary(m, body) {
    body.innerHTML = m.summary.map((s) => `<section class="panel"><h2>${esc(s.h)}</h2><ul>${s.items.map((i) => `<li>${i}</li>`).join("")}</ul></section>`).join("") +
      `<div class="row"><a class="btn" href="#/m/${m.id}/quiz">Practicar con preguntas</a>${m.games.length ? `<a class="btn ghost" href="#/m/${m.id}/juego">Jugar</a>` : ""}</div>`;
  }

  /* ---------- quiz ---------- */
  function viewQuiz(m, pool, body) {
    if (!body) {
      app.innerHTML = `<a class="crumb" href="#/">← Todos los módulos</a><h1>Repaso de errores</h1><div id="body"></div>`;
      body = document.getElementById("body");
    }
    if (!pool.length) { body.innerHTML = `<div class="panel">No hay preguntas para repasar. ¡Buen trabajo!</div>`; return; }
    const list = pickQuestions(pool, QUIZ_SIZE);
    const st = { i: 0, score: 0, wrong: [], list };
    renderQ();

    function renderQ() {
      const q = st.list[st.i];
      const opts = shuffle(q.o.map((t, k) => ({ t, ok: k === 0 })));
      let hinted = false, answered = false;
      body.innerHTML = `
        <div class="panel">
          <div class="qhead"><span>Pregunta ${st.i + 1} de ${st.list.length}</span><span>Puntaje: ${st.score}</span></div>
          ${q.case ? `<p class="case"><b>Caso clínico.</b> ${esc(q.case)}</p>` : ""}
          <p class="q">${esc(q.q)}</p>
          <div class="opts">${opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.t)}</button>`).join("")}</div>
          <div id="fb" aria-live="polite"></div>
          <div class="row" style="margin-top:14px"><button class="btn ghost" id="hint">${q.hint ? "Ver pista" : "Sin pista"}</button><button class="btn" id="next" hidden>${st.i + 1 === st.list.length ? "Ver resultado" : "Siguiente ▶"}</button></div>
        </div>`;
      const fb = body.querySelector("#fb"), hintBtn = body.querySelector("#hint"), next = body.querySelector("#next");
      if (!q.hint) hintBtn.disabled = true;
      hintBtn.onclick = () => { if (answered) return; hinted = true; fb.innerHTML = `<div class="fb hint">${esc(q.hint)}</div>`; };
      body.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
        if (answered) return; answered = true;
        const o = opts[+b.dataset.k];
        body.querySelectorAll(".opt").forEach((x, k) => { x.disabled = true; if (opts[k].ok) x.classList.add("ok"); });
        if (o.ok) { st.score += hinted ? 5 : 10; } else { b.classList.add("bad"); st.wrong.push(q); }
        record(q, o.ok);
        hintBtn.hidden = true; next.hidden = false; next.focus();
        fb.innerHTML = `<div class="fb ${o.ok ? "ok" : "bad"}">${o.ok ? "✓ ¡Correcto!" : "✗ Incorrecto."} ${esc(q.e)}</div>`;
      });
      next.onclick = () => { st.i++; st.i < st.list.length ? renderQ() : renderEnd(); };
    }
    function renderEnd() {
      const max = st.list.length * 10, ok = st.list.length - st.wrong.length;
      const msg = ok === st.list.length ? "¡Excelente dominio!" : ok >= st.list.length * 0.7 ? "Vas muy bien; repasa lo que falló." : "Revisa el resumen y vuelve a intentarlo.";
      body.innerHTML = `
        <div class="panel">
          <div class="score">${ok}/${st.list.length}</div>
          <p>${msg} Puntaje: <b>${st.score}</b> de ${max} (las pistas restan puntos).</p>
          ${st.wrong.length ? `<h3>Para reforzar</h3>${st.wrong.map((q) => `<div class="wrong-item"><b>${esc(q.q)}</b><br>Correcta: ${esc(q.o[0])}<br><span class="errs">${esc(q.e)}</span></div>`).join("")}` : ""}
          <div class="row" style="margin-top:14px">
            <button class="btn" id="again">Otra ronda</button>
            ${m ? `<a class="btn ghost" href="#/m/${m.id}/resumen">Volver al resumen</a>` : `<a class="btn ghost" href="#/">Inicio</a>`}
          </div>
        </div>`;
      body.querySelector("#again").onclick = () => (m ? viewQuiz(m, qsOf(m.id), body) : viewQuiz(null, failedQs(), body));
    }
  }

  /* ---------- juegos ---------- */
  function viewGames(m, body, gi) {
    if (gi === undefined && m.games.length > 1) {
      body.innerHTML = `<div class="grid">${m.games.map((g, k) => `<a class="card" href="#/m/${m.id}/juego/${k}"><h3>${esc(g.title)}</h3><p>${esc(g.intro)}</p></a>`).join("")}</div>`;
      return;
    }
    const g = m.games[+gi || 0];
    if (!g) return;
    ({ order: gameOrder, match: gameMatch, classify: gameClassify })[g.type](g, body, () => viewGames(m, body, gi));
  }
  function finish(g, body, errors, again, extra) {
    const s = store.get(); const prev = s.g[g.id];
    if (prev === undefined || errors < prev) s.g[g.id] = errors; store.set(s);
    const fin = document.createElement("div"); fin.className = "fb ok"; fin.setAttribute("role", "status");
    fin.innerHTML = `✓ ¡Completado! ${errors === 0 ? "Sin errores." : errors + " error" + (errors > 1 ? "es" : "") + "."} ${extra || ""}<div class="row" style="margin-top:10px"><button class="btn" id="again">Jugar de nuevo</button></div>`;
    body.querySelector(".panel").appendChild(fin);
    fin.querySelector("#again").onclick = again;
  }

  function gameOrder(g, body, again) {
    const items = g.items.map((it, i) => ({ ...it, i }));
    const pool = shuffle(items); let next = 0, errors = 0;
    body.innerHTML = `<div class="panel"><h2>${esc(g.title)}</h2><p class="lead" style="margin-bottom:0">${esc(g.intro)}</p>
      <div class="chips" id="pool">${pool.map((it) => `<button class="chip" data-i="${it.i}">${esc(it.t)}</button>`).join("")}</div>
      <p class="errs">Errores: <span id="err">0</span></p><ol class="placed" id="placed"></ol></div>`;
    const placed = body.querySelector("#placed");
    body.querySelectorAll(".chip").forEach((c) => c.onclick = () => {
      if (c.disabled) return;
      if (+c.dataset.i === next) {
        const it = items[next]; c.classList.add("done"); c.disabled = true; next++;
        placed.insertAdjacentHTML("beforeend", `<li>${esc(it.t)}${it.n ? ` <small>— ${esc(it.n)}</small>` : ""}</li>`);
        if (next === items.length) finish(g, body, errors, again);
      } else {
        errors++; body.querySelector("#err").textContent = errors;
        c.classList.remove("shake"); void c.offsetWidth; c.classList.add("shake");
      }
    });
  }

  function gameMatch(g, body, again) {
    const L = shuffle(g.pairs.map((p, i) => ({ t: p[0], i }))), R = shuffle(g.pairs.map((p, i) => ({ t: p[1], i })));
    let sel = null, errors = 0, left = g.pairs.length;
    body.innerHTML = `<div class="panel"><h2>${esc(g.title)}</h2><p class="lead" style="margin-bottom:0">${esc(g.intro)}</p>
      <div class="cols"><div class="chips">${L.map((x) => `<button class="chip" data-s="l" data-i="${x.i}">${esc(x.t)}</button>`).join("")}</div>
      <div class="chips">${R.map((x) => `<button class="chip" data-s="r" data-i="${x.i}" data-t="${esc(x.t)}">${esc(x.t)}</button>`).join("")}</div></div>
      <p class="errs">Errores: <span id="err">0</span></p></div>`;
    const chips = [...body.querySelectorAll(".chip")];
    chips.forEach((c) => c.onclick = () => {
      if (c.disabled) return;
      if (c.dataset.s === "l") { chips.filter((x) => x.dataset.s === "l").forEach((x) => x.classList.remove("sel")); sel = c; c.classList.add("sel"); return; }
      if (!sel) return;
      // las parejas con la misma respuesta (p. ej. dos "Citosol") también valen
      const ok = g.pairs[+sel.dataset.i][1] === c.dataset.t;
      if (ok) {
        [sel, c].forEach((x) => { x.classList.remove("sel"); x.classList.add("done"); x.disabled = true; });
        sel = null; left--; if (!left) finish(g, body, errors, again);
      } else {
        errors++; body.querySelector("#err").textContent = errors;
        c.classList.remove("shake"); void c.offsetWidth; c.classList.add("shake");
      }
    });
  }

  function gameClassify(g, body, again) {
    const list = shuffle(g.items); let i = 0, errors = 0, streak = 0, best = 0;
    render();
    function render() {
      const it = list[i];
      body.innerHTML = `<div class="panel"><h2>${esc(g.title)}</h2><div class="qhead"><span>${i + 1} de ${list.length}</span><span>Racha: ${streak} · Errores: ${errors}</span></div>
        <div class="cardgame">${esc(it.t)}</div>
        <div class="catrow">${g.categories.map((c, k) => `<button class="btn ghost" data-k="${k}">${esc(c)}</button>`).join("")}</div>
        <div id="fb" aria-live="polite"></div></div>`;
      body.querySelectorAll(".catrow .btn").forEach((b) => b.onclick = () => {
        const ok = +b.dataset.k === it.c;
        if (ok) { streak++; best = Math.max(best, streak); } else { errors++; streak = 0; }
        body.querySelectorAll(".catrow .btn").forEach((x) => (x.disabled = true));
        body.querySelector("#fb").innerHTML = `<div class="fb ${ok ? "ok" : "bad"}">${ok ? "✓ Correcto." : "✗ Era: <b>" + esc(g.categories[it.c]) + "</b>."}</div><div class="row" style="margin-top:10px"><button class="btn" id="n">${i + 1 === list.length ? "Terminar" : "Siguiente ▶"}</button></div>`;
        const n = body.querySelector("#n"); n.focus();
        n.onclick = () => { i++; if (i < list.length) render(); else { body.querySelector(".cardgame").remove(); body.querySelector(".catrow").remove(); body.querySelector("#fb").remove(); finish(g, body, errors, again, `Mejor racha: ${best}.`); } };
      });
    }
  }

  route();
})();
