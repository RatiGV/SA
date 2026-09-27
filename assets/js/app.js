/* Smart Academy - shared UI */
(function(){
  "use strict";
  var SA = window.SA;
  var I = {
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    right:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
    search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6a5 5 0 1 1 7.5 6.6Z"/></svg>',
    user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg>',
    close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
    level:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 20v-5M12 20V10M18 20V4"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>',
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 7 9 6 9-6"/></svg>',
    pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>',
    code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
    pen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3Z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z"/><path d="m2 2 7.6 7.6"/><circle cx="11" cy="11" r="2"/></svg>',
    chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-6"/></svg>',
    mega:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 15-6v14L3 13v-2Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
    brief:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg>',
    users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/></svg>',
    sprout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-9"/><path d="M12 12C12 8 9 5 4 5c0 4 3 7 8 7Z"/><path d="M12 14c0-3.5 2.5-6 7-6 0 3.5-2.5 6-7 6Z"/></svg>',
    fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8a0 0 0 0 1 0 0Z"/></svg>',
    ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    li:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 9h4v12H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM10 9h4v1.7c.6-1 2-2 4-2 3.3 0 4 2.1 4 5V21h-4v-6c0-1.4 0-3-2-3s-2 1.5-2 3v6h-4z"/></svg>',
    sun:'<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon:'<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
    star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 7 7 .6-5.3 4.7L18.4 22 12 18l-6.4 4 1.7-7.7L2 9.6 9 9z"/></svg>',
    pdf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6M12 12v6M9 15l3 3 3-3"/></svg>',
    yt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.4-1.2.4-3.8.4-3.8s0-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z"/></svg>'
  };
  SA.icon = function(n){return I[n]||""};
  SA.cat = function(id){for(var i=0;i<SA.categories.length;i++){if(SA.categories[i].id===id)return SA.categories[i]}return SA.categories[0]};
  SA.initials = function(n){var p=n.split(" ");return (p[0][0]+(p[1]?p[1][0]:"")).toUpperCase()};
  SA.esc = function(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
  SA.course = function(id){for(var i=0;i<SA.courses.length;i++){if(SA.courses[i].id===id)return SA.courses[i]}return null};
  SA.lect = function(id){for(var i=0;i<SA.lecturers.length;i++){if(SA.lecturers[i].id===id)return SA.lecturers[i]}return null};
  SA.inCat = function(c,id){return (c.cats||[c.cat]).indexOf(id)>-1};
  SA.fmt = function(c){return c.format==="online"?"ონლაინ":"ფიზიკური + ონლაინ"};
  SA.duration = function(c){return c.months>0?c.months+" თვე":c.meetings+" შეხვედრა"};
  SA.av = function(l,cls){if(!l)return "";return '<span class="av'+(cls?" "+cls:"")+'">'+(l.photo?'<img src="'+l.photo+'" alt="'+SA.esc(l.name)+'" loading="lazy">':SA.initials(l.name))+'</span>'};
  SA.stars = function(n){var h="";for(var i=0;i<5;i++)h+=I.star;return '<span class="stars" aria-label="'+n+' / 5">'+h+'</span>'};
  /* Favorites (per-browser) */
  var FKEY="sa_favs";
  SA.favs = function(){try{return JSON.parse(localStorage.getItem(FKEY))||[]}catch(e){return []}};
  SA.toggleFav = function(id){var f=SA.favs(),i=f.indexOf(id);if(i>-1)f.splice(i,1);else f.push(id);try{localStorage.setItem(FKEY,JSON.stringify(f))}catch(e){}SA.updateFavBadge();return i===-1};
  SA.updateFavBadge = function(){var b=document.querySelectorAll("[data-fav-count]"),n=SA.favs().length;b.forEach(function(el){el.textContent=n;el.style.display=n?"grid":"none"})};
  SA.card = function(c){
    var cat = SA.cat(c.cat), fav = SA.favs().indexOf(c.id)>-1, l0 = SA.lect(c.lect[0]);
    var lname = (l0?l0.name:"")+(c.lect.length>1?" +"+(c.lect.length-1):"");
    var badges = '<span class="chip chip-dark"><span class="d" style="background:'+(c.format==="online"?"#D4F26A":"#3CC3DB")+'"></span>'+SA.fmt(c)+'</span>';
    var rating = c.rating?'<span class="rating">'+I.star+c.rating.toFixed(1)+' <small>('+c.reviewsCount+')</small></span>':"";
    return '<article class="course reveal" style="--c:'+cat.color+'">'+
      '<div class="cover"><img src="'+c.img+'" alt="'+SA.esc(c.ka)+'" loading="lazy" width="880" height="462"><div class="badges">'+badges+'</div></div>'+
      '<button class="fav'+(fav?" on":"")+'" data-fav="'+c.id+'" aria-label="სასურველებში დამატება">'+I.heart+'</button>'+
      '<div class="course-body"><div class="course-top"><span class="course-cat">'+SA.esc(cat.name)+'</span>'+rating+'</div>'+
      '<h3><a href="course.html?id='+c.id+'">'+SA.esc(c.ka)+'</a></h3><p class="en">'+SA.esc(c.sub||c.en)+'</p>'+
      '<div class="course-meta"><span>'+I.cal+(c.date||"მალე")+'</span><span>'+I.clock+SA.duration(c)+'</span><span>'+I.level+c.meetings+' შეხვედრა</span></div>'+
      '<div class="course-foot"><div class="lecturer">'+SA.av(l0)+'<span>'+SA.esc(lname)+'</span></div>'+
      '<div class="price">'+c.price+' ₾</div></div></div></article>';
  };
  /* Theme */
  SA.theme = function(){var t=document.documentElement.getAttribute("data-theme");if(t)return t;return window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};
  SA.setTheme = function(t){document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("sa_theme",t)}catch(e){}var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="dark"?"#0E1014":"#1B1E24")};
  SA.toast = function(msg){
    var t=document.querySelector(".toast");
    if(!t){t=document.createElement("div");t.className="toast";t.setAttribute("role","status");document.body.appendChild(t)}
    t.innerHTML=I.check+"<span>"+SA.esc(msg)+"</span>";t.classList.add("show");clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove("show")},2400);
  };
  SA.observe = function(root){
    var els=(root||document).querySelectorAll(".reveal:not(.in)");
    if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("in")});return}
    if(!SA._io){SA._io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");SA._io.unobserve(e.target)}})},{rootMargin:"0px 0px -40px 0px"})}
    els.forEach(function(e){SA._io.observe(e)});
  };
  /* Layout: header, drawer, footer */
  var logos='<img class="logo-light" src="assets/img/logo-bl.svg" alt="Smart Academy" width="142" height="34"><img class="logo-dark" src="assets/img/logo-wt.svg" alt="Smart Academy" width="142" height="34">';
  function header(active){
    var f=SA.course(587)||SA.courses[0];
    var mega = SA.categories.map(function(c){return '<a class="mega-item" href="courses.html?cat='+c.id+'"><span class="ic ic-tint" style="--c:'+c.color+'">'+I[c.icon]+'</span><span><b>'+c.name+'</b><small>'+c.sub+'</small></span></a>'}).join("");
    function a(href,label,key,opt){var cl=(active===key?"active":"")+(opt?" opt":"");return '<a href="'+href+'" class="'+cl+'">'+label+'</a>'}
    return '<div class="topbar"><div class="container"><div class="topbar-promo"><span class="dot"></span><span>🎁 უფასო პროფესიების გზამკვლევი - <a href="#" style="text-decoration:underline">გადმოწერე</a></span></div><div class="topbar-links"><a href="tel:+995591670067">591 67 00 67</a><a href="mailto:info@smartacademy.ge">info@smartacademy.ge</a><a href="#">კარიერა</a><a href="#">ბლოგი</a></div></div></div>'+
    '<header class="header"><div class="container"><a class="logo" href="index.html" aria-label="Smart Academy">'+logos+'</a>'+
    '<nav class="nav" aria-label="მთავარი"><div class="has-mega"><button type="button" aria-haspopup="true">კურსები '+I.chev+'</button><div class="mega"><div class="mega-list">'+mega+'</div><div class="mega-feature"><img src="'+f.img+'" alt="" loading="lazy"><div><span class="tag">იწყება '+f.date+'</span><h4>'+SA.esc(f.ka)+'</h4><a class="btn btn-lime btn-sm" href="course.html?id='+f.id+'">დეტალურად '+I.arrow+'</a></div></div></div></div>'+
    a("courses.html","ყველა კურსი","courses")+a("index.html#career","კარიერის პროგრამა","career")+a("index.html#events","ივენთები","events",1)+a("index.html#lecturers","ლექტორები","lect",1)+a("index.html#business","ბიზნესისთვის","b2b")+'</nav>'+
    '<div class="header-actions"><button class="lang" type="button" aria-label="ენის შეცვლა">EN</button><button class="icon-btn theme-btn" type="button" data-theme-toggle aria-label="თემის შეცვლა">'+I.moon+I.sun+'</button><a class="icon-btn" href="courses.html?fav=1" aria-label="სასურველი კურსები">'+I.heart+'<span class="badge" data-fav-count></span></a><a class="icon-btn profile" href="#" aria-label="პროფილი">'+I.user+'</a><a class="btn btn-dark btn-sm" href="index.html#contact">კონსულტაცია</a><button class="icon-btn burger" type="button" aria-label="მენიუ" data-drawer-open>'+I.menu+'</button></div></div></header>'+
    '<div class="drawer" aria-hidden="true"><div class="drawer-backdrop" data-drawer-close></div><div class="drawer-panel" role="dialog" aria-label="მენიუ"><div class="drawer-head"><a class="logo" href="index.html">'+logos+'</a><span style="display:flex;gap:8px"><button class="icon-btn theme-btn" type="button" data-theme-toggle aria-label="თემის შეცვლა">'+I.moon+I.sun+'</button><button class="icon-btn" data-drawer-close aria-label="დახურვა">'+I.close+'</button></span></div><nav class="drawer-nav">'+
    [["courses.html","ყველა კურსი"],["index.html#career","კარიერის პროგრამა"],["index.html#events","ივენთები"],["index.html#lecturers","ლექტორები"],["index.html#business","ბიზნესისთვის"],["index.html#blog","ბლოგი"],["index.html#contact","კონტაქტი"]].map(function(x){return '<a href="'+x[0]+'" data-drawer-close>'+x[1]+I.right+'</a>'}).join("")+
    '</nav><div class="drawer-foot"><a class="btn btn-primary" href="tel:+995591670067">'+I.phone+' 591 67 00 67</a><a class="btn btn-ghost" href="courses.html?fav=1">'+I.heart+' სასურველი კურსები</a></div></div></div>';
  }
  function footer(){
    var cats = SA.categories.map(function(c){return '<li><a href="courses.html?cat='+c.id+'">'+c.name+'</a></li>'}).join("");
    return '<footer class="footer" id="contact"><div class="container"><div class="footer-grid">'+
    '<div><a class="logo" href="index.html"><img src="assets/img/logo-wt.svg" alt="Smart Academy" width="150" height="36"></a><p style="max-width:320px;font-size:14px">პრაქტიკული ფიზიკური და ონლაინ კურსები დარგის წამყვანი პროფესიონალებისგან - სწავლა, რომელიც კარიერაში გადადის.</p><div class="socials"><a href="https://www.facebook.com/SmartAcademy.ge/" aria-label="Facebook">'+I.fb+'</a><a href="https://www.instagram.com/smartacademy.ge/" aria-label="Instagram">'+I.ig+'</a><a href="https://www.linkedin.com/school/smart-academy-ge/" aria-label="LinkedIn">'+I.li+'</a><a href="#" aria-label="YouTube">'+I.yt+'</a></div></div>'+
    '<div><h5>კურსები</h5><ul>'+cats+'</ul></div>'+
    '<div><h5>აკადემია</h5><ul><li><a href="#">ჩვენ შესახებ</a></li><li><a href="index.html#lecturers">ლექტორები</a></li><li><a href="#">ჩვენი გუნდი</a></li><li><a href="index.html#career">კარიერის პროგრამა</a></li><li><a href="#">პარტნიორები</a></li></ul></div>'+
    '<div><h5>რესურსები</h5><ul><li><a href="index.html#blog">ბლოგი</a></li><li><a href="index.html#events">უფასო ლექციები</a></li><li><a href="#">ინტერვიუ სტუდენტთან</a></li><li><a href="#">პროფესიების გზამკვლევი</a></li><li><a href="#">წესები და პირობები</a></li></ul></div>'+
    '<div class="footer-contact"><h5>კონტაქტი</h5><ul><li><a href="tel:+995591670067">'+I.phone+'591 67 00 67</a></li><li><a href="tel:+995322121025">'+I.phone+'0322 12 10 25</a></li><li><a href="mailto:info@smartacademy.ge">'+I.mail+'info@smartacademy.ge</a></li><li><a href="#">'+I.pin+'თბილისი, საქართველო</a></li></ul></div>'+
    '</div><div class="footer-big" aria-hidden="true">SMART ACADEMY</div><div class="footer-bottom"><span>© '+new Date().getFullYear()+' Smart Academy. ყველა უფლება დაცულია.</span><div><a href="#">კონფიდენციალურობა</a><a href="#">წესები და პირობები</a></div></div></div></footer>';
  }
  document.addEventListener("DOMContentLoaded",function(){
    var h=document.getElementById("site-header"),f=document.getElementById("site-footer");
    if(h)h.outerHTML=header(document.body.getAttribute("data-page"));
    if(f)f.outerHTML=footer();
    SA.updateFavBadge();
    var hd=document.querySelector(".header");
    function onScroll(){if(hd)hd.classList.toggle("scrolled",window.scrollY>8)}
    window.addEventListener("scroll",onScroll,{passive:true});onScroll();
    var drawer=document.querySelector(".drawer");
    document.addEventListener("click",function(e){
      if(e.target.closest("[data-drawer-open]")){drawer.classList.add("open");drawer.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
      else if(e.target.closest("[data-drawer-close]")){drawer.classList.remove("open");drawer.setAttribute("aria-hidden","true");document.body.style.overflow=""}
      if(e.target.closest("[data-theme-toggle]")){SA.setTheme(SA.theme()==="dark"?"light":"dark")}
      var fb=e.target.closest("[data-fav]");
      if(fb){e.preventDefault();var on=SA.toggleFav(+fb.getAttribute("data-fav"));document.querySelectorAll('[data-fav="'+fb.getAttribute("data-fav")+'"]').forEach(function(x){x.classList.toggle("on",on)});SA.toast(on?"დაემატა სასურველებში":"წაიშალა სასურველებიდან")}
    });
    document.addEventListener("keydown",function(e){if(e.key==="Escape"&&drawer&&drawer.classList.contains("open")){drawer.classList.remove("open");document.body.style.overflow=""}});
    document.dispatchEvent(new Event("sa:ready"));
    SA.observe();
  });
})();
