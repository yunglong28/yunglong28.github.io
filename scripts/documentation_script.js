function change(name) {

   if (name == 'home') {
     $("#pagestyle").attr('href','style/documentation_alt.css');
     $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazine.png' alt='Resonance' title='Resonance'>")
     $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellohome.png' alt='Illuminism' title='Illuminism'>")
     $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harphome.png' alt='Hobby Horse' title='Hobby Horse'>")
     $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonehome.png' alt='Belle Epoque' title='Belle Epoque'>")
     $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobohome.png' alt='Analog' title='Analog computing magazine'>")
     $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxhome.png' alt='Tabloid' title='Tabloid'>")
     $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodhome.png' alt='Future' title='Future'>")
   }

   if (name == 'illuminist') {
     $("#pagestyle").attr('href','style/documentation_illuminism.css');
     $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazine.png' alt= 'Resonance' title='Resonance'>")
    $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellohome.png' alt='Illuminism' title='Illuminism'>")
    $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harphome.png'  alt='Hobby Horse' title='Hobby Horse'>")
    $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonehome.png' alt='Belle Epoque' title='Belle Epoque'>")
    $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobohome.png' alt='Analog' title='Analog computing magazine'>")
    $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxhome.png' alt='Tabloid' title='Tabloid'>")
    $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodhome.png' alt='Future' title='Future'>")
   }

   if (name == 'hobbyhorse') {
     $("#pagestyle").attr('href','style/documentation_hobbyhorse.css');
     $(".marquee-section").remove()
     $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazinetabloid.png' alt='Resonance' title='Resonance'>")
     $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellotabloid.png' alt='Illuminism' title='Illuminism'>")
     $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harptabloid.png' alt='Hobby Horse' title='Hobby Horse'>")
     $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonetabloid.png' alt='Belle Epoque' title='Belle Epoque'>")
     $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobotabloid.png' alt='Analog' title='Analog computing magazine'>")
     $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxtabloid.png' alt='Tabloid' title='Tabloid'>")
     $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodtabloid.png' alt='Future' title='Future'>")
   }


    if (name == 'belle') {
     $("#pagestyle").attr('href','style/documentation_belle.css');
     $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazinebelle.png' alt='Resonance' title='Resonance'>")
     $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellobelle.png' alt='Illuminism' title='Illuminism'>")
     $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harpbelle.png' alt='Hobby Horse' title='Hobby Horse'>")
     $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonebelle.png' alt='Belle Epoque' title='Belle Epoque'>")
     $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobobelle.png' alt='Analog' title='Analog computing magazine'>")
     $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxbelle.png' alt='Tabloid' title='Tabloid'>")
     $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodbelle.png' alt='Future' title='Future'>")

   }

    if (name == 'disco') {
     $("#pagestyle").attr('href','style/documentation_analog.css');
     $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazineanalog.png' alt='Resonance' title='Resonance'>")
     $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/celloanalog.png' alt='Illuminism' title='Illuminism'>")
     $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harpanalog.png' alt='Hobby Horse' title='Hobby Horse'>")
     $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/vynilanalog.png' alt='Belle Epoque' title='Belle Epoque'>")
     $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/stroboanalog.png' alt='Analog' title='Analog computing magazine'>")
     $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxanalog.png' alt='Tabloid' title='Tabloid'>")
     $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodanalog.png'  alt='Future' title='Future'>")
   }

   if (name == 'tabloid') {
     $("#pagestyle").attr('href','style/documentation_tabloid.css');
     $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazinetabloid.png' alt='Resonance' title='Resonance'>")
     $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellotabloid.png' alt='Illuminism' title='Illuminism'>")
     $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harptabloid.png' alt='Hobby Horse' title='Hobby Horse'>")
     $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonetabloid.png' alt='Belle Epoque' title='Belle Epoque'>")
     $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobotabloid.png' alt='Analog' title='Analog computing magazine'>")
     $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxtabloid.png' alt='Tabloid' title='Tabloid'>")
     $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodtabloid.png'  alt='Future' title='Future'>")
   }

   if (name == 'future') {
     $("#pagestyle").attr('href','style/documentation_future.css');
      $("#home_icon").attr('src', 'imgs/dither_it_magazine.png')
        $("#cello").attr('src', 'imgs/dither_it_cello.png');
        $("#harp").attr('src', 'imgs/dither_it_harp.png');
        $("#gramophone").attr('src', 'imgs/dither_it_gramophone.png');
        $("#disco").attr('src', 'imgs/dither_it_disco.png');
        $("#boombox").attr('src', 'imgs/dither_it_boombox.png');
        $("#walkman").attr('src', 'imgs/dither_it_walkman.png');
   }

};

function keepstyle(pagestyle){
  var style = document.getElementById(pagestyle).getAttribute("href");
  sessionStorage.setItem('currentstyle', style);

}


$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = sessionStorage.getItem("currentstyle");

    if (style==="style/home.css"||style==="style/issue.css"){
      change('home')
    }

    if (style==="style/home_illuminism.css"||style==="style/illuminism.css"){
      change('illuminist')
    }

    if (style==="style/home_hobbyhorse.css"||style==="style/hobbyhorse.css"){
      change('hobbyhorse')
    }


    if (style==="style/home_belle.css"||style==="style/belle.css"){
      change('belle')
    }

    if (style==="style/home_analog.css"||style==="style/analog.css"){
     	change('disco')
    }


    if (style==="style/home_tabloid.css"||style==="style/tabloid.css"){
     	change('tabloid')
    }

    if (style==="style/home_future.css"||style==="style/future.css"){
     	change('future')
    }


}
});
