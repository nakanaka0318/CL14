butterflies = document.querySelectorAll('.butterfly');

butterflies.forEach(function (el) {

  el.addEventListener('mouseover', function () {
    el.style.left = Math.random()*880 + 'px';
    el.style.top = Math.random()*454 + 'px';
  });
});

foo = document.querySelectorAll('.foo');

foo.forEach(function (el){
  
  el.addEventListener('mouseover', function () {
    el.style.left = 360 + Math.random()*440 + 'px';
    el.style.top = 190 + Math.random()*90 +'px';
  });
});
