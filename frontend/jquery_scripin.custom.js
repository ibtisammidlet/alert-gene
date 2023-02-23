// v1.2
//* used document ready to solve the exct width did not calculated in some sites
$( document ).ready(function() {

//* var of wantedwidth can be tuned
var wantedwidth = 768;

//* var of extra css can be tuned
var extracss = '<style>h3.intro-title {font-size: 30px;}</style>';

//* getting window width
var windowwidth = $(window).width();

//* devid window width by wanted width
var htmlscale = windowwidth / wantedwidth ;

//* calc new height
var newheight = "<style>html,body{height: "+1/htmlscale*100+"%;}</style>";

//* setting html width as the wanted width and scale the page by the result of htmlscale var
var htmlstyle = '<style>html {width: '+wantedwidth+'px  !important; height: 100%; transform-origin: 0px 0px 0px !important; transform: translate(0px, 0px) scale(' + htmlscale + ');}</style>';

//* injecting css if window width is less then wanted width
if(windowwidth > 0 && windowwidth <= wantedwidth-1) {$('head').append(htmlstyle+newheight+extracss);};
});
