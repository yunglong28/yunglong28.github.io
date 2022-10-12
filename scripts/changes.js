function change(name) {

  if (name == 'home') {
    $("#pagestyle").attr('href','style/issue.css');
    $("#sep_nav").remove();

    if ($("#francesca").length) {
     if($(".first_img").length === 0){
       $("<img class='first_img' id='first_img_one' src='https://img1.wsimg.com/isteam/ip/d8d3ee10-86f5-4a41-aa20-fec4c8ea1c2e/Maracatu%20Coronation.png/:/cr=t:3.65%25,l:0.71%25,w:94.34%25,h:94.34%25/rs=w:1280' alt='Coronation ceremony' width='300'>").insertAfter("#col1 .title");
       $("<img class='first_img' id='first_img_two' src='https://2104310a1da50059d9c5-d1823d6f516b5299e7df5375e9cf45d2.ssl.cf2.rackcdn.com/nmbx/2016/11/GaryIngle-475x358.jpg' width='300'>").insertAfter("#col2 .title");
       $("<img class='first_img' id='first_img_three' src='imgs/popular_music_and_society.jpg' width='300'>").insertAfter("#col3 .title");}
    }

    if ($("#alessandro").length) {

       $("<img class='first_img ' id='first_img_one_ale' src='imgs/article_1_1.png' width='400'/>").insertAfter("#col1 .title");
       $(" <img class='first_img'  id='first_img_two' src='imgs/article_2_1.jpg' width='400'>").insertAfter("#col2 .title");
       $("<img class='first_img' id='first_img_three' src='imgs/article_3_1.png' width='400'>").insertAfter("#col3 .title");}


     if ($("#lorenza").length) {
     if($(".first_img").length === 0){
       $("<figure id='first_img_one'><img id='fig_article' class='first_img' src='https://media.pitchfork.com/photos/5f071957ca5f171c3b77135b/2:1/w_2560%2Cc_limit/SOPHIE%252520new%252520music%252520live%252520set.jpg' width='300'> <figcaption><span class='person' about='Sophie' data-label='Sophie' data-wikidata-id='Q18161827'>SOPHIE</span>, photo by <span class='person' about='Renata Raksha'>Renata Raksha</span></figcaption></figure>").insertAfter("#col1 .title");
       $("<figure id='first_img_two'><img class='first_img' src='https://media.newyorker.com/photos/5f7e295b9ee31e60d7874e93/master/w_2560%2Cc_limit/201019_r37204.jpg'  width='300'> <figcaption>Virtuosity doesn’t resonate for <span class='person' about='AdrianneLenker' data-label='Adrianne Lenker' data-wikidata-id='Q64875564'>Lenker</span> as much as vulnerability does. In her work with <span class='band' about='BigThief' data-label='Big Thief' data-wikidata-id='Q28228836'>Big Thief</span> and on her solo records, she has always been most interested in making emotional connections. Photograph by Collier Schorr for <span class='magazine' about='TheNewYorker' data-wikidata-id='Q217305' data-label='The New Yorker'> The New Yorker</span></figcaption></figure>").insertAfter("#col2 .title");
       $("<figure id='first_img_three'><img class='first_img' id='fig_article' src='https://diy-magazine.s3.amazonaws.com/d/diy/Artists/A/Anna-Calvi/DIY-77/Anna-Calvi-by-Eva-Pentel-for-DIY-Mag-Aug-2018-52.jpg' width='300'><figcaption></span></figcaption></figure>").insertAfter("#col3 .title");}
    }

     $("#home_icon").replaceWith("<img id='home_icon' src='imgs/magazine.png'>")
     $("#cello").replaceWith("<img id='cello' src='imgs/cellohome.png'>")
     $("#harp").replaceWith("<img id='harp' src='imgs/harphome.png'>")
     $("#gramophone").replaceWith("<img id='gramophone' src='imgs/gramophonehome.png'>")
     $("#disco").replaceWith("<img id='disco' src='imgs/strobohome.png'>")
     $("#boombox").replaceWith("<img id='boombox' src='imgs/boomboxhome.png'>")
     $("#walkman").replaceWith("<img id='walkman' src='imgs/ipodhome.png'>")

  }


   if (name == 'belle') {
    $("#pagestyle").attr('href','style/belle.css');
    $(".first_img").remove();
    $(".container_articles").attr('class', 'container container_articles');
    if($('#sep_nav').length == 0){$("<br id='sep_nav'>").insertAfter("nav")};
    if ($('.opening_img_belle').length == 0){
      $("<img class='opening_img_belle' id='ballerini' src='imgs/ballerini.png'/>").insertAfter("#col1 .title");
      $("<img class='opening_img_belle' id='amazzone' src='imgs/amazzone.png'/>").insertBefore("#title_and_subtitle_2");
      $("<img class='opening_img_belle' id='pattinatrice' src='imgs/pattinatrice.png'/>").insertAfter("#col3 .title");
    }
    $(".container_articles").attr('class', 'container container_articles');
    $("#home_icon").replaceWith("<img id='home_icon' src='imgs/magazinebelle.png'>");
    $("#cello").replaceWith("<img id='cello' src='imgs/cellobelle.png'>");
    $("#harp").replaceWith("<img id='harp' src='imgs/harpbelle.png'>");
    $("#gramophone").replaceWith("<img id='gramophone' src='imgs/gramophonebelle.png'>");
    $("#disco").replaceWith("<img id='disco' src='imgs/strobobelle.png'>");
    $("#boombox").replaceWith("<img id='boombox' src='imgs/boomboxbelle.png'>");
    $("#walkman").replaceWith("<img id='walkman' src='imgs/ipodbelle.png'>");
  }

  else{
    $(".opening_img_belle").remove();
  }


  if (name =='illuminist'){
    $("#pagestyle").attr('href','style/illuminism.css');
    $(".first_img").remove();
    $("<img class='img-fluid opening_img opening_img_illuminism' src='imgs/didot_cover1.jpeg'>").insertBefore("#col1 .title");
    $("<img class='img-fluid opening_img opening_img_illuminism' src='imgs/didot_cover2.jpeg'>").insertBefore("#col2 .title");
    $("<img class='img-fluid opening_img opening_img_illuminism' src='imgs/didot_cover3.jpeg'>").insertBefore("#col3 .title");
    $("#home_icon").replaceWith("<img id='home_icon' src='imgs/magazine.png'>")
    $("#cello").replaceWith("<img id='cello' src='imgs/cellohome.png'>")
    $("#harp").replaceWith("<img id='harp' src='imgs/harphome.png'>")
    $("#gramophone").replaceWith("<img id='gramophone' src='imgs/gramophonehome.png'>")
    $("#disco").replaceWith("<img id='disco' src='imgs/strobohome.png'>")
    $("#boombox").replaceWith("<img id='boombox' src='imgs/boomboxhome.png'>")
    $("#walkman").replaceWith("<img id='walkman' src='imgs/ipodhome.png'>")
  }

  else {
    $(".opening_img_illuminism").remove();
    $(".cover_image").remove();
    $(".didot_logo").remove();
  }


  if (name =='hobbyhorse'){
    $("#pagestyle").attr('href','style/hobbyhorse.css');
    $("#uccelli").append("<img id='birds' src='imgs/birds2.png' width='250'>");
    $("#uccelli1").replaceWith("<img id='block1' src='imgs/birds3.png' width='250'>");

    $("#home_icon").replaceWith("<img id='home_icon' src='imgs/magazinetabloid.png'>")
    $("#cello").replaceWith("<img id='cello' src='imgs/cellotabloid.png'>")
    $("#harp").replaceWith("<img id='harp' src='imgs/harptabloid.png'>")
    $("#gramophone").replaceWith("<img id='gramophone' src='imgs/gramophonetabloid.png'>")
    $("#disco").replaceWith("<img id='disco' src='imgs/strobotabloid.png'>")
    $("#boombox").replaceWith("<img id='boombox' src='imgs/boomboxtabloid.png'>")
    $("#walkman").replaceWith("<img id='walkman' src='imgs/ipodtabloid.png'>")

    if($('.finalfig1').length == 0){$("<img  id='finalfig1' src='imgs/deco1.png' width='300'>").insertAfter("#col1 p:last-child")};
    if($('.finalfig2').length == 0){$("<img  id='finalfig2' src='imgs/deco2.png' width='300'>").insertAfter("#col2 p:last-child")};
    if($('.finalfig3').length == 0){$("<img  id='finalfig3' src='imgs/deco3.png' width='300'>").insertAfter("#col3 p:last-child")};

    if ($("#francesca").length) {
     if($(".first_img").length === 0){
       $("<img class='first_img' id='first_img_one' src='https://img1.wsimg.com/isteam/ip/d8d3ee10-86f5-4a41-aa20-fec4c8ea1c2e/Maracatu%20Coronation.png/:/cr=t:3.65%25,l:0.71%25,w:94.34%25,h:94.34%25/rs=w:1280' alt='Coronation ceremony' width='300'>").insertBefore("#col1 .subtitle");
       $("<img class='first_img' id='first_img_two' src='https://2104310a1da50059d9c5-d1823d6f516b5299e7df5375e9cf45d2.ssl.cf2.rackcdn.com/nmbx/2016/11/GaryIngle-475x358.jpg' width='300'>").insertAfter("#col2 .title");
       $("<img class='first_img' id='first_img_three' src='imgs/popular_music_and_society.jpg' width='300'>").insertAfter("#col3 .title");}
    }

    if ($("#alessandro").length) {
     if($(".first_img").length === 0){
       $("<img class='img-fluid first_img cover_image' id='first_img_one' src='imgs/article_1_1.png'/>").insertBefore("#col1 .subtitle");
       $(" <img class='img-fluid first_img cover_image'  id='first_img_two' src='imgs/article_2_1.jpg'>").insertAfter("#col2 .title");
       $("<img class='img-fluid first_img cover_image' id='first_img_three' src='imgs/article_3_1.png' id='dither6'>").insertAfter("#col3 .title");}
    }

     if ($("#lorenza").length) {
     if($(".first_img").length === 0){
       $(" <figure id='first_img_one'><img id='fig_article' class='first_img' src='https://media.pitchfork.com/photos/5f071957ca5f171c3b77135b/2:1/w_2560%2Cc_limit/SOPHIE%252520new%252520music%252520live%252520set.jpg' width='300'> <figcaption><span class='person' about='Sophie' data-label='Sophie' data-wikidata-id='Q18161827'>SOPHIE</span>, photo by <span class='person' about='Renata Raksha'>Renata Raksha</span></figcaption></figure>").insertBefore("#col1 .subtitle");
       $("<figure id='first_img_two'><img class='first_img' src='https://media.newyorker.com/photos/5f7e295b9ee31e60d7874e93/master/w_2560%2Cc_limit/201019_r37204.jpg'  width='300'> <figcaption>Virtuosity doesn’t resonate for <span class='person' about='AdrianneLenker' data-label='Adrianne Lenker' data-wikidata-id='Q64875564'>Lenker</span> as much as vulnerability does. In her work with <span class='band' about='BigThief' data-label='Big Thief' data-wikidata-id='Q28228836'>Big Thief</span> and on her solo records, she has always been most interested in making emotional connections. Photograph by Collier Schorr for <span class='magazine' about='TheNewYorker' data-wikidata-id='Q217305' data-label='The New Yorker'> The New Yorker</span></figcaption></figure>").insertAfter("#col2 .title");
       $("<figure id='first_img_three'><img class='first_img' id='fig_article' src='https://diy-magazine.s3.amazonaws.com/d/diy/Artists/A/Anna-Calvi/DIY-77/Anna-Calvi-by-Eva-Pentel-for-DIY-Mag-Aug-2018-52.jpg' width='300'><figcaption></span></figcaption></figure>").insertAfter("#col3 .title");}
    }


  }


  else{
    $(".container_articles").attr('class', 'container container_articles');
    $("figcaption").remove();
    $("#block1").remove();
    $("#birds").remove();
    $('#finalfig1').remove();
    $('#finalfig2').remove();
    $('#finalfig3').remove();

  }


  if (name == 'tabloid'){
    $(".first_img").remove();
    $("#pagestyle").attr('href','style/tabloid.css');
    if($('.pallino_giallo').length == 0){$("#col1 .title").prepend("<img class='pallino' src='imgs/pallino.png'>")}
    if($('.pallino_rosso').length == 0){$("#col2 .title").prepend("<img class='pallino' src='imgs/pallino_rosso.png'>")}
    if($('.title_issue').length == 0){$("<div class='title_issue'> <img id='theresonance' src='imgs/theresonance.jpeg'> </div> <div class='banner_issue'> EXCLUSIVE: DECOLONISING MUSIC</div>").insertAfter("nav")};
    if($('#sep_banner').length == 0){$("<br id='sep_banner'>").insertAfter(".banner_issue")};
    if($("#francesca").length){
      $("#title_and_subtitle_1").css({fontSize: 50});
      $("#title_and_subtitle_1").addClass("delStyle");
      $("#title2").css({fontSize: 80});
      $("#title2").addClass("delStyle");
      $("#title_and_subtitle_3").css({fontSize: 40});
      $("#title_and_subtitle_3").addClass("delStyle");
      $("#title_and_subtitle_2").css("text-transform", "uppercase");
      $("#title_and_subtitle_2").addClass("delStyle");
      $("#title2").css("text-decoration","none");
      $("#col2 .pallino").remove();
      $("#title2").css("line-height", '1em');
     }

    if($("#alessandro").length){
      $("#title_and_subtitle_2").css({fontSize: 30});
      $("#title_and_subtitle_2").addClass("delStyle");
      $("#title_and_subtitle_3").css({fontSize: 30});
      $("#title_and_subtitle_3").addClass("delStyle");
      $("#subtitle3").css("column-count","2");
      $("#subtitle3").addClass("delStyle");
      $("#subtitle3").css("max-width","100%");
     }

    $("#home_icon").replaceWith("<img id='home_icon' src='imgs/magazinetabloid.png'>")
    $("#cello").replaceWith("<img id='cello' src='imgs/cellotabloid.png'>")
    $("#harp").replaceWith("<img id='harp' src='imgs/harptabloid.png'>")
    $("#gramophone").replaceWith("<img id='gramophone' src='imgs/gramophonetabloid.png'>")
    $("#disco").replaceWith("<img id='disco' src='imgs/strobotabloid.png'>")
    $("#boombox").replaceWith("<img id='boombox' src='imgs/boomboxtabloid.png'>")
    $("#walkman").replaceWith("<img id='walkman' src='imgs/ipodtabloid.png'>")
  }

  else {
    $(".banner_issue").remove();
    $(".title_issue").remove();
    $("#sep_banner").remove()
    $(".pallino").remove();
    $(".delStyle").removeAttr("style");
}

  if (name == 'analog'){
    $("#pagestyle").attr('href','style/analog.css');
    $("#sep_nav").remove();
    $("#title_and_subtitle_1").prepend("<img class='analog_img' src='imgs/sub1.png' width='300'>");
    $("#title_and_subtitle_2").prepend("<img  class=' analog_img micro' id='finalfig1' src='imgs/micro.png' width='300'>");
    $("#title_and_subtitle_3").prepend("<img  class='analog_img' id='fig3' src='imgs/spartito.png' width='300'>");
    $(".adv3").prepend("<img  class='finalfig1' src='imgs/adv3.png' width='300'>");
    $(".adv1").prepend(" <img class='adv1'src='imgs/adv1.png' width='300'>");
    $("#adv8000").append("<img  class='finalfig1' src='imgs/adv3.png' width='300'>")
    $("#advnextissue").append("<img class='adv' src='imgs/adv2.png' width='300'>")
    $("#advatari").append("<img class='adv1' src='imgs/adv1.png' width='300'>")
      $(".adv2").prepend(" <img id='adv2'src='imgs/adv2.png' width='300'>");
      $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazineanalog.png'>")
      $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/celloanalog.png'>")
      $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harpanalog.png'>")
      $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/vynilanalog.png'>")
      $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/stroboanalog.png'>")
      $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxanalog.png'>")
      $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodanalog.png'>")
      $(".start_line").remove()




    if ($("#francesca").length) {
      $(".first_img").remove()
       $("<img class='first_img' id='first_img_one' src='https://img1.wsimg.com/isteam/ip/d8d3ee10-86f5-4a41-aa20-fec4c8ea1c2e/Maracatu%20Coronation.png/:/cr=t:3.65%25,l:0.71%25,w:94.34%25,h:94.34%25/rs=w:1280' alt='Coronation ceremony' width='300'>").insertBefore("#title_and_subtitle_1");
       $("<img class='first_img' id='first_img_two' src='https://2104310a1da50059d9c5-d1823d6f516b5299e7df5375e9cf45d2.ssl.cf2.rackcdn.com/nmbx/2016/11/GaryIngle-475x358.jpg' width='300'>").insertBefore("#title_and_subtitle_2");
       $("<img class='first_img' id='first_img_three' src='imgs/popular_music_and_society.jpg' width='300'>").insertBefore("#title_and_subtitle_3");
       $("<br id='title_break'>").insertBefore("#title_and_subtitle_1 .title")
     }

     if ($("#alessandro").length) {
      $(".first_img").remove()
       $("<img class='img-fluid first_img cover_image' id='first_img_one' src='imgs/article_1_1.png'/>").insertBefore("#title_and_subtitle_1");
       $(" <img class='img-fluid first_img cover_image'  id='first_img_two' src='imgs/article_2_1.jpg'>").insertBefore("#title_and_subtitle_2");
       $("<img class='img-fluid first_img cover_image' id='first_img_three' src='imgs/article_3_1.png' id='dither6'>").insertBefore("#title_and_subtitle_3");
    }


    if ($("#lorenza").length) {
        $(".first_img").remove()
           $("<figure id='first_img_one'><img id='fig_article' class='first_img' src='https://media.pitchfork.com/photos/5f071957ca5f171c3b77135b/2:1/w_2560%2Cc_limit/SOPHIE%252520new%252520music%252520live%252520set.jpg' width='300'> <figcaption><span class='person' about='Sophie' data-label='Sophie' data-wikidata-id='Q18161827'>SOPHIE</span>, photo by <span class='person' about='Renata Raksha'>Renata Raksha</span></figcaption></figure>").insertBefore("#title_and_subtitle_1");
           $("<figure id='first_img_two'><img class='first_img' src='https://media.newyorker.com/photos/5f7e295b9ee31e60d7874e93/master/w_2560%2Cc_limit/201019_r37204.jpg'  width='300'> <figcaption>Virtuosity doesn’t resonate for <span class='person' about='AdrianneLenker' data-label='Adrianne Lenker' data-wikidata-id='Q64875564'>Lenker</span> as much as vulnerability does. In her work with <span class='band' about='BigThief' data-label='Big Thief' data-wikidata-id='Q28228836'>Big Thief</span> and on her solo records, she has always been most interested in making emotional connections. Photograph by Collier Schorr for <span class='magazine' about='TheNewYorker' data-wikidata-id='Q217305' data-label='The New Yorker'> The New Yorker</span></figcaption></figure>").insertBefore("#title_and_subtitle_2");
           $("<figure id='first_img_three'><img class='first_img' id='fig_article' src='https://diy-magazine.s3.amazonaws.com/d/diy/Artists/A/Anna-Calvi/DIY-77/Anna-Calvi-by-Eva-Pentel-for-DIY-Mag-Aug-2018-52.jpg' width='300'><figcaption></span></figcaption></figure>").insertBefore("#title_and_subtitle_3");
         }



    }

    else{
      $('.analog_img').remove();
      $(".finalfig1").remove()
      $(".adv").remove();
      $(".adv1").remove();
      $("#title_break").remove();
    }


    if (name =='future') {

        $("#pagestyle").attr('href', 'style/future.css');
        $("#home_icon").attr('src', 'imgs/dither_it_magazine.png')
        $("#cello").attr('src', 'imgs/dither_it_cello.png');
        $("#harp").attr('src', 'imgs/dither_it_harp.png');
        $("#gramophone").attr('src', 'imgs/dither_it_gramophone.png');
        $("#disco").attr('src', 'imgs/dither_it_disco.png');
        $("#boombox").attr('src', 'imgs/dither_it_boombox.png');
        $("#walkman").attr('src', 'imgs/dither_it_walkman.png');
        if ($('#sep_nav').length == 0) {$("<br id='sep_nav'>").insertAfter("nav")}


        if ($('#solar_bar').length == 0) {$("<div id='solar_bar'><p> This is a solar-powered website, which means it sometimes goes offline. You have 5 minutes of energy left. <img src='imgs/icons8-sun-30.png'><br></p><p>The page size is 86kb. You can print it ecologically <a href='https://www.greenerprinter.com/00'><img src='imgs/icons8-print-30.png'></a><p>Only 0.14 g of CO2 is produced every time someone visits this web page. This is cleaner than 86  % of web pages tested</p><p>Calculate your web page footprint <a href='https://www.websitecarbon.com/'>here</a>.<p/><p>Server Stats <img src='imgs/icons8-solar-panels-32.png'> <br> Location: Barcelona | Time: 16:58 CEST | Battery status: Charging | Power used: 2.50W | Uptime: 12 weeks, 2 days, 6 hours, 19 minutes</p></div>").insertAfter("#sep_nav")
        }

        if($("#alessandro").length){
          $(".first_img").remove()
          $("<img class='img-fluid first_img dithered_images' id='dither_1_ale' src='imgs/dither_it_article_1_1.png'>").insertAfter("#title_and_subtitle_1 .title")
          $("<img class='img-fluid first_img dithered_images' id='dither_2_ale' src='imgs/dither_it_article_2_1.png'>").insertAfter("#title_and_subtitle_2 .title")
          $("<img class='img-fluid first_img dithered_images' id='dither_3_ale' src='imgs/dither_it_article_3_1.png'>").insertAfter("#title_and_subtitle_3 .title")
        }

        if($("#francesca").length){
          $(".first_img").remove()
          $("<img class='first_img cover_image img-fluid dithered_images' id='first_img_one' src='imgs/dither_it_fra1.jpg'>").insertAfter("#title_and_subtitle_1 .title")
          $("<img class='first_img cover_image img-fluid' id='first_img_two' src='imgs/dither_it_fra2.jpeg'>").insertAfter("#title_and_subtitle_2 .title")
          $("<img class='first_img cover_image img-fluid' id='first_img_three' src='imgs/dither_it_fra3.jpeg'>").insertAfter("#title_and_subtitle_3 .title")
        }

        if($("#lorenza").length){
          $(".first_img").remove()
          $("<img id='fig_article1' src='imgs/dither_it_lorenza1.jpeg' class='dithered_images' width='300'>").insertAfter("#title_and_subtitle_1 .title")
          $("<img id='fig2' src='imgs/dither_it_lorenza2.jpeg' class='dithered_images' width='300'>").insertAfter("#title_and_subtitle_2 .title")
          $("<img id='fig_article' src='imgs/dither_it_lorenza3.jpeg' class='dithered_images' width='300'>").insertAfter("#title_and_subtitle_3 .title")
        }

      }


    else{
        $("#solar_bar").remove();
        $("#nav_hr").remove();
        $(".opening_img_future").remove();
        $(".blackout").remove();
        $(".blackout-sentence").remove();
        $(".dithered_images").remove();

    }


}


function keepstyle(pagestyle){
  var style = document.getElementById(pagestyle).getAttribute("href");
  sessionStorage.setItem('currentstyle', style);
}


$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = sessionStorage.getItem("currentstyle");

    if (style==="style/home.css"||style==="style/issue.css"){
       change('home');
    }


    if (style==="style/home_illuminism.css"||style==="style/illuminism.css"||style==="style/documentation_illuminism.css"){
      change('illuminist');
    }

    if (style==="style/home_hobbyhorse.css"||style==="style/hobbyhorse.css"||style==="style/documentation_hobbyhorse.css"){
       change('hobbyhorse');
    }

    if (style==="style/home_belle.css"||style==="style/belle.css"||style==="style/documentation_belle.css"){
      change('belle');
    }

    if (style==="style/home_analog.css"||style==="style/analog.css"||style==="style/documentation_analog.css"){
      change('analog');
    }

    if (style==="style/home_tabloid.css"||style==="style/tabloid.css"||style==="style/documentation_tabloid.css"){
      change('tabloid');
    }

    if (style==="style/home_future.css"||style==="style/future.css"||style==="style/documentation_future.css"){
      change('future');
    }

    sessionStorage.clear();
  }


});


/*SIDEBAR SCRIPT*/

jQuery(document).ready(function ( $ ) {
    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });
});



function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("articoli").style.width = "70%";
    document.getElementById("articoli").style.marginLeft = "350px";
    document.getElementById("footer").style.width = "70%";
    document.getElementById("footer").style.marginLeft = "350px";
    $("#metadati").removeAttr("onclick");
    $("#metadati").attr('onclick','closeNav()');
    $('.title_issue').css('paddingLeft', '350px');
    $('.banner_issue').css('paddingLeft', '350px');

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("articoli").style.marginLeft = "auto";
    document.getElementById("articoli").style.width = "100%";
    document.getElementById("footer").style.width = "100%";
    document.getElementById("footer").style.marginLeft = "auto";
    $("#metadati").removeAttr("onclick");
    $("#metadati").attr('onclick','openNav()');
    $('.title_issue').css('paddingLeft', '0');
    $('.banner_issue').css('paddingLeft', '0');
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
/*END OF SIDEBAR SCRIPT*/

/*METADATA SCRIPT: UNDERLINE*/

function underline_col1(item, color){
  if ($(item).attr('clicked') == "false"){
        var aboutwho = $(item).attr('about');
        $(item).css('background-color', color);
        $('#col1 [about= "' + aboutwho + '"]').css('background-color', color);
        var elementPos = $('#col1 span[about= "' + aboutwho + '"]:first').offset().top; /*retrieve the current position of an element (specifically its border box, which excludes margins) relative to the document*/
        var scrollPos = $("#col1").scrollTop();/*returns the vertical scrollbar position for the selected element*/
        var borderPixels = $(".article_col").css('borderWidth')/*returns the width of an element's border*/
        let border = borderPixels.replace("px", "");
        $("html").animate({scrollTop:0}, 1000)/*set vertical scrollbar position for the webpage to the top*/
        $("#col1").animate({scrollTop:scrollPos + elementPos - $("#col1").offset().top - border}, 1000);/*some maths*/
        $(item).attr("clicked","true");
      }
  else{
    var aboutwho = $(item).attr('about');
    $(item).css('background-color', 'transparent');
    $('#col1 [about= "' + aboutwho + '"]').css('background-color', 'transparent');
    $(item).attr("clicked","false");
  }
}


function underline_col2(item, color){
  if ($(item).attr('clicked') == "false"){
        var aboutwho = $(item).attr('about');
        $(item).css('background-color', color);
        $('#col2 [about= "' + aboutwho + '"]').css('background-color', color);
        var elementPos = $('#col2 span[about= "' + aboutwho + '"]:first').offset().top;
        var scrollPos = $("#col2").scrollTop();
        var borderPixels = $(".article_col").css('borderWidth')
        let border = borderPixels.replace("px", "");
        $("html").animate({scrollTop:0}, 1000)
        $("#col2").animate({scrollTop: scrollPos + elementPos - $("#articoli").offset().top - border}, 1000);
        $(item).attr("clicked","true");
      }
  else{
    var aboutwho = $(item).attr('about');
    $(item).css('background-color', 'transparent');
    $('#col2 [about= "' + aboutwho + '"]').css('background-color', 'transparent');
    $(item).attr("clicked","false");
  }
}

function underline_col3(item, color){
  if ($(item).attr('clicked') == "false"){
        var aboutwho = $(item).attr('about');
        $(item).css('background-color', color);
        $('#col3 [about= "' + aboutwho + '"]').css('background-color', color);
        var elementPos = $('#col3 span[about= "' + aboutwho + '"]:first').offset().top;
        var scrollPos = $("#col3").scrollTop();
        var borderPixels = $(".article_col").css('borderWidth')
        let border = borderPixels.replace("px", "");
        $("html").animate({scrollTop:0}, 1000)
        $("#col3").animate({scrollTop: scrollPos + elementPos - $("#articoli").offset().top - border}, 1000);
        $(item).attr("clicked","true");
      }
  else{
    var aboutwho = $(item).attr('about');
    $(item).css('background-color', 'transparent');
    $('#col3 [about= "' + aboutwho + '"]').css('background-color', 'transparent');
    $(item).attr("clicked","false");
  }
}


function underline_col(item, color){
  if ($(item).attr('clicked') == "false"){
        var aboutwho = $(item).attr('about');
        $(item).css('background-color', color);
        $('[about= "' + aboutwho + '"]').css('background-color', color);
        var elementPos = $('span[about= "' + aboutwho + '"]:first').offset().top;
        var scrollPos = $('[about= "' + aboutwho + '"]').parents('.article_col').scrollTop();
        $("html").animate({scrollTop:0}, 1000)
        var borderPixels = $(".article_col").css('borderWidth')
        let border = borderPixels.replace("px", "");
        $('[about= "' + aboutwho + '"]').parents('.article_col').animate({scrollTop: scrollPos + elementPos - $("#articoli").offset().top - border}, 1000);
        $(item).attr("clicked","true");
      }
  else{
    var aboutwho = $(item).attr('about');
    $(item).css('background-color', 'transparent');
    $('span[about= "' + aboutwho + '"]').css('background-color', 'transparent');
    $(item).attr("clicked","false");
  }
}

//SORTING FUNCTIONS

function sortAlphabet(lista){
  var list = document.getElementById(lista);
  var items = list.childNodes;//The childNodes property returns a NodeList object. The childNodes property is read-only. Nodes are element nodes, text nodes, and comment nodes.
  var itemsArr = [];
  for (var i in items) {
      if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
          itemsArr.push(items[i]);
      }
  }

  itemsArr.sort(function(a, b) {
    return a.innerHTML == b.innerHTML// if the value is the same
            ? 0//keep the original order
            : (a.innerHTML > b.innerHTML ? 1 : -1);//otherwhise: if a > b, sort a after b, else sort a before b ('Alice' is smaller than 'Bob')
  });


  for (i = 0; i < itemsArr.length; ++i) {
    list.appendChild(itemsArr[i]);
  }
}



$(document).ready(function(){
  window.original_order_one = $('#my_list_one').html();
  window.original_order_two = $('#my_list_two').html();
  window.original_order_three = $('#my_list_three').html();
  window.original_order_four = $('#my_list_four').html();
  window.original_order_five = $('#my_list_five').html();
  window.original_order_six = $('#my_list_six').html();
  window.original_order_seven = $('#my_list_seven').html();
  window.original_order_eight = $('#my_list_eight').html();
  window.original_order_nine = $('#my_list_nine').html();
  window.original_order_ten = $('#my_list_ten').html();
  window.original_order_eleven = $('#my_list_eleven').html();
  window.original_order_twelve = $('#my_list_twelve').html();
  window.original_order_thirteen = $('#my_list_thirteen').html();
  window.original_order_fourteen = $('#my_list_fourteen').html();
  window.original_order_fifteen = $('#my_list_fifteen').html();
  window.original_order_sixteen = $('#my_list_sixteen').html();
  window.original_order_seventeen = $('#my_list_seventeen').html();
  })

function undo(lista) {
  if (lista == 'my_list_one'){
    document.getElementById(lista).innerHTML = original_order_one;
  }
  else if (lista == 'my_list_two'){
    document.getElementById(lista).innerHTML = original_order_two;
  }
  else if (lista == 'my_list_three'){
    document.getElementById(lista).innerHTML = original_order_three;
  }
   else if (lista == 'my_list_four'){
    document.getElementById(lista).innerHTML = original_order_four;
  }
    else if (lista == 'my_list_five'){
    document.getElementById(lista).innerHTML = original_order_five;
  }
    else if (lista == 'my_list_six'){
    document.getElementById(lista).innerHTML = original_order_six;
  }
    else if (lista == 'my_list_seven'){
    document.getElementById(lista).innerHTML = original_order_seven;
  }
  else if (lista == 'my_list_eight'){
    document.getElementById(lista).innerHTML = original_order_eight;
  }
  else if (lista == 'my_list_nine'){
    document.getElementById(lista).innerHTML = original_order_nine;
  }
   else if (lista == 'my_list_ten'){
    document.getElementById(lista).innerHTML = original_order_ten;
  }
   else if (lista == 'my_list_eleven'){
    document.getElementById(lista).innerHTML = original_order_eleven;
  }
   else if (lista == 'my_list_twelve'){
    document.getElementById(lista).innerHTML = original_order_twelve;
  }
  else if (lista == 'my_list_thirteen'){
    document.getElementById(lista).innerHTML = original_order_thirteen;
  }
   else if (lista == 'my_list_fourteen'){
    document.getElementById(lista).innerHTML = original_order_fourteen;
  }
   else if (lista == 'my_list_fifteen'){
    document.getElementById(lista).innerHTML = original_order_fifteen;
  }
   else if (lista == 'my_list_seventeen'){
    document.getElementById(lista).innerHTML = original_order_seventeen;
  }
}


//FOCUS FUNCTION

function focus_one(elem){
  if ($(elem).attr('clicked') == "false"){
    $('#col2').css({"display": "none"});
    $('#col3').css({"display": "none"});
    $('#col1 .article_header').css("text-align", "center")
    $(elem).attr("clicked","true");
  }
  else{
     $('#col2').css({"display": "block"});
     $('#col3').css({"display": "block"});
     $('#col1 .article_header').css("text-align", "left");
     $(elem).attr("clicked","false");
  }

}


function focus_two(elem){
  if ($(elem).attr('clicked') == "false"){
    $('#col1').css({"display": "none"});
    $('#col3').css({"display": "none"});
    $('#col2 .article_header').css("text-align", "center");
    $(elem).attr("clicked","true");
  }
  else{
     $('#col1').css({"display": "block"});
     $('#col3').css({"display": "block"});
     $('#col2 .article_header').css("text-align", "left");
     $(elem).attr("clicked","false");
  }

}


function focus_three(elem){
  if ($(elem).attr('clicked') == "false"){
    $('#col1').css({"display": "none"});
    $('#col2').css({"display": "none"});
    $('#col3 .article_header').css("text-align", "center")
    $(elem).attr("clicked","true");
  }
  else{
     $('#col1').css({"display": "block"});
     $('#col2').css({"display": "block"});
     $('#col3 .article_header').css("text-align", "left");
     $(elem).attr("clicked","false");
  }

}

//ADD METADATA
// create an object with userclasses
var UserClasses_init = {}
// Convert the JavaScript object into a string and save it into localStorage (JSON makes it possible to store JavaScript objects as text)
localStorage.setItem('UserClasses', JSON.stringify(UserClasses_init))

function saveNewClass(){  //saves new metadata classes in localStorage
  //variable for the class from the user input
    key = $("#add_class").val().toLowerCase().toString();
  //variable fo the text selected by the user
    value = document.getSelection().toString();
  //check whether the user specified the class name and selected the text
    if ((key == '') | (key == null) | (value == '') | (value == null)) {
        alert("Please, have a look at the instructions above :)")
    }

    else{
      // get existing User classes
        UserClasses = JSON.parse(localStorage.getItem('UserClasses'))
      //if the class is new, create an empty list of its values
        if ((key in UserClasses)==0){
            UserClasses[key] = []
        }
      //add the new value to the corresponding key in UserClasses
         UserClasses[key].push(value);
      //save updated UserClasses to localStorage
         localStorage.setItem('UserClasses', JSON.stringify(UserClasses))
      //var val1 = localStorage.getItem('UserClasses');
      //alert(val1)
        add_metadata(Object.keys(UserClasses));
      //create a span with the selected text as contente
        var wrap = document.createElement('span')
        wrap.innerHTML = value;
        wrap.setAttribute("about", value)
      // var range containing the starting range of the selection
        sel = document.getSelection()
        range = sel.getRangeAt(0);
      // clear the document content at that range
        range.deleteContents();
      // insert the new span node
        range.insertNode(wrap);
      }


}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];  //Returns a random value between the 16 elements of letters (repeated 6 times)
  }
  return color;
}


function add_metadata(keys_list){
  for (let key of keys_list){
    color = getRandomColor()
      if ($("#"+key+"").length == 0){
          $("#new_metadata_list").append("<ul class='user_added_class' id='" + key + "' color='" + color + "'><b>" + key + "</b></ul>") //add new class
          }
      var value = UserClasses[key] //populate the class
      for (let valore of value){
        nospace= valore.replace(/\s/g, "_")
        if ($("#"+nospace+"").length == 0){
          class_color =  $("#"+key+"").attr('color')
          $("#"+key+"").append("<li><a id='" + nospace + "' about='" + valore + "' clicked='false' onclick='underline_col(this, \""+ class_color +"\")'>" + valore + "</a></li>")
      }

      }
}
}


function clearAll(){
  var myNode = document.getElementById("new_metadata_list");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
      }
  $("#new_metadata_list").append('<br>')
  $('span').css('background-color', 'transparent');
  $('#add_class').val('');
  localStorage.clear()
  var UserClasses_init = {}
  // transform it in JSON object and save it into localStorage
  localStorage.setItem('UserClasses', JSON.stringify(UserClasses_init))
}
