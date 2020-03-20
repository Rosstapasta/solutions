// JS Solution 2
(function(){

  var ul = document.querySelector('ul.ice-cream-list');

  var appendFlavor = function( flavor ){
    ul.insertAdjacentHTML('beforeend', '<li class="ice-cream-flavor">' + flavor + '</li>');
  };
  iceCreamFlavors.forEach( appendFlavor );

})();