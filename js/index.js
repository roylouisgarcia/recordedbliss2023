$(document).ready(function (){
  $("#titlebar").fadeIn("slow");

 $("#button_1").click(function () {
     $("#lyrics_1").show("slow");
     $("#lyrics_kilig").hide();
     $("#lyrics_2").hide();
     $("#lyrics_3").hide();
     $("#lyrics_4").hide();

 });

 $("#button_2").click(function () {
     $("#lyrics_1").hide();
     $("#lyrics_2").show("slow");
     $("#lyrics_kilig").hide();
     $("#lyrics_3").hide();
     $("#lyrics_4").hide();
 });
 $("#button_3").click(function () {
     $("#lyrics_1").hide();
     $("#lyrics_2").hide();
     $("#lyrics_kilig").hide();
     $("#lyrics_3").show("slow");
     $("#lyrics_4").hide();
 });
 $("#button_4").click(function () {
     $("#lyrics_1").hide();
     $("#lyrics_2").hide();
     $("#lyrics_kilig").hide();
     $("#lyrics_3").hide();
     $("#lyrics_4").show("slow");

 });

 $("#button_kilig").click(function () {
     $("#lyrics_kilig").show("slow");
     $("#lyrics_1").hide();
     $("#lyrics_2").hide();
     $("#lyrics_3").hide();
     $("#lyrics_4").hide();

 });
 


});


document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);