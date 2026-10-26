import{n as e,r as t,t as n}from"./index-B9M5EMSq.js";var r=t(e(),1),i=n();
function ConfettiCanvas(){
  let cRef=(0,r.useRef)(null);
  (0,r.useEffect)(()=>{
    let c=cRef.current;if(!c)return;
    let ctx=c.getContext("2d");if(!ctx)return;
    let animId,w=0,h=0,dpr=1,particles=[];
    let palette=["#D4AF37","#F3E5AB","#C5A059","#FFD700","#F4B6B6","#E8998D","#F8D7DA","#FFF8EE","#F5E6CC"];
    function resize(){
      dpr=Math.min(window.devicePixelRatio||1,2);
      let p=c.parentElement;
      w=p?p.offsetWidth:window.innerWidth;
      h=p?p.offsetHeight:window.innerHeight;
      c.width=w*dpr;c.height=h*dpr;
      c.style.width=w+"px";c.style.height=h+"px";
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    resize();
    window.addEventListener("resize",resize);
    function spawn(x,y,burst){
      let size=burst?(5+Math.random()*6):(4+Math.random()*5);
      return{
        x:x??Math.random()*w,
        y:y??(-15-Math.random()*40),
        size,
        color:palette[Math.floor(Math.random()*palette.length)],
        isPetal:Math.random()>.4,
        vx:(Math.random()-.5)*(burst?4.5:1.1),
        vy:burst?(-2.5-Math.random()*3.5):(1.1+Math.random()*1.5),
        gravity:.032+Math.random()*.028,
        tilt:Math.random()*Math.PI,
        tiltSpeed:.025+Math.random()*.04,
        wobble:Math.random()*Math.PI*2,
        wobbleSpeed:.02+Math.random()*.035,
        opacity:.85+Math.random()*.15,
        rot:Math.random()*Math.PI*2,
        rotSpeed:(Math.random()-.5)*.04
      };
    }
    for(let i=0;i<30;i++){let p=spawn();p.y=Math.random()*h;particles.push(p)}
    let lastT=0;
    function tick(time){
      ctx.clearRect(0,0,w,h);
      if(particles.length<48&&time-lastT>200){
        particles.push(spawn());
        lastT=time;
      }
      for(let i=particles.length-1;i>=0;i--){
        let p=particles[i];
        p.vy+=p.gravity;
        p.x+=p.vx+Math.sin(p.wobble)*.75;
        p.y+=p.vy;
        p.wobble+=p.wobbleSpeed;
        p.tilt+=p.tiltSpeed;
        p.rot+=p.rotSpeed;
        let cosT=Math.cos(p.tilt);
        let curH=p.size*Math.abs(cosT);
        ctx.save();
        ctx.translate(p.x,p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha=p.opacity;
        ctx.fillStyle=p.color;
        if(p.isPetal){
          ctx.beginPath();
          ctx.ellipse(0,0,p.size*.7,curH*.9,Math.PI/4,0,Math.PI*2);
          ctx.fill();
        }else{
          ctx.fillRect(-p.size/2,-curH/2,p.size,curH);
        }
        ctx.restore();
        if(p.y>h+25||p.x<-35||p.x>w+35){
          particles.splice(i,1);
        }
      }
      animId=requestAnimationFrame(tick);
    }
    animId=requestAnimationFrame(tick);
    function onPointer(e){
      let r=c.getBoundingClientRect();
      let px=e.clientX-r.left,py=e.clientY-r.top;
      for(let i=0;i<14;i++)particles.push(spawn(px,py,!0));
    }
    let p=c.parentElement;
    if(p)p.addEventListener("pointerdown",onPointer);
    return()=>{
      cancelAnimationFrame(animId);
      window.removeEventListener("resize",resize);
      if(p)p.removeEventListener("pointerdown",onPointer);
    };
  },[]);
  return (0,i.jsx)("canvas",{ref:cRef,className:"pointer-events-none absolute inset-0 z-30 h-full w-full","aria-hidden":"true"});
}
function a({children:e}){
  return(0,i.jsxs)("div",{className:"relative",children:[
    e,
    (0,i.jsx)(ConfettiCanvas,{})
  ]});
}

function o(e=.15){
  let t=(0,r.useRef)(null),[n,i]=(0,r.useState)(!1);
  return(0,r.useEffect)(()=>{
    let n=t.current;if(!n)return;
    let r=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(i(!0),r.disconnect())},{threshold:e,rootMargin:"0px 0px -8% 0px"});
    return r.observe(n),()=>r.disconnect()
  },[e]),{ref:t,visible:n}
}

function s(e=.35){return 0}

var _w=window.WEDDING_DATA||{},_wc=_w.couple||{},_ww=_w.wedding||{},_wv=_w.venue||{},_wi=_w.images||{},_we=_w.eventDates||{},_wf=_w.family||{},_wm=_w.music||{},_wft=_w.footer||{};

var c={
  bride:_wc.bride??"Dr. Pallavi Purohit",
  groom:_wc.groom??"Dr. Sarvesh Kumar Singh",
  shortBride:_wc.shortBride??"Pallavi",
  shortGroom:_wc.shortGroom??"Sarvesh",
  tagline:_wc.tagline??"#FromOTTableToWeddingVows",
  hashtag:_wc.hashtag??"#FromOTTableToWeddingVows",
  dateLabel:_ww.dateLabel??"9 December 2026",
  weddingISO:_ww.weddingISO??"2026-12-09T18:30:00+05:30",
  story:_wc.story??"From saving lives side-by-side in the Operation Theatre to uniting their hearts in sacred wedding vows, two compassionate doctors begin their journey of life."
};

var l=_w.events??[
  {
    name:"Wedding & Reception",
    day:"Wednesday, 9 Dec 2026",
    glyph:"💍",
    date:"9 Dec 2026",
    time:"6:30 PM onwards",
    venue:"Garden Area (Varmala & Wedding)",
    dressCode:"Traditional Indian",
    subEvents:[
      {label:"Celebration begins",time:"6:30 PM onwards",venue:"Empires Beachfront"},
      {label:"Varmala",time:"8:00 PM",venue:"Garden Area"},
      {label:"Wedding Ceremony",time:"10:30 PM",venue:"Garden Area"}
    ],
    caricature:"./editable/assets/caricature-wedding.jpg"
  }
];

var u={
  name:_wv.name??"Empires Beachfront",
  address:_wv.address??"New Marine Drive Road, Sipasarubali, Baliapanda, Puri, Odisha 752001",
  mapsUrl:_wv.mapsUrl??"https://share.google/67zNSpffo3mrQLxCX",
  searchMapsUrl:_wv.searchMapsUrl??"https://www.google.com/maps/search/?api=1&query=Empires+Beachfront,+Puri"
};

function d(e){return`${e.toISOString().replace(/[-:]/g,"").slice(0,15)}Z`}

function f(){
  let e=["BEGIN:VCALENDAR","VERSION:2.0",`PRODID:-//${c.shortBride??"Pallavi"} & ${c.shortGroom??"Sarvesh"}//Wedding//EN`],
      t=_we??{};
  for(let n of l){
    let r=new Date(t[n.name]??c.weddingISO),i=new Date(r.getTime()+108e5);
    e.push("BEGIN:VEVENT",`UID:${n.name.toLowerCase().replace(/[^a-z0-9]/g,"")}-wedding@invitestory`,`DTSTAMP:${d(new Date)}`,`DTSTART:${d(r)}`,`DTEND:${d(i)}`,`SUMMARY:${n.name} | ${c.shortBride??"Pallavi"} & ${c.shortGroom??"Sarvesh"}`,`LOCATION:${n.venue}, ${u.name}`,`DESCRIPTION:${n.note} | Dress Code: ${n.dressCode}`,"END:VEVENT")
  }
  return e.push("END:VCALENDAR"),e.join("\r\n")
}

function p(){
  let e=new Blob([f()],{type:"text/calendar;charset=utf-8"}),
      t=URL.createObjectURL(e),
      n=document.createElement("a");
  n.href=t,n.download="pallavi-sarvesh-wedding.ics",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)
}

function startAudioMusic(){
  try{
    let e=window.__bgAudio;
    if(!e){
      e=new Audio(_wm.src??"./editable/assets/bg-music.mp3");
      e.loop=!0;
      window.__bgAudio=e;
    }
    if(e.paused){
      e.currentTime=_wm.startTime??23.0;
      e.play().catch(()=>{});
    }
  }catch(t){}
}

function MusicToggle(){
  let[t,n]=(0,r.useState)(!1);
  (0,r.useEffect)(()=>{
    let e=window.__bgAudio;
    if(!e){
      e=new Audio(_wm.src??"./editable/assets/bg-music.mp3");
      e.loop=!0;
      window.__bgAudio=e;
    }
    let o=()=>{n(!e.paused)};
    return e.addEventListener("play",o),e.addEventListener("pause",o),()=>{e.removeEventListener("play",o);e.removeEventListener("pause",o)}
  },[]);
  function o(e){
    e.stopPropagation();
    let a=window.__bgAudio;
    if(!a)return;
    if(a.paused){
      if(a.currentTime<22)a.currentTime=_wm.startTime??23.0;
      a.play().catch(()=>{});
    }else{
      a.pause();
    }
  }
  return(0,i.jsx)("button",{
    type:"button",
    onClick:o,
    className:"fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground music-toggle transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none",
    "aria-label":t?"Pause background music":"Play background music",
    children:(0,i.jsx)("span",{className:t?"animate-spin text-lg inline-block":"text-lg inline-block",style:{animationDuration:"3.5s"},children:t?"🎶":"🔇"})
  })
}

var m=_wi.hero??"./editable/assets/hero-arch.jpg",
    h="external/media.invitestory.in/seashell-vows/src/assets/floral-spray.png",
    g=_wi.couple??"./editable/assets/couple-walking.png",
    ganeshIcon=_wi.ganeshJi??"./editable/assets/ganesh-ji.png";

function _(){
  let e=s(.35),t=s(.12);
  return(0,i.jsx)(a,{children:(0,i.jsxs)("header",{className:"relative min-h-[100svh] overflow-hidden paper",children:[
    (0,i.jsxs)("div",{className:"absolute inset-x-0 top-0 h-[78svh]",style:{transform:`translate3d(0, ${e}px, 0)`,willChange:"transform"},children:[
      (0,i.jsx)("img",{src:m,alt:"Watercolor beach wedding arch at sunset",width:1024,height:1536,className:"h-full w-full object-cover object-top animate-bloom"}),
      (0,i.jsx)("div",{className:"absolute inset-0",style:{background:"var(--gradient-veil)"}})
    ]}),
    (0,i.jsxs)("div",{className:"absolute top-5 inset-x-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-4",children:[
      (0,i.jsx)("img",{src:ganeshIcon,alt:"Lord Ganesha",width:140,height:140,className:"mx-auto h-14 w-14 object-contain ganesh-glow drop-shadow-md animate-bloom"}),
      (0,i.jsx)("p",{className:"mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-primary drop-shadow-sm animate-ink",style:{animationDelay:"0.3s"},children:"॥ श्री गणेशाय नमः ॥"})
    ]}),
    (0,i.jsx)("img",{src:h,alt:"","aria-hidden":"true",width:1024,height:1024,className:"pointer-events-none absolute -left-10 top-12 w-36 opacity-70 animate-float-soft",style:{transform:`translate3d(0, ${e*.5}px, 0)`}}),
    (0,i.jsx)("img",{src:h,alt:"","aria-hidden":"true",width:1024,height:1024,className:"pointer-events-none absolute -right-12 top-24 w-32 -scale-x-100 opacity-60 animate-float-soft",style:{animationDelay:"1.4s",transform:`translate3d(0, ${e*.35}px, 0)`}}),
    (0,i.jsx)("img",{src:g,alt:"Dr. Pallavi and Dr. Sarvesh walking hand in hand",width:1024,height:1536,className:"hero-couple pointer-events-none absolute inset-x-0 mx-auto object-contain animate-bloom drop-shadow-[0_18px_28px_rgba(92,80,68,0.18)]",style:{transform:`translate3d(0, ${-t*.6}px, 0)`}}),
    (0,i.jsxs)(`div`,{className:"relative flex min-h-[100svh] flex-col items-center justify-end px-6 pb-10 text-center",style:{transform:`translate3d(0, ${-t}px, 0)`},children:[
      (0,i.jsx)("p",{className:"script text-xl sm:text-2xl text-primary font-semibold animate-ink drop-shadow-sm",style:{animationDelay:"0.45s"},children:_wc.invitationPreamble??"Together with our families,"}),
      (0,i.jsx)("p",{className:"mt-1 max-w-xs text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed tracking-wide animate-ink drop-shadow-xs",style:{animationDelay:"0.55s"},children:_wc.invitationSubtitle??"We invite you to bless us and celebrate our wedding"}),
      (0,i.jsxs)("h1",{className:"mt-2 font-display text-[2.5rem] sm:text-[3.25rem] leading-[1.04] text-foreground font-semibold animate-ink drop-shadow-sm",style:{animationDelay:"0.7s"},children:[
        _wc.heroBride??"Dr. Pallavi",
        (0,i.jsx)("span",{className:"script mx-2 block text-2xl text-primary font-normal",children:"&"}),
        _wc.heroGroom??"Dr. Sarvesh"
      ]}),
      (0,i.jsx)("p",{className:"mt-3 text-[0.82rem] sm:text-[0.9rem] uppercase tracking-[0.26em] text-foreground font-semibold animate-ink drop-shadow-xs",style:{animationDelay:"0.9s"},children:c.dateLabel}),
      (0,i.jsx)("p",{className:"mt-1.5 text-[0.8rem] sm:text-[0.88rem] uppercase tracking-[0.22em] text-foreground/90 font-semibold animate-ink drop-shadow-xs",style:{animationDelay:"1.1s"},children:`${u.name.replace(/,\s*Puri/i, "")} · Puri, Odisha`})
    ]})
  ]})})
}

function v(e){
  let t=(0,r.useMemo)(()=>new Date(e).getTime(),[e]),[n,i]=(0,r.useState)(()=>Date.now());
  (0,r.useEffect)(()=>{let e=setInterval(()=>i(Date.now()),1e3);return()=>clearInterval(e)},[]);
  let a=Math.max(0,t-n);
  return{days:Math.floor(a/864e5),hours:Math.floor(a/36e5%24),minutes:Math.floor(a/6e4%60),seconds:Math.floor(a/1e3%60)}
}

function y({value:e,label:t}){
  let n=String(e).padStart(2,"0"),a=(0,r.useRef)(n),[o,s]=(0,r.useState)(0);
  return(0,r.useEffect)(()=>{a.current!==n&&(a.current=n,s(e=>e+1))},[n]),
  (0,i.jsxs)("div",{className:"flex flex-1 flex-col items-center gap-2",children:[
    (0,i.jsxs)("div",{className:"relative w-full overflow-hidden card-soft px-1 py-3",style:{perspective:"320px"},children:[
      (0,i.jsx)("span",{className:"block origin-top text-center font-display text-[1.9rem] leading-none text-foreground",style:{animation:"flip-in 520ms cubic-bezier(.22,1,.36,1)"},children:n},o),
      (0,i.jsx)("span",{className:"pointer-events-none absolute inset-x-0 top-1/2 h-px bg-primary/25"})
    ]}),
    (0,i.jsx)("span",{className:"text-[0.55rem] uppercase tracking-airy text-muted-foreground",children:t})
  ]})
}

function b({iso:e}){
  let t=v(e);
  return(0,i.jsxs)("div",{className:"flex items-start gap-2",children:[
    (0,i.jsx)(y,{value:t.days,label:"Days"}),
    (0,i.jsx)(y,{value:t.hours,label:"Hrs"}),
    (0,i.jsx)(y,{value:t.minutes,label:"Min"}),
    (0,i.jsx)(y,{value:t.seconds,label:"Sec"})
  ]})
}

function x({children:e,delay:t=0,className:n=""}){
  let{ref:r,visible:a}=o();
  return(0,i.jsx)("div",{ref:r,"data-visible":a,className:`reveal ${n}`,style:{transitionDelay:`${t}ms`},children:e})
}

function S({label:e}){
  return(0,i.jsxs)("div",{className:"flex items-center justify-center gap-3 py-6 text-primary/70",children:[
    (0,i.jsx)("span",{className:"h-px w-14 bg-gradient-to-r from-transparent to-primary/50"}),
    (0,i.jsx)("span",{className:"text-[0.7rem] tracking-airy",children:e??"❖"}),
    (0,i.jsx)("span",{className:"h-px w-14 bg-gradient-to-l from-transparent to-primary/50"})
  ]})
}

function C({overline:e,title:t}){
  return(0,i.jsxs)("div",{className:"text-center",children:[
    (0,i.jsx)("p",{className:"text-[0.62rem] uppercase tracking-airy text-muted-foreground",children:e}),
    (0,i.jsx)("h2",{className:"mt-3 font-display text-[2rem] leading-tight text-foreground",children:t}),
    (0,i.jsx)(S,{})
  ]})
}

/* Bride Intro FIRST then Groom Intro */
function CoupleIntroSection(){
  return(0,i.jsxs)("section",{className:"relative px-6 pb-16",children:[
    (0,i.jsx)(x,{children:(0,i.jsx)(C,{overline:"The Healers In Love",title:"Bride & Groom"})}),
    (0,i.jsxs)(x,{delay:60,children:[
      (0,i.jsx)("p",{className:"text-center script hashtag-script text-primary font-medium",children:c.hashtag}),
      (0,i.jsx)("p",{className:"mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-foreground/80",children:c.story})
    ]}),
    (0,i.jsxs)("div",{className:"mt-8 space-y-6",children:[
      /* 1. BRIDE DETAILS FIRST */
      (0,i.jsx)(x,{delay:120,children:(0,i.jsxs)("article",{className:"card-soft press p-6 border border-primary/25 text-center relative overflow-hidden",children:[
        (0,i.jsx)("div",{className:"mx-auto mb-4 h-36 w-36 overflow-hidden rounded-full border-2 border-primary/40 p-1 shadow-md",children:(0,i.jsx)("img",{src:_wi.bridePortrait??"./editable/assets/bride-portrait.jpg",alt:"Dr. Pallavi Purohit - The Bride",loading:"lazy",width:400,height:400,className:"h-full w-full rounded-full object-cover"})}),
        (0,i.jsx)("span",{className:"badge-day mb-2",children:"The Bride"}),
        (0,i.jsx)("h3",{className:"font-display text-2xl text-foreground",children:"Dr. Pallavi Purohit"}),
        (0,i.jsxs)("div",{className:"mt-4 border-t border-primary/15 pt-4 text-xs leading-relaxed text-foreground/85 space-y-1.5",children:[
          (0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"text-muted-foreground uppercase text-[0.6rem] tracking-wider block",children:"Parents"}),"Dr. Birendra Kumar Purohit & Dr. Sujata Hota"]}),
          (0,i.jsxs)("p",{className:"pt-1",children:[(0,i.jsx)("span",{className:"text-muted-foreground uppercase text-[0.6rem] tracking-wider block",children:"Brother & Sister-in-Law"}),"Prateek Purohit & Ayushi Singh"]})
        ]})
      ]})}),
      /* 2. GROOM DETAILS SECOND */
      (0,i.jsx)(x,{delay:180,children:(0,i.jsxs)("article",{className:"card-soft press p-6 border border-primary/25 text-center relative overflow-hidden",children:[
        (0,i.jsx)("div",{className:"mx-auto mb-4 h-36 w-36 overflow-hidden rounded-full border-2 border-primary/40 p-1 shadow-md",children:(0,i.jsx)("img",{src:_wi.groomPortrait??"./editable/assets/groom-portrait.jpg",alt:"Dr. Sarvesh Kumar Singh - The Groom",loading:"lazy",width:400,height:400,className:"h-full w-full rounded-full object-cover"})}),
        (0,i.jsx)("span",{className:"badge-day mb-2",children:"The Groom"}),
        (0,i.jsx)("h3",{className:"font-display text-2xl text-foreground",children:"Dr. Sarvesh Kumar Singh"}),
        (0,i.jsxs)("div",{className:"mt-4 border-t border-primary/15 pt-4 text-xs leading-relaxed text-foreground/85 space-y-1.5",children:[
          (0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"text-muted-foreground uppercase text-[0.6rem] tracking-wider block",children:"Parents"}),`${_wf.groom?.father??"Anil Kumar Singh"} & ${_wf.groom?.mother??"Late Saraswati Singh"}`]})
        ]})
      ]})})
    ]})
  ]})
}

/* Celebrations / Itinerary Section */
function CelebrationsSection(){
  return(0,i.jsxs)("section",{className:"relative px-6 pb-16",children:[
    (0,i.jsx)("img",{src:"external/media.invitestory.in/seashell-vows/src/assets/bougainvillea-divider.png",alt:"","aria-hidden":"true",loading:"lazy",width:2172,height:724,className:"pointer-events-none mx-auto mb-8 w-full max-w-md opacity-80"}),
    (0,i.jsx)(x,{children:(0,i.jsx)(C,{overline:"The Celebration",title:"Wedding & Reception"})}),
    (0,i.jsx)("div",{className:"space-y-4 mt-6",children:l.map((e,t)=>(0,i.jsx)(x,{delay:t*60,children:(0,i.jsxs)("article",{className:"card-soft press p-5 border border-primary/20 rounded-lg",children:[
      (0,i.jsxs)("div",{className:"flex flex-wrap sm:flex-nowrap items-start justify-between gap-2.5",children:[
        (0,i.jsxs)("div",{className:"flex items-center gap-3 min-w-0 flex-1",children:[
          (0,i.jsx)("span",{className:"grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary/30 text-primary text-base font-semibold",children:e.glyph}),
          (0,i.jsxs)("div",{className:"min-w-0",children:[
            (0,i.jsx)("h3",{className:"font-display text-xl sm:text-2xl text-foreground font-semibold leading-snug break-words",children:e.name}),
            (0,i.jsxs)("p",{className:"text-[0.66rem] uppercase tracking-airy text-muted-foreground mt-0.5",children:[e.date," · ",e.time]})
          ]})
        ]}),
        (0,i.jsx)("span",{className:"badge-day shrink-0 self-start text-[0.65rem] px-2.5 py-1 whitespace-nowrap",children:e.day})
      ]}),
      (0,i.jsxs)("div",{className:"mt-3 text-xs space-y-1 text-foreground/80",children:[
        (0,i.jsxs)("p",{className:"flex items-center gap-1.5",children:[(0,i.jsx)("span",{className:"text-primary",children:"📍"}),e.venue]})
      ]}),
      e.dressCode?(0,i.jsx)("div",{className:"mt-3 pt-2.5 border-t border-primary/10 flex flex-wrap items-center justify-between gap-2",children:(0,i.jsxs)("span",{className:"badge-dress",children:[(0,i.jsx)("span",{children:"✨"}),`Dress Code: ${e.dressCode}`]})}):null,
      (!e.subEvents&&e.note)?(0,i.jsx)("p",{className:"mt-2 text-xs italic text-muted-foreground",children:e.note}):null,
      e.subEvents?(0,i.jsx)("div",{className:"sub-events-list",children:e.subEvents.map(s=>(0,i.jsxs)("div",{className:"sub-event-row",children:[(0,i.jsxs)("div",{className:"sub-event-left",children:[(0,i.jsx)("span",{className:"sub-event-bullet",children:"✦"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"sub-event-label",children:s.label}),s.venue?(0,i.jsx)("p",{className:"sub-event-venue",children:s.venue}):null]})]}),(0,i.jsx)("span",{className:"sub-event-time",children:s.time})]},s.label))}):null
    ]})},e.name))})
  ]})
}

/* Caricatures as Moments at last */
function MomentsSection(){
  let moments = _w.moments ?? [
    { src: "./editable/assets/caricature-mehendi.jpg" },
    { src: "./editable/assets/caricature-engagement.jpg" },
    { src: "./editable/assets/caricature-sangeet.jpg" },
    { src: "./editable/assets/caricature-haldi.jpg" },
    { src: "./editable/assets/caricature-wedding.jpg" }
  ];

  return (0,i.jsxs)("section",{className:"moments-section relative px-6 pb-20",children:[
    (0,i.jsx)(x,{children:(0,i.jsx)(C,{overline:"Cherished Memories",title:"Moments"})}),
    (0,i.jsx)(x,{delay:40,children:(0,i.jsx)("p",{className:"mx-auto -mt-2 max-w-sm text-center text-xs leading-relaxed text-muted-foreground mb-8",children:"Artistic caricature moments capturing our journey of love, laughter, and togetherness."})}),
    (0,i.jsx)("div",{className:"space-y-6",children:moments.map((m,idx)=>(
      (0,i.jsx)(x,{delay:idx*80,children:
        (0,i.jsx)("article",{className:"card-soft caricature-gallery-card overflow-hidden rounded-lg border border-primary/20 shadow-sm transition-all duration-300 hover:shadow-md",children:
          (0,i.jsx)("div",{className:"relative aspect-[4/3] w-full overflow-hidden bg-muted",children:
            (0,i.jsx)("img",{
              src: m.src || m.caricature || m.image || m,
              alt: "Wedding celebration moment caricature illustration",
              loading: "lazy",
              width: 800,
              height: 600,
              className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            })
          })
        })
      }, idx)
    ))})
  ]});
}

var w="external/media.invitestory.in/seashell-vows/src/assets/watercolor-lantern.png",
    T="external/media.invitestory.in/seashell-vows/src/assets/lantern-constellation.png";

function E(){
  let[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)("Tap to fill the sky with lanterns."),o=(0,r.useRef)(0);
  function s(){
    let e=Array.from({length:22},(e,t)=>{
      let n=t<8?"far":t<17?"middle":"near",r=n==="far"?.3:n==="middle"?.58:.92;
      return{id:o.current++,x:5+Math.random()*90,drift:-90+Math.random()*180,tilt:-8+Math.random()*16,scale:r*(.78+Math.random()*.42),duration:n==="far"?7.4:n==="middle"?6.3:5.3,delay:Math.random()*1.4,blur:n==="far"?1.4:n==="middle"?.45:0,opacity:n==="far"?.54:n==="middle"?.78:1,depth:n}
    });
    t(t=>[...t.slice(-44),...e]),a(`The sky is glowing for ${c.shortBride??"Pallavi"} and ${c.shortGroom??"Sarvesh"}.`),
    window.setTimeout(()=>{let n=new Set(e.map(e=>e.id));t(e=>e.filter(e=>!n.has(e.id)))},9e3)
  }
  return(0,i.jsxs)("section",{className:"wish-sky relative isolate overflow-hidden px-6 py-20 text-center",children:[
    (0,i.jsx)("img",{src:T,alt:"","aria-hidden":"true",loading:"lazy",width:1024,height:1536,className:"pointer-events-none absolute -right-28 -top-24 -z-10 h-[115%] w-auto opacity-45"}),
    e.map(e=>(0,i.jsx)("img",{src:w,alt:"","aria-hidden":"true",width:1024,height:1536,className:`wish-lantern-flight pointer-events-none absolute bottom-[-13rem] w-24 ${e.depth==="near"?"z-20":e.depth==="middle"?"z-10":"z-0"}`,style:{left:`${e.x}%`,opacity:e.opacity,filter:`blur(${e.blur}px) drop-shadow(0 12px 18px oklch(0.62 0.09 72 / 0.22))`,"--wish-tilt":`${e.tilt}deg`,"--wish-drift":`${e.drift}px`,"--wish-scale":e.scale,"--wish-duration":`${e.duration}s`,"--wish-delay":`${e.delay}s`}},e.id)),
    (0,i.jsxs)("div",{className:"mx-auto max-w-sm",children:[
      (0,i.jsx)("img",{src:w,alt:"Watercolor paper lantern glowing warmly",loading:"lazy",width:1024,height:1536,className:"lantern-breathe mx-auto w-28 object-contain"}),
      (0,i.jsx)("h2",{className:"mt-2 font-display text-[2.35rem] leading-tight",children:"Send them a wish"}),
      (0,i.jsx)("p",{className:"mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground",children:"Release a sky full of light for their new beginning."}),
      (0,i.jsx)("button",{type:"button",onClick:s,className:"press mt-7 flex min-h-[50px] w-full items-center justify-center rounded-sm bg-primary px-5 text-[0.68rem] uppercase tracking-[0.22em] text-primary-foreground shadow-[0_14px_30px_-18px_rgba(112,82,42,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",children:"Click here to bless them"}),
      (0,i.jsx)("p",{"aria-live":"polite",className:"mt-3 min-h-5 text-xs text-muted-foreground",children:n})
    ]})
  ]})
}

var D=_wi.footerWash??"./editable/assets/footer-wash-DG1rtX_C.jpg",
    O="external/media.invitestory.in/seashell-vows/src/assets/floral-spray.png",
    k="external/media.invitestory.in/seashell-vows/src/assets/watercolor-lantern.png",
    A="external/media.invitestory.in/seashell-vows/src/assets/lantern-constellation.png";

function j(){
  let e=s(.18),[t,n]=(0,r.useState)("Share this invitation");
  async function a(){
    try{await navigator.clipboard.writeText(window.location.href),n("Invitation link copied")}catch{n("Copy the link from your browser")}
  }
  return(0,i.jsxs)("footer",{className:"footer-scene relative isolate min-h-[30rem] overflow-hidden",children:[
    (0,i.jsx)("img",{src:D,alt:"","aria-hidden":"true",loading:"lazy",width:1024,height:1280,className:"hidden"}),
    (0,i.jsx)("img",{src:A,alt:"","aria-hidden":"true",loading:"lazy",width:1024,height:1536,className:"pointer-events-none absolute -right-24 -top-32 -z-10 h-[110%] w-auto opacity-75 drop-shadow-[0_0_18px_rgba(234,198,104,0.4)]"}),
    (0,i.jsx)("img",{src:k,alt:"","aria-hidden":"true",loading:"lazy",width:1024,height:1536,className:"lantern-breathe pointer-events-none absolute -left-12 top-6 -z-10 w-28 opacity-60 drop-shadow-[0_0_24px_rgba(234,198,104,0.5)]"}),
    (0,i.jsxs)("div",{className:"mx-auto flex max-w-lg flex-col items-center justify-start px-7 pt-12 pb-14 text-center relative z-10",children:[
      (0,i.jsx)("img",{src:O,alt:"","aria-hidden":"true",loading:"lazy",width:1024,height:1024,className:"w-24 opacity-80"}),
      (0,i.jsx)("p",{className:"mt-4 invitation-note font-display italic text-xl sm:text-2xl text-primary font-medium leading-relaxed max-w-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]",children:_wft.invitationNote??"Eagerly waiting to celebrate with you, best regards & love from"}),
      (0,i.jsx)("h2",{className:"mt-3 font-display text-[1.8rem] sm:text-[2.2rem] leading-snug text-foreground font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]",children:_wft.hosts??"Dr BK Purohit & Dr Sujata Hota"}),
      (0,i.jsx)("p",{className:"mt-1 script text-xl sm:text-2xl text-primary font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]",children:_wft.family??"& Purohit family"}),
      (0,i.jsx)("p",{className:"mt-3 script hashtag-script text-primary font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]",children:c.hashtag}),
      (0,i.jsxs)("div",{className:"mt-7 grid w-full max-w-sm grid-cols-2 border-y border-primary/25 py-4 text-left",children:[
        (0,i.jsxs)("div",{className:"border-r border-primary/25 pr-5",children:[
          (0,i.jsx)("p",{className:"text-xs text-muted-foreground",children:"The Wedding"}),
          (0,i.jsx)("p",{className:"mt-1 font-display text-lg",children:"9 December 2026"})
        ]}),
        (0,i.jsxs)("div",{className:"pl-5",children:[
          (0,i.jsx)("p",{className:"text-xs text-muted-foreground",children:"The Place"}),
          (0,i.jsx)("p",{className:"mt-1 font-display text-lg",children:"Puri, Odisha"})
        ]})
      ]}),
      (0,i.jsx)("button",{type:"button",onClick:a,className:"press mt-7 min-h-[48px] rounded-sm border border-primary/45 bg-background/70 px-6 text-[0.66rem] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",children:"Copy invitation link"}),
      (0,i.jsx)("p",{"aria-live":"polite",className:"mt-3 min-h-5 text-xs text-muted-foreground",children:t}),

      (0,i.jsx)("a",{href:"https://www.instagram.com/invitestory.in/",target:"_blank",rel:"noreferrer",className:"mt-6 text-[0.55rem] uppercase tracking-[0.18em] text-foreground/40 transition-colors hover:text-primary/70",children:"Follow @invitestory.in on Instagram"})
    ]})
  ]})
}

var M="external/media.invitestory.in/seashell-vows/src/assets/opener-frames/lantern-reveal-first.png",
    N="everlasting-vows-opened";

function P(){
  let e=(0,r.useRef)(null),[t,n]=(0,r.useState)(!1),[a,o]=(0,r.useState)(!1),[s,cState]=(0,r.useState)(!1);
  (0,r.useEffect)(()=>{
    if(sessionStorage.getItem(N)==="true")return;
    n(!0);
    let e=document.body.style.overflow;
    return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}
  },[]);
  async function l(){
    if(!(!e.current||a)){
      o(!0);
      startAudioMusic();
      try{await e.current.play()}catch{u()}
    }
  }
  function u(){
    startAudioMusic();
    sessionStorage.setItem(N,"true"),
    window.setTimeout(()=>cState(!0),180),
    window.setTimeout(()=>{document.body.style.overflow="",n(!1)},1900)
  }
  return t?(0,i.jsxs)("div",{className:`invitation-opener fixed inset-0 z-[100] bg-background ${s?"is-closing":""}`,role:"dialog","aria-label":`Open ${c.bride} and ${c.groom}'s wedding invitation`,children:[
    (0,i.jsx)("video",{ref:e,src:(_wi.openerVideo??"./editable/assets/wedding-opener.mp4"),poster:M,preload:"auto",playsInline:!0,muted:!0,onEnded:u,className:"h-full w-full object-cover [transform:translateZ(0)]"}),
    !a&&(0,i.jsxs)("button",{type:"button",onClick:l,className:"absolute inset-0 flex w-full flex-col items-center justify-end bg-[linear-gradient(180deg,transparent_42%,rgba(25,29,38,0.58)_100%)] px-6 pb-14 text-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80",children:[
      (0,i.jsxs)("span",{className:"script text-2xl text-[#f4d8a1]",children:[_wc.displayNames??"Dr. Pallavi & Dr. Sarvesh"]}),
      (0,i.jsx)("span",{className:"mt-3 border-b border-white/60 pb-1 text-[0.68rem] uppercase tracking-[0.24em]",children:"Tap to open"})
    ]})
  ]}):null
}

var F=_wi.venueMap??"./editable/assets/venue-map-puri.jpg";

function z(){
  return(0,i.jsxs)("main",{className:"paper overflow-x-hidden",onClick:startAudioMusic,children:[
    (0,i.jsx)(P,{}),
    (0,i.jsx)(MusicToggle,{}),
    (0,i.jsx)(_,{}),
    /* Countdown Section */
    (0,i.jsx)("section",{className:"px-6 py-12",children:(0,i.jsxs)(x,{children:[
      (0,i.jsx)("p",{className:"text-center text-[0.62rem] uppercase tracking-airy text-muted-foreground",children:"Counting down to the vows"}),
      (0,i.jsx)("div",{className:"mt-6",children:(0,i.jsx)(b,{iso:c.weddingISO})})
    ]})}),
    /* Bride and Groom Intro Section (Bride details first then Groom) */
    (0,i.jsx)(CoupleIntroSection,{}),
    /* Celebrations Itinerary Section */
    (0,i.jsx)(CelebrationsSection,{}),
    /* Wish sky animation */
    (0,i.jsx)(x,{children:(0,i.jsx)(E,{})}),
    /* Venue & Map Section */
    (0,i.jsx)("section",{className:"px-6 pb-16",children:(0,i.jsxs)(x,{children:[
      (0,i.jsx)(C,{overline:"Find your way",title:"The Venue"}),
      (0,i.jsxs)("div",{className:"card-soft overflow-hidden rounded-lg border border-primary/20 shadow-sm",children:[
        (0,i.jsx)("img",{src:F,alt:`Illustrated map of ${u.name}`,loading:"lazy",width:1024,height:768,className:"h-52 w-full object-cover"}),
        (0,i.jsxs)("div",{className:"p-5",children:[
          (0,i.jsx)("h3",{className:"font-display text-2xl text-foreground",children:u.name}),
          (0,i.jsx)("p",{className:"mt-1 text-sm text-muted-foreground",children:u.address}),
          (0,i.jsx)("a",{href:u.mapsUrl,target:"_blank",rel:"noreferrer",className:"press mt-5 flex min-h-[48px] items-center justify-center rounded-sm bg-primary px-5 text-[0.68rem] uppercase tracking-airy text-primary-foreground",children:"Open in Google Maps"})
        ]})
      ]})
    ]})}),
    /* Save our date calendar */
    (0,i.jsx)("section",{className:"px-6 pb-16",children:(0,i.jsx)(x,{children:(0,i.jsxs)("div",{className:"card-soft p-6 text-center border border-primary/20 rounded-lg",children:[
      (0,i.jsx)("p",{className:"script text-lg text-primary",children:"Save our date"}),
      (0,i.jsx)("p",{className:"mt-2 text-sm text-muted-foreground",children:"Add every ceremony to your calendar in one tap."}),
      (0,i.jsx)("button",{type:"button",onClick:p,className:"press mt-5 flex min-h-[52px] w-full items-center justify-center rounded-sm border border-primary/45 bg-secondary text-[0.68rem] uppercase tracking-airy text-foreground",children:"Add to Calendar"})
    ]})})}),
    /* Caricatures of Events as Moments at last */
    (0,i.jsx)(MomentsSection,{}),
    /* Footer */
    (0,i.jsx)(j,{})
  ]})
}

export{z as component};