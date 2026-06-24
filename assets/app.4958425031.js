// City search filter (locations page)
(function(){
  var input=document.getElementById('citysearch');
  if(input){
    var cards=Array.prototype.slice.call(document.querySelectorAll('.city-card'));
    var none=document.getElementById('noResults');
    input.addEventListener('input',function(){
      var q=input.value.trim().toLowerCase();var shown=0;
      cards.forEach(function(c){
        var match=c.getAttribute('data-city').indexOf(q)>-1;
        c.classList.toggle('hidden',!match);if(match)shown++;
      });
      if(none)none.style.display=shown?'none':'block';
    });
  }
  // Web3Forms contact form
  var form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',async function(e){
      e.preventDefault();
      var btn=document.getElementById('submitBtn');
      var ok=document.getElementById('formSuccess');
      var err=document.getElementById('formError');
      var honey=form.querySelector('[name="_honey"]');
      if(honey&&honey.value)return;
      btn.disabled=true;btn.textContent='Sending…';
      if(ok)ok.style.display='none';if(err)err.style.display='none';
      try{
        var res=await fetch('https://api.web3forms.com/submit',{method:'POST',body:new FormData(form)});
        var data=await res.json();
        if(data.success){
          if(window.gtag)gtag('event','conversion',{'send_to':'AW-11519801571/UVN2COOv14McEOPxiPUq'});
          if(ok){ok.style.display='block';ok.scrollIntoView({behavior:'smooth',block:'nearest'});}
          form.reset();btn.textContent="✓ Sent — We'll Be In Touch!";
        }else{throw new Error('failed');}
      }catch(_){
        if(err)err.style.display='block';
        btn.disabled=false;btn.textContent='Send My Request →';
      }
    });
  }
})();

// Primary nav: mobile toggle + Services dropdown
(function(){
  var toggle=document.getElementById('navToggle');
  var nav=document.getElementById('primaryNav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  var svc=document.getElementById('svcItem');
  if(svc){
    var btn=svc.querySelector('button');
    btn.addEventListener('click',function(e){
      e.preventDefault();
      var open=svc.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  // close dropdown/menu on outside click (desktop)
  document.addEventListener('click',function(e){
    if(svc&&!svc.contains(e.target))svc.classList.remove('open');
  });
})();
