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
                    ['Monster Energy Absolutely Zero','Monster Energy ZERO traz o mesmo sabor e o mesmo punch energético do original, com menos calorias e SEM açúcares.','src/images/monster1.3.png']
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