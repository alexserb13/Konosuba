var contactlabel = $("#maintabs > ul > a:first-of-type");
var exitlabel = $("[name = contact]");
var contactpage = $("body > div:nth-of-type(2)");
var button = $(" body > div:nth-of-type(2) #myform > button:nth-of-type(1)");
var about = $("#about");
var right_text = $("#home > div:first-child > div:nth-child(3)");
var left_text = $("#home > div:first-child > div:nth-child(2)");
var homelabel = $("#maintabs > ul > li:first-child> a");
var form_item = $("body > div:nth-of-type(2) > #myform > input:nth-of-type(1), body > div:nth-of-type(2) > #myform > input:nth-of-type(2)");
var sliderselector = $(".sli");
var dots = $(".dots");

homelabel.css({"background-color":"white","color":"#e30089"});


$( function() {
  form_item.tooltip({tooltipClass: "tooltip"});
  $("textarea").tooltip({tooltipClass: "tooltip"});
  contactpage.dialog({width:"100%",autoOpen: false,resizable: false,draggable: false});
  });

function check(first,second){
  $('#'+first).click(function (event){
    $('#'+first).css("background-color","white");
    $('#'+first).css("color","#e30089");
    $('#'+second).css("background-color","lightgrey");
    $('#'+second).css("color","gray");
  });
}
check("maintabs > ul > li:first-child> a","maintabs > ul > li:nth-child(2)> a");
check("maintabs > ul > li:nth-child(2)> a","maintabs > ul > li:first-child> a");

contactlabel.click(function (event){
  $(".ui-dialog").fadeIn();
});

exitlabel.css({"float":"right","font-size":"35px","margin":"50px","top":"0","color":"white"});

exitlabel.click(function (event){
  $(".ui-dialog").slideToggle('slow','swing');
});

button.click(function (event){
  $(".ui-dialog").fadeOut();
});

form_item.keypress(function (event){
  form_item.css("background-color","lightgrey");
  form_item.css("color","white");
  });

$( function() {
    $( "#maintabs" ).tabs();
  } );

about.append("<p></p>");
about.find("p").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus velit eget blandit interdum. Morbi lacinia felis tincidunt urna ultrices fringilla. Curabitur a varius tortor, vitae porttitor felis. Cras mollis volutpat porta. Phasellus auctor porta nisl in ullamcorper. Nulla quis facilisis magna, quis suscipit sem. Vestibulum placerat erat et lorem scelerisque consectetur. Morbi et enim pulvinar, molestie nisl at, pretium dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas hendrerit sem at elit aliquam sollicitudin. Proin tristique sodales mi et vulputate.")

right_text.append("<p></p>");
right_text.find("p").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci ex, iaculis id ex pharetra, pulvinar congue dui. Nullam nec justo sit amet ligula fermentum pretium. Sed accumsan leo eu lacus varius, non egestas tortor commodo. Nulla porta urna ante, sit amet congue nulla dapibus posuere. Morbi nec risus vel ex hendrerit malesuada.")

left_text.append("<h1>hello there!</h1>");
left_text.append("<p></p>");
left_text.find("p").append("Nulla mollis ultrices risus, a sagittis tellus facilisis ac. Nunc quis elit nec leo cursus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan, dolor non mollis finibus, mauris tellus volutpat sapien, sit amet lacinia dolor tellus a tellus. Curabitur lobortis sed dolor vel efficitur. Praesent hendrerit scelerisque sodales. In at congue dui. Vivamus sit amet tellus eget elit tincidunt congue at ac orci. Aenean commodo consectetur vestibulum. Nunc efficitur malesuada rhoncus.");
left_text.find("p").append("Donec eros libero, ullamcorper et euismod a, bibendum et nisl. Praesent tincidunt elementum semper. Morbi malesuada facilisis maximus. Maecenas in aliquet justo. Proin metus quam, ultricies vel vulputate a, rutrum ut lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sollicitudin dolor. Donec eu mollis tellus. Phasellus iaculis lacus vitae dui sodales pellentesque. Sed vel augue aliquet, euismod lectus sit amet, lacinia tortor. Vivamus sollicitudin euismod mi, ac porta urna. Curabitur vitae velit quis ipsum rutrum accumsan. Sed mattis dui augue. Fusce egestas eu lacus sit amet rhoncus. Proin tempus felis sit amet lorem dignissim rhoncus. Aenean aliquet sem turpis, sed bibendum sapien viverra nec. Aenean id imperdiet massa, nec vulputate leo. Pellentesque luctus diam sed egestas pellentesque. Nunc lectus nisi, pulvinar sed nibh nec, feugiat fringilla lorem.");

function sliderPics(src,alt){
  this.src = src;
  this.alt = alt;
}

var slider = [];
var image1 = new sliderPics("https://images5.alphacoders.com/787/787506.png","Loremipsum");
var image2 = new sliderPics("https://images.alphacoders.com/799/799350.png","Loremipsum");
var image3 = new sliderPics("https://images3.alphacoders.com/704/704387.png","Loremipsum");
var image4 = new sliderPics("https://images6.alphacoders.com/682/682962.png","Loremipsum");
var image5 = new sliderPics("https://images.alphacoders.com/795/795473.png","Loremipsum");
slider.push(image1,image2,image3,image4,image5);


function populate(slider){
  var len = slider.length-1;
  sliderselector.append("<img src=" + slider[len].src + " title=" + slider[len].alt + " class=slides height=300px width=480px >");
  for (var i = 0; i < slider.length; i++) {
    sliderselector.append("<img src=" + slider[i].src + " title=" + slider[i].alt + " class=slides height=300px width=480px >");
    dots.append("<span class=dot></span>");
  }
  sliderselector.append("<img src=" + slider[0].src + " title=" + slider[0].alt + " class=slides height=300px width=480px >");
}

populate(slider);

if(window.innerWidth < 480){
  sliderselector.children().eq(0).addClass("left").hide();
  sliderselector.children().eq(1).addClass("current").show();
  sliderselector.children().eq(2).addClass("right").hide();
}
else {
  sliderselector.children().hide();
  sliderselector.children().eq(0).addClass("left").show();
  sliderselector.children().eq(1).addClass("current").show();
  sliderselector.children().eq(2).addClass("right").show();
}

function changepanel(variable){
  if(window.innerWidth < 480){
    sliderselector.children().removeClass("left").hide();
    sliderselector.children().removeClass("current").hide();
    sliderselector.children().removeClass("right").hide();
    sliderselector.children().eq(variable).addClass("left").hide();
    sliderselector.children().eq(variable+1).addClass("current").fadeIn(500);
    sliderselector.children().eq(variable+2).addClass("right").hide();
    dots.children().removeClass("active");
    dots.children().eq(variable).addClass("active");
    return false;
  }
  sliderselector.children().removeClass("left").hide();
  sliderselector.children().removeClass("current").hide();
  sliderselector.children().removeClass("right").hide();
  sliderselector.children().eq(variable).addClass("left").fadeIn(500);
  sliderselector.children().eq(variable+1).addClass("current").fadeIn(500);
  sliderselector.children().eq(variable+2).addClass("right").fadeIn(500);
  dots.children().removeClass("active");
  dots.children().eq(variable).addClass("active");

}
dots.children().eq(0).addClass("active");
$('.dots').on('click', 'span', function(e) {
	 			var $this = $(this);
        changepanel($this.index());
        dots.children().removeClass("active");
        $this.addClass("active");
});

var x = 1 ;
var set = setInterval(function(){
  changepanel(x);
  console.log(x);
  x++;
  if( x == 5 ){
    x=0;
   }
}, 5000);
