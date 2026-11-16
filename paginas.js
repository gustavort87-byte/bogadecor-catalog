// Builds every page of the BOGA DECOR muestrario as an HTML string.
// Used by catalogo.html (print/PDF) and flip.html (page-turn viewer) so both stay identical.
(function () {
  const BRAND = 'BOGA DECOR';
  const PHONE = { label: '444 202 1159', href: 'tel:+524442021159' };
  const EMAIL = 'bogalamps@gmail.com';

  const img = (n) => typeof n === 'string' ? n : 'img/pagina-' + String(n).padStart(2, '0') + '.jpg';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');

  // Horizontal focal point (%) for product photos whose subject is off-centre, keyed by source page.
  const FOCUS = { 18: 62, 30: 18 };

  const SECTIONS = [
    { key: 'Lámparas de mesa', title: 'Lámparas<br>de mesa', values: ['Diseño artesanal', 'Madera sólida', 'Talla única', 'Luz cálida'] },
    { key: 'Lámparas de pie', title: 'Lámparas<br>de pie', values: ['Diseño artesanal', 'Madera sólida', 'Talla única', 'Luz cálida'] },
    { key: 'Percheros', title: 'Percheros', values: ['Diseño artesanal', 'Madera sólida', 'Estructura resistente', 'Acabados de alta calidad'] },
  ];
  const GALLERY_VALUES = ['Diseño artesanal', 'Medidas personalizables', 'Estructura resistente', 'Acabados de alta calidad'];
  const GALLERIES_BEFORE_ART = [
    { title: 'Lámparas colgantes', eyebrow: 'Colgantes', text: 'Pantallas de tela en capas y estructuras torneadas para salas, comedores y recibidores. Modelos Isabella, Brocal y Orbital, fabricados a la medida.', layout: 'g-2', imgs: [[55, ''], [56, '']], values: GALLERY_VALUES },
    { title: 'Lámparas de pared', eyebrow: 'Pared', text: 'Apliques de luz indirecta con pantalla textil. Modelos Ensamble y Media Caña, fabricados a la medida.', layout: 'g-2', imgs: [['img/pared-ensamble.jpg', 'Ensamble'], ['img/pared-mediacana.jpg', 'Media Caña']], values: GALLERY_VALUES },
  ];
  const ART = {
    intro: 'img/arte-01.jpg',
    full: [60, 61],
    values: ['Diseño exclusivo', 'Acabados de alta calidad', 'Ligeros y fáciles de instalar', 'Decoración que inspira'],
  };
  const GALLERIES_AFTER_ART = [
    { title: 'Pantallas decorativas', eyebrow: 'Pantallas', text: 'Diseño, calidad y versatilidad para cada ambiente. Personaliza el color, el tamaño y el estilo: fabricamos pantallas desde 3 cm hasta 3 m o más.', layout: 'g-2', imgs: [[63, ''], [64, '']], values: ['Tamaños personalizados', 'Acabados de primera', 'Súper resistentes', 'Colores a tu medida'] },
    { title: 'Artículos varios', eyebrow: 'Varios', text: 'Espejos, libreros y repisas en madera sólida. Si lo puedes imaginar, lo podemos fabricar.', layout: 'g-3', imgs: [[67, 'Librero escalera'], [66, 'Espejo decorativo'], [68, 'Repisas']], values: ['Diseño artesanal', 'Madera sólida', 'Estructura resistente', 'Acabados de alta calidad'] },
  ];

  window.buildCatalogPages = function (P) {
    P = P || [];
    const pages = [];
    const toc = [];
    const add = (html) => { pages.push(html); return pages.length; };

    // Cover
    add(`<section class="page cover">
      <img src="${img(30)}" alt="">
      <div class="shade"></div>
      <div class="top"><div class="wordmark">${BRAND}</div><div class="tag">Decoración que da vida a tus espacios</div></div>
      <div class="bottom">
        <div><div class="eyebrow">Muestrario · Invierno</div><h1>Madera, luz<br>y oficio.</h1></div>
        <ul><li>Lámparas de mesa</li><li>Lámparas de pie</li><li>Percheros</li><li>Colgantes y pared</li><li>Arte para interiores</li></ul>
      </div>
    </section>`);

    // About
    add(`<section class="page text-page grain">
      <span class="eyebrow">¿Quiénes somos?</span>
      <h2 class="display">Hechas a mano<br>en San Luis Potosí</h2>
      <p class="lead">Nos apasiona el diseño y la creación de piezas únicas y funcionales.</p>
      <ul class="facts">
        <li><strong>+30 años</strong>Siendo socios estratégicos de hoteles y mueblerías a nivel nacional.</li>
        <li><strong>90 %</strong>De nuestros desarrollos son hechos a la medida para nuestros clientes.</li>
      </ul>
      <div class="about-photos">
        <img src="img/taller-1.jpg" alt="Piezas torneadas en el taller">
        <img src="img/taller-2.jpg" alt="Bases de madera en proceso">
        <img src="img/taller-3.jpg" alt="Bases de lámpara terminadas en el taller">
      </div>
      <div class="folio" style="left:var(--s6)"><b>${BRAND}</b> · Nosotros</div>
    </section>`);

    // Custom work
    add(`<section class="page text-page grain">
      <span class="eyebrow">Hecho a la medida</span>
      <h2 class="display">¿Tienes una idea<br>que quieras hacer realidad?</h2>
      <p class="lead">Si tú lo puedes dibujar, nosotros lo podemos fabricar.</p>
      <ol class="steps">
        <li><div><b>Tu punto de partida</b>Podemos partir de un dibujo, una foto de referencia, medidas específicas o simplemente una idea que quieras materializar.</div></li>
        <li><div><b>Tu presupuesto</b>Nos ajustamos al costo que requieras de acuerdo con tu mercado objetivo.</div></li>
        <li><div><b>Tu volumen</b>Fabricamos desde 1 pieza hasta grandes volúmenes.</div></li>
        <li><div><b>Tu acabado</b>Maderas, tonos y acabados 100 % personalizables.</div></li>
      </ol>
      <div class="folio" style="left:var(--s6)"><b>${BRAND}</b> · A la medida</div>
    </section>`);

    const indexAt = add('');

    // Product sections
    let flip = false;
    SECTIONS.forEach((sec, si) => {
      const items = P.filter((p) => p.category === sec.key);
      if (!items.length) return;
      const openerAt = pages.length + 1;
      add(`<section class="page opener grain">
        <span class="num">0${si + 1}</span>
        <h2 class="display">${sec.title}</h2>
        <div class="count">${items.length} ${items.length === 1 ? 'pieza' : 'piezas'}</div>
        <ul class="names">${items.map((p, i) => `<li>${esc(p.name)}<span>${pad(openerAt + 1 + i)}</span></li>`).join('')}</ul>
        <ul class="values">${sec.values.map((v) => `<li>${v}</li>`).join('')}</ul>
      </section>`);
      items.forEach((p, i) => {
        const d = p.dimensions || {};
        const rows = [];
        if (p.materials && p.materials.length) rows.push(['Material', p.materials.join(', ')]);
        if (d.alto_cm) rows.push(['Alto', d.alto_cm + ' cm']);
        const seen = new Set();   // the source often repeats one value as diámetro/ancho/fondo
        [['Diámetro', d.diametro_cm], ['Ancho', d.ancho_cm], ['Fondo', d.fondo_cm]].forEach(([k, v]) => {
          if (v && !seen.has(v)) { seen.add(v); rows.push([k, v + ' cm']); }
        });
        if (p.sku) rows.push(['Clave', p.sku]);
        const feats = (p.features || []).slice(0, 4);
        const fx = FOCUS[p.photoPage] != null ? FOCUS[p.photoPage] : 50;
        const kind = sec.key === 'Percheros' ? 'Perchero' : sec.key.replace('Lámparas', 'Lámpara');
        const num = pages.length + 1;
        add(`<section class="page product${flip ? ' flip' : ''}">
          <figure class="photo"><img src="${img(p.photoPage)}" alt="${esc(kind)} ${esc(p.name)}" style="object-position:${fx}% 50%"><div class="tint"></div>${p.closingPhrase ? `<figcaption class="closing">${esc(p.closingPhrase).replace(/\n/g, '<br>')}</figcaption>` : ''}</figure>
          <div class="info grain">
            <span class="eyebrow">${esc(sec.key)} · ${pad(i + 1)}</span>
            <h2 class="display name">${esc(p.name)}</h2>
            ${p.tagline ? `<p class="tagline">${esc(p.tagline)}</p>` : ''}
            <hr class="rule">
            <p class="desc">${esc(p.description)}</p>
            ${rows.length ? `<dl class="specs">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('')}</dl>` : ''}
            ${feats.length ? `<ul class="features">${feats.map((f) => `<li><b>${esc(f.title)}</b>${f.detail ? `<span>${esc(f.detail)}</span>` : ''}</li>`).join('')}</ul>` : ''}
            <div class="folio"><span><b>${BRAND}</b></span><span>${pad(num)}</span></div>
          </div>
        </section>`);
        toc.push({ group: sec.key, name: p.name, page: num });
        flip = !flip;
      });
    });

    const addGallery = (g) => {
      const n = pages.length + 1;
      const figs = g.imgs.map(([pg, cap]) => `<figure><img src="${img(pg)}" alt="${esc(cap || g.title)}">${cap ? `<figcaption>${esc(cap)}</figcaption>` : ''}</figure>`).join('');
      add(`<section class="page gallery grain">
        <header>
          <div><span class="eyebrow">${esc(g.eyebrow)}</span><h2 class="display">${esc(g.title)}</h2></div>
          <p>${esc(g.text)}</p>
        </header>
        <div class="grid ${g.layout}">${figs}</div>
        <ul class="values">${g.values.map((v) => `<li>${v}</li>`).join('')}</ul>
        <div class="folio"><b>${pad(n)}</b></div>
      </section>`);
      toc.push({ group: 'Decoración y a la medida', name: g.title, page: n });
    };

    GALLERIES_BEFORE_ART.forEach(addGallery);

    // Arte para interiores: one page per artwork, every image shown whole
    const total = 1 + ART.full.length;
    const artAt = add(`<section class="page art-intro grain">
      <div class="head">
        <span class="eyebrow">Arte para interiores · 01 / ${pad(total)}</span>
        <h2 class="display">Arte para interiores</h2>
        <div class="unique"><strong>Piezas únicas.</strong><p>Cada obra es original e irrepetible: no hay dos iguales. Gran formato para darle carácter a tu sala, recibidor o recámara.</p></div>
        <ul class="values">${ART.values.map((v) => `<li>${v}</li>`).join('')}</ul>
      </div>
      <figure><img src="${ART.intro}" alt="Obra abstracta en tonos tierra con círculos dorados, en una sala"></figure>
    </section>`);
    ART.full.forEach((pg, i) => {
      add(`<section class="page art-full">
        <img src="${img(pg)}" alt="Obra de arte para interiores ${pad(i + 2)}">
        <div class="label"><div><span class="eyebrow">Arte para interiores</span><strong>Pieza única</strong></div><span class="n">${pad(i + 2)} / ${pad(total)}</span></div>
      </section>`);
    });
    toc.push({ group: 'Decoración y a la medida', name: 'Arte para interiores', page: artAt });

    GALLERIES_AFTER_ART.forEach(addGallery);

    // Closing + contact
    add(`<section class="page closing-page grain">
      <img class="logo" src="img/boga-logo.png" alt="${BRAND} — Amor por los detalles">
      <div class="brand">${BRAND}</div>
      <p class="lead">Este no es un catálogo: es un muestrario de algunas piezas que hemos fabricado para nuestros clientes a lo largo del tiempo.</p>
      <p class="body">Las posibilidades son infinitas, porque podemos hacer casi cualquier cosa en madera. Si no viste lo que buscas, llámanos: estamos seguros de que juntos encontraremos una solución.</p>
      <div class="contact">
        <div><span class="eyebrow">Teléfono</span><a href="${PHONE.href}">${PHONE.label}</a></div>
        <div><span class="eyebrow">Correo</span><a href="mailto:${EMAIL}">${EMAIL}</a></div>
        <div><span class="eyebrow">Idiomas</span><p>Español · English</p></div>
      </div>
    </section>`);

    // Index
    const groups = [];
    toc.forEach((t) => { let g = groups.find((x) => x.name === t.group); if (!g) groups.push(g = { name: t.group, items: [] }); g.items.push(t); });
    pages[indexAt - 1] = `<section class="page index grain">
      <span class="eyebrow">Contenido</span>
      <h2 class="display">Índice</h2>
      <p class="note">Cada pieza se fabrica bajo pedido. Las medidas, maderas y acabados que ves aquí son un punto de partida: todos pueden ajustarse a tu proyecto.</p>
      <div class="cols">${groups.map((g) => `<section><h3>${esc(g.name)}</h3><ol>${g.items.map((t) => `<li>${esc(t.name)}<span class="dots"></span><span class="pg">${pad(t.page)}</span></li>`).join('')}</ol></section>`).join('')}</div>
    </section>`;

    return pages;
  };
})();
