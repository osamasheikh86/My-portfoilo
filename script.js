// Highlight current page in nav
(function(){
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// Typing animation for the home page search bar
(function(){
  var el = document.getElementById('typedText');
  if (!el) return;
  var text = "mohd osama seo executive new delhi";
  var cursor = document.getElementById('cursorBlink');
  var stats = document.getElementById('searchStats');
  var card = document.getElementById('serpCard');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    el.textContent = text;
    if (stats) stats.style.opacity = 1;
    if (card) card.classList.add('visible');
  } else {
    var i = 0;
    if (stats) stats.style.opacity = 0;
    function type(){
      if (i <= text.length){
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 38);
      } else {
        if (stats) {
          stats.style.transition = 'opacity .4s ease';
          stats.style.opacity = 1;
        }
        setTimeout(function(){ if (card) card.classList.add('visible'); }, 250);
      }
    }
    setTimeout(type, 350);
  }
})();

// Scroll-reveal for sections + skill bar fill
(function(){
  var sections = document.querySelectorAll('.section');
  if (!sections.length) return;
  var filled = false;
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('visible');
        if (entry.target.querySelector('.skill-fill') && !filled){
          filled = true;
          document.querySelectorAll('.skill-fill').forEach(function(bar){
            bar.style.width = bar.getAttribute('data-fill') + '%';
          });
        }
      }
    });
  }, { threshold: 0.18 });
  sections.forEach(function(s){ observer.observe(s); });
})();
