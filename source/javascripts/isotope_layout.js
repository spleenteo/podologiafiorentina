function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }else{
          return false;
        }
    }
}

$(document).ready(function(){
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


  var $container = $('.js-isotope')

  $container.isotope({
    itemSelector: '.js-isotope__item',
    layoutMode: 'fitRows',
    masonry: {
      columnWidth: ".js-isotope__item"
    }
  })

  filter = getUrlParameter("filter");
  if(filter != false){
    $(".js-filter-title").show();
    $(".js-filter-name").html(filter.replace("-"," "));

    $container.isotope({ filter: '.'+filter });
  }else{
    $container.isotope({ filter: '*' });
  }
});
