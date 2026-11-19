// PROTOTYPE：所有页面共用的切换器和小工具。没有持久化，状态只放在 URL 和内存里。

window.P = (() => {
  const qs = () => new URLSearchParams(location.search);
  const param = (k, d = '') => qs().get(k) ?? d;

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const PAGES = [
    ['index.html', '目录'],
    ['home.html', '1 首页'],
    ['search.html', '2 快速查询'],
    ['model.html', '3 机型与对比'],
    ['task.html', '4 任务详情'],
    ['admin.html', '5 权限勾选表'],
    ['content.html', '6 内容管理'],
  ];

  // 跳到别的页面：只保留设备和角色；变体不跨页带，每页从第一个变体看起
  function link(page, params = {}) {
    const u = new URLSearchParams();
    const keep = qs();
    for (const k of ['device', 'role']) if (keep.get(k)) u.set(k, keep.get(k));
    for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== null && v !== '') u.set(k, v);
    const s = u.toString();
    return page + (s ? '?' + s : '');
  }

  let cfg = null;
  let rerender = () => {};

  function setParams(obj) {
    const u = qs();
    for (const [k, v] of Object.entries(obj)) {
      if (v === undefined || v === null || v === '') u.delete(k); else u.set(k, v);
    }
    history.replaceState(null, '', location.pathname + '?' + u.toString());
    rerender();
  }

  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove('show'), 2200);
  }

  function variantKeys() { return Object.keys(cfg.variants); }
  function currentVariant() {
    const v = param('variant');
    return cfg.variants[v] ? v : variantKeys()[0];
  }
  function device() {
    const d = param('device');
    if (d === 'phone' || d === 'desktop') return d;
    return cfg.defaultDevice || (window.innerWidth < 640 ? 'phone' : 'desktop');
  }

  function cycle(step) {
    const keys = variantKeys();
    const i = keys.indexOf(currentVariant());
    setParams({ variant: keys[(i + step + keys.length) % keys.length] });
  }

  function bar() {
    const v = currentVariant();
    const d = device();
    const here = location.pathname.split('/').pop() || 'index.html';
    const pageOpts = PAGES.map(([f, n]) => `<option value="${f}" ${f === here ? 'selected' : ''}>${n}</option>`).join('');
    const multi = variantKeys().length > 1;
    return `
      ${multi ? '<button data-pb="prev" aria-label="上一个变体">◀</button>' : ''}
      <span class="pb-label">${v} · ${esc(cfg.variants[v].name)}${cfg.chosen ? '（已选定）' : ''}</span>
      ${multi ? '<button data-pb="next" aria-label="下一个变体">▶</button>' : ''}
      <span class="pb-sep"></span>
      <button data-pb="phone" class="${d === 'phone' ? 'on' : ''}">手机</button>
      <button data-pb="desktop" class="${d === 'desktop' ? 'on' : ''}">电脑</button>
      ${(cfg.extraBar || []).map((b) => `<span class="pb-sep"></span>` + b.options.map(([val, label]) =>
        `<button data-pb-extra="${b.key}" data-val="${val}" class="${param(b.key, b.options[0][0]) === val ? 'on' : ''}">${label}</button>`).join('')).join('')}
      <span class="pb-sep"></span>
      <select data-pb="page" aria-label="切换页面" style="border:0;background:transparent;font:inherit;padding:6px 2px">${pageOpts}</select>
      <button data-pb="state">状态</button>`;
  }

  function renderAll() {
    const v = currentVariant();
    document.body.dataset.device = device();
    document.body.dataset.variant = v;
    const app = document.getElementById('app');
    const scroll = app.scrollTop;
    app.innerHTML = cfg.variants[v].render(cfg.state, { device: device(), variant: v });
    if (cfg.keepScroll) app.scrollTop = scroll;
    document.getElementById('proto-bar').innerHTML = bar();
    const st = document.getElementById('proto-state');
    st.textContent = JSON.stringify({ 页面: cfg.page, 变体: v + ' ' + cfg.variants[v].name, 设备: device(), URL参数: Object.fromEntries(qs()), 内存状态: cfg.state }, null, 2);
    cfg.after && cfg.after(cfg.state, v);
  }

  function mount(c) {
    cfg = c;
    document.title = 'PROTOTYPE · ' + c.page;
    document.body.insertAdjacentHTML('beforeend', `
      <div id="stage"><div id="app"></div></div>
      <div id="toast" role="status"></div>
      <pre id="proto-state"></pre>
      <nav id="proto-bar" aria-label="原型切换条（不属于设计）"></nav>`);
    rerender = () => { cfg.keepScroll = false; renderAll(); };

    const protoBar = document.getElementById('proto-bar');
    // 窄屏换行后，用切换条的实际高度给底部控件让位。
    new ResizeObserver(() => {
      document.body.style.setProperty('--proto-bar-height', protoBar.offsetHeight + 'px');
    }).observe(protoBar, { box: 'border-box' });

    protoBar.addEventListener('click', (e) => {
      const b = e.target.closest('[data-pb],[data-pb-extra]');
      if (!b) return;
      const k = b.dataset.pb;
      if (k === 'prev') cycle(-1);
      else if (k === 'next') cycle(1);
      else if (k === 'phone' || k === 'desktop') setParams({ device: k });
      else if (k === 'state') document.getElementById('proto-state').classList.toggle('show');
      else if (b.dataset.pbExtra) setParams({ [b.dataset.pbExtra]: b.dataset.val });
    });
    protoBar.addEventListener('change', (e) => {
      if (e.target.dataset.pb === 'page') location.href = link(e.target.value);
    });

    // 页面里的动作：data-act="名字"，由页面的 actions 处理；处理完局部重绘、保留滚动位置
    document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-act]');
      if (!el || !document.getElementById('app').contains(el)) return;
      const fn = cfg.actions && cfg.actions[el.dataset.act];
      if (!fn) return;
      e.preventDefault();
      const out = fn(el, cfg.state, e);
      if (out !== false) { cfg.keepScroll = true; renderAll(); }
    });
    document.addEventListener('input', (e) => {
      const el = e.target.closest('[data-input]');
      if (!el) return;
      const fn = cfg.inputs && cfg.inputs[el.dataset.input];
      if (fn) fn(el, cfg.state, e);
    });
    document.addEventListener('submit', (e) => {
      const el = e.target.closest('[data-submit]');
      if (!el) return;
      e.preventDefault();
      const fn = cfg.submits && cfg.submits[el.dataset.submit];
      if (fn) { const out = fn(el, cfg.state, e); if (out !== false) renderAll(); }
    });

    document.addEventListener('keydown', (e) => {
      const t = e.target;
      if (t.closest && t.closest('input, textarea, select, [contenteditable]')) return;
      if (variantKeys().length < 2) return;
    if (e.key === 'ArrowLeft') cycle(-1);
      if (e.key === 'ArrowRight') cycle(1);
    });

    renderAll();
  }

  return { mount, param, setParams, link, esc, toast, refresh: () => renderAll(), device };
})();

// 共用的小片段
window.UI = {
  kindLabel: { model: '机型', accessory: '配件', entry: '知识条目', qa: '问答' },
  kind(k) { return `<span class="kind k-${k}">${UI.kindLabel[k]}</span>`; },
  disc(on) { return on ? '<span class="disc">已停售</span>' : ''; },
  spec(name, value) { return `<span class="spec-tag"><small>${P.esc(name)}</small><b>${P.esc(value)}</b></span>`; },
  model(id) { return DATA.models.find((m) => m.id === id); },
};
