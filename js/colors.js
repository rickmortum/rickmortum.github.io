(function($) {
  $.fn.getHexBackgroundColor = function() {
    return (function(rgb) {
      return '#' + (!rgb
        ? 'FFFFFF'
        : rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
             .slice(1)
             .map(x => ('0' + parseInt(x).toString(16)).slice(-2))
             .join('')
             .toUpperCase());
    })($(this).css('background-color'));
  }
})(jQuery);



var colsrcs=[
'#6634B0',
'#B482B3',
'#FF89A7',
'#8B4893',
'#904DC6',
'#9C74F6',
'#E946F9',
'#403EF3',
'#6CACE9',
'#4E83A6',
'#69D5BD',
'#9E9E94',
'#927F5D',
'#A59A90',
'#DECB81',
'#DF6C4E',
'#F46135',
'#D28037',
'#FFBD38',
'#63BF49',
'#7FEA90',
'#93F070',
'#88A934',
'#DCFE35'
  ];

 //var template ='<div class="row"><div class="col-xs-4 l-col col-pck" style="background-color:red"></div><div class="col-xs-4 m-col col-pck" style="background-color:red"></div><div class="col-xs-4 r-col col-pck" style="background-color:red"></div></div>';

mod = $('.modal-colors');

for (i=0; i<colsrcs.length;i++){
  color=colsrcs[i];
  var newdiv =`<div class="row"><div class="col-xs-4 l-col col-pck" style="background-color:${color};max-height:50px"></div><div class="col-xs-4 m-col col-pck" style="background-color:${color};max-height:50px"></div><div class="col-xs-4 r-col col-pck" style="background-color:${color};max-height:50px"></div></div>`;
    mod.append(newdiv)
  //console.log(newdiv)
};

$('.l-col').click(function(){
  var bgc = $(this).getHexBackgroundColor();
  console.log(`${bgc}`);
  $('#left').css('background-color',bgc);
  setCookie($('#left').attr('id'),bgc,1);
  $('.l-col').removeClass('acti')
  $(this).addClass('acti')
})

$('.m-col').click(function(){
  var bgc = $(this).getHexBackgroundColor();
  $('#middle').css('background-color',bgc);
  setCookie($('#middle').attr('id'),bgc,1);
  $('.m-col').removeClass('acti')
  $(this).addClass('acti')
})

$('.r-col').click(function(){
  var bgc = $(this).getHexBackgroundColor();
  $('#right').css('background-color',bgc);
  setCookie($('#right').attr('id'),bgc,1);
  $('.r-col').removeClass('acti')
  $(this).addClass('acti')
})


var modal = document.getElementById('myModal');

var actions = document.getElementById('actions');
//var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
//var off = 0
//var $imgs = 
//$('.colorr').click(function() {
  //var a = alert('click')
  //modal.style.display = "block";
  //modalImg.src = this.src;
  //captionText.innerHTML = this.alt;
  //off = ((window.innerWidth - modalImg.width)/2)-50;
  //if (off<0){off=10;}
  //console.log(off);
  //span.style.right = off + "px";
//})

span.onclick = function() { 
   //modal.fadeOut()
   modal.style.display = "none";
   span.style.right ="0px";

}

actions.onclick = function(){

  var bgc = colsrcs[Math.floor(Math.random() * (colsrcs.length+1))]
  $('#left').css('background-color',bgc);
  setCookie($('#left').attr('id'),`${bgc}`,1);

  var bgc = colsrcs[Math.floor(Math.random() * (colsrcs.length+1))]
  $('#middle').css('background-color',bgc);
  setCookie($('#middle').attr('id'),bgc,1);
  
  var bgc = colsrcs[Math.floor(Math.random() * (colsrcs.length+1))]
  $('#right').css('background-color',bgc);
  setCookie($('#right').attr('id'),bgc,1);

}