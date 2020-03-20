// jQuery solution
$(function(){

  var ul = $('ul.ice-cream-list');
  
  iceCreamFlavors.forEach( function( flavor ){
    ul.append('<li class="ice-cream-flavor">' + flavor + '</li>');
  });

});