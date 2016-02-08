//= require jquery
//= require isotope
//= require_tree .

document.addEventListener('DOMContentLoaded', function(){
var elements = document.querySelectorAll('[data-class-toggle]');

  Array.prototype.forEach.call(elements, function(el, i) {
    var classToToggle = el.getAttribute('data-class-toggle');
    var elToToggle = document.querySelector(el.getAttribute('data-element'));

    el.addEventListener('click', function(e) {
      var method = elToToggle.classList.contains(classToToggle) ? 'remove' : 'add';
      elToToggle.classList[method](classToToggle);
      e.stopPropagation();
      e.preventDefault();
    });
  });

  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

});
