$('.dot').click(function () {
    $('div.active').removeClass('active');
    $(this).toggleClass('active');
});

$('a').click(function(e){
    e.preventDefault()
})


var monsterEnergy = [
                    ['MEGA MONSTER ENERGY','Rasgue uma lata da bebida energética mais cruel do planeta, o Monster Energy.','src/images/monster1.png'],
                    ['Monster Energy Lo-Carb','Monster Energy Lo-Carb traz o mesmo sabor e o mesmo punch energético do original, com menos carboidratos e menos calorias.','src/images/monster1.2.png'],
                    ['Monster Energy Absolutely Zero','Monster Energy ZERO traz o mesmo sabor e o mesmo punch energético do original, com menos calorias e SEM açúcares.','src/images/monster1.3.png'],

                    ['Monster Energy Juice Khaos','Começamos com o sabor original, adicionando uma combinação agressiva de sucos naturais, em seguida carregamos essa combinação com uma carga de energia e... está criado!Insano e híbrido! Parte suco natural, 100% Monster.','src/images/monster2.1.png'],
                    ['Monster Energy Lo-Carb','Com um sabor profundo e amplo, assim como o Oceano Pacífico, e com um mix de frutas nada tradicional inspirado nos clássicos ponches. Pacific Punch traz a energia Monster e chega para te deixar com vento em popa e pronto para encarar até as marés mais agitadas.','src/images/monster2.2.png'],
                    ['Monster Energy Absolutely Zero','Todo ano, na noite de 31 de Outubro no México, amigos e famílias se reunem para celebrar o “Dia de Los Muertos”. Misticismo e memórias com muita comida e bebida seduzem a alma dos que já se foram para se juntarem á festa. Monster Mango Loco é o Mix de sucos perfeito para atrair as almas mais teimosas. Sabor irado junto do clássico punch de Monster faz com que a energia da festa dure por dias. Mais energia, mais suco!','src/images/monster2.3.png']
];





$('#NamePosition').text(monsterEnergy[0][0])
$('#DescriptPosition').text(monsterEnergy[0][1])
$('#ImagePosition').attr('src', monsterEnergy[0][2])

function arrayCurrent(i){
  $('#NamePosition').text(monsterEnergy[i][0])
  $('#DescriptPosition').text(monsterEnergy[i][1])
  $('#ImagePosition').attr('src',monsterEnergy[i][2])
}

$('#monsterEnergy').click( function(){
  i = 0;
  arrayCurrent(i);  
})

function changeToActive(target){
  $(target).removeClass('text-default')
  $(target).addClass('text-active')
}

function changeToDefault(target){
  $(target).addClass('text-default')
  $(target).removeClass('text-active')
}

function setOthersDefault(){
    $('a.ul-li').addClass('text-default')
    $('a.ul-li').removeClass('text-active')
  
}

$('a.ul-li').click( function(e){
  var target = $( e.target );
  if($(target).hasClass('text-default') ){
    setOthersDefault()
    changeToActive(target)
   
  }else if ($(target).hasClass('text-active')){
    if(target != target){
      setOthersDefault()
      changeToDefault(target) 
    }
    
  }
})

$('#loCarb').click( function(){
  i = 1;
  arrayCurrent(i);  
})

$('#absolutelyZero').click( function(){
  i = 2;
  arrayCurrent(i);  
})

$('#juiceKhaos').click( function(){
  i = 3;
  arrayCurrent(i);  
})

$('#pacificPunch').click( function(){
  i = 4;
  arrayCurrent(i);  
})

$('#mango').click( function(){
  i = 5;
  arrayCurrent(i);  
})