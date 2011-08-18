// var hist = []; 
// var startUrl = 'iphone'; 
// 
//  $(document).ready(function(){ 
//      loadPage(startUrl); 
//  });
//  
//  
//  function loadPage(url) { 
//     $('body').append('<div id="progress">Loading...</div>'); 
//     scrollTo(0,0); 
//     if (url == startUrl) { 
//         var element = ' #links ul'; 
//     } else { 
//         var element = ' #content'; 
//     } 
//     $('#container').load(url + element, function(){ 
//         var title = $('h2').html() || 'Hello!'; 
//         $('h1').html(title); 
//         $('h2').remove(); 
//         $('.leftButton').remove(); 
//         hist.unshift({'url':url, 'title':title}); 
//         if (hist.length > 1) { 
//             $('#header').append('<div class="leftButton">'+hist[1].title+'</div>'); 
//             $('#header .leftButton').click(function(e){ 
//                 $(e.target).addClass('clicked'); 
//                 var thisPage = hist.shift(); 
//                 var previousPage = hist.shift(); 
//                 loadPage(previousPage.url); 
//             }); 
//         } 
//         $('#container a').click(function(e){ 
//             var url = e.target.href; 
//             // if (url.match(/jonathanstark.com/)) { 
//                 e.preventDefault(); 
//                 loadPage(url); 
//             // } 
//         }); 
//         $('#progress').remove(); 
//     }); 
// }


$(document).ready(function(){ 
    // Sistemo la toolbar dopo un rotation
    // var supportsOrientationChange = "onorientationchange" in window,
    //     orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
    
    window.addEventListener('resize', function() {
        window.scrollTo(0, 1);
    }, false);
  
  
  
    // nascondo la toolbar se e' un Android
    if(navigator.userAgent.match(/Android/i) && !pageYOffset && !location.hash){ 
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 1000);
    };

   $('#progress').remove(); 
   $('#header .leftButton').click(function(e){ 
     $(e.target).addClass('clicked');
     $('body').append('<div id="progress">Loading...</div>');
   });
});


// if (window.innerWidth && window.innerWidth <= 480) { 
//     $(document).ready(function(){ 
//         $('#header ul').addClass('hide'); 
//         $('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>'); 
//     }); 
//     function toggleMenu() { 
//         $('#header ul').toggleClass('hide'); 
//         $('#header .leftButton').toggleClass('pressed'); 
//     } 
// }
// 
////////////////////

// $(document).ready(function(){ 
//     loadPage(); 
// }); 
// function loadPage(url) { 
//    $('body').append('<div id="progress">Loading...</div>'); 
//    scrollTo(0,0);
//    if (url == undefined) { 
//       $('#container').load('iphone #links ul', hijackLinks); 
//    } else { 
//       
//       $('#container').load(url + ' #content', hijackLinks); 
//    } 
// } 
// function hijackLinks() { 
//     $('#container a').click(function(e){ 
//         e.preventDefault(); 
//         loadPage(e.target.href); 
//     });
//     // var title = $('h2').html() || 'Rosario Test'; 
//     //     $('h1').html(title); 
//     //     $('h2').remove(); 
//     
//     $('#progress').remove(); 
// }