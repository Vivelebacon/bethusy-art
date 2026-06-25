/* ===== gallery data (images served live from bethusy-art.ch) ===== */
const U = "https://www.bethusy-art.ch/wp-content/uploads/2025/03/";
const U24 = "https://www.bethusy-art.ch/wp-content/uploads/2024/11/";
const CATS = [
  ["all","Tout"],["cuisines","Cuisines"],["sdb","Salles de bain"],["verrieres","Verrières"],
  ["dressings","Dressings & Armoires"],["claustras","Claustras"],["escaliers","Escaliers"],["ambiances","Ambiances"]
];
const G = [
  {c:"ambiances",w:1,s:U24+"Dining_room_with_modern_wooden_furniture-1000x700.jpg",a:"Salle à manger en bois moderne"},
  {c:"ambiances",w:1,s:U+"Restaurent-MORGE-dec.-2021-7-1000x700.jpg",a:"Restaurant à Morges"},
  {c:"ambiances",w:0,s:U+"Restaurent-MORGE-dec.-2021-9-1000x700.jpg",a:"Restaurant à Morges"},
  {c:"ambiances",w:0,s:U+"Restaurent-MORGE-dec.-2021-5-1000x700.jpg",a:"Restaurant à Morges"},
  {c:"ambiances",w:0,s:U+"263692372_1103336513537336_6531073479879261681_n-1000x700.jpg",a:"Ambiance intérieure sur mesure"},
  {c:"cuisines",w:0,s:U+"cuisine-marbre-luxe-lausanne.jpg-2-648x700.png",a:"Cuisine marbre luxe Lausanne"},
  {c:"cuisines",w:0,s:U+"cuisine-ilot-central-quartz-sur-mesure-lux.jpg-648x700.png",a:"Cuisine îlot central quartz"},
  {c:"cuisines",w:0,s:U+"renovation-cuisine-ilot-central-quartz-sur-mesure-lux.jpg-1-648x700.png",a:"Rénovation cuisine îlot quartz"},
  {c:"cuisines",w:0,s:U+"renovation-cuisine-ilot-central-quartz-sur-mesure-lux.jpg-648x700.png",a:"Rénovation cuisine îlot quartz"},
  {c:"cuisines",w:0,s:U+"renovation-cuisine-sur-mesure-lux.jpg-1-648x700.png",a:"Rénovation cuisine sur mesure"},
  {c:"cuisines",w:0,s:U+"architecte-interieur-lausanne-cuisine-sur-mesure-luxe-exclusif.jpg-648x700.png",a:"Cuisine sur mesure luxe exclusif"},
  {c:"cuisines",w:0,s:U+"cuisine-ouverte-ilot-central-blanche-lausanne.jpg-648x700.png",a:"Cuisine ouverte îlot central blanche"},
  {c:"cuisines",w:0,s:U+"cuisine-moderne-sur-mesure-lausanne-01.jpg-648x700.png",a:"Cuisine moderne sur mesure"},
  {c:"cuisines",w:0,s:U+"cuisine-moderne-sur-mesure-lausanne.jpg-648x700.png",a:"Cuisine moderne sur mesure"},
  {c:"cuisines",w:0,s:U+"architecte-interieur-lausanne-cuisine-sur-mesure-luxe-bois-marbre.jpg-648x700.png",a:"Cuisine sur mesure bois & marbre"},
  {c:"cuisines",w:0,s:U+"cuisine-blanche-bois-chene-lausanne.jpg-648x700.png",a:"Cuisine blanche bois de chêne"},
  {c:"cuisines",w:0,s:U+"architecte-interieur-lausanne-cuisine-sur-mesure-luxe.jpg-648x700.png",a:"Cuisine sur mesure luxe"},
  {c:"cuisines",w:0,s:U+"cuisine-ouverte-ilot-central-lausanne.jpg-648x700.png",a:"Cuisine ouverte îlot central"},
  {c:"cuisines",w:0,s:U+"cuisine-marbre-luxe-lausanne.jpg-648x700.png",a:"Cuisine marbre luxe"},
  {c:"cuisines",w:0,s:U+"cuisine-bois-chene-quartz-lausanne.jpg-648x700.png",a:"Cuisine bois de chêne & quartz"},
  {c:"cuisines",w:0,s:U+"cuisine-design-bois-anthracite-sur-mesure.jpg-648x700.png",a:"Cuisine design bois anthracite"},
  {c:"sdb",w:0,s:U+"salle-de-bain-industrielle-sur-mesure-lausanne.jpg-648x700.png",a:"Salle de bain industrielle sur mesure"},
  {c:"sdb",w:0,s:U+"salle-de-bain-avec-douche-italienne-lausanne.jpg-648x700.png",a:"Salle de bain douche italienne"},
  {c:"sdb",w:0,s:U+"salle-de-bain-carrelage-contemporain-lausanne.jpg-648x700.png",a:"Salle de bain carrelage contemporain"},
  {c:"sdb",w:0,s:U+"salle-de-bain-classique-sur-mesure-lausanne.jpg-648x700.png",a:"Salle de bain classique sur mesure"},
  {c:"sdb",w:0,s:U+"renovation-salle-de-bain-sur-mesure-lausanne.jpg-648x700.png",a:"Rénovation salle de bain sur mesure"},
  {c:"sdb",w:0,s:U+"wc-design-carrelage-graphique-noir-lausanne.jpg-648x700.png",a:"WC design carrelage graphique noir"},
  {c:"sdb",w:0,s:U+"salle-de-bain-bois-naturel-carrelage-sur-mesure.jpg-648x700.png",a:"Salle de bain bois naturel"},
  {c:"verrieres",w:0,s:U+"verriere-separation-cuisine-mi-hauteur-lausanne.jpg-648x700.png",a:"Verrière séparation cuisine mi-hauteur"},
  {c:"verrieres",w:0,s:U+"verriere-design-cuisine-sur-mesure.jpg-648x700.png",a:"Verrière design cuisine sur mesure"},
  {c:"verrieres",w:0,s:U+"verriere-elegante-blanche-art-nouveau-interieur.jpg-648x700.png",a:"Verrière élégante blanche art nouveau"},
  {c:"verrieres",w:0,s:U+"verriere-moderne-cuisine-lausanne.jpg-648x700.png",a:"Verrière moderne cuisine"},
  {c:"verrieres",w:0,s:U+"verriere-separation-interieure-sur-mesure.jpg-648x700.png",a:"Verrière séparation intérieure"},
  {c:"verrieres",w:0,s:U+"porte-verriere-metal-noir-sur-mesure.jpg-648x700.png",a:"Porte verrière métal noir"},
  {c:"verrieres",w:0,s:U+"verriere-porte-noir-metal-pivot-sur-mesure.jpg-648x700.png",a:"Verrière porte noire métal pivot"},
  {c:"dressings",w:0,s:U+"dressing-moderne-verre-noir-led-metal-sur-mesure.jpg-648x700.png",a:"Dressing moderne verre noir LED"},
  {c:"dressings",w:0,s:U+"dressing-moderne-verre-noir-led-sur-mesure.jpg-648x700.png",a:"Dressing moderne verre noir LED"},
  {c:"dressings",w:0,s:U+"dressing-industriel-verre-noir-led-sur-mesure.jpg-648x700.png",a:"Dressing industriel verre noir LED"},
  {c:"dressings",w:0,s:U+"dressing-sous-combles-modules-sur-rail-lausanne.jpg-648x700.png",a:"Dressing sous combles sur rail"},
  {c:"dressings",w:0,s:U+"armoire-sous-pente-sur-mesure-rail-lausanne.jpg-648x700.png",a:"Armoire sous pente sur mesure"},
  {c:"dressings",w:0,s:U+"armoire-sur-mesure-beige-blanc-romantique-lausanne.jpg-648x700.png",a:"Armoire beige blanc romantique"},
  {c:"dressings",w:0,s:U+"armoire-elegante-bois-anthracite-sur-mesure.jpg-648x700.png",a:"Armoire élégante bois anthracite"},
  {c:"dressings",w:0,s:U+"meuble-tv-sur-mesure-bibliotheque-moderne.jpg-648x700.png",a:"Meuble TV bibliothèque moderne"},
  {c:"claustras",w:0,s:U+"claustra-bois-sur-mesure-lausanne.jpg-648x700.png",a:"Claustra bois sur mesure"},
  {c:"claustras",w:0,s:U+"claustra-bois-separation-interieure-lausanne.jpg-648x700.png",a:"Claustra bois séparation intérieure"},
  {c:"claustras",w:0,s:U+"claustra-bois-moderne-sur-mesure.jpg-648x700.png",a:"Claustra bois moderne"},
  {c:"claustras",w:0,s:U+"claustra-bois-design-sur-mesure-lausanne.jpg-648x700.png",a:"Claustra bois design sur mesure"},
  {c:"escaliers",w:0,s:U+"escalier-colimacon-beton-cire-minimaliste-lausanne.jpg-648x700.png",a:"Escalier colimaçon béton ciré minimaliste"},
  {c:"escaliers",w:0,s:U+"escalier-colimacon-beton-cire-moderne-sur-mesure.jpg-648x700.png",a:"Escalier colimaçon béton ciré moderne"},
  {c:"escaliers",w:0,s:U+"escalier-design-beton-cire-colimacon-interieur.jpg-648x700.png",a:"Escalier design béton ciré"},
  {c:"escaliers",w:0,s:U+"escalier-industriel-bois-metal-lausanne.jpg-648x700.png",a:"Escalier industriel bois & métal"},
  {c:"escaliers",w:1,s:U24+"Large_open_living_room_with_staircase-1000x700.jpg",a:"Grand séjour ouvert avec escalier"}
];

/* ===== build filters + grid ===== */
const filtersEl=document.getElementById("filters"), gridEl=document.getElementById("grid");
if(gridEl && filtersEl){
CATS.forEach((c,i)=>{const b=document.createElement("button");b.textContent=c[1];b.dataset.cat=c[0];if(i===0)b.classList.add("active");filtersEl.appendChild(b);});
function buildGrid(cat){
  gridEl.innerHTML="";
  const items=G.filter(g=>cat==="all"||g.c===cat);
  items.forEach((g,i)=>{
    const t=document.createElement("div");t.className="tile"+(g.w?" wide":"");t.dataset.i=i;
    t.innerHTML=`<img src="${g.s}" alt="${g.a}" loading="lazy"><div class="plus">+</div><div class="cap"><span>${g.a}</span></div>`;
    t.addEventListener("click",()=>openLb(items,i));
    gridEl.appendChild(t);
  });
  if(window.gsap){gsap.fromTo(".tile",{opacity:0,y:24},{opacity:1,y:0,duration:.6,stagger:.035,ease:"power2.out",overwrite:true});}
  if(window.ScrollTrigger)ScrollTrigger.refresh();
}
filtersEl.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
  filtersEl.querySelectorAll("button").forEach(x=>x.classList.remove("active"));b.classList.add("active");buildGrid(b.dataset.cat);});
buildGrid("all");

/* ===== lightbox ===== */
const lb=document.getElementById("lb"),lbImg=document.getElementById("lbImg"),lbCap=document.getElementById("lbCap");
let lbList=[],lbIdx=0;
function openLb(list,i){lbList=list;lbIdx=i;showLb();lb.classList.add("open");lb.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function showLb(){const g=lbList[lbIdx];lbImg.src=g.s;lbImg.alt=g.a;lbCap.textContent=g.a;}
function closeLb(){lb.classList.remove("open");lb.setAttribute("aria-hidden","true");document.body.style.overflow="";}
function lbNav(d){lbIdx=(lbIdx+d+lbList.length)%lbList.length;showLb();}
document.getElementById("lbClose").onclick=closeLb;
document.getElementById("lbPrev").onclick=()=>lbNav(-1);
document.getElementById("lbNext").onclick=()=>lbNav(1);
lb.addEventListener("click",e=>{if(e.target===lb)closeLb();});
document.addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;
  if(e.key==="Escape")closeLb();if(e.key==="ArrowRight")lbNav(1);if(e.key==="ArrowLeft")lbNav(-1);});
} // end gallery + lightbox guard

/* ===== services accordion ===== */
document.querySelectorAll(".svc").forEach(svc=>{
  const bar=svc.querySelector(".svc-bar"),panel=svc.querySelector(".svc-panel");
  if(svc.classList.contains("open"))panel.style.maxHeight=panel.scrollHeight+"px";
  bar.addEventListener("click",()=>{
    const isOpen=svc.classList.contains("open");
    document.querySelectorAll(".svc").forEach(s=>{s.classList.remove("open");s.querySelector(".svc-panel").style.maxHeight="0px";});
    if(!isOpen){svc.classList.add("open");panel.style.maxHeight=panel.scrollHeight+"px";}
    setTimeout(()=>{if(window.ScrollTrigger)ScrollTrigger.refresh();},620);
  });
});
window.addEventListener("resize",()=>{const o=document.querySelector(".svc.open .svc-panel");if(o)o.style.maxHeight=o.scrollHeight+"px";});

/* ===== contact form (mailto fallback) ===== */
const cform=document.getElementById("cform");
if(cform) cform.addEventListener("submit",e=>{
  e.preventDefault();const f=e.target;
  const body=encodeURIComponent(`Nom: ${f.nom.value}\nEmail: ${f.email.value}\nSujet: ${f.sujet.value}\n\n${f.message.value}`);
  window.location.href=`mailto:info@bethusy-art.ch?subject=${encodeURIComponent("Demande projet - "+(f.sujet.value||f.nom.value))}&body=${body}`;
});

/* ===== nav state + mobile menu ===== */
const nav=document.getElementById("nav");
const onScroll=()=>{nav.classList.toggle("solid",window.scrollY>window.innerHeight*0.7);};
onScroll();window.addEventListener("scroll",onScroll,{passive:true});
const burger=document.getElementById("burger"),mmenu=document.getElementById("mmenu");
burger.addEventListener("click",()=>{mmenu.classList.toggle("open");document.body.style.overflow=mmenu.classList.contains("open")?"hidden":"";});
mmenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mmenu.classList.remove("open");document.body.style.overflow="";}));

/* ===== preloader ===== */
const reduced=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
function revealAll(){document.querySelectorAll(".reveal").forEach(e=>{e.style.opacity="1";e.style.transform="none";});}
function startSite(){document.body.classList.remove("loading");if(window.gsap){initMotion();}else{revealAll();}}
// safety net: if a CDN (GSAP/Lenis) is blocked or slow, never leave content hidden
setTimeout(()=>{if(!window.gsap){const p=document.getElementById("pre");if(p)p.style.display="none";document.body.classList.remove("loading");revealAll();}},2600);
(function preload(){
  const seen=sessionStorage.getItem("ba_seen");
  const pre=document.getElementById("pre"),curtain=document.getElementById("preCurtain");
  if(seen||reduced||!window.gsap){if(pre)pre.style.display="none";startSite();return;}
  const bar=document.getElementById("preBar"),num=document.getElementById("preNum"),pm=document.querySelector("#pmText span");
  let p={v:0};
  gsap.to(pm,{y:0,duration:.9,ease:"power3.out"});
  gsap.to(p,{v:100,duration:1.15,ease:"power1.inOut",delay:.15,
    onUpdate:()=>{bar.style.transform=`scaleX(${p.v/100})`;num.textContent=Math.round(p.v);},
    onComplete:()=>{
      gsap.to(pre,{opacity:0,duration:.5,delay:.1,ease:"power2.out",
        onComplete:()=>{pre.style.display="none";sessionStorage.setItem("ba_seen","1");startSite();}});
    }});
})();

/* ===== motion (GSAP + Lenis) ===== */
function initMotion(){
  gsap.registerPlugin(ScrollTrigger);
  // Lenis smooth scroll
  let lenis;
  if(!reduced && window.Lenis){
    lenis=new Lenis({duration:1.1,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});
    lenis.on("scroll",ScrollTrigger.update);
    gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);
  }
  // anchor smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",e=>{const id=a.getAttribute("href");if(id.length<2)return;
      const el=document.querySelector(id);if(!el)return;e.preventDefault();
      if(lenis)lenis.scrollTo(el,{offset:-10,duration:1.2});else el.scrollIntoView({behavior:"smooth"});});
  });

  if(reduced){const c=document.getElementById("heroCurtains");if(c)c.style.display="none";return;}

  // hero entrance: dreamcore curtains lift, then content reveals
  const curtainSpans=gsap.utils.toArray("#heroCurtains span");
  const h1lines=document.querySelectorAll("#heroH1 .ln");
  gsap.set(h1lines,{yPercent:115});
  const heroTl=gsap.timeline({delay:.05});
  heroTl.to(curtainSpans,{yPercent:-100,duration:1.15,stagger:.09,ease:"power4.inOut",
            onComplete:()=>{const c=document.getElementById("heroCurtains");if(c)c.style.display="none";}})
    .to(h1lines,{yPercent:0,duration:1.1,stagger:.12,ease:"power4.out"},"-=0.65")
    .from(".hero .eyebrow",{opacity:0,y:18,duration:.7},"-=0.95")
    .from(".hero .side",{opacity:0,duration:.9,stagger:.12},"-=0.85")
    .from(".hero .frame",{opacity:0,scale:1.05,duration:1,ease:"power2.out"},"-=0.95")
    .from(".hero p.lead",{opacity:0,y:22,duration:.8},"-=0.7")
    .from(".hero-cta .btn",{opacity:0,y:22,duration:.7,stagger:.1},"-=0.6")
    .from(".scrollcue",{opacity:0,y:10,duration:.6},"-=0.3");

  // 3D depth: mouse-driven parallax (bg sits deep, content sits forward)
  const heroEl=document.getElementById("hero"), stage=document.getElementById("hero3d");
  gsap.set("#heroBg",{z:-180,scale:1.34,transformOrigin:"50% 50%"});
  if(stage && window.matchMedia("(pointer:fine)").matches){
    gsap.set(stage,{transformPerspective:1400,transformOrigin:"50% 50%"});
    const ry=gsap.quickTo(stage,"rotationY",{duration:.9,ease:"power3"});
    const rx=gsap.quickTo(stage,"rotationX",{duration:.9,ease:"power3"});
    heroEl.addEventListener("pointermove",e=>{
      const r=heroEl.getBoundingClientRect();
      const nx=(e.clientX-r.left)/r.width-.5, ny=(e.clientY-r.top)/r.height-.5;
      ry(nx*6); rx(-ny*4.5);
    });
    heroEl.addEventListener("pointerleave",()=>{ry(0);rx(0);});
  }
  // very slow, subtle breathing zoom (no jitter: GPU transform on a static image)
  gsap.to("#heroBg",{scale:1.4,duration:22,ease:"sine.inOut",repeat:-1,yoyo:true});

  // hero parallax on scroll (content drifts up + fades)
  gsap.to(".hero-inner",{yPercent:-6,opacity:.5,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});

  // inner-page banner parallax (no-op on home)
  gsap.to(".page-hero .ph-bg",{yPercent:16,ease:"none",scrollTrigger:{trigger:".page-hero",start:"top top",end:"bottom top",scrub:true}});
  gsap.utils.toArray(".page-hero .ph-inner").forEach(el=>{
    const lines=el.querySelectorAll("h1, .crumb, p");
    gsap.from(lines,{opacity:0,y:24,duration:.9,stagger:.1,ease:"power3.out",delay:.1});
  });

  // generic reveals
  gsap.utils.toArray(".reveal").forEach(el=>{
    gsap.fromTo(el,{opacity:0,y:34},{opacity:1,y:0,duration:.9,ease:"power3.out",
      scrollTrigger:{trigger:el,start:"top 86%"}});
  });

  // split section headings
  if(window.SplitText) document.querySelectorAll(".sec-head h2").forEach(h=>{
    const sp=new SplitText(h,{type:"lines",linesClass:"sline"});
    gsap.set(sp.lines,{overflow:"hidden"});
    gsap.from(sp.lines,{yPercent:110,opacity:0,duration:1,stagger:.1,ease:"power4.out",
      scrollTrigger:{trigger:h,start:"top 85%"}});
  });

  // steps stagger
  gsap.from(".step",{opacity:0,y:26,duration:.7,stagger:.08,ease:"power2.out",
    scrollTrigger:{trigger:".steps",start:"top 80%"}});

  // marquee loop
  const track=document.getElementById("marquee");
  if(track){
    track.innerHTML+=track.innerHTML;
    gsap.to(track,{xPercent:-50,duration:26,ease:"none",repeat:-1});
  }

  // quote band parallax
  gsap.to("#qbg",{yPercent:12,ease:"none",scrollTrigger:{trigger:".quoteband",start:"top bottom",end:"bottom top",scrub:true}});
  gsap.from(".quoteband blockquote",{opacity:0,y:30,duration:1,ease:"power3.out",scrollTrigger:{trigger:".quoteband",start:"top 70%"}});

  // courses + footer
  ScrollTrigger.refresh();
}
