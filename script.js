
function smoothScrollToSelector(selector){
  const target=document.querySelector(selector);
  if(!target) return;
  const y=target.getBoundingClientRect().top + window.pageYOffset - 24;
  window.scrollTo({top:y,behavior:'smooth'});
  target.style.transition='box-shadow .25s ease, border-color .25s ease';
  const prevShadow=target.style.boxShadow;
  const prevBorder=target.style.borderColor;
  target.style.boxShadow='0 0 0 2px rgba(0,229,255,.45), 0 0 38px rgba(123,60,255,.22)';
  target.style.borderColor='rgba(0,229,255,.5)';
  setTimeout(()=>{target.style.boxShadow=prevShadow;target.style.borderColor=prevBorder;},1200);
}

document.addEventListener('click',e=>{
  const link=e.target.closest('a[href="#contact"], a[href="#services"]');
  if(!link) return;
  e.preventDefault();
  smoothScrollToSelector(link.getAttribute('href'));
});

const data={
fr:{
musicEdits:"Montages musicaux pour danseurs",
hero1:"Montages musicaux professionnels pour la danse",
hero2:"Coupes propres, transitions fluides, mixage entre plusieurs musiques, ajout de composition et rythmique et timing précis pour spectacles et compétitions.",
cta1:"Demander un devis",
cta2:"Voir les services",
remote:"Travail à distance",
fast:"Livraison rapide",
f1t:"Coupe musicale simple",
f1d:"Coupe propre avec durée exacte pour la chorégraphie",
f2t:"Montage chorégraphique",
f2d:"Assemblage et mixage entre plusieurs musiques",
f3t:"Timing compétition",
f3d:"Structure musicale adaptée aux formats de compétition",
f4t:"Montage créatif",
f4d:"Ajout de rythme, impacts et dynamique musicale",
cred:"Montages musicaux utilisés par les danseurs, chorégraphes, écoles de danse, salle de gym, en spectacles et compétitions.",
servicesTitle:"Prestations",
servicesDesc:"Montage musical pour danseurs, professeurs et chorégraphes.",
basic:"Essentiel",
perf:"Performance",
premium:"Premium Show",
custom:"Sur devis",
listen:"Écouter un exemple",
basicItems:["1 musique","Durée exacte","Transitions propres","Coupe musicale optimisée pour compétition"],
perfItems:["1 à 2 musiques","Transitions fluides","Montée d’énergie et effets si besoin","Montage prêt pour scène"],
premiumItems:["Montage créatif","Mashup (à partir de plusieurs musiques)","Composition rythmique et effets si besoin","Remplacement de pistes ou d’harmoniques"],
customItems:["Projet complexe ou spécifique","Commande de plusieurs montages","Délais urgents","Tarif personnalisé"],
about:"À propos",
aboutText:"Producteur de musique depuis près de 30 ans, je crée des montages musicaux sur mesure pour danseurs, spectacles et compétitions. Je danse aussi la salsa, la bachata et la kizomba, ce qui me permet de comprendre le rythme, l’énergie et les attentes des danseurs. J’ai travaillé avec de nombreuses personnes à travers le monde, y compris dans l’univers de la danse.",
tag1:"30 ans de production musicale",
tag3:"Expérience internationale",
stylesTitle:"Styles de danse",
stylesLead:"Adapté à tous les styles de danse et performances scéniques.",
howTitle:"Comment ça marche",
how1:"1. Envoie ta musique et la durée souhaitée",
how2:"2. Explique les moments importants de la chorégraphie",
how3:"3. Reçois ton montage",
how4:"4. Ajustement si nécessaire",
howSubtitle:"Un parcours simple, rapide et fluide pour obtenir ton montage musical.",
testimonialsTitle:"Témoignages",
testimonialsDesc:"Ce que disent les danseurs et chorégraphes après avoir travaillé avec moi.",
contact:"Contact",
contactLine:"N’hésitez pas à me contacter, je serai ravi de vous répondre rapidement.",
footerLine1:"Montage musical pour danseurs et sportifs",
footerLine2:"📍 Saint-Hilaire-de-Brethmas, France",
footerLine3:"SIRET : 518 461 165 00020",
whatsapp:"Bonjour Eddy, je voudrais un montage musical pour danse"
},
en:{
musicEdits:"Music edits for dancers",
hero1:"Professional dance music edits",
hero2:"Clean cuts, smooth transitions, mixing between multiple tracks, added composition and rhythm, and precise timing for shows and competitions.",
cta1:"Get a quote",
cta2:"View services",
remote:"Remote worldwide",
fast:"Fast delivery",
f1t:"Simple music edit",
f1d:"Clean cut with exact duration for choreography",
f2t:"Show choreography edit",
f2d:"Editing and mixing between multiple tracks",
f3t:"Competition timing",
f3d:"Music structure adapted to competition timing",
f4t:"Creative edit",
f4d:"Added rhythm, impacts and musical dynamics",
cred:"Music edits used by dancers, choreographers, dance schools and gyms for shows and competitions.",
servicesTitle:"Services",
servicesDesc:"Music editing for dancers, teachers and choreographers.",
basic:"Essential",
perf:"Performance",
premium:"Premium Show",
custom:"Custom quote",
listen:"Listen to a sample",
basicItems:["1 track","Exact duration","Clean transitions","Competition-optimized music cut"],
perfItems:["1 to 2 tracks","Smooth transitions","Energy build and effects if needed","Competition-ready edit"],
premiumItems:["Creative arrangement","Mashup (from multiple tracks)","Rhythmic composition and effects if needed","Track replacement or added harmonics"],
customItems:["Complex or specific project","Multiple edit orders","Urgent deadlines","Custom pricing"],
about:"About",
aboutText:"Music producer for nearly 30 years, I create custom music edits for dancers, shows and competitions. I also dance salsa, bachata and kizomba, which helps me understand rhythm, energy and what dancers expect. I have worked with many people around the world, including dancers.",
tag1:"30 years in music production",
tag3:"International experience",
stylesTitle:"Dance styles",
stylesLead:"Suitable for all dance styles and stage performances.",
howTitle:"How it works",
how1:"1. Send your music and target duration",
how2:"2. Explain the key choreography moments",
how3:"3. Receive your edited version",
how4:"4. Revision if needed",
howSubtitle:"A simple, fast and smooth process to get your music edit.",
testimonialsTitle:"Testimonials",
testimonialsDesc:"What dancers and choreographers say after working with me.",
contact:"Contact",
contactLine:"Feel free to contact me, I will be happy to reply quickly.",
footerLine1:"Music editing for dancers and athletes",
footerLine2:"📍 Saint-Hilaire-de-Brethmas, France",
footerLine3:"SIRET: 518 461 165 00020",
whatsapp:"Hello Eddy, I would like a dance music edit"
},
es:{
musicEdits:"Ediciones musicales para bailarines",
hero1:"Ediciones musicales profesionales para danza",
hero2:"Cortes limpios, transiciones suaves, mezcla entre varias canciones, composición rítmica y timing preciso para espectáculos y competiciones.",
cta1:"Pedir presupuesto",
cta2:"Ver servicios",
remote:"Trabajo a distancia",
fast:"Entrega rápida",
f1t:"Edición musical simple",
f1d:"Corte limpio con duración exacta para la coreografía",
f2t:"Montaje coreográfico",
f2d:"Edición y mezcla entre varias canciones",
f3t:"Timing de competición",
f3d:"Estructura musical adaptada al formato de competición",
f4t:"Montaje creativo",
f4d:"Ritmo, impactos y dinámica musical añadidos",
cred:"Ediciones musicales utilizadas por bailarines, coreógrafos, escuelas de danza y gimnasios para espectáculos y competiciones.",
servicesTitle:"Servicios",
servicesDesc:"Edición musical para bailarines, profesores y coreógrafos.",
basic:"Esencial",
perf:"Performance",
premium:"Premium Show",
custom:"Presupuesto",
listen:"Escuchar un ejemplo",
basicItems:["1 canción","Duración exacta","Transiciones limpias","Corte musical optimizado para competición"],
perfItems:["1 a 2 canciones","Transiciones fluidas","Subida de energía y efectos si es necesario","Edición lista para competición"],
premiumItems:["Montaje creativo","Mashup (a partir de varias canciones)","Composición rítmica y efectos si es necesario","Reemplazo de pistas o armónicos añadidos"],
customItems:["Proyecto complejo o específico","Pedido de varias ediciones","Entrega urgente","Precio personalizado"],
about:"Sobre mí",
aboutText:"Productor musical desde hace casi 30 años, creo ediciones musicales a medida para bailarines, espectáculos y competiciones. También bailo salsa, bachata y kizomba, lo que me permite comprender el ritmo, la energía y las expectativas de los bailarines. He trabajado con muchas personas en todo el mundo, incluso en el universo de la danza.",
tag1:"30 años de producción musical",
tag3:"Experiencia internacional",
stylesTitle:"Estilos de danza",
stylesLead:"Adaptado a todos los estilos de danza y actuaciones escénicas.",
howTitle:"Cómo funciona",
how1:"1. Envía tu música y la duración deseada",
how2:"2. Explica los momentos clave de la coreografía",
how3:"3. Recibe tu montaje",
how4:"4. Ajustes si es necesario",
howSubtitle:"Un recorrido simple, rápido y fluido para obtener tu edición musical.",
testimonialsTitle:"Testimonios",
testimonialsDesc:"Lo que dicen bailarines y coreógrafos después de trabajar conmigo.",
contact:"Contacto",
contactLine:"No dudes en contactarme, estaré encantado de responderte rápidamente.",
footerLine1:"Edición musical para bailarines y deportistas",
footerLine2:"📍 Saint-Hilaire-de-Brethmas, Francia",
footerLine3:"SIRET: 518 461 165 00020",
whatsapp:"Hola Eddy, quiero una edición musical para baile"
}
};

const testimonials={
fr:[
["Montage parfait pour ma chorégraphie de compétition. Les transitions sont très propres.","— Dance competitor"],
["Timing parfait pour mon passage sur scène. Très professionnel.","— Dance teacher"],
["Livraison rapide et montage très propre pour notre spectacle.","— Dance school"]
],
en:[
["Perfect edit for my competition choreography. Transitions were super clean.","— Dance competitor"],
["Perfect timing for my stage performance. Very professional.","— Dance teacher"],
["Fast delivery and very clean edit for our show.","— Dance school"]
],
es:[
["Edición perfecta para mi coreografía de competición. Las transiciones son muy limpias.","— Dance competitor"],
["Timing perfecto para mi actuación en el escenario. Muy profesional.","— Dance teacher"],
["Entrega rápida y edición muy limpia para nuestro espectáculo.","— Dance school"]
]
};

let lang='fr';
let currency='EUR';
const rates={EUR:1,USD:1.08,GBP:.86};
const symbols={EUR:'€',USD:'$',GBP:'£'};
let tIndex=0;

function formatPrice(v){return Math.round(v*rates[currency])+' '+symbols[currency]}

function fillList(id,items){
  const el=document.getElementById(id);
  if(!el) return;
  el.innerHTML='';
  items.forEach(item=>{
    const li=document.createElement('li');
    li.textContent='• '+item;
    el.appendChild(li);
  });
}

function updateTestimonials(){
  const items=testimonials[lang];
  document.getElementById('testimonial-text').textContent=items[tIndex][0];
  document.getElementById('testimonial-author').textContent=items[tIndex][1];
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===tIndex));
}

function applyLang(){
  const d=data[lang];
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(d[key]) el.textContent=d[key];
  });
  fillList('basicItems',d.basicItems);
  fillList('perfItems',d.perfItems);
  fillList('premiumItems',d.premiumItems);
  fillList('customItems',d.customItems);
  document.getElementById('whatsappFloat').href='https://wa.me/33650858622?text='+encodeURIComponent(d.whatsapp);
  document.querySelectorAll('#lang-switch button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  tIndex=0;
  updateTestimonials();
}

function applyCurrency(){
  document.querySelectorAll('.price[data-price]').forEach(el=>{
    el.textContent=formatPrice(Number(el.dataset.price));
  });
  document.querySelectorAll('#currency-switch button').forEach(b=>b.classList.toggle('active',b.dataset.currency===currency));
}

document.querySelectorAll('#lang-switch button').forEach(btn=>{
  btn.addEventListener('click',()=>{lang=btn.dataset.lang;applyLang();});
});
document.querySelectorAll('#currency-switch button').forEach(btn=>{
  btn.addEventListener('click',()=>{currency=btn.dataset.currency;applyCurrency();});
});

setInterval(()=>{
  tIndex=(tIndex+1)%3;
  updateTestimonials();
},4000);

const popup=document.getElementById('ytPopup');
const frame=document.getElementById('ytFrame');
const closeBtn=document.getElementById('ytClose');

document.querySelectorAll('.sample-link').forEach(btn=>{
  btn.addEventListener('click',e=>{
    e.preventDefault();
    const url=btn.dataset.video;
    frame.src=url+"&autoplay=1";
    popup.style.display='flex';
  });
});

closeBtn.addEventListener('click',()=>{
  popup.style.display='none';
  frame.src='';
});

popup.addEventListener('click',e=>{
  if(e.target===popup){
    popup.style.display='none';
    frame.src='';
  }
});

applyLang();
applyCurrency();
