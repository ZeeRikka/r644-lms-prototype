// PROTOTYPE：假数据。参数按 2024–2025 年 apple.com.cn 技术规格页的公开数值手抄，仅供原型演示，未逐项核对。
// 停售状态按 handoff 的设定：只有 iPad Pro 11 英寸（第 2 代）是已停售。

window.DATA = (() => {
  const groups = [
    { key: 'screen', name: '屏幕', items: ['尺寸', '显示技术', '分辨率', '刷新率', '峰值亮度'] },
    { key: 'perf', name: '性能', items: ['芯片', '内存', '存储容量'] },
    { key: 'conn', name: '连接', items: ['接口', '无线网络', '蜂窝网络'] },
    { key: 'body', name: '外观与配件', items: ['解锁方式', 'Apple Pencil', '键盘', '重量', '厚度'] },
  ];

  // 每个参数项：v 主值，note 配置差异备注，n 用于对比计算的数值，na 不适用
  const models = [
    {
      id: 'pro11-m4', series: 'iPad Pro', name: 'iPad Pro 11 英寸（M4）', short: 'Pro 11″ M4', year: 2024, discontinued: false,
      checked: '2026-10-08', source: 'https://www.apple.com.cn/ipad-pro/specs/',
      intro: '2024 年款，首款串联 OLED 屏的 iPad，也是最薄的 11 英寸 iPad。',
      p: {
        '尺寸': { v: '11 英寸', n: 11 },
        '显示技术': { v: 'Ultra Retina XDR（串联 OLED）', note: '1TB、2TB 可选纳米纹理玻璃' },
        '分辨率': { v: '2420 × 1668' },
        '刷新率': { v: '最高 120Hz（ProMotion）', n: 120 },
        '峰值亮度': { v: 'SDR 1000 尼特，HDR 1600 尼特', n: 1000 },
        '芯片': { v: 'M4' , note: '256GB、512GB 为 9 核 CPU；1TB、2TB 为 10 核 CPU' },
        '内存': { v: '8GB', n: 8, note: '1TB、2TB 为 16GB' },
        '存储容量': { v: '256GB / 512GB / 1TB / 2TB' },
        '接口': { v: '雷雳 / USB 4' },
        '无线网络': { v: 'Wi‑Fi 6E' },
        '蜂窝网络': { v: '5G（蜂窝版）' },
        '解锁方式': { v: '面容 ID' },
        'Apple Pencil': { v: 'Apple Pencil Pro、Apple Pencil（USB‑C）' },
        '键盘': { v: '妙控键盘（适用于 iPad Pro M4）' },
        '重量': { v: '444 克', n: 444, note: '蜂窝版 446 克' },
        '厚度': { v: '5.3 毫米', n: 5.3 },
      },
      accessories: ['pencil-pro', 'pencil-usbc', 'mkb-m4'],
    },
    {
      id: 'pro13-m4', series: 'iPad Pro', name: 'iPad Pro 13 英寸（M4）', short: 'Pro 13″ M4', year: 2024, discontinued: false,
      checked: '2026-10-08', source: 'https://www.apple.com.cn/ipad-pro/specs/',
      intro: '2024 年款大屏 Pro，屏幕与芯片和 11 英寸相同，5.1 毫米是 Apple 最薄的产品。',
      p: {
        '尺寸': { v: '13 英寸', n: 13 },
        '显示技术': { v: 'Ultra Retina XDR（串联 OLED）', note: '1TB、2TB 可选纳米纹理玻璃' },
        '分辨率': { v: '2752 × 2064' },
        '刷新率': { v: '最高 120Hz（ProMotion）', n: 120 },
        '峰值亮度': { v: 'SDR 1000 尼特，HDR 1600 尼特', n: 1000 },
        '芯片': { v: 'M4', note: '256GB、512GB 为 9 核 CPU；1TB、2TB 为 10 核 CPU' },
        '内存': { v: '8GB', n: 8, note: '1TB、2TB 为 16GB' },
        '存储容量': { v: '256GB / 512GB / 1TB / 2TB' },
        '接口': { v: '雷雳 / USB 4' },
        '无线网络': { v: 'Wi‑Fi 6E' },
        '蜂窝网络': { v: '5G（蜂窝版）' },
        '解锁方式': { v: '面容 ID' },
        'Apple Pencil': { v: 'Apple Pencil Pro、Apple Pencil（USB‑C）' },
        '键盘': { v: '妙控键盘（适用于 iPad Pro M4）' },
        '重量': { v: '579 克', n: 579, note: '蜂窝版 582 克' },
        '厚度': { v: '5.1 毫米', n: 5.1 },
      },
      accessories: ['pencil-pro', 'pencil-usbc', 'mkb-m4'],
    },
    {
      id: 'air11-m2', series: 'iPad Air', name: 'iPad Air 11 英寸（M2）', short: 'Air 11″ M2', year: 2024, discontinued: false,
      checked: '2026-09-21', source: 'https://www.apple.com.cn/ipad-air/specs/',
      intro: '2024 年款，M2 芯片，支持 Apple Pencil Pro，是多数顾客的「够用的 Pro」。',
      p: {
        '尺寸': { v: '11 英寸', n: 11 },
        '显示技术': { v: 'Liquid Retina（LCD）' },
        '分辨率': { v: '2360 × 1640' },
        '刷新率': { v: '60Hz', n: 60 },
        '峰值亮度': { v: '500 尼特', n: 500 },
        '芯片': { v: 'M2' },
        '内存': { v: '8GB', n: 8 },
        '存储容量': { v: '128GB / 256GB / 512GB / 1TB' },
        '接口': { v: 'USB‑C（最高 10Gb/s）' },
        '无线网络': { v: 'Wi‑Fi 6E' },
        '蜂窝网络': { v: '5G（蜂窝版）' },
        '解锁方式': { v: '触控 ID（顶部按钮）' },
        'Apple Pencil': { v: 'Apple Pencil Pro、Apple Pencil（USB‑C）' },
        '键盘': { v: '妙控键盘（旧款）' },
        '重量': { v: '462 克', n: 462 },
        '厚度': { v: '6.1 毫米', n: 6.1 },
      },
      accessories: ['pencil-pro', 'pencil-usbc'],
    },
    {
      id: 'mini-a17', series: 'iPad mini', name: 'iPad mini（A17 Pro）', short: 'mini A17 Pro', year: 2024, discontinued: false,
      checked: '2026-09-21', source: 'https://www.apple.com.cn/ipad-mini/specs/',
      intro: '2024 年款，8.3 英寸，单手能握，支持 Apple Pencil Pro。',
      p: {
        '尺寸': { v: '8.3 英寸', n: 8.3 },
        '显示技术': { v: 'Liquid Retina（LCD）' },
        '分辨率': { v: '2266 × 1488' },
        '刷新率': { v: '60Hz', n: 60 },
        '峰值亮度': { v: '500 尼特', n: 500 },
        '芯片': { v: 'A17 Pro' },
        '内存': { v: '8GB', n: 8 },
        '存储容量': { v: '128GB / 256GB / 512GB' },
        '接口': { v: 'USB‑C（USB 3，最高 10Gb/s）' },
        '无线网络': { v: 'Wi‑Fi 6E' },
        '蜂窝网络': { v: '5G（蜂窝版）' },
        '解锁方式': { v: '触控 ID（顶部按钮）' },
        'Apple Pencil': { v: 'Apple Pencil Pro、Apple Pencil（USB‑C）' },
        '键盘': { na: true },
        '重量': { v: '293 克', n: 293, note: '蜂窝版 297 克' },
        '厚度': { v: '6.3 毫米', n: 6.3 },
      },
      accessories: ['pencil-pro', 'pencil-usbc'],
    },
    {
      id: 'ipad-10', series: 'iPad', name: 'iPad（第 10 代）', short: 'iPad 第 10 代', year: 2022, discontinued: false,
      checked: '2026-08-30', source: 'https://www.apple.com.cn/ipad-10.9/specs/',
      intro: '2022 年款，全面屏 + USB‑C 的入门 iPad，前置摄像头在横边。',
      p: {
        '尺寸': { v: '10.9 英寸', n: 10.9 },
        '显示技术': { v: 'Liquid Retina（LCD）' },
        '分辨率': { v: '2360 × 1640' },
        '刷新率': { v: '60Hz', n: 60 },
        '峰值亮度': { v: '500 尼特', n: 500 },
        '芯片': { v: 'A14 仿生' },
        '内存': { v: '4GB', n: 4 },
        '存储容量': { v: '64GB / 256GB' },
        '接口': { v: 'USB‑C（USB 2，最高 480Mb/s）' },
        '无线网络': { v: 'Wi‑Fi 6' },
        '蜂窝网络': { v: '5G（蜂窝版）' },
        '解锁方式': { v: '触控 ID（顶部按钮）' },
        'Apple Pencil': { v: 'Apple Pencil（USB‑C）、Apple Pencil（第一代，需转换器）' },
        '键盘': { v: '妙控键盘双面夹' },
        '重量': { v: '477 克', n: 477, note: '蜂窝版 481 克' },
        '厚度': { v: '7.0 毫米', n: 7.0 },
      },
      accessories: ['pencil-usbc'],
    },
    {
      id: 'pro11-g2', series: 'iPad Pro', name: 'iPad Pro 11 英寸（第 2 代）', short: 'Pro 11″ 第 2 代', year: 2020, discontinued: true,
      checked: '2026-07-14', source: 'https://support.apple.com/zh-cn/111897',
      intro: '2020 年款，首款带激光雷达扫描仪的 iPad。顾客拿来换新时最常见的旧款 Pro 之一。',
      p: {
        '尺寸': { v: '11 英寸', n: 11 },
        '显示技术': { v: 'Liquid Retina（LCD）' },
        '分辨率': { v: '2388 × 1668' },
        '刷新率': { v: '最高 120Hz（ProMotion）', n: 120 },
        '峰值亮度': { v: '600 尼特', n: 600 },
        '芯片': { v: 'A12Z 仿生' },
        '内存': { v: '6GB', n: 6 },
        '存储容量': { v: '128GB / 256GB / 512GB / 1TB' },
        '接口': { v: 'USB‑C（最高 10Gb/s）' },
        '无线网络': { v: 'Wi‑Fi 6' },
        '蜂窝网络': { v: '4G LTE（蜂窝版）' },
        '解锁方式': { v: '面容 ID' },
        'Apple Pencil': { v: 'Apple Pencil（第二代）、Apple Pencil（USB‑C）' },
        '键盘': { v: '妙控键盘（旧款）' },
        '重量': { v: '471 克', n: 471, note: '蜂窝版 473 克' },
        '厚度': { v: '5.9 毫米', n: 5.9 },
      },
      accessories: ['pencil-usbc'],
    },
  ];

  const accessories = [
    { id: 'pencil-pro', name: 'Apple Pencil Pro', discontinued: false, checked: '2026-10-08', source: 'https://www.apple.com.cn/apple-pencil/',
      intro: '支持压感、悬停、挤压、桶形旋转和「查找」；磁吸在 iPad 侧边配对和充电。' },
    { id: 'pencil-usbc', name: 'Apple Pencil（USB‑C）', discontinued: false, checked: '2026-10-08', source: 'https://www.apple.com.cn/apple-pencil/',
      intro: '没有压感；用 USB‑C 线配对和充电。目前在售的 USB‑C 接口 iPad 都能用。' },
    { id: 'mkb-m4', name: '妙控键盘（适用于 iPad Pro M4）', discontinued: false, checked: '2026-10-08', source: 'https://www.apple.com.cn/shop/ipad/accessories/keyboards',
      intro: '铝制掌托、更大的触控板，带一排功能键。只适用于 M4 款 iPad Pro，旧款 Pro 和 Air 用不了。' },
  ];

  const entries = [
    { id: 'air-vs-pro', title: 'iPad Air 和 iPad Pro 该怎么选', checked: '2026-10-12', topics: ['选购建议', '系列差异'],
      summary: '先问顾客拿它做什么，再看三处差异：屏幕、接口、解锁方式。大多数「看剧 + 记笔记」的顾客 Air 就够。',
      body: '先问顾客主要拿来做什么，再讲三处差异。屏幕：Pro 是串联 OLED、最高 120Hz，看 HDR 视频和快速滑动明显更顺；Air 是 60Hz 的 LCD。接口：Pro 是雷雳，接外置硬盘和显示器快得多。解锁：Pro 用面容 ID，Air 用顶部按钮的触控 ID。两者都支持 Apple Pencil Pro。' },
    { id: 'pencil-map', title: '哪支 Apple Pencil 配哪台 iPad', checked: '2026-10-08', topics: ['配件兼容'],
      summary: '一张表看清三代笔和在售、已停售机型的兼容关系，顾客拿着旧笔来问时先查这条。',
      body: 'Apple Pencil Pro 只配 2024 年起的 Pro、Air 和 mini；Apple Pencil（USB‑C）几乎配所有 USB‑C 接口的 iPad；第二代只配 2018–2022 年的 Pro、Air 第 4–5 代和 mini 第 6 代。' },
  ];

  const qas = [
    { id: 'qa-pencil2-ipad10', q: 'Apple Pencil 第二代能不能配 iPad 第 10 代？', topic: '配件兼容', checked: '2026-10-20', publisher: 'Mia',
      a: '不能。第二代靠磁吸吸在侧边配对和充电，iPad 第 10 代侧边没有这个磁吸充电位。iPad 第 10 代能用的是 Apple Pencil（USB‑C），以及 Apple Pencil（第一代，需要 USB‑C 转 Apple Pencil 转换器）。顾客想要压感就推荐第一代，不需要压感就推荐 USB‑C 款。' },
    { id: 'qa-mini-keyboard', q: 'iPad mini 能接妙控键盘吗？', topic: '配件兼容', checked: '2026-09-30', publisher: 'Ivy',
      a: '不能。iPad mini 没有智能接点，接不了任何妙控键盘。需要打字可以连蓝牙键盘。' },
    { id: 'qa-pencil-pro-vs-usbc', q: 'Apple Pencil Pro 和 USB‑C 款差在哪？', topic: '配件兼容', checked: '2026-10-08', publisher: 'Mia',
      a: 'Pro 有压感、挤压、桶形旋转、触感反馈和「查找」，吸在 iPad 侧边就能配对和充电；USB‑C 款没有压感，要用线配对和充电，价格低一截。画画的顾客选 Pro，只记笔记的选 USB‑C 款就够。' },
    { id: 'qa-120hz', q: 'iPad Air 的屏幕有 120Hz 吗？', topic: '系列差异', checked: '2026-10-12', publisher: 'Ivy',
      a: '没有。iPad Air 是 60Hz。目前在售的 iPad 里只有 iPad Pro 是最高 120Hz（ProMotion）。' },
  ];

  const synonyms = [
    ['笔', '手写笔', 'Apple Pencil', 'pencil'],
    ['键盘', '妙控键盘', 'magic keyboard'],
    ['刷新率', '高刷', 'ProMotion'],
    ['mini', '迷你'],
    ['第10代', '10代', '十代'],
    ['第二代', '二代', '第2代'],
  ];

  return { groups, models, accessories, entries, qas, synonyms };
})();

// ---------------- 搜索：移植自 src/domain/normalize.ts + search.ts，逻辑保持一致 ----------------
window.SEARCH = (() => {
  const norm = (s) => s.normalize('NFKC').toLowerCase().replace(/\s+/gu, '');
  const tokenize = (q) => q.split(/\s+/u).map(norm).filter((t) => t.length > 0);

  const synIndex = new Map();
  for (const g of DATA.synonyms) {
    const words = g.map(norm).filter(Boolean);
    for (const w of words) synIndex.set(w, words);
  }
  // 「忽略空格」落到同义词上：相邻几个词拼起来正好是某个同义词时合并成一个词，取最长的一段
  const mergeSynonymPhrases = (tokens) => {
    const merged = [];
    let i = 0;
    while (i < tokens.length) {
      let end = i + 1;
      for (let j = tokens.length; j > i + 1; j--) {
        if (synIndex.has(tokens.slice(i, j).join(''))) { end = j; break; }
      }
      merged.push(tokens.slice(i, end).join(''));
      i = end;
    }
    return merged;
  };
  const expand = (t) => synIndex.get(t) ?? [t];
  const matchesAll = (text, tokens) => tokens.every((t) => expand(t).some((f) => text.includes(f)));

  const docs = [
    ...DATA.models.map((m) => ({
      kind: 'model', id: m.id, title: m.name, titleExtra: m.series, body: m.intro, discontinued: m.discontinued,
      params: Object.entries(m.p).filter(([, x]) => !x.na).map(([name, x]) => ({ name, value: x.v + (x.note ? `（${x.note}）` : '') })),
    })),
    ...DATA.accessories.map((a) => ({ kind: 'accessory', id: a.id, title: a.name, titleExtra: '', body: a.intro, discontinued: a.discontinued, params: [] })),
    ...DATA.entries.map((e) => ({ kind: 'entry', id: e.id, title: e.title, titleExtra: '', body: e.summary + e.body, discontinued: false, params: [] })),
    ...DATA.qas.map((q) => ({ kind: 'qa', id: q.id, title: q.q, titleExtra: '', body: q.a, discontinued: false, params: [] })),
  ];

  function search(query) {
    const tokens = mergeSynonymPhrases(tokenize(query));
    if (!tokens.length) return [];
    const hits = [];
    docs.forEach((doc, i) => {
      const titleText = norm(doc.title) + norm(doc.titleExtra);
      const bodyText = norm(doc.body);
      const paramText = doc.params.map((p) => norm(p.name + p.value)).join('\u0000');
      const titleHit = matchesAll(titleText, tokens);
      const bodyHit = bodyText.length > 0 && matchesAll(bodyText, tokens);
      const paramHit = paramText.length > 0 && matchesAll(paramText, tokens);
      if (!titleHit && !bodyHit && !paramHit) return;
      const matchedParams = paramHit
        ? doc.params.filter((p) => tokens.every((t) => expand(t).some((f) => norm(p.name + p.value).includes(f))))
        : [];
      hits.push({ ...doc, score: titleHit ? 2 : 1, matchedParams, order: i, tokens });
    });
    hits.sort((a, b) => (b.score - a.score) || (a.discontinued - b.discontinued) || (a.order - b.order));
    return hits;
  }

  // 片段：在正文里找第一个命中的写法，前后各截一段
  function snippet(doc, len = 46) {
    const body = doc.body;
    const lower = body.toLowerCase();
    for (const t of doc.tokens) {
      for (const f of expand(t)) {
        const i = lower.indexOf(f);
        if (i >= 0) {
          const s = Math.max(0, i - 12);
          return (s > 0 ? '…' : '') + body.slice(s, s + len) + (s + len < body.length ? '…' : '');
        }
      }
    }
    return body.slice(0, len) + (body.length > len ? '…' : '');
  }

  return { search, snippet, tokenize };
})();
