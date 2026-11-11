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
      { id: "glimmer-carrusel", client: "vivantactive", year: "2026", behance: BE + "257386965", images: L("glimmer-carrusel", 4),
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
      { id: "glimmer-reel", client: "vivantactive", year: "2026", behance: BE + "257386965",
        video: "assets/video/glimmer-reel.mp4", images: L("glimmer-carrusel", 1),
        es: { title: "Glimmer · Reel", desc: "Reel de lanzamiento con motion y tipografía animada." },
        en: { title: "Glimmer · Reel", desc: "Launch reel with motion and animated type." } },
      { id: "glimmer-pauta", client: "vivantactive", year: "2026", behance: BE + "257386965",
        video: "assets/video/glimmer-pauta.mp4", images: L("glimmer-carrusel", 4).slice(3),
        es: { title: "Glimmer · Pauta 20% OFF", desc: "Video publicitario para pauta pagada con oferta y llamado a la acción." },
        en: { title: "Glimmer · 20% OFF ad", desc: "Paid social video ad with an offer and a call to action." } },
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
      { id: "glimmer-web", frame: "browser", client: "vivantactive.com", year: "2026", behance: BE + "257386965", images: L("glimmer-web", 1),
        es: { title: "Glimmer · Banner web", desc: "Banner principal para el sitio web de la colección Glimmer." },
        en: { title: "Glimmer · Web banner", desc: "Hero banner for the Glimmer collection website." } },
      { id: "glimmer-mail", frame: "mail", client: "Vivant Active", year: "2026", behance: BE + "257386965", images: L("glimmer-mail", 1),
        es: { title: "Glimmer · Email marketing", desc: "Email de lanzamiento con producto, beneficios y llamado a la acción.", subject: "✨ Tu nuevo glow ya está aquí" },
        en: { title: "Glimmer · Email marketing", desc: "Launch email with product, benefits and a call to action.", subject: "✨ Your new glow is here" } }
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
    es: { t: "Postproducción audiovisual & motion", d: "Videos que detienen el scroll: edición, ritmo, color y motion graphics para reels, anuncios y contenido de marca.", tags: ["Edición de video", "Motion graphics", "Reels & TikTok", "Corrección de color", "Animación de logo"] },
    en: { t: "Video post-production & motion", d: "Videos that stop the scroll: editing, pacing, color and motion graphics for reels, ads and brand content.", tags: ["Video editing", "Motion graphics", "Reels & TikTok", "Color grading", "Logo animation"] } },
  { es: { t: "Contenido para redes sociales", d: "Posts, carruseles e historias con una línea gráfica clara para que tu marca se reconozca a primera vista.", tags: ["Parrilla mensual", "Carruseles", "Historias", "Plantillas"] },
    en: { t: "Social media content", d: "Posts, carousels and stories with a clear visual system so your brand is recognized at first glance.", tags: ["Monthly grid", "Carousels", "Stories", "Templates"] } },
  { es: { t: "Web, email & impresos", d: "Banners, email marketing, piezas editoriales e impresas, ilustración digital y retoque fotográfico.", tags: ["Banners web", "Email marketing", "Editorial", "Ilustración", "Retoque"] },
    en: { t: "Web, email & print", d: "Banners, email marketing, editorial and print pieces, digital illustration and photo retouching.", tags: ["Web banners", "Email marketing", "Editorial", "Illustration", "Retouching"] } }
];
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
    "about.eyebrow": "Sobre mí", "about.t1": "Estrategia en la cabeza,", "about.t2": "sensibilidad en las manos.",
    "about.p1": "Hola, soy María Camila, Comunicadora Gráfica Publicitaria con 5 años de experiencia. Mi enfoque es conectar la identidad visual y el contenido digital con los objetivos de negocio de cada marca: que lo que se ve bien también funcione y dé resultados.",
    "about.p2": "Trabajo desde la dirección de arte y el branding, apoyada en la investigación del consumidor y el benchmarking para entender el mercado antes de diseñar. Después mido: defino KPIs creativos y uso el análisis de datos para optimizar el rendimiento visual de cada pieza.",
    "about.p3": "Organizo cada proyecto con flujos de trabajo eficientes en Notion, para cumplir tiempos y que el equipo siempre sepa en qué vamos. Disfruto proponer ideas nuevas, experimentar y aprender en el proceso.",
    "about.sw": "Herramientas",
    "about.sk": "Habilidades", "about.l1": "Café", "about.l2": "Animales", "about.l3": "Ilustración", "about.l4": "Teatro", "about.l5": "Música",
    "exp.eyebrow": "Trayectoria", "exp.t1": "Experiencia", "exp.t2": "& formación",
    "hire.eyebrow": "¿Reclutando?", "hire.title": "Busco sumarme a un equipo creativo de tiempo completo.",
    "hire.text": "Diseño gráfico, branding, social media o postproducción. Presencial en Medellín o remoto para cualquier país.",
    "hire.cv": "Descargar CV", "hire.contact": "Agendar entrevista",
    "ct.eyebrow": "Contacto", "ct.t1": "¿Tienes un proyecto", "ct.t2": "en mente?",
    "ct.lead": "Cuéntame qué necesitas y te envío una cotización personalizada en menos de 48 horas.", "ct.mail": "Escríbeme un correo",
    "ft.made": "Diseñado con intención en Medellín, Colombia", "ft.top": "Volver arriba ↑",
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
    "about.eyebrow": "About me", "about.t1": "Strategy in mind,", "about.t2": "craft in hand.",
    "about.p1": "Hi, I'm María Camila, an advertising graphic communicator with 5 years of experience. My focus is connecting visual identity and digital content with each brand's business goals: what looks good should also perform and deliver results.",
    "about.p2": "I work through art direction and branding, backed by consumer research and benchmarking to understand the market before I design. Then I measure: I set creative KPIs and use data analysis to optimize the visual performance of every piece.",
    "about.p3": "I run every project with efficient workflows in Notion, so deadlines are met and the team always knows where things stand. I love bringing new ideas, experimenting and learning along the way.",
    "about.sw": "Tools",
    "about.sk": "Skills", "about.l1": "Coffee", "about.l2": "Animals", "about.l3": "Illustration", "about.l4": "Theatre", "about.l5": "Music",
    "exp.eyebrow": "Background", "exp.t1": "Experience", "exp.t2": "& education",
    "hire.eyebrow": "Hiring?", "hire.title": "I'm looking to join a creative team full-time.",
    "hire.text": "Graphic design, branding, social media or video post-production. On-site in Medellín or remote, anywhere in the world.",
    "hire.cv": "Download résumé", "hire.contact": "Book an interview",
    "ct.eyebrow": "Contact", "ct.t1": "Got a project", "ct.t2": "in mind?",
    "ct.lead": "Tell me what you need and I'll send you a tailored quote within 48 hours.", "ct.mail": "Send me an email",
    "ft.made": "Designed with intention in Medellín, Colombia", "ft.top": "Back to top ↑",
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
        <div class="br-nav"><b>VIVANT</b><span><em>Shop</em><em>New</em><em>About</em><em>♡</em></span></div>
        <div class="br-view"><img src="${p.images[0]}" alt="" loading="lazy"></div>
      </div>
      <div class="pcard-cap"><h3>${esc(p[lang].title)}</h3><p>${esc(p[lang].desc)}</p></div>
    </button>`,

  mail: (p) => `
    <button class="pcard reveal" data-open="${p.id}" data-cursor="${t("cat.open")}">
      <div class="mail">
        <div class="mail-head"><div class="subj">${esc(p[lang].subject)}</div><div class="from"><i>V</i>${esc(p.client)} </div></div>
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

function renderCategory(c, i) {
  const d = c[lang];
  const n = c.projects.length;
  let body = "";
  if (c.type === "ai") body = `<div class="ai-grid">${c.projects.map(cardTpl.ai).join("")}</div>`;
  if (c.type === "feed" || c.type === "story" || c.type === "reel")
    body = `<div class="h-scroll"><div class="phones">${c.projects.map(cardTpl[c.type]).join("")}</div></div>`;
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
        <p class="eyebrow" style="margin:0">02 — ${t("cat.eyebrow")} · ${n} ${n === 1 ? t("cat.count1") : t("cat.countN")}</p>
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

  $("#folders").innerHTML = CATEGORIES.map((c, i) => `
    <a class="folder reveal" href="#cat-${c.id}" style="transition-delay:${i * 60}ms">
      <span class="num">${pad(i + 1)}</span>
      <span><strong>${esc(c[lang].name)}</strong><br><small>${c.projects.length} ${c.projects.length === 1 ? t("cat.count1") : t("cat.countN")}</small></span>
    </a>`).join("");
  $("#categories").innerHTML = CATEGORIES.map(renderCategory).join("");

  $("#svcList").innerHTML = SERVICES.map((s, i) => `
    <article class="svc reveal${s.star ? " star" : ""}">
      <span class="svc-num">0${i + 1}</span><h3>${esc(s[lang].t)}</h3>
      <div><p>${esc(s[lang].d)}</p><ul class="tags">${s[lang].tags.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
    </article>`).join("");
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
      <div class="br-nav"><b>VIVANT</b><span><em>Shop</em><em>New</em><em>About</em><em>♡</em></span></div>
      <div class="br-view"><div class="v-slides"></div></div>
    </div>`,
  mail: (p) => `
    <div class="vf mail">
      <aside class="mail-side"><b>${t("v.mailbox")}</b><span class="on">${t("v.inbox")} · 1</span><span>${t("v.promo")}</span><span>${t("v.sent")}</span></aside>
      <div class="mail-main">
        <div class="mail-head"><div class="subj">${esc(p[lang].subject)}</div><div class="from"><i>V</i>${esc(p.client)} </div></div>
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
