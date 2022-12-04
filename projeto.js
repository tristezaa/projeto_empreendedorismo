alert("Bem-vindo ao lugar favorito dos animais de estimação. Faça parte da família ZooPet, cadastre-se e receba promoções exclusivas.");

/*
resgistro
*/

var nomecompleto, numerodetelefone, dirección, correo;

function Registrarse(){
  nomecompleto = window.prompt("Escreva seu nome completo:");
  numerodetelefone = window.prompt("Digite seu número de telefone:");
   if(isNaN(numerodetelefone)){
    window.alert("Você deve inserir números.");
    numerodetelefone = undefined;
    numerodetelefone = window.prompt("Digite seu número de telefone, por favor.");
    
  }else{
    window.alert("Prossiga com a compra.");
  }
 
  dirección = window.prompt("Digite seu endereço:");
  correo = window.prompt("Informe seu e-mail");
 
     window.alert("Seu cadastro foi concluído, " + nomecompleto + ". Está tudo pronto para você seguir em frente para comprar o melhor para o seu animal de estimação");
    
  
   
  

}
document.getElementById("inicio").addEventListener("click", Registrarse);

var productos = [
  ["GranPlus Menu Cachorro Adulto Sabor Carne e Arroz - R$43", 43],
  ["GranPlus Menu Cachorro Filhote Sabor Carne e Arroz - R$43", 43],
  ["GranPlus Choice Cachorro Adulto Sabor Frango e Carne - R$50", 50],
  ["GranPlus Menu Cachorro Filhote Sabor Frango e Arroz - R$43", 43],
  ["GranPlus Gourmet Adulto Sabor Ovelha e Arroz - R$47", 47],
  ["GranPlus Menu Cachorro Adulto Light Sabor Frango e Arroz - R$166", 166],

  ["GranPlus Gato Adulto Sabor Carne e Arroz - R$51", 51],
  ["GranPlus Gato Adulto Castrado Sabor Carne e Arroz - R$54", 54],
  ["GranPlus Gato Filhote Sabor Frango e Arroz - R$54", 54],
  ["ProGato Areia Super Premium - R$42", 42],
  ["ProGato Areia BioBom - R$31", 31],
  ["ProGato Areia Clássica - R$20", 20],

  ["Pelo e Derme 750 DHA + EPA - R$63", 63],
  ["Equilibrium® Artroflex - R$82", 82],
  ["Colar Antipulgas Cachorros/Gatos - R$192", 192],

  ["Caixa de areia fechada Grande FreshKitty - R$79", 79],
  ["Kit de Limpeza de Caixa de Areia - R$35", 35]
];



var productosparacarrito=[];
var emptycarrito = true;
var btnagregar = document.querySelector("#btnagregar");
var btnmostrar = document.querySelector("#btnmostrar");



btnagregar.addEventListener("click", Agregar);
btnmostrar.addEventListener("click", Carrito);

function Agregar(){
  var addproductos = window.alert("Mostraremos nossa lista de produtos para que você possa adicionar ao seu carrinho de compras.");
  var textoproductos ="";
  for(var i=0; i<productos.length; i++){
  textoproductos+=((i+1)+": "+productos[i][0]+"\n");
}
var productoseleccionado= window.prompt("Escreva o número que corresponde ao produto." + " \n" +textoproductos);

  productosparacarrito.push(productos[productoseleccionado-1]);
  emptycarrito=false

}


function Carrito(){
  if(emptycarrito == true){
    window.alert("    Você deve adicionar produtos ao carrinho.");
    
  }else{
     var textoproductos ="Seus produtos são: \n";
     for(var i=0; i<productosparacarrito.length; i++){
     textoproductos+=productosparacarrito[i][0] + ": S/." +productosparacarrito[i][1]+      "\n";
   }
  
     var suma=0;
     textoproductos+="\n O total é: R$";
  
     for(var j=0; j<productosparacarrito.length; j++){
      suma+=productosparacarrito[j][1];
    
    
      }
      textoproductos+=suma;
      window.alert(textoproductos); 
   var confirmar= window.confirm("Gostaria de adicionar outro produto?");
    if(confirmar === true){
      window.alert("Aumente os que você quiser.");
    } else{
      window.alert("Prossiga com a compra");
    }
   }//fin del else
}



var end, tarjeta;

function FINALIZAR(){

 end = window.confirm("O meio de pagamento será feito por cartão.");
  
 tarjeta = window.prompt("Tudo bem, " + nombrecompleto + ". Digite os dados do seu cartão");
  if(isNaN(tarjeta)){
    window.alert("Você deve inserir números.");
    tarjeta = undefined;
    tarjeta= window.prompt("Digite seu código novamente.");
    
  }else{
    window.alert("Prossiga com sua compra");
  }
       
  
 
 window.alert("Muito bem, " + nombrecompleto + ", sua compra foi concluída.");
  var textoproductos ="Seus produtos para viagem são: \n";
     for(var i=0; i<productosparacarrito.length; i++){
     textoproductos+=productosparacarrito[i][0] + ": S/." +productosparacarrito[i][1]+      "\n";
   }
  
     var suma=0;
     textoproductos+="\n El total es: S/.";
  
     for(var j=0; j<productosparacarrito.length; j++){
      suma+=productosparacarrito[j][1];
    
    
      }
      textoproductos+=suma;
      window.alert(textoproductos); 
  window.alert("\nEm breve estaremos disponibilizando todas as informações para o email " + correo + " e tudo sobre os novos produtos que lançaremos" + "\nMuito obrigado por confiar em nós "+ nombrecompleto + ".");
 
}


document.getElementById("btnfinalizar").addEventListener("click", FINALIZAR);




