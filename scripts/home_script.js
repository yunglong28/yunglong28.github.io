function change(name) {

   if (name == 'home') {
     $("#pagestyle").attr('href','style/home.css');
     $("#mag_img").replaceWith("<img id='mag_img' src='imgs/mag.png' height='550'>")
     $("#yet_img").replaceWith("<img id='yet_img' src='imgs/records.jpg' height='450'>")
     $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazine.png'>")
     $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellohome.png'>")
     $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harphome.png'>")
     $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonehome.png'>")
     $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobohome.png'>")
     $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxhome.png'>")
     $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodhome.png'>")
   }


  if (name == 'hobbyhorse') {
   $("#pagestyle").attr('href','style/home_hobbyhorse.css');
   $("#mag_img").replaceWith("<img id='mag_img' src='imgs/ars.png' width='600' >")
   $("#yet_img").replaceWith("<img id='yet_img' src='imgs/flowers.png' height='370'>")
   $("#birdz").prepend('<img id="block1" src="imgs/birds3.png" width="250">')
   $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazinetabloid.png'>")
   $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellotabloid.png'>")
   $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harptabloid.png'>")
   $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonetabloid.png'>")
   $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobotabloid.png'>")
   $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxtabloid.png'>")
   $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodtabloid.png'>")

 }

  else{
    $("#block1").remove();
  }

 if (name == 'disco') {
  $("#pagestyle").attr('href','style/home_analog.css');
   $("#mag_img").replaceWith("<img id='mag_img' src='imgs/tastieranew.png'>")
  /*$("#mag_img").remove()
  $(".colimg").append('<p> <img class="star_img"  src="imgs/star.png" ></p> <p> <img  class="tastiera_img" src="imgs/tastiera.png" > </p>')*/
  $("#yet_img").replaceWith("<img id='yet_img' src='imgs/records.jpg' height='450'>")
  $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazineanalog.png'>")
  $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/celloanalog.png'>")
  $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harpanalog.png'>")
  $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/vynilanalog.png'>")
  $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/stroboanalog.png'>")
  $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxanalog.png'>")
  $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodanalog.png'>")
  }

   if (name == 'belle') {
    $("#pagestyle").attr('href','style/home_belle.css');
    $("#mag_img").replaceWith("<img id='mag_img' src='imgs/amazzone.png' height='550'>")
    $("#yet_img").replaceWith("<img id='yet_img' src='imgs/pattinatrice.png' height='550'>")
    $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazinebelle.png'>")
    $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellobelle.png'>")
    $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harpbelle.png'>")
    $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonebelle.png'>")
    $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobobelle.png'>")
    $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxbelle.png'>")
    $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodbelle.png'>")

  }

  if (name == 'tabloid') {
    $("#pagestyle").attr('href','style/home_tabloid.css');
    $("#mag_img").replaceWith("<img id='mag_img' src='imgs/may.png' height='550'>")
    $("#yet_img").replaceWith("<img id='yet_img' src='imgs/queen_elizabeth.png' height='550'>")
    $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazinetabloid.png'>")
    $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellotabloid.png'>")
    $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harptabloid.png'>")
    $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonetabloid.png'>")
    $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobotabloid.png'>")
    $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxtabloid.png'>")
    $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodtabloid.png'>")
  }

  if (name == 'illuminist') {
      $("#pagestyle").attr('href','style/home_illuminism.css');
      $("#mag_img").replaceWith("<img id='mag_img' src='imgs/kendrick__illuminism.png' height='550' filter='sepia'>")
      $("#yet_img").replaceWith("<img id='yet_img' src='imgs/didot_transparent.png' height='550'>")
      $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazine.png'>")
      $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellohome.png'>")
      $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harphome.png'>")
      $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonehome.png'>")
      $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobohome.png'>")
      $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxhome.png'>")
      $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodhome.png'>")
  }

    if (name == 'future') {
        $("#pagestyle").attr('href','style/home_future.css');
        $("#mag_img").replaceWith("<img id='mag_img' src='imgs/dither_it_mag.jpeg' height='550'>")
        $("#yet_img").replaceWith("<img id='yet_img' src='imgs/dither_it_records.jpg' height='550'>")

        /* ICONE */
        $("#cello").attr('src','imgs/dither_it_cello.png');
        $("#harp").attr('src','imgs/dither_it_harp.png');
        $("#gramophone").attr('src','imgs/dither_it_gramophone.png');
        $("#disco").attr('src','imgs/dither_it_disco.png');
        $("#boombox").attr('src','imgs/dither_it_boombox.png');
        $("#walkman").attr('src','imgs/dither_it_walkman.png');
        $("#home_icon").attr('src', 'imgs/dither_it_magazine.png');


    }

}


function keepstylehome(pagestyle){
  var style= document.getElementById(pagestyle).getAttribute("href");
  sessionStorage.setItem("currentstyle", style);
}

$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = sessionStorage.getItem("currentstyle");
    
    if (style==="style/illuminism.css"||style==="style/documentation_illuminism.css"){
      change('illuminist')
    }

     if (style==="style/hobbyhorse.css"||style==="style/documentation_hobbyhorse.css"){
      change('hobbyhorse')
    }

     if (style==="style/belle.css"||style==="style/documentation_belle.css"){
      change('belle')
    }


     if (style==="style/analog.css"||style==="style/documentation_analog.css"){
      change('disco')
    }


     if (style==="style/tabloid.css"||style==="style/documentation_tabloid.css"){
      change('tabloid')
    }


     if (style==="style/future.css"||style==="style/documentation_future.css"){
      change('future')
    }

       sessionStorage.clear();

}

else{
   $("#pagestyle").attr('href','style/home.css');
}

});