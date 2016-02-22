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

  var $container = $('.js-isotope').imagesLoaded().progress( function() {
    $container.isotope({
      // main isotope options
      itemSelector: '.js-isotope__item',
      percentPosition: true,
      layoutMode: 'masonry',
      masonry: {
        columnWidth: ".js-isotope__item"
      }
    })
  });


  filter = getUrlParameter("filter");
  if(filter != false){
    $(".js-filter-title").show();
    $(".js-filter-name").html(filter.replace("-"," "));

    $container.isotope({ filter: '.'+filter });
  }else{
    $container.isotope({ filter: '*' });
  }
});
