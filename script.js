$(document).ready(function(){
    $('a').click(function(){
        var selected = $(this);
        $('a').removeClass('active');
        $(selected).addClass('active');
     });

   var $a = $('.a'),
   $b = $('.b'),
   $c = $('.c'),
   $d = $('.d'),
   $home = $('.home'),
   $aboutme = $('.aboutme'),
   $projects = $('.projects'),
   $contactme = $('.contactme');

  $a.click(function(){
    $home.fadeIn();
    $aboutme.fadeOut();
    $projects.fadeOut();
    $contactme.fadeOut();
  });
  $b.click(function(){
    $aboutme.fadeIn();
    $home.fadeOut();
    $projects.fadeOut();
    $contactme.fadeOut();
  });
  $c.click(function(){
    $projects.fadeIn();
    $home.fadeOut();
    $aboutme.fadeOut();
    $contactme.fadeOut();
  });
  $d.click(function(){
   $contactme.fadeIn();
   $projects.fadeOut();
   $home.fadeOut();
   $aboutme.fadeOut(); 
  });
  });