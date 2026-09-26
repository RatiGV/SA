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
    fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8a0 0 0 0 1 0 0Z"/></svg>',
    ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    li:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 9h4v12H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM10 9h4v1.7c.6-1 2-2 4-2 3.3 0 4 2.1 4 5V21h-4v-6c0-1.4 0-3-2-3s-2 1.5-2 3v6h-4z"/></svg>',
    yt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.4-1.2.4-3.8.4-3.8s0-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z"/></svg>'
  };
  SA.icon = function(n){return I[n]||""};
  SA.cat = function(id){for(var i=0;i<SA.categories.length;i++){if(SA.categories[i].id===id)return SA.categories[i]}return SA.categories[0]};
  SA.initials = function(n){var p=n.split(" ");return (p[0][0]+(p[1]?p[1][0]:"")).toUpperCase()};
  SA.esc = function(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
  /* Generated cover art per course: gradient + pattern seeded by id */
  SA.cover = function(c){
    var cat = SA.cat(c.cat), s = c.id*97, col = cat.color, uid = "g"+c.id+Math.floor(Math.random()*1e6);
    var shapes = "", k = c.id % 4;
    if(k===0){for(var i=0;i<6;i++){shapes+='<circle cx="'+(260+i*18)+'" cy="'+(40+i*6)+'" r="'+(40+i*26)+'" fill="none" stroke="#fff" stroke-opacity="'+(0.22-i*0.03)+'"/>'}}
    else if(k===1){for(var j=0;j<14;j++){shapes+='<rect x="'+(j*30-20)+'" y="'+(120-((s+j*37)%90))+'" width="18" height="260" rx="9" fill="#fff" fill-opacity="'+(0.05+((j*13)%10)/90)+'"/>'}}
    else if(k===2){for(var a=0;a<8;a++){for(var b=0;b<5;b++){shapes+='<circle cx="'+(24+a*48)+'" cy="'+(24+b*48)+'" r="'+(((a+b+c.id)%3)+2)+'" fill="#fff" fill-opacity=".35"/>'}}shapes+='<circle cx="320" cy="200" r="120" fill="#fff" fill-opacity=".08"/>'}
    else{shapes+='<path d="M-20 200 Q 100 60 200 150 T 420 80" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2"/><path d="M-20 230 Q 120 100 220 180 T 420 120" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="2"/><circle cx="90" cy="60" r="70" fill="#fff" fill-opacity=".08"/>'}
    return '<svg class="art" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="'+uid+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+col+'"/><stop offset="1" stop-color="#1B1E24"/></linearGradient><radialGradient id="'+uid+'r" cx=".85" cy=".1" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="400" height="250" fill="url(#'+uid+')"/><rect width="400" height="250" fill="url(#'+uid+'r)"/>'+shapes+'</svg><span class="glyph">'+SA.esc(c.glyph)+'</span>';
  };
  /* Favorites (per-browser) */
  var FKEY="sa_favs";
  SA.favs = function(){try{return JSON.parse(localStorage.getItem(FKEY))||[]}catch(e){return []}};
  SA.toggleFav = function(id){var f=SA.favs(),i=f.indexOf(id);if(i>-1)f.splice(i,1);else f.push(id);try{localStorage.setItem(FKEY,JSON.stringify(f))}catch(e){}SA.updateFavBadge();return i===-1};
  SA.updateFavBadge = function(){var b=document.querySelectorAll("[data-fav-count]"),n=SA.favs().length;b.forEach(function(el){el.textContent=n;el.style.display=n?"grid":"none"})};
  SA.card = function(c){
    var cat = SA.cat(c.cat), fav = SA.favs().indexOf(c.id)>-1;
    var lect = c.lect[0]+(c.lect.length>1?" +"+(c.lect.length-1):"");
    var badges = '<span class="chip chip-dark"><span class="d" style="background:'+(c.format==="online"?"#D4F26A":"#fff")+'"></span>'+(c.format==="online"?"ონლაინ":"ფიზიკური")+'</span>';
    if(c.hot)badges+='<span class="chip chip-lime">🔥 პოპულარული</span>';
    if(c.isNew)badges+='<span class="chip">ახალი</span>';
    return '<article class="course reveal" data-cat="'+c.cat+'" data-format="'+c.format+'">'+
      '<div class="cover">'+SA.cover(c)+'<div class="badges">'+badges+'</div></div>'+
      '<button class="fav'+(fav?" on":"")+'" data-fav="'+c.id+'" aria-label="სასურველებში დამატება">'+I.heart+'</button>'+
      '<div class="course-body"><span class="course-cat" style="color:'+cat.color+'">'+SA.esc(cat.name)+'</span>'+
      '<h3><a href="course.html?id='+c.id+'">'+SA.esc(c.ka)+'</a></h3><p class="en">'+SA.esc(c.en)+'</p>'+
      '<div class="course-meta"><span>'+I.cal+'დაწყება: '+c.start+'</span><span>'+I.clock+c.weeks+' კვირა</span><span>'+I.level+c.level+'</span></div>'+
      '<div class="course-foot"><div class="lecturer"><span class="av" style="background:'+cat.color+'">'+SA.initials(c.lect[0])+'</span><span>'+SA.esc(lect)+'</span></div>'+
      '<div class="price">'+c.price+' ₾ <small>/სრული</small></div></div></div></article>';
  };
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
  function header(active){
    var mega = SA.categories.map(function(c){return '<a class="mega-item" href="courses.html?cat='+c.id+'"><span class="ic" style="background:'+c.bg+';color:'+c.color+'">'+I[c.icon]+'</span><span><b>'+c.name+'</b><small>'+c.sub+'</small></span></a>'}).join("");
    function a(href,label,key,opt){var cl=(active===key?"active":"")+(opt?" opt":"");return '<a href="'+href+'" class="'+cl+'">'+label+'</a>'}
    return '<div class="topbar"><div class="container"><div class="topbar-promo"><span class="dot"></span><span>🎁 უფასო პროფესიების გზამკვლევი - <a href="#" style="text-decoration:underline">გადმოწერე</a></span></div><div class="topbar-links"><a href="tel:+995591670067">591 67 00 67</a><a href="mailto:info@smartacademy.ge">info@smartacademy.ge</a><a href="#">კარიერა</a><a href="#">ბლოგი</a></div></div></div>'+
    '<header class="header"><div class="container"><a class="logo" href="index.html" aria-label="Smart Academy"><img src="assets/img/logo-bl.svg" alt="Smart Academy"></a>'+
    '<nav class="nav" aria-label="მთავარი"><div class="has-mega"><button type="button" aria-haspopup="true">კურსები '+I.chev+'</button><div class="mega"><div class="mega-list">'+mega+'</div><div class="mega-feature"><div><span class="tag">ახალი ნაკადი</span><h4>AI კურსი პრაქტიკაში</h4><p>ისწავლე AI ინსტრუმენტები, რომლებიც ყოველდღიურ სამუშაოს 3-ჯერ აჩქარებს.</p></div><a class="btn btn-lime btn-sm" href="course.html?id=4">დეტალურად '+I.arrow+'</a></div></div></div>'+
    a("courses.html","ყველა კურსი","courses")+a("index.html#career","კარიერის პროგრამა","career")+a("index.html#events","ივენთები","events",1)+a("index.html#lecturers","ლექტორები","lect",1)+a("index.html#business","ბიზნესისთვის","b2b")+'</nav>'+
    '<div class="header-actions"><button class="lang" type="button" aria-label="ენის შეცვლა">EN</button><a class="icon-btn" href="courses.html?fav=1" aria-label="სასურველი კურსები">'+I.heart+'<span class="badge" data-fav-count></span></a><a class="icon-btn" href="#" aria-label="პროფილი">'+I.user+'</a><a class="btn btn-dark btn-sm" href="index.html#contact">კონსულტაცია</a><button class="icon-btn burger" type="button" aria-label="მენიუ" data-drawer-open>'+I.menu+'</button></div></div></header>'+
    '<div class="drawer" aria-hidden="true"><div class="drawer-backdrop" data-drawer-close></div><div class="drawer-panel" role="dialog" aria-label="მენიუ"><div class="drawer-head"><img src="assets/img/logo-bl.svg" alt="Smart Academy" style="height:28px"><button class="icon-btn" data-drawer-close aria-label="დახურვა">'+I.close+'</button></div><nav class="drawer-nav">'+
    [["courses.html","ყველა კურსი"],["index.html#career","კარიერის პროგრამა"],["index.html#events","ივენთები"],["index.html#lecturers","ლექტორები"],["index.html#business","ბიზნესისთვის"],["index.html#blog","ბლოგი"],["index.html#contact","კონტაქტი"]].map(function(x){return '<a href="'+x[0]+'" data-drawer-close>'+x[1]+I.right+'</a>'}).join("")+
    '</nav><div class="drawer-foot"><a class="btn btn-primary" href="tel:+995591670067">'+I.phone+' 591 67 00 67</a><a class="btn btn-ghost" href="courses.html?fav=1">'+I.heart+' სასურველი კურსები</a></div></div></div>';
  }
  function footer(){
    var cats = SA.categories.map(function(c){return '<li><a href="courses.html?cat='+c.id+'">'+c.name+'</a></li>'}).join("");
    return '<footer class="footer" id="contact"><div class="container"><div class="footer-grid">'+
    '<div><a class="logo" href="index.html"><img src="assets/img/logo-wt.svg" alt="Smart Academy"></a><p style="max-width:320px;font-size:14px">პრაქტიკული ფიზიკური და ონლაინ კურსები დარგის წამყვანი პროფესიონალებისგან - სწავლა, რომელიც კარიერაში გადადის.</p><div class="socials"><a href="https://www.facebook.com/SmartAcademy.ge/" aria-label="Facebook">'+I.fb+'</a><a href="https://www.instagram.com/smartacademy.ge/" aria-label="Instagram">'+I.ig+'</a><a href="https://www.linkedin.com/school/smart-academy-ge/" aria-label="LinkedIn">'+I.li+'</a><a href="#" aria-label="YouTube">'+I.yt+'</a></div></div>'+
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
      var fb=e.target.closest("[data-fav]");
      if(fb){e.preventDefault();var on=SA.toggleFav(+fb.getAttribute("data-fav"));document.querySelectorAll('[data-fav="'+fb.getAttribute("data-fav")+'"]').forEach(function(x){x.classList.toggle("on",on)});SA.toast(on?"დაემატა სასურველებში":"წაიშალა სასურველებიდან")}
    });
    document.addEventListener("keydown",function(e){if(e.key==="Escape"&&drawer&&drawer.classList.contains("open")){drawer.classList.remove("open");document.body.style.overflow=""}});
    document.dispatchEvent(new Event("sa:ready"));
    SA.observe();
  });
})();
