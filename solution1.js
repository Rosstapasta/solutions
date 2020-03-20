// JS solution 1
(function(){

  var ul = document.querySelector('ul.ice-cream-list');
  
  for( var i = 0; i < iceCreamFlavors.length; i++ ){
    var li = document.createElement('li');
    var txt = document.createTextNode( iceCreamFlavors[i] );
    li.appendChild(txt);
    ul.appendChild(li);
  }

})();