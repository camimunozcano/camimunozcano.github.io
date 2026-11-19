/* =========================================================
   María Camila Muñoz — Portafolio
   Todo el contenido editable vive en CATEGORIES (trabajo) e I18N (textos).
   Para usar imágenes propias: cambia la URL por "assets/img/archivo.jpg".
   ========================================================= */

const CDN = "https://mir-s3-cdn-cf.behance.net/project_modules/";
const M = (size, list) => list.map(f => CDN + size + "/" + f);
const BE = "https://www.behance.net/gallery/";

// L("carpeta", n) -> ["assets/img/carpeta/01.jpg", ... "NN.jpg"]  (imágenes originales optimizadas)
const L = (slug, n) => Array.from({ length: n }, (_, i) => `assets/img/${slug}/${String(i + 1).padStart(2, "0")}.jpg`);

/* ---------- TRABAJO POR CATEGORÍAS ----------
   type define cómo se muestra la categoría y el marco del visor:
   ai (Illustrator) · feed (post Instagram) · story · reel · web · print · photo */
const CATEGORIES = [
  {
    id: "branding", type: "ai",
    es: { name: "Branding", desc: "Identidades visuales completas: logotipo, color, tipografía, aplicaciones y manuales listos para usar.", note: "mi favorito ♡" },
    en: { name: "Branding", desc: "Complete visual identities: logo, color, typography, applications and ready-to-use brand guidelines.", note: "my favorite ♡" },
    projects: [
      { id: "vabes", client: "Vabes", year: "2024", behance: BE + "201882423",
        swatches: ["#6c3bd1", "#c9b6ff", "#1b1b1b", "#ffffff"], images: L("vabes", 11),
        es: { title: "Vabes · Identidad de marca", desc: "Identidad visual de la estrategia a la entrega final: logotipo, paleta, tipografía, merch, stickers y stand de marca." },
        en: { title: "Vabes · Brand identity", desc: "Visual identity from strategy to final delivery: logo, palette, typography, merch, stickers and brand booth." } },
      { id: "donabel", client: "Café Don Abel", year: "2026", behance: "https://www.behance.net/camilamunoz1",
        swatches: ["#173f31", "#f4ecdb", "#c99d6c", "#3b2112"], images: L("donabel", 5),
        es: { title: "Café Don Abel · Identidad de marca", desc: "Marca para un café de origen de Pitalito, Huila: logotipo orgánico, etiqueta con la ficha de la finca, empaque y papelería." },
        en: { title: "Café Don Abel · Brand identity", desc: "Brand for a single-origin coffee from Pitalito, Huila: organic logo, label with the farm's details, packaging and stationery." } },
      { id: "ocre", client: "Ocre", year: "2026", behance: "https://www.behance.net/camilamunoz1",
        swatches: ["#2a2622", "#f6f1e8", "#c8a96a", "#8a3b1e"], images: L("ocre", 7),
        es: { title: "Ocre · Identidad de marca", desc: "Identidad para una marca de diseño de mobiliario en mármol: logotipo de líneas finas, versiones sobre mármol, placa en latón, papelería y catálogo." },
        en: { title: "Ocre · Brand identity", desc: "Identity for a marble furniture design brand: fine-line logo, marble versions, brass plaque, stationery and catalogue." } },
      { id: "nodo", client: "NODO", year: "2026", behance: "https://www.behance.net/camilamunoz1",
        swatches: ["#0b0b0b", "#f2f2f2", "#6d3cf0", "#3c8cff"], images: L("nodo", 5),
        es: { title: "NODO · Identidad de marca", desc: "Marca para un colectivo de fiestas techno: logotipo modular, variantes en movimiento, pósters, boletería, manillas y merch." },
        en: { title: "NODO · Brand identity", desc: "Brand for a techno party collective: modular logo, motion variants, posters, tickets, wristbands and merch." } },
      { id: "manual", client: "Torregroza & Jara", year: "2022", behance: BE + "147782541",
        swatches: ["#111111", "#d4af37", "#f3f0ea", "#7a7a7a"],
        images: M("max_1200_webp", ["440491147782541.62c889e8968ad.jpg", "bb5e93147782541.62c889e895945.jpg", "f46d4a147782541.62c889e897859.jpg", "a850d6147782541.62c889e89465e.jpg", "30773b147782541.62c889e895dce.jpg", "e30d4f147782541.62c889e897d2e.jpg", "feeaa5147782541.62c889e896481.jpg", "522ec1147782541.62c889e896f25.jpg", "7ee9ba147782541.62c889e897431.jpg", "7d01ba147782541.62c889e894b8c.jpg", "336102147782541.62c889e89528a.jpg"]),
        es: { title: "Torregroza & Jara · Manual de marca", desc: "Sistema de marca para una firma de abogados: usos del logo, retícula, color, tipografía y aplicaciones." },
        en: { title: "Torregroza & Jara · Brand guidelines", desc: "Brand system for a law firm: logo usage, grid, color, typography and applications." } }
    ]
  },
  {
    id: "carousels", type: "feed",
    es: { name: "Carruseles", desc: "Carruseles que cuentan una historia en cada deslizada: ritmo, continuidad visual y un cierre que invita a actuar.", note: "desliza →" },
    en: { name: "Carousels", desc: "Carousels that tell a story with every swipe: rhythm, visual continuity and a closing slide that drives action.", note: "swipe →" },
    projects: [
      { id: "glimmer-carrusel", client: "glimmer.collection", year: "2026", behance: BE + "257386965", images: L("glimmer-carrusel", 4),
        es: { title: "Glimmer · Carrusel", desc: "Carrusel de lanzamiento para una colección de ropa deportiva: “your kind of glow”." },
        en: { title: "Glimmer · Carousel", desc: "Launch carousel for an activewear collection: “your kind of glow”." } },
      { id: "fidelina-carrusel", client: "fidelina", year: "2025", ratio: "r45", behance: BE + "225199239", images: L("fidelina-carrusel", 4),
        es: { title: "Fidelina · Día de la abuela", desc: "Carrusel emotivo con fotografía real de los clientes y mensajes escritos a mano." },
        en: { title: "Fidelina · Grandma's Day", desc: "An emotional carousel with real customer photos and handwritten messages." } },
      { id: "casa-carrusel", client: "lacasadellado", year: "2025", ratio: "r45", behance: BE + "225199805", images: L("casa-carrusel", 4),
        es: { title: "La Casa del Lado · La vibra", desc: "Carrusel de ambiente nocturno: luces, cocteles y platos con tipografía manuscrita." },
        en: { title: "La Casa del Lado · The vibe", desc: "Night-out carousel: lights, cocktails and dishes with handwritten type." } },
      { id: "xhl-carrusel", client: "xtremelab.hardware", year: "2022", behance: BE + "204389869", images: L("xhl-carrusel", 5),
        es: { title: "Xtreme Lab · 5 consejos", desc: "Carrusel educativo para cuidar la batería del celular, con ilustración y mucho color." },
        en: { title: "Xtreme Lab · 5 tips", desc: "Educational carousel on phone battery care, with illustration and bold color." } }
    ]
  },
  {
    id: "posts", type: "feed",
    es: { name: "Posts para redes", desc: "Parrillas de feed con una línea gráfica que hace reconocible a la marca en cada scroll.", note: "doble tap ♥" },
    en: { name: "Social posts", desc: "Feed grids with a visual system that makes the brand recognizable in every scroll.", note: "double tap ♥" },
    projects: [
      { id: "casa-posts", client: "lacasadellado", year: "2025", ratio: "r45", behance: BE + "225199805", images: L("casa-posts", 12),
        es: { title: "La Casa del Lado · Feed", desc: "Feed irreverente para un restaurante: frases con humor paisa, platos, cocteles y promociones." },
        en: { title: "La Casa del Lado · Feed", desc: "An irreverent restaurant feed: local humor, dishes, cocktails and promos." } },
      { id: "fidelina-posts", client: "fidelina", year: "2025", ratio: "r45", behance: BE + "225199239", images: L("fidelina-posts", 10),
        es: { title: "Fidelina · Feed", desc: "Publicaciones con estética de abuela: papel, flores, mariposas y frases que abrazan." },
        en: { title: "Fidelina · Feed", desc: "Posts with a grandma aesthetic: paper, flowers, butterflies and warm copy." } },
      { id: "xhl-posts", client: "xtremelab.hardware", year: "2022", behance: BE + "204389869", images: L("xhl-posts", 10),
        es: { title: "Xtreme Lab · Feed", desc: "Publicaciones para un laboratorio de tecnología: servicios, consejos y promociones." },
        en: { title: "Xtreme Lab · Feed", desc: "Posts for a tech repair lab: services, tips and promotions." } }
    ]
  },
  {
    id: "stories", type: "story",
    es: { name: "Historias", desc: "Historias de Instagram diseñadas para generar interacción: encuestas, ritmo, mensajes cortos y una estética coherente.", note: "toca para ver ✶" },
    en: { name: "Stories", desc: "Instagram stories designed to drive engagement: polls, rhythm, short copy and a consistent look.", note: "tap to view ✶" },
    projects: [
      { id: "vc", client: "vcmodels", year: "2022", behance: BE + "147780739",
        images: M("max_1200_webp", ["bab24a147780739.62c88155dd17e.jpg", "e1b779147780739.62c88155ddd58.jpg", "c7b7a1147780739.62c88155de29a.jpg", "941181147780739.62c88155dd88d.jpg", "6a883b147780739.62c8815656b48.jpg", "e76c23147780739.62c8815656247.jpg", "6e6191147780739.62c8815655247.jpg", "04a19b147780739.62c8815655b52.jpg", "6a5b51147780739.682194bcb16da.jpg", "db7f79147780739.682194bcb082a.jpg", "0e1ac6147780739.682194bcb0df8.jpg", "cbd99e147780739.682194bcb12c8.jpg"]),
        es: { title: "VC Models", desc: "Serie de historias con estética sensual y editorial: fotografía cálida, serif elegante y mensajes que invitan a responder." },
        en: { title: "VC Models", desc: "A sensual, editorial story series: warm photography, elegant serif type and copy that invites replies." } },
      { id: "casa-stories", client: "lacasadellado", year: "2025", behance: BE + "225199805", images: L("casa-stories", 8),
        es: { title: "La Casa del Lado", desc: "Historias con encuestas, el “manual del nieto rebelde”, menú especial y eventos." },
        en: { title: "La Casa del Lado", desc: "Stories with polls, the “rebel grandson's manual”, special menus and events." } },
      { id: "fidelina-stories", client: "fidelina", year: "2025", behance: BE + "225199239", images: L("fidelina-stories", 10),
        es: { title: "Fidelina", desc: "Historias con la “ley de la abuela”, encuestas, eventos y fechas especiales." },
        en: { title: "Fidelina", desc: "Stories with “grandma's rules”, polls, events and special dates." } },
      { id: "xhl-stories", client: "xtremelab.hardware", year: "2022", behance: BE + "204389869", images: L("xhl-stories", 10),
        es: { title: "Xtreme Lab", desc: "Historias de producto, servicios y promociones para un laboratorio de tecnología." },
        en: { title: "Xtreme Lab", desc: "Product, service and promo stories for a tech repair lab." } }
    ]
  },
  {
    id: "videos", type: "reel",
    es: { name: "Videos y reels", desc: "Edición, ritmo y motion graphics para reels y pautas que detienen el scroll.", note: "dale play ▶" },
    en: { name: "Videos & reels", desc: "Editing, pacing and motion graphics for reels and ads that stop the scroll.", note: "hit play ▶" },
    projects: [
      { id: "glimmer-reel", client: "glimmer.collection", year: "2026", behance: BE + "257386965",
        video: "assets/video/glimmer-reel.mp4", images: L("glimmer-carrusel", 1),
        es: { title: "Glimmer · Reel", desc: "Reel de lanzamiento con motion y tipografía animada." },
        en: { title: "Glimmer · Reel", desc: "Launch reel with motion and animated type." } },
      { id: "casa-reel", client: "lacasadellado", year: "2025", behance: BE + "225199805",
        video: "https://www-ccv.adobe.io/v1/player/ccv/THPeaGmEN46/embed?api_key=behance1&bgcolor=%23000000",
        images: L("casa-stories", 1),
        es: { title: "La Casa del Lado · Reel", desc: "Reel para redes del restaurante: edición, ritmo y motion." },
        en: { title: "La Casa del Lado · Reel", desc: "Restaurant reel: editing, pacing and motion." } },
      { id: "fidelina-reel", client: "fidelina", year: "2025", behance: BE + "225199239",
        video: "https://www-ccv.adobe.io/v1/player/ccv/2CerCpjgTme/embed?api_key=behance1&bgcolor=%23000000",
        images: L("fidelina-stories", 1),
        es: { title: "Fidelina · Reel", desc: "Video para redes con edición dinámica y gráficos animados." },
        en: { title: "Fidelina · Reel", desc: "Social video with dynamic editing and animated graphics." } }
    ]
  },
  {
    id: "web", type: "web",
    es: { name: "Web y email", desc: "Banners web y email marketing que convierten: jerarquía clara, producto protagonista y llamados a la acción.", note: "clic aquí ↓" },
    en: { name: "Web & email", desc: "Web banners and email marketing that convert: clear hierarchy, hero product and strong calls to action.", note: "click here ↓" },
    projects: [
      { id: "glimmer-web", frame: "browser", client: "glimmer.co", year: "2026", behance: BE + "257386965", images: L("glimmer-web", 1),
        es: { title: "Banner web", desc: "Banner principal para el sitio web de la colección Glimmer." },
        en: { title: "Web banner", desc: "Hero banner for the Glimmer collection website." } },
      { id: "glimmer-mail", frame: "mail", client: "Glimmer", year: "2026", behance: BE + "257386965", images: L("glimmer-mail", 1),
        es: { title: "Email marketing", desc: "Email de lanzamiento con producto, beneficios y llamado a la acción.", subject: "✨ Tu nuevo glow ya está aquí" },
        en: { title: "Email marketing", desc: "Launch email with product, benefits and a call to action.", subject: "✨ Your new glow is here" } }
    ]
  },
  {
    id: "print", type: "print",
    es: { name: "Impresos y editorial", desc: "Libros, cartillas, guest books y póster donde la retícula y la tipografía cuentan la historia.", note: "hecho con papel ✂" },
    en: { name: "Print & editorial", desc: "Books, workbooks, guest books and posters where grid and type tell the story.", note: "made with paper ✂" },
    projects: [
      { id: "arima", client: "Proyecto académico", year: "2023", behance: BE + "169155951", images: L("arima", 18),
        es: { title: "Libro tipográfico Arima Madurai", desc: "Libro-espécimen sobre la familia Arima Madurai: historia, anatomía, pesos y posibilidades expresivas, con piezas de aplicación." },
        en: { title: "Arima Madurai type book", desc: "A specimen book on the Arima Madurai typeface: history, anatomy, weights and expressive range, plus applied pieces." } },
      { id: "guestbook", client: "Le Sens Homes", year: "2026", behance: BE + "245997697", images: L("guestbook", 10),
        es: { title: "Le Sens Homes · Guest Book", desc: "Libro de bienvenida bilingüe para un alojamiento en Cartagena: normas, recomendaciones, mapa y reseñas." },
        en: { title: "Le Sens Homes · Guest Book", desc: "A bilingual welcome book for a Cartagena rental: house rules, local tips, map and reviews." } },
      { id: "cartillas", client: "I.E. Los Nogales", year: "2026", behance: BE + "245997079", images: L("cartillas", 14),
        es: { title: "Cartillas escolares", desc: "Diseño e ilustración de cartillas para grado transición: ciencias, matemáticas, inglés y escritura." },
        en: { title: "School workbooks", desc: "Design and illustration of kindergarten workbooks: science, math, English and writing." } },
      { id: "poster", client: "Proyecto académico", year: "2021", behance: BE + "130337501",
        images: M("1400_webp", ["87bc1a130337501.617dff30ea60e.jpg", "859696130337501.617dff30eacb2.jpg"]),
        es: { title: "Póster tipográfico", desc: "Composición tipográfica experimental con color y ritmo." },
        en: { title: "Typographic poster", desc: "Experimental typographic composition with color and rhythm." } }
    ]
  },
  {
    id: "photo", type: "photo",
    es: { name: "Fotografía", desc: "Fotografía y retoque de producto: luz, composición y detalle para vender mejor.", note: "click ✶ flash" },
    en: { name: "Photography", desc: "Product photography and retouching: light, composition and detail that sell.", note: "click ✶ flash" },
    projects: [
      { id: "producto", client: "Fotografía de producto", year: "2022", behance: BE + "147781387",
        images: M("max_1200_webp", ["7a06d2147781387.62c8844f54aab.jpg", "88b421147781387.62c8844f55c09.jpg", "2e5179147781387.62c8844f55437.jpg", "e21476147781387.62c8844fb20e3.jpg", "40a54f147781387.62c8844fb1938.jpg", "a617ff147781387.62c8844fb28e1.jpg", "87b246147781387.62c884506a217.jpg", "17db57147781387.62c8845069518.jpg", "114288147781387.62c88450b4c1a.jpg", "b3487a147781387.62c88450b5361.jpg"]),
        es: { title: "Fotografía de producto", desc: "Sesión de producto con dirección de arte, iluminación y retoque." },
        en: { title: "Product photography", desc: "Product shoot with art direction, lighting and retouching." } }
    ]
  }
];

/* ---------- SERVICIOS, PROCESO, PERFIL ---------- */
const SERVICES = [
  { star: true,
    es: { t: "Identidad visual & branding", d: "Marcas con personalidad, coherentes en cada punto de contacto. Del concepto al manual de marca listo para usar.", tags: ["Logotipo", "Paleta & tipografía", "Manual de marca", "Papelería", "Empaques"] },
    en: { t: "Visual identity & branding", d: "Brands with personality, consistent at every touchpoint. From concept to a ready-to-use brand book.", tags: ["Logo", "Color & type", "Brand guidelines", "Stationery", "Packaging"] } },
  { star: true,
    es: { t: "Contenido para redes sociales", d: "Posts, carruseles e historias con una línea gráfica clara para que tu marca se reconozca a primera vista.", tags: ["Parrilla mensual", "Carruseles", "Historias", "Plantillas"] },
    en: { t: "Social media content", d: "Posts, carousels and stories with a clear visual system so your brand is recognized at first glance.", tags: ["Monthly grid", "Carousels", "Stories", "Templates"] } },
  { es: { t: "Postproducción audiovisual & motion", d: "Videos que detienen el scroll: edición, ritmo, color y motion graphics para reels, anuncios y contenido de marca.", tags: ["Edición de video", "Motion graphics", "Reels & TikTok", "Corrección de color", "Animación de logo"] },
    en: { t: "Video post-production & motion", d: "Videos that stop the scroll: editing, pacing, color and motion graphics for reels, ads and brand content.", tags: ["Video editing", "Motion graphics", "Reels & TikTok", "Color grading", "Logo animation"] } },
  { es: { t: "Web, email & impresos", d: "Banners, email marketing, piezas editoriales e impresas, ilustración digital y retoque fotográfico.", tags: ["Banners web", "Email marketing", "Editorial", "Ilustración", "Retoque"] },
    en: { t: "Web, email & print", d: "Banners, email marketing, editorial and print pieces, digital illustration and photo retouching.", tags: ["Web banners", "Email marketing", "Editorial", "Illustration", "Retouching"] } }
];
/* ---------- PAQUETES Y TARIFAS (ventana #paquetes, 3 pestañas) ----------
   COP con IVA incluido. USD = COP / 3.000 + ~15–20 %, redondeado (incluye todas las cifras).
   Fuente: los PDFs de Desktop\Claude\paquetes-branding (copias en assets/docs). */
const COND_PAY = {
  es: ["Precios en pesos colombianos con IVA incluido. No incluyen retención en la fuente ni otras retenciones de ley, que se aplican por separado cuando corresponda.",
    "Clientes en el exterior pagan en dólares (USD). Las comisiones de envío y conversión de plataformas como PayPal, Wise, Western Union o transferencias bancarias internacionales las asume el cliente, de modo que el valor recibido sea el total cotizado."],
  en: ["Prices in Colombian pesos include VAT (IVA). Withholding taxes (retención en la fuente) are not included and are applied separately when required by law.",
    "International clients pay in US dollars (USD). Transfer and conversion fees from platforms such as PayPal, Wise, Western Union or international bank transfers are covered by the client, so the amount received matches the quoted total."]
};
const COND_HOURS = {
  es: ["Trabajo en días hábiles, de lunes a viernes. Los tiempos de entrega se cuentan en días hábiles.",
    "Si necesitas algo fuera de este horario, en fin de semana o festivo, coordinémoslo con anticipación para confirmar disponibilidad y acordar las condiciones."],
  en: ["I work on business days, Monday to Friday. Delivery times are counted in business days.",
    "If you need something outside these hours, on a weekend or a holiday, let's arrange it in advance to confirm availability and agree on the terms."]
};
const PRICING = {
  branding: {
    pdf: "assets/docs/Tarifas-branding-Maria-Camila-Munoz.pdf",
    es: { tab: "Branding", title: "Paquetes de branding", note: "elige el tuyo ✶",
      lead: "Tres niveles para cada etapa de tu negocio. Todos incluyen rondas de revisión, archivos finales listos para usar y acompañamiento en cada paso. Precios con IVA incluido.",
      extras: "Extras para cualquier paquete" },
    en: { tab: "Branding", title: "Branding packages", note: "pick yours ✶",
      lead: "Three levels for every stage of your business. All include revision rounds, ready-to-use final files and support at every step.",
      extras: "Add-ons for any package" },
    plans: [
      { cop: "950.000", usd: "370",
        es: { name: "Esencial", tag: "Arranca tu marca", for: "Para emprendimientos que necesitan una imagen profesional rápido.", chips: ["⏱ 7–10 días hábiles", "↻ 2 rondas de revisión"], base: "",
          items: ["Brief y llamada inicial", "2 propuestas de logo", "Logo principal + versión en una tinta", "Paleta de color (HEX, RGB, CMYK)", "2 tipografías recomendadas", "Tarjeta de presentación (frente y reverso)", "Mini guía de uso del logo", "Archivos PNG, JPG, PDF y SVG"] },
        en: { name: "Essential", tag: "Launch your brand", for: "For new businesses that need a professional look, fast.", chips: ["⏱ 7–10 business days", "↻ 2 revision rounds"], base: "",
          items: ["Brief and kickoff call", "2 logo concepts", "Main logo + one-color version", "Color palette (HEX, RGB, CMYK)", "2 recommended typefaces", "Business card (front and back)", "Mini logo usage guide", "PNG, JPG, PDF and SVG files"] } },
      { cop: "1.900.000", usd: "740",
        es: { name: "Profesional", tag: "Marca con presencia", for: "Para negocios que ya venden y necesitan verse consistentes en todos sus canales.", chips: ["⏱ 2–3 semanas", "↻ 3 rondas de revisión"], base: "Todo lo del Esencial, más:",
          items: ["Moodboard de dirección visual", "3 propuestas de logo (en lugar de 2)", "Sistema de logo: horizontal, vertical e isotipo", "Patrón y elementos gráficos de apoyo", "Papelería: tarjeta, hoja membrete y firma de correo", "Kit de redes: 3 plantillas + íconos de destacadas", "Guía de marca básica", "Archivos editables (AI) y carpeta organizada"] },
        en: { name: "Professional", tag: "A brand with presence", for: "For businesses already selling that need to look consistent everywhere.", chips: ["⏱ 2–3 weeks", "↻ 3 revision rounds"], base: "Everything in Essential, plus:",
          items: ["Visual direction moodboard", "3 logo concepts (instead of 2)", "Logo system: horizontal, vertical and symbol", "Pattern and supporting graphic elements", "Stationery: business card, letterhead and email signature", "Social kit: 3 templates + highlight icons", "Basic brand guide", "Editable source files (AI), neatly organized"] } },
      { cop: "3.350.000", usd: "1,300", featured: true,
        es: { name: "Integral", tag: "Marca completa", for: "Para marcas que quieren una identidad sólida, con estrategia y un manual que cualquiera pueda seguir.", chips: ["⏱ 4–5 semanas", "↻ 4 rondas de revisión"], base: "Todo lo del Profesional, más:", badge: "★ el más completo",
          items: ["Estrategia: benchmarking de 3–5 competidores, público, personalidad, propuesta de valor y tono", "Sistema de logo completo + favicon", "Set de 6 íconos de marca", "Papelería completa: sobre, carpeta y plantilla de cotización", "Kit de redes ampliado: 6 plantillas y portadas", "3 mockups de aplicación", "Animación del logo (5 s)", "Manual de marca completo", "30 días de acompañamiento"] },
        en: { name: "Complete", tag: "The full brand", for: "For brands that want a solid identity, with strategy and guidelines anyone can follow.", chips: ["⏱ 4–5 weeks", "↻ 4 revision rounds"], base: "Everything in Professional, plus:", badge: "★ the full package",
          items: ["Strategy: benchmark of 3–5 competitors, audience, personality, value proposition and tone", "Full logo system + favicon", "Set of 6 brand icons", "Full stationery: envelope, folder and quote template", "Extended social kit: 6 templates and covers", "3 application mockups", "Logo animation (5 s)", "Complete brand guidelines", "30 days of post-launch support"] } }
    ],
    extras: [
      ["Ronda de revisión adicional", "Extra revision round", "$120.000", "$45"],
      ["Propuesta de logo adicional", "Extra logo concept", "$250.000", "$100"],
      ["Animación de logo (Esencial o Profesional)", "Logo animation (Essential or Professional)", "$400.000", "$155"],
      ["Plantilla de redes adicional", "Extra social template", "$60.000", "$25"],
      ["Pieza de papelería adicional", "Extra stationery piece", "$90.000", "$35"],
      ["Diseño de etiqueta o empaque", "Label or packaging design", "desde $400.000", "from $155"],
      ["Pasar de la guía básica al manual completo", "Upgrade basic guide to full guidelines", "$1.100.000", "$430"],
      ["Entrega urgente (mitad del tiempo, sujeta a disponibilidad)", "Rush delivery (half the time, subject to availability)", "+30%", "+30%"]
    ],
    cond: {
      es: [["Pagos y facturación", ["50% para iniciar y 50% al aprobar el diseño final, antes de entregar los archivos editables.", ...COND_PAY.es]],
        ["Tiempos y horario", [...COND_HOURS.es, "Los tiempos empiezan con el anticipo y el brief completo. Si las respuestas o aprobaciones se demoran, la entrega se corre los mismos días."]],
        ["Revisiones", ["Una ronda de revisión es un grupo de ajustes, enviados juntos, sobre la propuesta elegida.", "Cambiar de concepto después de aprobado cuenta como una propuesta nueva.", "Las rondas no usadas no se acumulan ni se trasladan a otros servicios."]],
        ["Derechos y alcance", ["Al pagar el 100%, recibes los derechos de uso de tu marca. El proyecto puede mostrarse en mi portafolio, salvo acuerdo de confidencialidad.", "No incluye impresión, fuentes o imágenes con licencia paga, fotografía profesional ni publicación de contenido.", "Cada propuesta tiene una vigencia de 30 días desde su envío."]]],
      en: [["Payments & invoicing", ["50% to start and 50% on final design approval, before editable files are delivered.", ...COND_PAY.en]],
        ["Timelines & hours", [...COND_HOURS.en, "Timelines start with the deposit and a complete brief. If feedback or approvals are delayed, delivery moves by the same number of days."]],
        ["Revisions", ["A revision round is one set of tweaks, sent together, on the chosen concept.", "Changing concept after approval counts as a new concept.", "Unused rounds don't carry over or transfer to other services."]],
        ["Rights & scope", ["On full payment you receive the usage rights to your brand. The project may be shown in my portfolio unless a confidentiality agreement is in place.", "Not included: printing, paid font or image licenses, professional photography or content publishing.", "Each proposal is valid for 30 days from the date it is sent."]]]
    },
    custom: {
      es: { kick: "¿ninguno encaja del todo?", h: "Construyamos una propuesta a la medida de tu marca", p: "Cada negocio está en un momento distinto. Si ninguno de los tres paquetes responde a lo que buscas, cuéntame tus objetivos, el alcance que necesitas y tu presupuesto. Con gusto evaluamos la combinación de entregables, tiempos y condiciones que mejor se ajuste a tu proyecto, y te presento una propuesta personalizada.", wa: "¡Hola María Camila! Quiero una propuesta de branding a la medida." },
      en: { kick: "none quite fits?", h: "Let's build a proposal tailored to your brand", p: "Every business is at a different stage. If none of the three packages matches what you're looking for, tell me your goals, the scope you need and your budget. I'll gladly review the mix of deliverables, timelines and terms that best fits your project and send you a personalized proposal.", wa: "Hi María Camila! I'd like a tailored branding proposal." }
    }
  },

  redes: {
    pdf: "assets/docs/Tarifas-redes-sociales-Maria-Camila-Munoz.pdf", monthly: true,
    es: { tab: "Redes sociales", title: "Manejo de redes sociales", note: "precios mensuales ✶",
      lead: "Contenido constante, con línea gráfica clara y medición de resultados. Precios mensuales con IVA incluido; cada plan detalla exactamente lo que recibes en el mes.",
      extras: "Extras para cualquier plan",
      tip: "¿Ya hiciste tu marca conmigo? Tienes 10% de descuento en el primer mes de cualquier plan de redes." },
    en: { tab: "Social media", title: "Social media management", note: "monthly plans ✶",
      lead: "Consistent content, a clear visual line and measurable results. Monthly prices; each plan lists exactly what you get every month.",
      extras: "Add-ons for any plan",
      tip: "Already built your brand with me? Get 10% off the first month of any social media plan." },
    plans: [
      { cop: "900.000", usd: "350",
        es: { name: "Presencia", tag: "Estar y verse bien", for: "Para negocios que necesitan estar presentes en redes y verse profesionales.", chips: ["📱 1 red (Instagram)", "↻ 1 ronda por parrilla"], base: "Cada mes recibes:",
          items: ["8 posts (posts y carruseles)", "8 historias", "Parrilla mensual con copys", "Programación de publicaciones", "Línea gráfica coherente con tu marca", "Archivos de cada pieza para tu archivo"] },
        en: { name: "Presence", tag: "Be there, look good", for: "For businesses that need to be on social media and look professional.", chips: ["📱 1 network (Instagram)", "↻ 1 round per grid"], base: "Every month you get:",
          items: ["8 posts (single and carousels)", "8 stories", "Monthly content grid with copy", "Post scheduling", "A visual line consistent with your brand", "Files of every piece for your records"] } },
      { cop: "1.800.000", usd: "700", featured: true,
        es: { name: "Crecimiento", tag: "Conectar y crecer", for: "Para marcas que quieren crecer, conectar con su comunidad y medir lo que funciona.", chips: ["📱 1 red", "↻ 2 rondas por parrilla"], base: "Cada mes recibes:", badge: "★ el más elegido",
          items: ["12 posts (incluye 4 carruseles)", "12 historias", "2 reels editados con tu material", "Parrilla mensual con copys y hashtags", "Programación de publicaciones", "Respuesta a comentarios y mensajes en días hábiles", "Reporte mensual con métricas", "Archivos de cada pieza para tu archivo"] },
        en: { name: "Growth", tag: "Connect and grow", for: "For brands that want to grow, connect with their community and measure what works.", chips: ["📱 1 network", "↻ 2 rounds per grid"], base: "Every month you get:", badge: "★ most popular",
          items: ["12 posts (including 4 carousels)", "12 stories", "2 reels edited from your footage", "Monthly content grid with copy and hashtags", "Post scheduling", "Replies to comments and messages on business days", "Monthly metrics report", "Files of every piece for your records"] } },
      { cop: "3.200.000", usd: "1,250",
        es: { name: "Marca activa", tag: "Destacar con estrategia", for: "Para marcas que quieren resultados medibles y contenido que se diferencie de la competencia.", chips: ["📱 Hasta 3 redes", "↻ 2 rondas + ajustes"], base: "Cada mes recibes:",
          items: ["16 posts (incluye 6 carruseles)", "20 historias", "4 reels con edición y motion graphics", "Estrategia y calendario de contenido mensual", "Parrilla mensual con copys y hashtags", "Programación de publicaciones", "Gestión completa de comunidad en días hábiles", "Reporte con KPIs y reunión mensual de resultados", "Benchmarking de la competencia cada 3 meses"] },
        en: { name: "Active brand", tag: "Stand out with strategy", for: "For brands that want measurable results and content that stands apart from the competition.", chips: ["📱 Up to 3 networks", "↻ 2 rounds + tweaks"], base: "Every month you get:",
          items: ["16 posts (including 6 carousels)", "20 stories", "4 reels with editing and motion graphics", "Monthly content strategy and calendar", "Monthly content grid with copy and hashtags", "Post scheduling", "Full community management on business days", "KPI report and monthly results meeting", "Competitor benchmarking every 3 months"] } }
    ],
    extras: [
      ["Post adicional", "Extra post", "$60.000", "$25"],
      ["Historia adicional", "Extra story", "$25.000", "$10"],
      ["Reel adicional (edición + motion, con tu material)", "Extra reel (editing + motion, from your footage)", "$150.000", "$60"],
      ["Red social adicional (adaptación de la parrilla)", "Extra social network (grid adaptation)", "$350.000 / mes", "$135 / month"],
      ["Manejo de pauta en Meta Ads (no incluye el presupuesto)", "Meta Ads management (ad budget not included)", "$400.000 / mes", "$155 / month"],
      ["Sesión de fotos de producto (media jornada)", "Product photo shoot (half day)", "$450.000", "$175"],
      ["Kit de 6 plantillas editables en Canva", "Kit of 6 editable Canva templates", "$250.000", "$100"],
      ["Pago trimestral por adelantado", "Quarterly payment in advance", "−10%", "−10%"]
    ],
    cond: {
      es: [["Pagos y facturación", ["Cada mes se paga por adelantado, antes de iniciar la producción.", ...COND_PAY.es]],
        ["Horario y respuesta", ["Trabajo en días hábiles, de lunes a viernes. La gestión de comunidad y la respuesta a mensajes se hacen en ese horario.", "Si necesitas cubrimiento fuera de este horario, en fin de semana, festivo o durante un evento, coordinémoslo con anticipación para confirmar disponibilidad y acordar las condiciones."]],
        ["Contenido y aprobaciones", ["La parrilla del mes siguiente se entrega y se aprueba en los primeros 5 días hábiles del mes en curso.", "Las fotos y los videos los entrega el cliente, salvo que contrate la sesión de fotos.", "Las piezas fuera de la parrilla aprobada se cobran como extra.", "Las rondas de revisión no usadas no se acumulan para el mes siguiente."]],
        ["Contrato y alcance", ["Contrato mínimo recomendado de 3 meses: en redes los resultados se ven con constancia.", "Para terminar el servicio, avísame con 15 días de anticipación al siguiente corte.", "El presupuesto de pauta lo paga el cliente directamente a la plataforma.", "Cada propuesta tiene una vigencia de 30 días desde su envío."]]],
      en: [["Payments & invoicing", ["Each month is paid in advance, before production starts.", ...COND_PAY.en]],
        ["Hours & response", ["I work on business days, Monday to Friday. Community management and message replies happen during those hours.", "If you need coverage outside these hours, on a weekend, a holiday or during an event, let's arrange it in advance to confirm availability and agree on the terms."]],
        ["Content & approvals", ["Next month's grid is delivered and approved within the first 5 business days of the current month.", "Photos and videos are provided by the client, unless the photo shoot is booked.", "Pieces outside the approved grid are billed as add-ons.", "Unused revision rounds don't carry over to the next month."]],
        ["Contract & scope", ["Recommended minimum of 3 months: on social media, results come with consistency.", "To end the service, let me know 15 days before the next billing date.", "The ad budget is paid by the client directly to the platform.", "Each proposal is valid for 30 days from the date it is sent."]]]
    },
    custom: {
      es: { kick: "¿ningún plan se ajusta a tu marca?", h: "Diseñemos un plan a la medida", p: "Cada marca tiene un ritmo, un público y un presupuesto distintos. Si ninguna de las tres opciones responde a lo que buscas, cuéntame tus objetivos, los canales en los que quieres estar y el alcance que necesitas. Con gusto evaluamos la frecuencia, los formatos y las condiciones que mejor se ajusten a tu negocio, y te presento una propuesta personalizada.", wa: "¡Hola María Camila! Quiero un plan de redes sociales a la medida." },
      en: { kick: "no plan fits your brand?", h: "Let's design a tailored plan", p: "Every brand has a different pace, audience and budget. If none of the three options matches what you're looking for, tell me your goals, the channels you want to be on and the scope you need. I'll gladly review the frequency, formats and terms that best fit your business and send you a personalized proposal.", wa: "Hi María Camila! I'd like a tailored social media plan." }
    }
  },

  piezas: {
    pdf: "assets/docs/Tarifas-piezas-graficas-Maria-Camila-Munoz.pdf",
    es: { tab: "Piezas gráficas", title: "Piezas gráficas e impresos", note: "por pieza ✶",
      lead: "Precios por pieza con IVA incluido. Cada pieza incluye 2 rondas de revisión y archivos finales listos para imprimir (con sangrado) y para usar en digital.",
      tip: "¿Varias piezas en un mismo pedido? Desde 5 piezas tienes 10% de descuento sobre el total, y todas se diseñan con un mismo concepto gráfico." },
    en: { tab: "Graphic & print", title: "Graphic & print pieces", note: "priced per piece ✶",
      lead: "Prices per piece. Each one includes 2 revision rounds and final files ready for print (with bleed) and for digital use.",
      tip: "Several pieces in one order? From 5 pieces you get 10% off the total, all designed under one graphic concept." },
    cats: [
      { es: "Papelería corporativa", en: "Corporate stationery", rows: [
        ["Tarjeta de presentación (frente y reverso)", "Business card (front and back)", "$90.000", "$35"],
        ["Hoja membrete", "Letterhead", "$80.000", "$30"],
        ["Sobre corporativo", "Envelope", "$100.000", "$40"],
        ["Carpeta corporativa", "Presentation folder", "$280.000", "$110"],
        ["Firma de correo", "Email signature", "$70.000", "$30"],
        ["Plantilla de cotización o factura", "Quote or invoice template", "$100.000", "$40"]] },
      { es: "Publicidad impresa", en: "Print advertising", rows: [
        ["Flyer o volante · una cara", "Flyer · one side", "$120.000", "$45"],
        ["Flyer o volante · dos caras", "Flyer · two sides", "$170.000", "$65"],
        ["Invitación", "Invitation", "$120.000", "$45"],
        ["Afiche o póster", "Poster", "$150.000", "$60"],
        ["Pendón o roll-up", "Banner or roll-up", "$180.000", "$70"],
        ["Valla, aviso o gran formato", "Billboard, sign or large format", "desde $250.000", "from $100"],
        ["Brochure díptico", "Bi-fold brochure", "$220.000", "$85"],
        ["Brochure tríptico", "Tri-fold brochure", "$280.000", "$110"],
        ["Menú de 1 página", "One-page menu", "$150.000", "$60"],
        ["Menú tipo carta (hasta 4 páginas)", "Menu booklet (up to 4 pages)", "$350.000", "$135"]] },
      { es: "Editorial y presentaciones", en: "Editorial & presentations", rows: [
        ["Press kit (hasta 8 páginas)", "Press kit (up to 8 pages)", "$600.000", "$235"],
        ["Presentación corporativa (hasta 12 diapositivas)", "Company presentation (up to 12 slides)", "$450.000", "$175"],
        ["Catálogo, revista o cartilla (por página, mín. 8)", "Catalog, magazine or booklet (per page, min. 8)", "$70.000", "$30"],
        ["Portada de catálogo, libro o informe", "Catalog, book or report cover", "$200.000", "$80"],
        ["Infografía", "Infographic", "$250.000", "$100"],
        ["Aviso para revista o prensa (página)", "Magazine or newspaper ad (full page)", "$250.000", "$100"]] },
      { es: "Empaque y producto", en: "Packaging & product", rows: [
        ["Etiqueta de producto (por referencia)", "Product label (per SKU)", "$400.000", "$155"],
        ["Adaptación de etiqueta a otra referencia", "Label adaptation to another SKU", "$120.000", "$45"],
        ["Empaque o caja", "Packaging or box", "desde $700.000", "from $275"],
        ["Sticker o sello de marca", "Brand sticker or seal", "$90.000", "$35"],
        ["Tag o colgante para producto", "Product hang tag", "$90.000", "$35"]] },
      { es: "Piezas digitales", en: "Digital pieces", rows: [
        ["Banner web", "Web banner", "$120.000", "$45"],
        ["Post para redes", "Social media post", "$60.000", "$25"],
        ["Mailing o pieza de email marketing", "Email marketing piece", "$200.000", "$80"],
        ["Adaptación de una pieza a otro formato", "Resizing a piece to another format", "$50.000", "$20"]] }
    ],
    cond: {
      es: [["Pagos y facturación", ["Pedidos menores a $600.000: 100% por adelantado. Desde $600.000: 50% para iniciar y 50% al aprobar, antes de entregar los archivos finales.", ...COND_PAY.es]],
        ["Tiempos y horario", [...COND_HOURS.es, "Los tiempos empiezan con el pago y el material completo (textos, fotos y logos). Piezas sencillas: 2–3 días hábiles; medianas: 4–7 días hábiles; extensas: 2–3 semanas."]],
        ["Revisiones y material", ["Cada pieza incluye 2 rondas de revisión. Una ronda es un grupo de ajustes enviados juntos.", "Cambiar de concepto después de aprobado cuenta como una pieza nueva.", "Los textos y las fotos los entrega el cliente; la redacción de textos se cotiza aparte.", "Las rondas no usadas no se acumulan."]],
        ["Entrega y alcance", ["No incluye impresión. Puedo recomendarte imprentas y revisar la prueba de color.", "Las fuentes o imágenes con licencia paga se cotizan aparte.", "Al pagar el 100%, recibes los derechos de uso de las piezas. Pueden mostrarse en mi portafolio, salvo acuerdo de confidencialidad.", "Cada propuesta tiene una vigencia de 30 días desde su envío."]]],
      en: [["Payments & invoicing", ["Orders under COP 600.000: 100% upfront. From COP 600.000: 50% to start and 50% on approval, before final files are delivered.", ...COND_PAY.en]],
        ["Timelines & hours", [...COND_HOURS.en, "Timelines start with payment and complete materials (copy, photos and logos). Simple pieces: 2–3 business days; medium: 4–7 business days; long-form: 2–3 weeks."]],
        ["Revisions & materials", ["Each piece includes 2 revision rounds. A round is one set of tweaks sent together.", "Changing concept after approval counts as a new piece.", "Copy and photos are provided by the client; copywriting is quoted separately.", "Unused rounds don't carry over."]],
        ["Delivery & scope", ["Printing is not included. I can recommend print shops and check the color proof.", "Paid font or image licenses are quoted separately.", "On full payment you receive the usage rights to the pieces. They may be shown in my portfolio unless a confidentiality agreement is in place.", "Each proposal is valid for 30 days from the date it is sent."]]]
    },
    custom: {
      es: { kick: "¿no encuentras tu pieza en la lista?", h: "Cotizamos tu proyecto a la medida", p: "Esta lista reúne las piezas más solicitadas, pero cada proyecto tiene sus propias necesidades. Si requieres un formato, un volumen o un tipo de pieza diferente, escríbeme con los detalles: uso, medidas, cantidad y fecha de entrega. Con gusto lo analizamos juntos y te presento una propuesta personalizada, con alcance, tiempos y valor ajustados a tu proyecto.", wa: "¡Hola María Camila! Quiero cotizar piezas gráficas." },
      en: { kick: "can't find your piece on the list?", h: "Let's quote your project to measure", p: "This list covers the most requested pieces, but every project has its own needs. If you need a different format, volume or type of piece, send me the details: use, size, quantity and deadline. I'll gladly review it with you and send a personalized proposal with scope, timeline and price tailored to your project.", wa: "Hi María Camila! I'd like a quote for graphic pieces." }
    }
  }
};
const PRICING_ORDER = ["branding", "redes", "piezas"];
let pkgKind = "branding";
const WA_NUM = "573105675081";
const waLink = msg => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;
// En español el precio principal es COP; en inglés, USD.
function priceAlt(cop, usd) {
  return lang === "es" ? "USD " + usd.replace("from ", "desde ").replace("/ month", "/ mes")
                       : "COP " + cop.replace("desde ", "from ").replace("/ mes", "/ month");
}
function renderPricing() {
  const es = lang === "es", P = PRICING[pkgKind], d = P[lang];
  const sheet = $("#pkgSheet");
  sheet.dataset.kind = pkgKind;
  $("#pkgTabs").innerHTML = PRICING_ORDER.map(k =>
    `<button type="button" role="tab" class="pkg-tab" data-kind="${k}" aria-selected="${k === pkgKind}">${esc(PRICING[k][lang].tab)}</button>`).join("");
  $("#pkgTitle").innerHTML = `${esc(d.title)} <span class="hand pkg-note">${esc(d.note)}</span>`;
  $("#pkgLead").textContent = d.lead;
  const dl = $("#pkgPdf"); dl.href = P.pdf; dl.querySelector("span").textContent = t("pkg.pdf");

  let body = "";
  if (P.plans) {
    body = `<div class="pkg-grid">` + P.plans.map((p, i) => {
      const x = p[lang];
      const main = "$" + (es ? p.cop : p.usd);
      const alt = (es ? "USD $" + p.usd : "COP $" + p.cop) + (P.monthly ? " · " + t("pkg.month") : "");
      return `
      <article class="pkg reveal in${p.featured ? " featured" : ""}">
        ${p.featured ? `<span class="sticker s-lime pkg-badge">${esc(x.badge)}</span>` : ""}
        <p class="pkg-level">0${i + 1}</p>
        <h4 class="pkg-name">${esc(x.name)}</h4>
        <p class="pkg-tag hand">${esc(x.tag)}</p>
        <p class="pkg-for">${esc(x.for)}</p>
        <div class="pkg-price"><b>${main}</b><span>${es ? "COP" : "USD"}</span></div>
        <p class="pkg-alt">${esc(alt)}</p>
        <ul class="pkg-meta">${x.chips.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
        ${x.base ? `<p class="pkg-base">${esc(x.base)}</p>` : ""}
        <ul class="pkg-items">${x.items.map(it => `<li>${esc(it)}</li>`).join("")}</ul>
        <a class="btn ${p.featured ? "btn-primary" : "btn-ghost"} magnetic pkg-cta" href="${waLink(`${t("pkg.wa")} ${x.name} (${d.tab}).`)}" target="_blank" rel="noopener">${t("pkg.cta")} ↗</a>
      </article>`;
    }).join("") + `</div>`;
  } else {
    body = `<div class="pkg-cats">` + P.cats.map((c, i) => `
      <section class="pkg-cat reveal in">
        <h4><b>${"ABCDE"[i]}</b>${esc(c[lang])}</h4>
        <table class="pkg-extras">${c.rows.map(([n1, n2, cop, usd]) =>
          `<tr><td>${esc(es ? n1 : n2)}</td><td>${esc(es ? cop : usd)}</td><td>${esc(priceAlt(cop, usd))}</td></tr>`).join("")}</table>
      </section>`).join("") + `</div>`;
  }
  if (d.tip) body += `<p class="pkg-tip"><span aria-hidden="true">✶</span> ${esc(d.tip)}</p>`;
  const cu = P.custom[lang];
  body += `
    <div class="pkg-custom reveal in">
      <div><p class="hand">${esc(cu.kick)}</p><h4>${esc(cu.h)}</h4><p>${esc(cu.p)}</p></div>
      <a class="btn btn-primary magnetic" href="${waLink(cu.wa)}" target="_blank" rel="noopener">${t("pkg.talk")} ✶</a>
    </div>
    <div class="pkg-more">
      ${P.extras ? `<details class="pkg-details"><summary>${esc(d.extras)}</summary><table class="pkg-extras">${P.extras.map(([e1, e2, cop, usd]) =>
        `<tr><td>${esc(es ? e1 : e2)}</td><td>${esc(es ? cop : usd)}</td><td>${esc(priceAlt(cop, usd))}</td></tr>`).join("")}</table></details>` : ""}
      <details class="pkg-details"${P.extras ? "" : " open"}><summary>${t("pkg.condTitle")}</summary>
        <div class="pkg-cond">${P.cond[lang].map(([h, list]) => `<div><h5>${esc(h)}</h5><ul>${list.map(c => `<li>${esc(c)}</li>`).join("")}</ul></div>`).join("")}</div>
      </details>
    </div>`;
  $("#pkgBody").innerHTML = body;
}

const PROCESS = {
  es: [["Descubrir", "Una llamada para entender tu marca, tu público y tus objetivos."], ["Proponer", "Te envío propuesta, tiempos y cotización clara. Sin sorpresas."], ["Crear", "Concepto, diseño y rondas de ajustes contigo en cada etapa."], ["Entregar", "Archivos finales organizados y listos para usar en todo formato."]],
  en: [["Discover", "A call to understand your brand, your audience and your goals."], ["Propose", "You get a proposal, timeline and clear quote. No surprises."], ["Create", "Concept, design and feedback rounds with you at every step."], ["Deliver", "Organized final files, ready to use in every format."]]
};
// Habilidades agrupadas: [título del grupo, [habilidades]]
const SKILLS = {
  es: [
    ["Estrategia y datos", ["Investigación de mercados y análisis del consumidor", "Benchmarking y auditoría visual de la competencia", "Análisis de métricas y KPIs creativos", "Optimización de contenido basada en datos", "Gestión de proyectos y flujos en Notion"]],
    ["Creatividad y diseño", ["Dirección de arte", "Identidad visual & branding", "Diseño gráfico", "Postproducción audiovisual", "Motion graphics", "Ilustración digital y retoque"]]
  ],
  en: [
    ["Strategy & data", ["Market research & consumer insights", "Benchmarking & competitive visual audits", "Performance metrics & creative KPIs", "Data-driven content optimization", "Project management & Notion workflows"]],
    ["Creative & design", ["Art direction", "Visual identity & branding", "Graphic design", "Video post-production", "Motion graphics", "Digital illustration & retouching"]]
  ]
};
// Herramientas: el grupo de diseño muestra barras de nivel (según tu CV); el resto, etiquetas.
const SOFTWARE_BARS = [["Illustrator", 90], ["Photoshop", 90], ["Premiere Pro", 75], ["After Effects", 70], ["Blender 3D", 60], ["Figma", 50]];
const TOOLS = {
  es: [["Diseño y multimedia", null, ["Figma"]], ["Gestión y organización", ["Notion", "Trello", "Asana"]], ["Analítica y reportes", ["Meta Business Suite", "Google Analytics", "Looker Studio"]], ["IA aplicada · conceptos y moodboards", ["Midjourney", "Adobe Firefly"]]],
  en: [["Design & multimedia", null, ["Figma"]], ["Management & organization", ["Notion", "Trello", "Asana"]], ["Analytics & reporting", ["Meta Business Suite", "Google Analytics", "Looker Studio"]], ["Applied AI · concepts & moodboards", ["Midjourney", "Adobe Firefly"]]]
};
const TIMELINE = {
  es: [
    { when: "2021 — Hoy", t: "Diseñadora gráfica", w: "Independiente", d: "Identidad visual y branding para clientes independientes, del concepto a la entrega final. Ilustración digital y piezas gráficas con coherencia de marca." },
    { when: "2019 — Hoy", t: "Productora y editora audiovisual", w: "Independiente", d: "Producción y edición de video integrando diseño visual y narrativa." },
    { when: "2021 — 2024", t: "Social Media", w: "Netmind · Agencia de marketing", d: "Diseño y producción de contenido visual para redes sociales de múltiples clientes." },
    { when: "2023 — 2025", t: "Asistente personal", w: "One Step SAS", d: "Gestión administrativa y organización de procesos con disciplina y precisión." },
    { when: "2017 — 2022", t: "Comunicación Gráfica Publicitaria", w: "Universidad de Medellín", d: "", edu: true },
    { when: "2014", t: "Bachiller técnico en comunicación, radio y TV", w: "Colegio Marillac", d: "", edu: true }
  ],
  en: [
    { when: "2021 — Now", t: "Graphic Designer", w: "Freelance", d: "Visual identity and branding for independent clients, from concept to final delivery. Digital illustration and on-brand graphic assets." },
    { when: "2019 — Now", t: "Video Producer & Editor", w: "Freelance", d: "Video production and editing that blends visual design and storytelling." },
    { when: "2021 — 2024", t: "Social Media Designer", w: "Netmind · Marketing agency", d: "Designed and produced visual content for multiple clients' social channels." },
    { when: "2023 — 2025", t: "Personal Assistant", w: "One Step SAS", d: "Administrative management and process organization with discipline and precision." },
    { when: "2017 — 2022", t: "B.A. Advertising Graphic Communication", w: "Universidad de Medellín", d: "", edu: true },
    { when: "2014", t: "Technical high school diploma in communication, radio & TV", w: "Colegio Marillac", d: "", edu: true }
  ]
};
const MARQUEE = {
  es: ["Branding", "con intención", "Motion", "que se mueve", "Contenido", "que conecta", "Editorial", "con ritmo"],
  en: ["Branding", "with intention", "Motion", "that moves", "Content", "that connects", "Editorial", "with rhythm"]
};
const MARQUEE2 = { es: ["Hablemos", "¿un café?", "Cotiza", "sin compromiso"], en: ["Let's talk", "coffee?", "Get a quote", "no strings"] };

/* ---------- TEXTOS ---------- */
const I18N = {
  es: {
    "nav.work": "Trabajo", "nav.services": "Servicios", "nav.about": "Sobre mí", "nav.exp": "Experiencia", "nav.cta": "Hablemos",
    "hero.status": "Disponible para freelance y empleo de tiempo completo",
    "hero.t1": "Diseño marcas", "hero.t2": "que vibran", "hero.t3": "y se recuerdan.",
    "hero.sub": "Soy María Camila, Comunicadora Gráfica Publicitaria en Medellín. Creo identidades visuales, contenido para redes, video y piezas impresas para marcas que quieren verse tan bien como lo que hacen.",
    "hero.cta1": "Ver mi trabajo", "hero.cta2": "Cotiza tu proyecto", "hero.pola": "¡hola, soy Cami!",
    "hero.m1": ["Trabajo remoto para todo el mundo", "Clientes en Colombia y el exterior", "Basada en Medellín"],
    "hero.m2": ["Creando para marcas reales", "Branding, redes, video e impresos", "+20 proyectos en este portafolio"],
    "hero.m3": ["Español nativo", "Inglés intermedio", "Propuestas en ambos idiomas"],
    "idx.eyebrow": "Índice", "idx.t1": "Mi trabajo,", "idx.t2": "por formato",
    "idx.lead": "Elige una categoría o baja para recorrerlas todas. Cada proyecto se abre en su contexto real: en un celular, en el navegador, en Illustrator o sobre papel.",
    "cat.eyebrow": "Trabajo", "cat.count1": "proyecto", "cat.countN": "proyectos", "cat.view": "Ver", "cat.play": "Play", "cat.open": "Abrir",
    "photo.cta": "Ver la sesión completa",
    "svc.eyebrow": "Lo que hago", "svc.t1": "Servicios para", "svc.t2": "marcas que quieren destacar",
    "proc.title": "Cómo trabajamos juntos",
    "nav.pkg": "Paquetes", "pkg.title": "Paquetes de branding", "pkg.note": "elige el tuyo ✶",
    "pkg.lead": "Tres niveles para cada etapa de tu negocio. Todos incluyen rondas de revisión, archivos finales listos para usar y acompañamiento en cada paso.",
    "pkg.extrasTitle": "Extras para cualquier paquete", "pkg.condTitle": "Condiciones", "pkg.rev": "rondas de revisión",
    "pkg.cta": "Quiero este plan", "pkg.wa": "¡Hola María Camila! Me interesa", "pkg.pdf": "Descargar PDF", "pkg.month": "por mes", "pkg.talk": "Hablemos",
    "about.eyebrow": "Sobre mí", "about.t1": "Estrategia en la cabeza,", "about.t2": "sensibilidad en las manos.",
    "about.p1": "Soy María Camila, Comunicadora Gráfica Publicitaria con 5 años de experiencia. Conecto la identidad visual y el contenido digital con los objetivos de negocio de cada marca.",
    "about.p2": "Trabajo desde la dirección de arte y el branding, con investigación del consumidor, benchmarking y KPIs creativos para que cada pieza, además de verse bien, dé resultados.",
    "about.p3": "",
    "about.sw": "Herramientas",
    "about.sk": "Habilidades", "about.l1": "Café", "about.l2": "Animales", "about.l3": "Ilustración", "about.l4": "Teatro", "about.l5": "Música",
    "exp.eyebrow": "Trayectoria", "exp.t1": "Experiencia", "exp.t2": "& formación",
    "hire.eyebrow": "Para equipos y agencias", "hire.title": "Estrategia, diseño y video en una sola persona para tu equipo.",
    "hire.text": "Llego con dirección de arte, branding, contenido para redes y postproducción, y con la costumbre de medir lo que funciona. Disponible para roles de tiempo completo, en Medellín o en remoto.",
    "hire.cv": "Ver mi CV", "hire.contact": "Hablemos de tu equipo",
    "pkg.hint": "¿lista para empezar? mira las tarifas →", "tabs.hint": "hay más, explora →", "tabs.next": "Siguiente", "pkg.btn": "Ver paquetes y tarifas",
    "ct.eyebrow": "Contacto", "ct.t1": "¿Tienes un proyecto", "ct.t2": "en mente?",
    "ct.lead": "Cuéntame qué necesitas y te envío una cotización personalizada en menos de 48 horas.", "ct.mail": "Escríbeme un correo",
    "ft.rights": "Todos los derechos reservados.", "work.band": ["Conoce mi trabajo", "explora los diseños", "Portafolio", "toca cualquier pieza"],
    "v.reply": "Enviar mensaje", "v.likes": "Les gusta a", "v.others": "y otras personas", "v.inbox": "Recibidos", "v.promo": "Promociones", "v.sent": "Enviados", "v.mailbox": "Correo",
    "mail.subject": "Cotización de proyecto", "wa.text": "¡Hola María Camila! Vi tu portafolio y quiero cotizar un proyecto.",
    "badge": "BRANDING · MOTION · CONTENIDO · DISEÑO · ", "title": "María Camila Muñoz · Diseño, Branding & Audiovisual"
  },
  en: {
    "nav.work": "Work", "nav.services": "Services", "nav.about": "About", "nav.exp": "Experience", "nav.cta": "Let's talk",
    "hero.status": "Available for freelance projects & full-time roles",
    "hero.t1": "I design brands", "hero.t2": "that pop", "hero.t3": "and stick.",
    "hero.sub": "I'm María Camila, an advertising graphic designer based in Medellín, Colombia. I create visual identities, social content, video and print for brands that want to look as good as what they do.",
    "hero.cta1": "See my work", "hero.cta2": "Get a quote", "hero.pola": "hi, I'm Cami!",
    "hero.m1": ["Working remotely, worldwide", "Clients in Colombia and abroad", "Based in Medellín"],
    "hero.m2": ["Creating for real brands", "Branding, social, video & print", "20+ projects in this portfolio"],
    "hero.m3": ["Native Spanish", "Intermediate English", "Proposals in both languages"],
    "idx.eyebrow": "Index", "idx.t1": "My work,", "idx.t2": "by format",
    "idx.lead": "Pick a category or scroll through them all. Every project opens in its real context: on a phone, in a browser, in Illustrator or on paper.",
    "cat.eyebrow": "Work", "cat.count1": "project", "cat.countN": "projects", "cat.view": "View", "cat.play": "Play", "cat.open": "Open",
    "photo.cta": "See the full shoot",
    "svc.eyebrow": "What I do", "svc.t1": "Services for", "svc.t2": "brands that want to stand out",
    "proc.title": "How we'll work together",
    "nav.pkg": "Packages", "pkg.title": "Branding packages", "pkg.note": "pick yours ✶",
    "pkg.lead": "Three levels for every stage of your business. All include revision rounds, ready-to-use final files and support at every step.",
    "pkg.extrasTitle": "Add-ons for any package", "pkg.condTitle": "Terms", "pkg.rev": "revision rounds",
    "pkg.cta": "I want this one", "pkg.wa": "Hi María Camila! I am interested in", "pkg.pdf": "Download PDF (Spanish)", "pkg.month": "per month", "pkg.talk": "Let's talk",
    "about.eyebrow": "About me", "about.t1": "Strategy in mind,", "about.t2": "craft in hand.",
    "about.p1": "I'm María Camila, an advertising graphic communicator with 5 years of experience. I connect visual identity and digital content with each brand's business goals.",
    "about.p2": "I work through art direction and branding, backed by consumer research, benchmarking and creative KPIs, so every piece doesn't just look good: it delivers results.",
    "about.p3": "",
    "about.sw": "Tools",
    "about.sk": "Skills", "about.l1": "Coffee", "about.l2": "Animals", "about.l3": "Illustration", "about.l4": "Theatre", "about.l5": "Music",
    "exp.eyebrow": "Background", "exp.t1": "Experience", "exp.t2": "& education",
    "hire.eyebrow": "For teams & agencies", "hire.title": "Strategy, design and video, all in one hire for your team.",
    "hire.text": "I bring art direction, branding, social content and post-production, plus the habit of measuring what works. Available for full-time roles, in Medellín or remote.",
    "hire.cv": "See my résumé", "hire.contact": "Let's talk about your team",
    "pkg.hint": "ready to start? see the rates →", "tabs.hint": "there's more, explore →", "tabs.next": "Next", "pkg.btn": "See packages & rates",
    "ct.eyebrow": "Contact", "ct.t1": "Got a project", "ct.t2": "in mind?",
    "ct.lead": "Tell me what you need and I'll send you a tailored quote within 48 hours.", "ct.mail": "Send me an email",
    "ft.rights": "All rights reserved.", "work.band": ["See my work", "explore the designs", "Portfolio", "tap any piece"],
    "v.reply": "Send message", "v.likes": "Liked by", "v.others": "and others", "v.inbox": "Inbox", "v.promo": "Promotions", "v.sent": "Sent", "v.mailbox": "Mail",
    "mail.subject": "Project inquiry", "wa.text": "Hi María Camila! I saw your portfolio and I'd like a quote for a project.",
    "badge": "BRANDING · MOTION · CONTENT · DESIGN · ", "title": "María Camila Muñoz · Design, Branding & Video"
  }
};

/* =========================================================
   HELPERS
   ========================================================= */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pad = n => String(n).padStart(2, "0");
// "calm" = el sistema pide menos movimiento: se apagan parallax y efectos magnéticos,
// pero los carruseles y franjas siguen (más lentos) porque son parte del contenido.
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const reduced = false;
let lang = "es";
const t = k => I18N[lang][k];
const isMp4 = v => /\.mp4$/i.test(v || "");
const findProject = id => { for (const c of CATEGORIES) for (const p of c.projects) if (p.id === id) return [p, c]; return []; };
const imgs = (list, n = 5, cls = "") => list.slice(0, n).map((s, i) => `<img src="${s}" alt="" loading="lazy" class="${i === 0 ? "on" : ""} ${cls}">`).join("");

function getInitialLang() {
  try { const s = localStorage.getItem("mc-lang"); if (s === "es" || s === "en") return s; } catch (e) {}
  return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
}

/* =========================================================
   CARD TEMPLATES (vistas previas animadas)
   ========================================================= */
const IG_ICONS = `<span>♡</span><span>💬</span><span>➤</span><span>🔖</span>`;

const cardTpl = {
  ai: (p) => `
    <button class="pcard reveal" data-open="${p.id}" data-cursor="${t("cat.open")}">
      <div class="aiwin">
        <div class="ai-bar"><span class="ai-logo">Ai</span><span class="ai-menu"><span>File</span><span>Edit</span><span>Object</span><span>Type</span><span>Select</span><span>Effect</span><span>View</span></span><span class="ai-tab">${esc(p.id)}.ai @ 66%</span></div>
        <div class="ai-body">
          <div class="ai-tools"><i class="on">➤</i><i>✎</i><i>T</i><i>▭</i><i>◯</i><i>✂</i><i>✋</i></div>
          <div class="ai-canvas">
            <div class="ai-board"><b class="h"></b><b class="h"></b><b class="h"></b><b class="h"></b>
              <div class="slides" data-preview="${p.id}">${imgs(p.images, 6)}</div>
            </div>
            <svg class="ai-cursor" viewBox="0 0 24 24"><path d="M3 2l17 9-7 2-3 8z" fill="#fff" stroke="#000" stroke-width="1.2"/></svg>
          </div>
          <div class="ai-panel"><h5>Layers</h5><ul>${["Logo", "Color", "Type", "Mockups"].map((l, i) => `<li class="${i === 0 ? "on" : ""}">${l}</li>`).join("")}</ul>
            <h5>Swatches</h5><div class="ai-swatches">${(p.swatches || []).concat(["#ff2e63", "#c6ff3d"]).map(c => `<span style="background:${c}"></span>`).join("")}</div></div>
        </div>
      </div>
      <div class="pcard-cap"><h3>${esc(p[lang].title)}</h3><p>${esc(p[lang].desc)}</p></div>
    </button>`,

  feed: (p) => `
    <button class="pcard" data-open="${p.id}" data-cursor="${t("cat.view")}">
      <div class="phone feed"><div class="scr">
        <div class="ig-top"><span class="ig-logo">Instagram</span><span>♡ ➤</span></div>
        <div class="ig-user"><span class="ig-av"><i></i></span>${esc(p.client)}</div>
        <div class="ig-post ${p.ratio || ""}"><div class="slides" data-preview="${p.id}" data-kind="feed">${imgs(p.images, 6)}</div><span class="heart-pop">♥</span></div>
        <div class="ig-dots">${p.images.slice(0, 6).map((_, i) => `<i class="${i === 0 ? "on" : ""}"></i>`).join("")}</div>
        <div class="ig-actions">${IG_ICONS}</div>
        <div class="ig-cap"><b>${esc(p.client)}</b> ${esc(p[lang].desc)}</div>
      </div></div>
      <div class="pcard-cap"><h3>${esc(p[lang].title)}</h3></div>
    </button>`,

  story: (p) => `
    <button class="pcard" data-open="${p.id}" data-cursor="${t("cat.view")}">
      <div class="phone story"><div class="scr">
        <div class="slides" data-preview="${p.id}" data-kind="story">${imgs(p.images, 6)}</div>
        <div class="st-bars">${p.images.slice(0, 6).map((_, i) => `<i class="${i === 0 ? "on" : ""}"></i>`).join("")}</div>
        <div class="st-user"><span class="ig-av"><i></i></span>${esc(p.client)} <small>2 h</small></div>
        <div class="st-reply"><span>${t("v.reply")}</span><span>♡</span><span>➤</span></div>
      </div></div>
      <div class="pcard-cap"><h3>${esc(p[lang].title)}</h3></div>
    </button>`,

  reel: (p) => `
    <button class="pcard" data-open="${p.id}" data-cursor="${t("cat.play")}">
      <div class="phone reel"><div class="scr">
        ${isMp4(p.video) && p.id === "glimmer-reel"
          ? `<div class="slides live"><video src="${p.video}" muted loop playsinline autoplay preload="metadata" poster="${p.images[0]}"></video></div>`
          : `<div class="slides" data-preview="${p.id}">${imgs(p.images, 2)}</div><span class="play">▶</span>`}
        <div class="reel-ui"><span class="top">Reels</span>
          <div class="reel-cap"><b><span class="ig-av"><i></i></span>${esc(p.client)}</b>${esc(p[lang].desc)}</div></div>
        <div class="reel-side"><span>♡<small>2,4k</small></span><span>💬<small>86</small></span><span>➤</span></div>
      </div></div>
      <div class="pcard-cap"><h3>${esc(p[lang].title)}</h3></div>
    </button>`,

  browser: (p) => `
    <button class="pcard reveal" data-open="${p.id}" data-cursor="${t("cat.view")}">
      <div class="browser">
        <div class="br-bar"><span class="br-dots"><i></i><i></i><i></i></span><span class="br-url">https://${esc(p.client)}</span></div>
        <div class="br-nav"><b>GLIMMER</b><span><em>Shop</em><em>New</em><em>About</em><em>♡</em></span></div>
        <div class="br-view"><img src="${p.images[0]}" alt="" loading="lazy"></div>
      </div>
      <div class="pcard-cap"><h3>${esc(p[lang].title)}</h3><p>${esc(p[lang].desc)}</p></div>
    </button>`,

  mail: (p) => `
    <button class="pcard reveal" data-open="${p.id}" data-cursor="${t("cat.open")}">
      <div class="mail">
        <div class="mail-head"><div class="subj">${esc(p[lang].subject)}</div><div class="from"><i>G</i>${esc(p.client)} </div></div>
        <div class="mail-body"><img src="${p.images[0]}" alt="" loading="lazy"></div>
      </div>
      <div class="pcard-cap"><h3>${esc(p[lang].title)}</h3><p>${esc(p[lang].desc)}</p></div>
    </button>`,

  print: (p) => `
    <button class="pcard reveal" data-open="${p.id}" data-cursor="${t("cat.view")}">
      <div class="paper"><span class="tape" aria-hidden="true"></span><div class="slides" data-preview="${p.id}">${imgs(p.images, 6)}</div></div>
      <div class="pcard-cap"><h3>${esc(p[lang].title)}</h3><p>${esc(p.client)} · ${p.year}</p></div>
    </button>`
};

// Las categorías de redes (carruseles, posts, historias, reels) se muestran juntas en una sola sección con pestañas.
const SOCIAL_IDS = ["carousels", "posts", "stories", "videos"];
const SOCIAL = {
  es: { name: "Redes sociales", desc: "Carruseles, posts, historias y reels con una línea gráfica clara para cada marca. Elige un formato y toca cualquier celular para verlo completo.", note: "elige un formato ✶" },
  en: { name: "Social media", desc: "Carousels, posts, stories and reels with a clear visual system for each brand. Pick a format and tap any phone to see it in full.", note: "pick a format ✶" }
};
// Orden en que se muestran las pestañas
const SOCIAL_ORDER = ["posts", "stories", "carousels", "videos"];
const BRAND_ORDER = ["vabes", "donabel", "nodo", "manual", "ocre"];
const byOrder = order => (a, b) => (order.indexOf(a.id) + 1 || 99) - (order.indexOf(b.id) + 1 || 99);

function renderList() {
  const list = [];
  CATEGORIES.forEach(c => {
    if (!SOCIAL_IDS.includes(c.id)) return list.push(c);
    let s = list.find(x => x.id === "social");
    if (!s) { s = { id: "social", type: "social", es: SOCIAL.es, en: SOCIAL.en, groups: [], projects: [] }; list.push(s); }
    s.groups.push(c); s.projects = s.projects.concat(c.projects);
  });
  const s = list.find(x => x.id === "social"); if (s) s.groups.sort(byOrder(SOCIAL_ORDER));
  return list;
}

// Barra de pestañas: miniatura + nombre, invitación a explorar, botón siguiente y contador
function tabsBar(items) {
  return `
    <div class="soc-bar">
      <span class="soc-hint hand">${t("tabs.hint")}</span>
      <div class="soc-tabs" role="tablist">${items.map((it, k) => `
        <button class="soc-tab${k ? "" : " on"}" role="tab" aria-selected="${!k}" data-tab="${it.id}" style="--i:${k}">
          <img src="${it.thumb}" alt="" loading="lazy"><span>${esc(it.name)}</span></button>`).join("")}
      </div>
      <div class="soc-nav"><span class="soc-count"><b>01</b> / ${pad(items.length)}</span>
        <button class="soc-next" data-next aria-label="${t("tabs.next")}">→</button></div>
    </div>`;
}

function renderCategory(c, i) {
  const d = c[lang];
  const n = c.projects.length;
  let body = "";
  // Branding: una pestaña por marca; cada una muestra su ventana de Illustrator en grande
  const brands = c.type === "ai" ? [...c.projects].sort(byOrder(BRAND_ORDER)) : [];
  if (c.type === "ai") body = `
    ${tabsBar(brands.map(p => ({ id: p.id, name: p.client, thumb: p.images[0] })))}
    ${brands.map((p, k) => `
    <div class="soc-panel ai-single${k ? "" : " on"}" role="tabpanel" data-panel="${p.id}"${k ? " hidden" : ""}>${cardTpl.ai(p)}</div>`).join("")}`;
  if (c.type === "feed" || c.type === "story" || c.type === "reel")
    body = `<div class="h-scroll"><div class="phones">${c.projects.map(cardTpl[c.type]).join("")}</div></div>`;
  if (c.type === "social") body = `
    ${tabsBar(c.groups.map(g => ({ id: g.id, name: g[lang].name, thumb: g.projects[0].images[0] })))}
    ${c.groups.map((g, k) => `
    <div class="soc-panel${k ? "" : " on"}" role="tabpanel" data-panel="${g.id}"${k ? " hidden" : ""}>
      <p class="soc-desc">${esc(g[lang].desc)}</p>
      <div class="h-scroll"><div class="phones">${g.projects.map(cardTpl[g.type]).join("")}</div></div>
    </div>`).join("")}`;
  if (c.type === "web") body = `<div class="web-grid">${c.projects.map(p => cardTpl[p.frame](p)).join("")}</div>`;
  if (c.type === "print") body = `<div class="paper-grid">${c.projects.map(cardTpl.print).join("")}</div>`;
  if (c.type === "photo") {
    const p = c.projects[0];
    const film = p.images.map((s, k) => `<button data-open="${p.id}" data-index="${k}" data-cursor="${t("cat.view")}"><img src="${s}" alt="" loading="lazy"></button>`).join("");
    body = `</div><div class="film"><div class="marquee-track" data-speed="28">${film}${film}</div></div><div class="cat-inner" style="padding-top:0"><div class="photo-cta"><button class="btn btn-ghost magnetic" data-open="${p.id}">${t("photo.cta")} ↗</button></div>`;
  }
  const strip = Array(10).fill(`<span>${esc(d.name)}</span>`).join("");
  return `
  <section class="cat" id="cat-${c.id}" data-type="${c.type}">
    <div class="strip" aria-hidden="true"><div class="marquee-track" data-speed="${i % 2 ? -22 : 22}">${strip}${strip}</div></div>
    <div class="cat-inner">
      <span class="cat-note">${esc(d.note)}</span>
      <header class="cat-head">
        <span class="cat-num">${pad(i + 1)}</span>
        <h2 class="cat-title"><span class="sel"><span class="split">${esc(d.name)}</span><b></b><b></b><b></b><b></b></span></h2>
        <p class="cat-desc reveal" style="grid-column:1/-1">${esc(d.desc)}</p>
      </header>
      ${body}
    </div>
  </section>`;
}

/* =========================================================
   RENDER
   ========================================================= */
function splitText(root = document) {
  root.querySelectorAll(".split").forEach(el => {
    if (el.dataset.done === lang + el.textContent) return;
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) => `<span class="w"><span style="transition-delay:${i * 70}ms">${esc(w)}</span></span>`).join(" ");
    el.dataset.done = lang + el.textContent;
  });
}

function render() {
  document.documentElement.lang = lang;
  document.title = t("title");
  $$("[data-i18n]").forEach(el => { const v = t(el.dataset.i18n); if (typeof v === "string") el.textContent = v; });
  $("#badgeText").textContent = t("badge");

  const mq = arr => { const s = arr.map(w => `<span>${esc(w)}</span>`).join(""); return s + s + s + s; };
  $("#marquee").innerHTML = mq(MARQUEE[lang]); $("#marquee").dataset.speed = 34;
  $("#marquee2").innerHTML = mq(MARQUEE2[lang]); $("#marquee2").dataset.speed = -30;
  $("#workBand").innerHTML = mq(t("work.band")); $("#workBand").dataset.speed = 30;

  $("#categories").innerHTML = renderList().map(renderCategory).join("");

  $("#svcList").innerHTML = SERVICES.map((s, i) => `
    <article class="svc reveal${s.star ? " star" : ""}">
      <span class="svc-num">0${i + 1}</span><h3>${esc(s[lang].t)}</h3>
      <div><p>${esc(s[lang].d)}</p><ul class="tags">${s[lang].tags.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
    </article>`).join("");
  renderPricing();

  $("#procSteps").innerHTML = PROCESS[lang].map(([h, p]) => `<li class="reveal"><h4>${esc(h)}</h4><p>${esc(p)}</p></li>`).join("");
  $("#skillChips").innerHTML = SKILLS[lang].map(([g, list]) =>
    `<li class="grp">${esc(g)}</li>` + list.map(s => `<li>${esc(s)}</li>`).join("")).join("");
  $("#softList").innerHTML = TOOLS[lang].map(([g, chips, extra]) =>
    `<li class="grp">${esc(g)}</li>` +
    (chips === null ? SOFTWARE_BARS.map(([n, v]) => `<li><span>${n}</span><span class="bar reveal"><i style="--w:${v}%"></i></span></li>`).join("") : "") +
    (chips ? `<li class="tool-chips">${chips.map(c => `<span>${esc(c)}</span>`).join("")}</li>` : "")).join("");
  $("#timeline").innerHTML = TIMELINE[lang].map(e => `
    <li class="reveal${e.edu ? " edu" : ""}"><span class="when">${esc(e.when)}</span>
      <div><h3>${esc(e.t)}</h3><span class="where">${esc(e.w)}</span>${e.d ? `<p>${esc(e.d)}</p>` : ""}</div></li>`).join("");

  $("#mailLink").href = `mailto:mcamila1502@gmail.com?subject=${encodeURIComponent(t("mail.subject"))}`;
  $("#waLink").href = `https://wa.me/573105675081?text=${encodeURIComponent(t("wa.text"))}`;

  splitText();
  setupRollers();
  setupPreviews();
  setupMarquees();
  observe();
  requestAnimationFrame(() => $$(".soc-tabs").forEach(placeInk));
}

/* =========================================================
   MOTION
   ========================================================= */
// Reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
function observe() { $$(".reveal:not(.in), .split:not(.in)").forEach(el => io.observe(el)); }

// Rotating lines in the hero meta
let rollTimer;
function setupRollers() {
  clearInterval(rollTimer);
  const rollers = $$(".roller").map(el => {
    const list = t(el.dataset.roll);
    el.innerHTML = list.map((s, i) => `<span class="${i ? "wait" : ""}">${esc(s)}</span>`).join("");
    return { el, i: 0, n: list.length };
  });
  if (reduced) return;
  let k = 0;
  rollTimer = setInterval(() => {
    const r = rollers[k++ % rollers.length];
    const spans = r.el.children;
    spans[r.i].className = "out";
    const prev = r.i; r.i = (r.i + 1) % r.n;
    spans[r.i].className = "";
    setTimeout(() => { spans[prev].className = "wait"; }, 900);
  }, 1500);
}

// Animated previews inside cards (only while visible)
let previews = [];
const vio = new IntersectionObserver(es => es.forEach(e => {
  const p = previews.find(x => x.el === e.target); if (p) p.visible = e.isIntersecting;
}), { threshold: .2 });
function setupPreviews() {
  previews.forEach(p => vio.unobserve(p.el));
  previews = $$("[data-preview]").map((el, k) => {
    const p = { el, i: 0, n: el.children.length, kind: el.dataset.kind, visible: false, next: performance.now() + 1800 + k * 450 };
    vio.observe(el); return p;
  });
}
function stepPreview(p) {
  const card = p.el.closest(".scr, .pcard");
  const imgsEl = p.el.children;
  imgsEl[p.i].classList.remove("on");
  p.i = (p.i + 1) % p.n;
  imgsEl[p.i].classList.add("on");
  if (p.kind === "feed") {
    card.querySelectorAll(".ig-dots i").forEach((d, j) => d.classList.toggle("on", j === p.i));
    if (p.i === 0) { const h = card.querySelector(".heart-pop"); h.classList.remove("go"); void h.offsetWidth; h.classList.add("go"); }
  }
  if (p.kind === "story") card.querySelectorAll(".st-bars i").forEach((d, j) => { d.className = j < p.i ? "done" : j === p.i ? "on" : ""; });
}
if (!reduced) setInterval(() => {
  const now = performance.now();
  previews.forEach(p => { if (p.visible && p.n > 1 && now >= p.next && !viewerOpen) { stepPreview(p); p.next = now + (p.kind === "story" ? 3200 : 3400 + Math.random() * 900); } });
}, 250);

// Marquees: slow base speed + extra push from scroll velocity
let marquees = [];
function setupMarquees() {
  marquees = $$(".marquee-track").map(el => ({ el, x: 0, speed: +(el.dataset.speed || 30) }));
}
let lastY = scrollY, vel = 0, lastT = performance.now();
function frame(now) {
  const dt = Math.min(.05, (now - lastT) / 1000); lastT = now;
  const dy = scrollY - lastY; lastY = scrollY;
  vel += ((calm ? 0 : Math.abs(dy) * 2.2) - vel) * .08;
  marquees.forEach(m => {
    const half = m.el.scrollWidth / 2; if (!half) return;
    const dir = Math.sign(m.speed);
    m.x -= (Math.abs(m.speed) * (calm ? .6 : 1) + vel * 6) * dt * dir;
    if (m.x <= -half) m.x += half; if (m.x > 0) m.x -= half;
    m.el.style.transform = `translate3d(${m.x}px,0,0)`;
  });
  // parallax
  if (!calm) $$("[data-speed]").forEach(el => {
    if (el.classList.contains("marquee-track")) return;
    const r = el.getBoundingClientRect();
    const off = (r.top + r.height / 2 - innerHeight / 2) * +el.dataset.speed;
    el.style.translate = `0 ${off.toFixed(1)}px`;
  });
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// Custom cursor + magnetic buttons
const cursor = $("#cursor"), cursorText = $("#cursorText");
let cx = 0, cy = 0, tx = 0, ty = 0;
addEventListener("pointermove", e => {
  if (e.pointerType !== "mouse") return;
  tx = e.clientX; ty = e.clientY; cursor.classList.add("on");
  const target = e.target.closest("[data-cursor]");
  cursor.classList.toggle("big", !!target && !viewerOpen);
  if (target) cursorText.textContent = target.dataset.cursor;
  const mag = e.target.closest(".magnetic");
  $$(".magnetic").forEach(b => { if (b !== mag) b.style.transform = ""; });
  if (mag && !calm) {
    const r = mag.getBoundingClientRect();
    mag.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`;
  }
});
document.addEventListener("pointerleave", () => cursor.classList.remove("on"));
(function loop() { cx += (tx - cx) * .2; cy += (ty - cy) * .2; cursor.style.transform = `translate(${cx}px, ${cy}px)`; requestAnimationFrame(loop); })();

/* =========================================================
   VIEWER
   ========================================================= */
const V = { el: $("#viewer"), stage: $("#vStage"), thumbs: $("#vThumbs"), prog: $("#vProgress") };
let viewerOpen = false, cur = null, idx = 0, playing = true, timer = null, lastFocus = null;
const DUR = 4500;

const frameTpl = {
  ai: (p) => `
    <div class="vf aiwin">
      <div class="ai-bar"><span class="ai-logo">Ai</span><span class="ai-menu"><span>File</span><span>Edit</span><span>Object</span><span>Type</span><span>Select</span><span>Effect</span><span>View</span><span>Window</span><span>Help</span></span><span class="ai-tab">${esc(p.id)}.ai @ 66% (RGB/Preview)</span></div>
      <div class="ai-body">
        <div class="ai-tools"><i class="on">➤</i><i>✎</i><i>T</i><i>▭</i><i>◯</i><i>✂</i><i>✋</i><i>🔍</i></div>
        <div class="ai-canvas"><div class="ai-board"><div class="v-slides"></div></div></div>
        <div class="ai-panel"><h5>Artboards</h5><ul id="vLayers">${p.images.map((_, i) => `<li>Artboard ${i + 1}</li>`).join("")}</ul>
          <h5>Swatches</h5><div class="ai-swatches">${(p.swatches || []).concat(["#ff2e63", "#c6ff3d"]).map(c => `<span style="background:${c}"></span>`).join("")}</div></div>
      </div>
    </div>`,
  feed: (p) => `
    <div class="vf phone feed"><div class="scr">
      <div class="ig-top"><span class="ig-logo">Instagram</span><span>♡ ➤</span></div>
      <div class="ig-user"><span class="ig-av"><i></i></span>${esc(p.client)}</div>
      <div class="ig-post"><div class="v-slides"></div><span class="heart-pop" id="vHeart">♥</span></div>
      <div class="ig-dots" id="vDots">${p.images.map(() => "<i></i>").join("")}</div>
      <div class="ig-actions">${IG_ICONS}</div>
      <div class="ig-cap"><b>${t("v.likes")} camimunozcano ${t("v.others")}</b></div>
      <div class="ig-cap" style="padding-bottom:12px"><b>${esc(p.client)}</b> ${esc(p[lang].desc)}</div>
    </div></div>`,
  story: (p) => `
    <div class="vf phone story"><div class="scr">
      <div class="v-slides"></div>
      <div class="st-bars" id="vBars">${p.images.map(() => "<i></i>").join("")}</div>
      <div class="st-user"><span class="ig-av"><i></i></span>${esc(p.client)} <small>2 h</small></div>
      <div class="st-reply"><span>${t("v.reply")}</span><span>♡</span><span>➤</span></div>
    </div></div>`,
  reel: (p) => `
    <div class="vf phone reel"><div class="scr">
      <div class="v-slides">${isMp4(p.video)
        ? `<video class="on" src="${p.video}" controls autoplay loop playsinline poster="${p.images[0]}"></video>`
        : `<iframe class="on" src="${p.video}" title="${esc(p[lang].title)}" allow="autoplay; fullscreen" allowfullscreen></iframe>`}</div>
    </div></div>`,
  browser: (p) => `
    <div class="vf browser">
      <div class="br-bar"><span class="br-dots"><i></i><i></i><i></i></span><span class="br-url">https://${esc(p.client)}</span></div>
      <div class="br-nav"><b>GLIMMER</b><span><em>Shop</em><em>New</em><em>About</em><em>♡</em></span></div>
      <div class="br-view"><div class="v-slides"></div></div>
    </div>`,
  mail: (p) => `
    <div class="vf mail">
      <aside class="mail-side"><b>${t("v.mailbox")}</b><span class="on">${t("v.inbox")} · 1</span><span>${t("v.promo")}</span><span>${t("v.sent")}</span></aside>
      <div class="mail-main">
        <div class="mail-head"><div class="subj">${esc(p[lang].subject)}</div><div class="from"><i>G</i>${esc(p.client)} </div></div>
        <div class="mail-body"><img src="${p.images[0]}" alt="${esc(p[lang].title)}"></div>
      </div>
    </div>`,
  print: () => `<div class="vf print"><div class="v-slides"></div></div>`,
  photo: () => `<div class="vf photo"><div class="v-slides"></div>
    <div class="vfinder"><i></i><i></i><i></i><i></i><span class="rec">REC</span><span class="focus"></span><span class="meta"><span>ISO 200</span><span>f/2.8</span><span>1/125</span></span></div></div>`
};

function frameType(p, c) { return p.frame || c.type; }

function openViewer(id, start = 0) {
  const [p, c] = findProject(id); if (!p) return;
  cur = { p, type: frameType(p, c) };
  lastFocus = document.activeElement;
  $("#vCat").textContent = c[lang].name;
  $("#vTitle").textContent = p[lang].title;
  $("#vDesc").textContent = p[lang].desc;
  $("#vBehance").href = p.behance;
  V.stage.innerHTML = frameTpl[cur.type](p);
  const slides = V.stage.querySelector(".v-slides");
  const multi = cur.type !== "reel" && cur.type !== "mail" && p.images.length > 1;
  if (slides && !slides.children.length) slides.innerHTML = p.images.map(s => `<img src="${s}" alt="${esc(p[lang].title)}" draggable="false">`).join("");
  V.thumbs.innerHTML = multi ? p.images.map((s, i) => `<button data-i="${i}" aria-label="${i + 1}"><img src="${s}" alt="" loading="lazy"></button>`).join("") : "";
  $("#vPrev").hidden = $("#vNext").hidden = $("#vPlay").hidden = !multi;
  $("#vCount").hidden = !multi;
  V.el.hidden = false; viewerOpen = true;
  document.body.style.overflow = "hidden";
  cursor.classList.remove("big");
  playing = multi && !reduced;
  go(start, 0);
  $("#vClose").focus();
}

function go(n, dir = 1) {
  if (!cur) return;
  const p = cur.p, total = p.images.length;
  idx = (n + total) % total;
  const slides = V.stage.querySelectorAll(".v-slides > img");
  slides.forEach((s, i) => { s.style.setProperty("--from", (dir < 0 ? -40 : 40) + "px"); s.classList.toggle("on", i === idx); });
  V.thumbs.querySelectorAll("button").forEach((b, i) => b.classList.toggle("on", i === idx));
  const on = V.thumbs.querySelector("button.on"); if (on) on.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  $("#vCount").textContent = `${pad(idx + 1)} / ${pad(total)}`;
  const bars = $("#vBars"); if (bars) [...bars.children].forEach((b, i) => { b.className = i < idx ? "done" : i === idx ? "on" : ""; b.style.setProperty("--dur", DUR + "ms"); b.style.animationPlayState = ""; });
  const dots = $("#vDots"); if (dots) [...dots.children].forEach((d, i) => d.classList.toggle("on", i === idx));
  const layers = $("#vLayers"); if (layers) [...layers.children].forEach((l, i) => l.classList.toggle("on", i === idx));
  if (cur.type === "feed" && dir !== 0) { const h = $("#vHeart"); if (h && Math.random() < .35) { h.classList.remove("go"); void h.offsetWidth; h.classList.add("go"); } }
  schedule();
}

function schedule() {
  clearTimeout(timer);
  V.prog.classList.remove("run"); void V.prog.offsetWidth;
  $("#vPlay").textContent = playing ? "❚❚" : "▶";
  $("#vPlay").setAttribute("aria-label", playing ? "Pausar" : "Reproducir");
  const bars = $("#vBars"); if (bars) [...bars.children].forEach(b => b.style.animationPlayState = playing ? "running" : "paused");
  if (!playing) { V.prog.style.width = "0"; return; }
  V.prog.style.width = ""; V.prog.style.setProperty("--dur", DUR + "ms"); V.prog.classList.add("run");
  timer = setTimeout(() => go(idx + 1, 1), DUR);
}

function closeViewer() {
  clearTimeout(timer); viewerOpen = false; cur = null;
  V.el.hidden = true; V.stage.innerHTML = ""; V.thumbs.innerHTML = "";
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

$("#vPrev").addEventListener("click", () => go(idx - 1, -1));
$("#vNext").addEventListener("click", () => go(idx + 1, 1));
$("#vPlay").addEventListener("click", () => { playing = !playing; schedule(); });
$("#vClose").addEventListener("click", closeViewer);
$("#vBackdrop").addEventListener("click", closeViewer);
V.stage.addEventListener("click", e => { if (e.target === V.stage) closeViewer(); });
V.thumbs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) go(+b.dataset.i, +b.dataset.i > idx ? 1 : -1); });
addEventListener("keydown", e => {
  if (!viewerOpen) return;
  if (e.key === "Escape") closeViewer();
  if (e.key === "ArrowRight") go(idx + 1, 1);
  if (e.key === "ArrowLeft") go(idx - 1, -1);
  if (e.key === " ") { e.preventDefault(); playing = !playing; schedule(); }
});
// swipe / drag
let sx = null;
V.stage.addEventListener("pointerdown", e => { sx = e.clientX; });
V.stage.addEventListener("pointerup", e => {
  if (sx === null || !cur || cur.type === "reel" || cur.type === "mail") return;
  const dx = e.clientX - sx; sx = null;
  if (Math.abs(dx) > 50) go(idx + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
});
// trap focus inside viewer
V.el.addEventListener("keydown", e => {
  if (e.key !== "Tab") return;
  const f = [...V.el.querySelectorAll("button:not([hidden]), a[href]")];
  if (!f.length) return;
  if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
  else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
});

document.addEventListener("click", e => {
  const o = e.target.closest("[data-open]");
  if (o) { e.preventDefault(); openViewer(o.dataset.open, +(o.dataset.index || 0)); }
});

/* =========================================================
   NAV
   ========================================================= */
// Pestañas de Redes sociales (delegado: sobrevive al re-render por idioma)
function placeInk(tabs) {
  const on = tabs.querySelector(".soc-tab.on"), ink = tabs.querySelector(".soc-ink");
  if (on && ink) { ink.style.width = on.offsetWidth + "px"; ink.style.transform = `translateX(${on.offsetLeft}px)`; }
}
document.addEventListener("click", e => {
  // botón → : pasa a la siguiente pestaña (vuelve a la primera al final)
  const nx = e.target.closest("[data-next]");
  if (nx) {
    const all = [...nx.closest(".soc-bar").querySelectorAll(".soc-tab")];
    const i = all.findIndex(b => b.classList.contains("on"));
    all[(i + 1) % all.length].click(); return;
  }
  const tab = e.target.closest(".soc-tab"); if (!tab) return;
  const sec = tab.closest(".cat"), tabs = tab.parentElement;
  tabs.querySelectorAll(".soc-tab").forEach(b => { const on = b === tab; b.classList.toggle("on", on); b.setAttribute("aria-selected", on); });
  const all = [...tabs.querySelectorAll(".soc-tab")], cnt = sec.querySelector(".soc-count b");
  if (cnt) cnt.textContent = pad(all.indexOf(tab) + 1);
  tab.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  sec.querySelectorAll(".soc-panel").forEach(p => {
    const on = p.dataset.panel === tab.dataset.tab;
    p.hidden = !on; p.classList.toggle("on", on);
    if (on) { p.classList.remove("enter"); void p.offsetWidth; p.classList.add("enter"); const hs = p.querySelector(".h-scroll"); if (hs) hs.scrollLeft = 0; }
  });
  placeInk(tabs);
});
addEventListener("resize", () => $$(".soc-tabs").forEach(placeInk));

// Ventana de paquetes
const pkgOv = $("#paquetes");
let pkgLastFocus = null;
function openPkg() {
  pkgLastFocus = document.activeElement;
  pkgOv.hidden = false; document.body.style.overflow = "hidden";
  pkgOv.scrollTop = 0; pkgOv.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
  if (location.hash !== "#paquetes") history.replaceState(null, "", "#paquetes");
  pkgOv.querySelector(".pkg-close").focus();
}
function closePkg() {
  pkgOv.hidden = true; document.body.style.overflow = "";
  if (location.hash === "#paquetes") history.replaceState(null, "", location.pathname + location.search);
  if (pkgLastFocus) pkgLastFocus.focus({ preventScroll: true });
}
document.addEventListener("click", e => {
  const tab = e.target.closest(".pkg-tab");
  if (tab) {
    pkgKind = tab.dataset.kind; renderPricing();
    pkgOv.scrollTo({ top: 0, behavior: "smooth" });
    $(`.pkg-tab[data-kind="${pkgKind}"]`).focus({ preventScroll: true });
    return;
  }
  const opener = e.target.closest("[data-pkg-open]");
  if (opener) {
    e.preventDefault(); setMenu(false);
    if (opener.dataset.pkgOpen && PRICING[opener.dataset.pkgOpen]) { pkgKind = opener.dataset.pkgOpen; renderPricing(); }
    openPkg();
  }
  else if (e.target.closest("[data-pkg-close]") || e.target === pkgOv) closePkg();
});
addEventListener("keydown", e => { if (e.key === "Escape" && !pkgOv.hidden) closePkg(); });

const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30), { passive: true });
function setMenu(open) {
  burger.setAttribute("aria-expanded", open); links.classList.toggle("open", open); nav.classList.toggle("menu-open", open);
  document.body.style.overflow = open ? "hidden" : "";
}
burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
links.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
$("#langToggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("mc-lang", lang); } catch (e) {}
  render();
});

$("#year").textContent = new Date().getFullYear();
lang = getInitialLang();
render();
requestAnimationFrame(() => $$(".hero .reveal, .hero .split").forEach(el => el.classList.add("in")));
if (location.hash === "#paquetes") openPkg();
