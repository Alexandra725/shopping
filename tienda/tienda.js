
var box= document.getElementById("contenido")
var text="";
var totalPrice ="";

  var sneackers = [];


  
  
  function addClothe(price,name){
    var sneak = {
        "name" : name,
        "price" : price
    }
    sneackers.push(sneak);
    console.log(sneackers)
    
    var total = 0;
    
    
    for (var i = 0; i < sneackers.length; i++){
    var contador= sneackers.length;
        total += (sneackers[i].price)
    }
    $("a").html(contador);

    text = sneackers.name + sneackers.price
    totalPrice = total
    box= text + totalPrice
    console.log(total)
    console.log(contador)
    
}


$(function () {
   $('[data-toggle="tooltip"]').tooltip()
  })
