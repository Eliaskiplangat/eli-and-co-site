
// Smooth scroll for anchor links
document.addEventListener('click', function(e){
  const target = e.target.closest('a[href^="#"]');
  if(!target) return;
  e.preventDefault();
  const id = target.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
});
