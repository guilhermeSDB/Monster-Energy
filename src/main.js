$('.dot').click(function () {
    $('div.active').removeClass('active');
    $(this).toggleClass('active');
});

$('a').click(function(e){
    e.preventDefault()
})


var monsterEnergy = [
                    ['MEGA MONSTER ENERGY','Tear into a can of the meanest energy drink on the planet, Monster Energy.','src/images/monster1.png'],
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


$('#loCarb').click( function(){
  i = 1;
  arrayCurrent(i);  
})

$('#absolutelyZero').click( function(){
  i = 2;
  arrayCurrent(i);  
})