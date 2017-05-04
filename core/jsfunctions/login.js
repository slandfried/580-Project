$(document).on('click', "#loginnav", function(){
  $('#logindialog').empty();
  $('#logindialog').removeClass();
});
$(document).on("click", '#loginsubmit', function() {
  $('#logindialog').empty();
  $('#logindialog').removeClass();

 $.ajax({
      type: "POST",
      url: "users.php/login",
      data: $("#loginform").serialize(), // serializes the form's elements.
      success: function(data){   
          var jsonObject = JSON.parse(data);
          //use json to update dialog box and inform user of success or failure
          if(jsonObject.message == "Success"){
            //reloads page to change navbar to logged in navbar
            window.location.replace("index.php");
          }else{
             $('#logindialog').addClass('alert alert-danger');
             $('#logindialog').prepend("<center>"+jsonObject.message+"</center>");
          }
      }
  });

return false;
});

var adans = 0;
var subans = 0;
var loop;
var loopshape;
responsiveVoice.setDefaultVoice("US English Female");

$(document).ready(function () {
  responsiveVoice.cancel();
  $('#q').fadeIn();
  if(sPage == "cornershapes.php") {responsiveVoice.speak("How many corners does this shape have?", "US English Female");}
  else if(sPage == "countingshapes.php") {responsiveVoice.speak("How many shapes do you count?", "US English Female");}
  else if(sPage == "addition.php") {responsiveVoice.speak("What is the answer to this addition problem?", "US English Female");}
  else if(sPage == "subtraction.php") {responsiveVoice.speak("What is the answer to this subtraction problem?", "US English Female");}
  else if(sPage == "spelling.php") {responsiveVoice.speak("How do you spell bat?", "US English Female");}
  else if(sPage == "rhyming.php") {responsiveVoice.speak("What rhymes with cat?", "US English Female", {rate: 0.75});}
  $('.inst').delay(3000).fadeIn();
  if(sPage != "index.php" && sPage != "introaddition.php" && sPage != "introsubtraction.php" && sPage != "introshapes.php" && sPage != "activities.php" && sPage != "introwords.php" && sPage != "progress.php" && sPage != "wordsprogress.php" && sPage != "shapesprogress.php" && sPage != "additionprogress.php" && sPage != "subtractionprogress.php") {
    if(sPage == "spelling.php") {responsiveVoice.speak("Press the space bar or left arrow to select the correct letter.", "US English Female");}
    else if(sPage == "rhyming.php") {responsiveVoice.speak("Press the space bar of left arrow to select the correct word", "US English Female");}
    else {responsiveVoice.speak("Press the SPACE bar or LEFT arrow to select the correct number.", "US English Female");}
    if(sPage == "cornershapes.php") {
      responsiveVoice.speak("Press the right arrow or enter to submit answer and advance to the next shape.", "US English Female");
    }
    else if(sPage == "countingshapes.php") {responsiveVoice.speak("Press the right arrow or enter to submit answer and advance to the next grouping.", "US English Female");}
    else if(sPage == "subtraction.php" || sPage == "addition.php" || sPage == "rhyming.php") {responsiveVoice.speak("Press the right arrow or enter to submit answer and advance to the next problem.", "US English Female");}
    else if(sPage == "spelling.php") {
      responsiveVoice.speak("Press RIGHT arrow or ENTER to submit letter and advance to the next word once you have selected all the correct letters for the current word.", "US English Female");
    }
  }
  if(sPage == "cornershapes.php") {
    $('#shapeswrapper').delay(11000).fadeIn();
    setTimeout(function() {
      var square = document.createElement('audio');
      square.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/square.mp3");
      square.play();
    }, 14000);
  }
  else if(sPage == "addition.php") {
    adans = mathProblem();
    $('#additionnumbers').delay(11000).fadeIn();
    $('.addprob').delay(13000).fadeIn();
    setTimeout(function() {
      responsiveVoice.speak(a+"plus"+b+"equals");
    }, 14500);
    $('.addsol').delay(14000).fadeIn();
  }
  else if(sPage == "subtraction.php") {
    subans = subMathProblem();
    $('#subtractionnumbers').delay(11000).fadeIn();
    $('.subprob').delay(13000).fadeIn();
    if(c_first == 1) {
      setTimeout(function() {
        if(c == 18 && d != 18) {responsiveVoice.speak("Eighteen minus"+d+"equals");}
        else if(c != 18 && d == 18) {responsiveVoice.speak(c+"minus eighteen equals");}
        else if(c == 18 && d == 18) {responsiveVoice.speak("Eighteen minus eighteen equals");}
        else {responsiveVoice.speak(c+"minus"+d+"equals");}
      }, 14500);
    }
    else {
      setTimeout(function() {
        if(c != 18 && d == 18) {responsiveVoice.speak("Eighteen minus"+c+"equals");}
        else if(c == 18 && d != 18) {responsiveVoice.speak(d+"minus eighteen equals");}
        else if(c == 18 && d == 18) {responsiveVoice.speak("Eighteen minus eighteen equals");}
        responsiveVoice.speak(d+"minus"+c+"equals");
      }, 14500);
    }
    $('.subsol').delay(14000).fadeIn();
  }
  else if(sPage == "countingshapes.php") {$('.shapecount').delay(11000).fadeIn();}
  else if(sPage == "spelling.php") {
    $('#spellwrapper').delay(17500).fadeIn();
    $('.spellheight').delay(17500).fadeIn();
  }
  else if(sPage == "rhyming.php") {
    $('#rhymewrapper').delay(12000).fadeIn();
    $('#rhymewrapper2').delay(12000).fadeIn();
  }
  $('#shape').prepend("<img src="+"'"+"../images/square.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");
  $('#spelling').prepend("<img src="+"'"+"../images/bat.gif"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");
  for(loop = 2 ; loop < 12 ; loop++) {
      $('#count-shape'+loop).prepend("<img src="+"'"+"../images/circle.jpg"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
  }
  for(loop = 14 ; loop < 24 ; loop++) {
      $('#count-shape'+loop).prepend("<img src="+"'"+"../images/circle.jpg"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
  }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a;
var b;

function mathProblem() {
  a = getRandomInt(0,10);
  b = getRandomInt(0,10);

  $('#adcol4').html("<center>"+a+"</center>");
  $('#adcol6').html("<center>"+b+"</center>");
  /*responsiveVoice.speak(a+"plus"+b+"   equals", "US English Female");*/

  return a+b;
}

var c;
var d;
var c_first;

function subMathProblem() {
  c = getRandomInt(0,20);
  d = getRandomInt(0,20);

  if(c > d) {
    $('#subcol4').html("<center>"+c+"</center>");
    $('#subcol6').html("<center>"+d+"</center>");

    c_first = 1;
    return c-d;
  }
  else {
    $('#subcol4').html("<center>"+d+"</center>");
    $('#subcol6').html("<center>"+c+"</center>");

    c_first = 0;
    return d-c;
  }
}

var correct = 0;

var corner_mis = 0;
var count_mis = 0;

function checkAnswer(x, a, q, w) {
  if(q != 7) {
    if(x == a) {
      correct_ans.play();
      $('#correct').delay(500).fadeIn();
      $('#correct').delay(500).fadeOut();
      $('#box').delay(1500).fadeIn();
      $('#cbox').delay(1500).fadeIn();
      if(!made_mis) {correct++;}
      else {made_mis = 0;}
      mc = 0;
      return 0;
    }
    else {
      made_mis = 1;
      $('.col-sm-1').fadeOut();
      false_ans.play();
      $('#fresponse').empty();
      if(w < 4) {
        $('#fresponse').prepend("Sorry! Try again!");
      }
      else {  
        $('#fresponse').prepend("Sorry! The correct answer is "+a+".");
      }
      $('#false').delay(500).fadeIn();
      $('#false').delay(500).fadeOut();
      $('#box').delay(1500).fadeIn();
      $('#cbox').delay(1500).fadeIn();
      $('.col-sm-1').delay(1500).fadeIn();
      mc = 0;
      w++;
      count_mis++;
      corner_mis++;
      return w;
    }
  }
  else {
    if(x == a) {
      correct_ans.play();
      if(!made_mis) {correct++;}
      else {made_mis = 0;}
      $('#correct').delay(500).fadeIn();
      $('#correct').delay(500).fadeOut();
      mc = 0;
      return 0;
    }
    else{
      false_ans.play();
      $('#fresponse').empty();
      if(w < 4) {
        $('#fresponse').prepend("Sorry! Try again!");
      }
      else {  
        $('#fresponse').prepend("Sorry! The correct answer is "+a+".");
      }
      $('#false').delay(500).fadeIn();
      $('#false').delay(500).fadeOut();
      mc = 0;
      w++;
      count_mis++;
      corner_mis++;
      return w;
    }
  }
}

var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

var count = 0;
var addcorrect = 0;
var addquestion = 0;

var subcorrect = 0;
var subquestion = 0;

var response = 0;

var i = 0;
var ad = 0;
var sub = 0;
var mc = 0;
var question = 1;
var spell = -1;
var spell_on = 1;
var rhyme_on = 1;

var zero = document.createElement('audio');
zero.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/zero.mp3");
var one = document.createElement('audio');
one.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/one.mp3");
var two = document.createElement('audio');
two.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/two.mp3");
var three = document.createElement('audio');
three.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/three.mp3");
var four = document.createElement('audio');
four.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/four.mp3");
var five = document.createElement('audio');
five.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/five.mp3");
var six = document.createElement('audio');
six.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/six.mp3");
var seven = document.createElement('audio');
seven.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/seven.mp3");
var eight = document.createElement('audio');
eight.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/eight.mp3");
var nine = document.createElement('audio');
nine.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/nine.mp3");
var ten = document.createElement('audio');
ten.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/ten.mp3");
var eleven = document.createElement('audio');
eleven.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/eleven.mp3");
var twelve = document.createElement('audio');
twelve.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/twelve.mp3");
var thirteen = document.createElement('audio');
thirteen.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/thirteen.mp3");
var fourteen = document.createElement('audio');
fourteen.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/fourteen.mp3");
var fifteen = document.createElement('audio');
fifteen.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/fifteen.mp3");
var sixteen = document.createElement('audio');
sixteen.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/sixteen.mp3");
var seventeen = document.createElement('audio');
seventeen.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/seventeen.mp3");
var eighteen = document.createElement('audio');
eighteen.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/eighteen.mp3");
var nineteen = document.createElement('audio');
nineteen.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/nineteen.mp3");
var twenty = document.createElement('audio');
twenty.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/twenty.mp3");
var twentyone = document.createElement('audio');
twentyone.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/twenty.mp3");
twentyone.addEventListener("ended", function() {
  one.play();
});
var twentytwo = document.createElement('audio');
twentytwo.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/twenty.mp3");
twentytwo.addEventListener("ended", function() {
  two.play();
});
var twentythree = document.createElement('audio');
twentythree.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/twenty.mp3");
twentythree.addEventListener("ended", function() {
  three.play();
});

var correct_ans = document.createElement('audio');
correct_ans.setAttribute('src', "https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-elearning-correct-answer-sound-1.mp3");

var false_ans = document.createElement('audio');
false_ans.setAttribute('src', "https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-elearning-incorrect-answer-sound-3.mp3");

if(sPage == "rhyming.php") {
  var slap = document.createElement('audio');
  slap.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/slap.mp3");
  var had = document.createElement('audio');
  had.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/had.mp3");
  var rat = document.createElement('audio');
  rat.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/rat.mp3");
  var map = document.createElement('audio');
  map.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/map.mp3");
  var drum = document.createElement('audio');
  drum.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/drum.mp3");
  var slump = document.createElement('audio');
  slump.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/slump.mp3");
  var dump = document.createElement('audio');
  dump.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/dump.mp3");
  var fun = document.createElement('audio');
  fun.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/fun.mp3");
  var gas = document.createElement('audio');
  gas.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/gas.mp3");
  var cash = document.createElement('audio');
  cash.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/cash.mp3");
  var bash = document.createElement('audio');
  bash.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/bash.mp3");
  var math = document.createElement('audio');
  math.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/math.mp3");
  var yet = document.createElement('audio');
  yet.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/yet.mp3");
  var rod = document.createElement('audio');
  rod.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/rod.mp3");
  var bed = document.createElement('audio');
  bed.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/bed.mp3");
  var web = document.createElement('audio');
  web.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/web.mp3");
  var skid = document.createElement('audio');
  skid.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/skid.mp3");
  var wig = document.createElement('audio');
  wig.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/wig.mp3");
  var whip = document.createElement('audio');
  whip.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/whip.mp3");
  var did = document.createElement('audio');
  did.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/did.mp3");
  var clock = document.createElement('audio');
  clock.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/clock.mp3");
  var slob = document.createElement('audio');
  slob.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/slob.mp3");
  var spot = document.createElement('audio');
  spot.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/spot.mp3");
  var mop = document.createElement('audio');
  mop.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/mop.mp3");
  var sell = document.createElement('audio');
  sell.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/sell.mp3");
  var bill = document.createElement('audio');
  bill.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/bill.mp3");
  var mall = document.createElement('audio');
  mall.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/mall.mp3");
  var call = document.createElement('audio');
  call.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/call.mp3");
}

if(sPage == "cornershapes.php") {
  var triangle = document.createElement('audio');
  triangle.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/triangle.mp3");
  var pentagon = document.createElement('audio');
  pentagon.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/pentagon.mp3");
  var hexagon = document.createElement('audio');
  hexagon.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/hexagon.mp3");
  var trapezoid = document.createElement('audio');
  trapezoid.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/trapezoid.mp3");
  var rhombus = document.createElement('audio');
  rhombus.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/rhombus.mp3");
  var diamond = document.createElement('audio');
  diamond.setAttribute('src', "https://ssl.gstatic.com/dictionary/static/sounds/de/0/diamond.mp3");
}

function rhymeCorrect(c) {
  correct_ans.play();
  $('#rhymec'+c).css("background-color", "#57E465");
  $('#rhymec'+c).css("color", "green");
  $('#rhymec'+c).css("border-color", "green");

  var x = 0;
  for(x = 1 ; x < 5 ; x++) {
    if(x != c) {
     $('#rhymec'+x).css("background-color", "white");
     $('#rhymec'+x).css("color", "purple");
     $('#rhymec'+x).css("border-color", "purple");
    }
  }

  $('#rhymewrapper2').fadeOut();
  $('#rhymecorrect').delay(500).fadeIn();
  $('#rhymecorrect').delay(1500).fadeOut();
  $('#rhymewrapper2').delay(2500).fadeIn();
  setTimeout(function() {
    locked = false;
  }, 6000);
}

function rhymeFalse(f) {
  false_ans.play();
  $('#rhymef'+f).css("background-color", "#EC8C8C");
  $('#rhymef'+f).css("color", "red");
  $('#rhymef'+f).css("border-color", "red");

  var x = 0;
  for(x = 1 ; x < 5 ; x++) {
    if(x != f) {
      $('#rhymef'+x).css("background-color", "white");
      $('#rhymef'+x).css("color", "purple");
      $('#rhymef'+x).css("border-color", "purple");
    }
  }

  $('#rhymewrapper2').fadeOut();
  $('#rhymefalse').delay(500).fadeIn();
  $('#rhymefalse').delay(1500).fadeOut();
  $('#rhymewrapper2').delay(2500).fadeIn();
  setTimeout(function() {
    locked = false;
  }, 2500);
}

function rhymeChangeWords(a, b, c, d, e, cor) {
  $('#rhymewrapper').delay(300).fadeOut();
  $('#rhymewrapper2').fadeOut();
  setTimeout(function() {
    $('#rhyming').empty();
    $('#rhyming').prepend(a);
    $('#rhyme1').empty();
    $('#rhymef1').empty();
    $('#rhymec1').empty();
    $('#rhyme1').prepend(b);
    $('#rhymef1').prepend(b);
    $('#rhymec1').prepend(b);
    $('#rhyme2').empty();
    $('#rhymef2').empty();
    $('#rhymec2').empty();
    $('#rhyme2').prepend(c);
    $('#rhymef2').prepend(c);
    $('#rhymec2').prepend(c);
    $('#rhyme3').empty();
    $('#rhymef3').empty();
    $('#rhymec3').empty();
    $('#rhyme3').prepend(d);
    $('#rhymef3').prepend(d);
    $('#rhymec3').prepend(d);
    $('#rhyme4').empty();
    $('#rhymef4').empty();
    $('#rhymec4').empty();
    $('#rhyme4').prepend(e);
    $('#rhymef4').prepend(e);
    $('#rhymec4').prepend(e);
    if(cor != 1) { 
      $('#rhyme'+cor).css("background-color", "white");
      $('#rhyme'+cor).css("color", "purple");
      $('#rhyme'+cor).css("border-color", "purple");
      rhyme_on = 1;
      $('#rhyme'+rhyme_on).css("background-color", "purple");
      $('#rhyme'+rhyme_on).css("color", "white");
    }
  }, 1000);
  $('#rhymewrapper').delay(1950).fadeIn();
  $('#rhymewrapper2').delay(2000).fadeIn();
}

function appendShape(r, q) {
  if((!r && r < 5) || r >= 5) {
    question++;
    maxwrong = 0;
    $('#shape').empty();
    $('#shape').css("display","none");
    if(q == 1) {
      if(!r) {
        $('#col1').append("<ol><li>Square: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col1').append("<ol><li>Square: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      $('#shape').prepend("<img src="+"'"+"../images/triangle.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");        
      $('#shape').delay(1950).fadeIn();
      setTimeout(function() {
       triangle.play();
      }, 2000);
    }
    if(q == 2) {
      if(!r) {
        $('#col1').append("<ol start="+"'"+"2"+"'"+"><li>Triangle: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col1').append("<ol start="+"'"+"2"+"'"+"><li>Triangle: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      $('#shape').prepend("<img src="+"'"+"../images/pentagon.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");
      $('#shape').delay(1950).fadeIn();
      setTimeout(function() {
        pentagon.play();
      }, 2000);
    }
    if(q == 3) {
      if(!r) {
        $('#col1').append("<ol start="+"'"+"3"+"'"+"><li>Pentagon: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
       $('#col1').append("<ol start="+"'"+"3"+"'"+"><li>Pentagon: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      $('#shape').prepend("<img src="+"'"+"../images/hexagon.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");
      $('#shape').delay(1950).fadeIn();
      setTimeout(function() {
        hexagon.play();
      }, 2000);
    }
    if(q == 4) {
      if(!r) {
        $('#col2').append("<ol start="+"'"+"4"+"'"+"><li>Hexagon: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col2').append("<ol start="+"'"+"4"+"'"+"><li>Hexagon: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      $('#shape').prepend("<img src="+"'"+"../images/trapezoid.gif"+"'"+" style="+"'"+"width:500px;height:218px;"+"'"+">");
      $('#shape').delay(1950).fadeIn();
      setTimeout(function() {
        trapezoid.play();
      }, 2000);
    }
    if(q == 5) {
      if(!r) {
        $('#col2').append("<ol start="+"'"+"5"+"'"+"><li>Trapezoid: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col2').append("<ol start="+"'"+"5"+"'"+"><li>Trapezoid: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      $('#shape').prepend("<img src="+"'"+"../images/parallelogram.gif"+"'"+" style="+"'"+"width:550px;height:184px;"+"'"+">");
      $('#shape').delay(1950).fadeIn();
      setTimeout(function() {
        rhombus.play();
      }, 2000);
    }
    if(q == 6) {
      if(!r) {
        $('#col2').append("<ol start="+"'"+"6"+"'"+"><li>Parallelogram: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col2').append("<ol start="+"'"+"6"+"'"+"><li>Parallelogram: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      $('#shape').prepend("<img src="+"'"+"../images/diamond.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");
      $('#shape').delay(1950).fadeIn();
      setTimeout(function() {
        diamond.play();
      }, 2000);
    }
    if(q == 7) {
      if(!r) {
        $('#col3').append("<ol start="+"'"+"7"+"'"+"><li>Diamond: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col3').append("<ol start="+"'"+"7"+"'"+"><li>Diamond: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }

      /* Update scores in back end */
      $.ajax({
        type: "GET",
        url: "users.php/activity?errors="+corner_mis+"&activity=countvert",
        success: function(data){   
        }
      });

      $.ajax({
        type: "GET",
        url: "users.php/correct?correct="+correct+"&activity=countvert",
        success: function(data) {
        }
      });

      var percent = correct/7 * 100;
      $('#canswers').prepend("<div>You made "+corner_mis+" corner mistakes.</div>");
      $('#canswers').prepend("<div>You got "+correct+" correct out of 7 without mistakes!</div>");
      $('#cornersreg').fadeOut();
      $('#cornersanswers').delay(500).fadeIn();
      setTimeout(function() {
        responsiveVoice.speak("You got "+correct+" correct out of seven without mistakes!");
        responsiveVoice.speak("You made "+corner_mis+" corner mistakes.");
      }, 1000);
      var url = "http://localhost:6969/activities.php";
      setTimeout(function() {
        $('#cornershapesbody').fadeOut(3000);
      }, 12000);
      setTimeout(function() {
        window.location = url;
      }, 15000);
    }
  }
  else {
    if(q == 7){
      $('#shape').delay(1950).fadeIn();
      $('#count').html(mc);
    }
  }
  setTimeout(function() {
    locked = false;
  }, 2000);
}

function appendCount(r, q) {
  var loop = 0;
  if((!r && r<5) || r>=5) {
    question++;
    maxwrong = 0;
    $('.col-sm-1').fadeOut();
    if(q == 1) {
      if(!r) {
        $('#col1').append("<ol><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col1').append("<ol><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      setTimeout(function() {
        $('.col-sm-1').empty();
        for(loop = 5 ; loop < 9 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"../images/parallelogram_1.jpg"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
        for(loop = 17 ; loop < 21 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"../images/parallelogram_1.jpg"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
      }, 1250);
      $('.col-sm-1').delay(1500).fadeIn();
    }
    if(q == 2) {
      if(!r) {
        $('#col1').append("<ol start="+"'"+"2"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col1').append("<ol start="+"'"+"2"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      setTimeout(function() {
        $('.col-sm-1').empty();
        for(loop = 6 ; loop < 8 ; loop++) {
            $('#count-shape'+loop).prepend("<img src="+"'"+"../images/triangle_1.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
          }
          $('#count-shape19').prepend("<img src="+"'"+"../images/triangle_1.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
      }, 1250);
      $('.col-sm-1').delay(1500).fadeIn();
    }
    if(q == 3) {
      if(!r) {
        $('#col1').append("<ol start="+"'"+"3"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col1').append("<ol start="+"'"+"3"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      setTimeout(function() {
        $('.col-sm-1').empty();
        for(loop = 5 ; loop < 9 ; loop++) {
            $('#count-shape'+loop).prepend("<img src="+"'"+"../images/trapezoid_1.png"+"'"+" style="+"'"+"width:70px;height:70px;"+"'"+">");
        }
        for(loop = 18 ; loop < 20 ; loop++) {
            $('#count-shape'+loop).prepend("<img src="+"'"+"../images/trapezoid_1.png"+"'"+" style="+"'"+"width:70px;height:70px;"+"'"+">");
        }
      }, 1250);
      $('.col-sm-1').delay(1500).fadeIn();
    }
    if(q == 4) {
      if(!r) {
        $('#col2').append("<ol start="+"'"+"4"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col2').append("<ol start="+"'"+"4"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      setTimeout(function() {
        $('.col-sm-1').empty();
        for(loop = 5 ; loop < 9 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"../images/pentagon_1.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
        for(loop = 17 ; loop < 20 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"../images/pentagon_1.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
      }, 1250);  
      $('.col-sm-1').delay(1500).fadeIn();
    } 
    if(q == 5) {
      if(!r) {
        $('#col2').append("<ol start="+"'"+"5"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col2').append("<ol start="+"'"+"5"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      $('.col-sm-1').delay(1000).empty();
      setTimeout(function() {
        $('#count-shape6').prepend("<img src="+"'"+"../images/square_1.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        $('#count-shape19').prepend("<img src="+"'"+"../images/square_1.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
      }, 1250);  
      $('.col-sm-1').delay(1500).fadeIn();
    }
    if(q == 6) {
      if(!r) {
        $('#col2').append("<ol start="+"'"+"6"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col2').append("<ol start="+"'"+"6"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      $('.col-sm-1').delay(1000).empty();
      setTimeout(function() {
        for(loop = 2 ; loop < 12 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"../images/diamond_1.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
        $('#count-shape14').prepend("<img src="+"'"+"../images/diamond_1.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
      }, 1250);  
      $('.col-sm-1').delay(1500).fadeIn();
    }
    if(q == 7) {

      $.ajax({
        type: "GET",
        url: "users.php/correct?correct="+correct+"&activity=countshape",
        success: function(data){   
        }
      });

      $.ajax({
        type: "GET",
        url: "users.php/activity?errors="+count_mis+"&activity=countshape",
        success: function(data){   
        }
      });

      if(!r) {
        $('#col3').append("<ol start="+"'"+"7"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
      }
      else {
        $('#col3').append("<ol start="+"'"+"7"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
      }
      var percent = correct/7 * 100;
      $('#canswers').prepend("<div>You made "+count_mis+" counting mistakes.</div>")
      $('#canswers').prepend("<div>You got "+correct+" correct out of 7 without mistakes!</div>");
      $('#countreg').fadeOut();
      $('#countanswers').delay(500).fadeIn();
      setTimeout(function() {
        responsiveVoice.speak("You got "+correct+" correct out of seven without mistakes!");
        responsiveVoice.speak("You made "+count_mis+" counting mistakes.");
      }, 1000);
      var url = "http://localhost:6969/activities.php";
      setTimeout(function() {
        $('#countingshapesbody').fadeOut(3000);
      }, 12000);
      setTimeout(function() {
        window.location = url;
      }, 15000);
    }
  }
  else {
    if(q == 7) {
      $('.col-sm-1').delay(1500).fadeIn();
      $('#ccount').html(mc);
    }
  }
  setTimeout(function() {
    locked = false;
  }, 2000);
}

var maxwrong = 0;

var locked = false;

var spell_mis = 0;
var made_mis = 0;
var spell_nomis = 0;
var rhyme_mis = 0;
var rhyme_nomis = 0;
var add_mis = 0;
var sub_mis = 0;


/*String.fromCharCode(e.keyCode)*/

$(document).keydown(function (e) {
  if(locked) {return;}

  if(e.keyCode == 32 || e.keyCode == 37 || (e.keyCode > 64 && e.keyCode < 91)) {
    if(sPage == "addition.php" || sPage == "cornershapes.php" || sPage == "subtraction.php" || sPage == "countingshapes.php") {
      i = i + 1;
      ad = ad + 1;
      sub = sub + 1;
      count = count + 1;
      mc = mc + 1;
      if(mc == 1) {one.play();}
      if(mc == 2) {two.play();}
      if(mc == 3) {three.play();}
      if(mc == 4) {four.play();}
      if(mc == 5) {five.play();}
      if(mc == 6) {six.play();}
      if(mc == 7) {seven.play();}
      if(mc == 8) {eight.play();}
      if(mc == 9) {
        if(sPage != "cornershapes.php") {nine.play();} 
        i = 0; 
        if(sPage == "cornershapes.php") {mc = 0; zero.play();}
      }
      if(mc == 10) {ten.play();}
      if(mc == 11) {eleven.play();}
      if(mc == 12) {twelve.play();}
      if(mc == 13) {thirteen.play();}
      if(mc == 14) {fourteen.play();}
      if(mc == 15) {fifteen.play();}
      if(mc == 16) {sixteen.play();}
      if(mc == 17) {seventeen.play();}
      if(mc == 18) {eighteen.play();}
      if(mc == 19) {nineteen.play();}
      if(mc == 20) {twenty.play();}
      if(mc == 21) {
        if(sPage != "addition.php" && sPage != "subtraction.php") {twentyone.play();}
        ad = 0; 
        sub = 0;
        if(sPage == "addition.php" || sPage == "subtraction.php") {mc = 0; zero.play();}
      }
      if(mc == 22) {twentytwo.play();}
      if(mc == 23) {twentythree.play();}
      if(mc == 24) {mc = 0; count = 0; zero.play();}
      $('#count').html(mc);
      $('#adcount').html(mc);
      $('#subcount').html(mc);
      $('#ccount').html(mc);
    }

    /* Below is code for spelling.php */
    if(sPage == "spelling.php") {
      $('#spell'+spell_on).empty();
      $('#cspell'+spell_on).empty();
      $('#fspell'+spell_on).empty();
      if(!(e.keyCode > 64 && e.keyCode < 91)) {spell++;}
      else {spell = e.keyCode - 65;}
      if(spell == 0) {
        responsiveVoice.speak("A", "US English Female");
        $('#spell'+spell_on).prepend("A");
        $('#cspell'+spell_on).prepend("A");
        $('#fspell'+spell_on).prepend("A");
      }
      if(spell == 1) {
        responsiveVoice.speak("B", "US English Female");
        $('#spell'+spell_on).prepend("B");
        $('#cspell'+spell_on).prepend("B");
        $('#fspell'+spell_on).prepend("B");
      }
      if(spell == 2) {
        responsiveVoice.speak("C", "US English Female");
        $('#spell'+spell_on).prepend("C");
        $('#cspell'+spell_on).prepend("C");
        $('#fspell'+spell_on).prepend("C");
      }
      if(spell == 3) {
        responsiveVoice.speak("D", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("D");}
        if(spell_on == 2) {$('#spell2').prepend("D");}
        if(spell_on == 3) {$('#spell3').prepend("D");}
        if(spell_on == 4) {$('#spell4').prepend("D");}
        if(spell_on == 5) {$('#spell5').prepend("D");}
        if(spell_on == 6) {$('#spell6').prepend("D");}

        $('#cspell'+spell_on).prepend("D");
        $('#fspell'+spell_on).prepend("D");
      }
      if(spell == 4) {
        responsiveVoice.speak("E", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("E");}
        if(spell_on == 2) {$('#spell2').prepend("E");}
        if(spell_on == 3) {$('#spell3').prepend("E");}
        if(spell_on == 4) {$('#spell4').prepend("E");}
        if(spell_on == 5) {$('#spell5').prepend("E");}
        if(spell_on == 6) {$('#spell6').prepend("E");}

        if(spell_on == 1) {$('#cspell1').prepend("E");}
        if(spell_on == 2) {$('#cspell2').prepend("E");}
        if(spell_on == 3) {$('#cspell3').prepend("E");}
        if(spell_on == 4) {$('#cspell4').prepend("E");}
        if(spell_on == 5) {$('#cspell5').prepend("E");}
        if(spell_on == 6) {$('#cspell6').prepend("E");}

        if(spell_on == 1) {$('#fspell1').prepend("E");}
        if(spell_on == 2) {$('#fspell2').prepend("E");}
        if(spell_on == 3) {$('#fspell3').prepend("E");}
        if(spell_on == 4) {$('#fspell4').prepend("E");}
        if(spell_on == 5) {$('#fspell5').prepend("E");}
        if(spell_on == 6) {$('#fspell6').prepend("E");}
      }
      if(spell == 5) {
        responsiveVoice.speak("F", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("F");}
        if(spell_on == 2) {$('#spell2').prepend("F");}
        if(spell_on == 3) {$('#spell3').prepend("F");}
        if(spell_on == 4) {$('#spell4').prepend("F");}
        if(spell_on == 5) {$('#spell5').prepend("F");}
        if(spell_on == 6) {$('#spell6').prepend("F");}

        if(spell_on == 1) {$('#cspell1').prepend("F");}
        if(spell_on == 2) {$('#cspell2').prepend("F");}
        if(spell_on == 3) {$('#cspell3').prepend("F");}
        if(spell_on == 4) {$('#cspell4').prepend("F");}
        if(spell_on == 5) {$('#cspell5').prepend("F");}
        if(spell_on == 6) {$('#cspell6').prepend("F");}

        if(spell_on == 1) {$('#fspell1').prepend("F");}
        if(spell_on == 2) {$('#fspell2').prepend("F");}
        if(spell_on == 3) {$('#fspell3').prepend("F");}
        if(spell_on == 4) {$('#fspell4').prepend("F");}
        if(spell_on == 5) {$('#fspell5').prepend("F");}
        if(spell_on == 6) {$('#fspell6').prepend("F");}
      }
      if(spell == 6) {
        responsiveVoice.speak("G", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("G");}
        if(spell_on == 2) {$('#spell2').prepend("G");}
        if(spell_on == 3) {$('#spell3').prepend("G");}
        if(spell_on == 4) {$('#spell4').prepend("G");}
        if(spell_on == 5) {$('#spell5').prepend("G");}
        if(spell_on == 6) {$('#spell6').prepend("G");}

        if(spell_on == 1) {$('#cspell1').prepend("G");}
        if(spell_on == 2) {$('#cspell2').prepend("G");}
        if(spell_on == 3) {$('#cspell3').prepend("G");}
        if(spell_on == 4) {$('#cspell4').prepend("G");}
        if(spell_on == 5) {$('#cspell5').prepend("G");}
        if(spell_on == 6) {$('#cspell6').prepend("G");}

        if(spell_on == 1) {$('#fspell1').prepend("G");}
        if(spell_on == 2) {$('#fspell2').prepend("G");}
        if(spell_on == 3) {$('#fspell3').prepend("G");}
        if(spell_on == 4) {$('#fspell4').prepend("G");}
        if(spell_on == 5) {$('#fspell5').prepend("G");}
        if(spell_on == 6) {$('#fspell6').prepend("G");}
      }
      if(spell == 7) {
        responsiveVoice.speak("H", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("H");}
        if(spell_on == 2) {$('#spell2').prepend("H");}
        if(spell_on == 3) {$('#spell3').prepend("H");}
        if(spell_on == 4) {$('#spell4').prepend("H");}
        if(spell_on == 5) {$('#spell5').prepend("H");}
        if(spell_on == 6) {$('#spell6').prepend("H");}

        if(spell_on == 1) {$('#cspell1').prepend("H");}
        if(spell_on == 2) {$('#cspell2').prepend("H");}
        if(spell_on == 3) {$('#cspell3').prepend("H");}
        if(spell_on == 4) {$('#cspell4').prepend("H");}
        if(spell_on == 5) {$('#cspell5').prepend("H");}
        if(spell_on == 6) {$('#cspell6').prepend("H");}

        if(spell_on == 1) {$('#fspell1').prepend("H");}
        if(spell_on == 2) {$('#fspell2').prepend("H");}
        if(spell_on == 3) {$('#fspell3').prepend("H");}
        if(spell_on == 4) {$('#fspell4').prepend("H");}
        if(spell_on == 5) {$('#fspell5').prepend("H");}
        if(spell_on == 6) {$('#fspell6').prepend("H");}
      }
      if(spell == 8) {
        responsiveVoice.speak("I", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("I");}
        if(spell_on == 2) {$('#spell2').prepend("I");}
        if(spell_on == 3) {$('#spell3').prepend("I");}
        if(spell_on == 4) {$('#spell4').prepend("I");}
        if(spell_on == 5) {$('#spell5').prepend("I");}
        if(spell_on == 6) {$('#spell6').prepend("I");}

        if(spell_on == 1) {$('#cspell1').prepend("I");}
        if(spell_on == 2) {$('#cspell2').prepend("I");}
        if(spell_on == 3) {$('#cspell3').prepend("I");}
        if(spell_on == 4) {$('#cspell4').prepend("I");}
        if(spell_on == 5) {$('#cspell5').prepend("I");}
        if(spell_on == 6) {$('#cspell6').prepend("I");}

        if(spell_on == 1) {$('#fspell1').prepend("I");}
        if(spell_on == 2) {$('#fspell2').prepend("I");}
        if(spell_on == 3) {$('#fspell3').prepend("I");}
        if(spell_on == 4) {$('#fspell4').prepend("I");}
        if(spell_on == 5) {$('#fspell5').prepend("I");}
        if(spell_on == 6) {$('#fspell6').prepend("I");}
      }
      if(spell == 9) {
        responsiveVoice.speak("J", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("J");}
        if(spell_on == 2) {$('#spell2').prepend("J");}
        if(spell_on == 3) {$('#spell3').prepend("J");}
        if(spell_on == 4) {$('#spell4').prepend("J");}
        if(spell_on == 5) {$('#spell5').prepend("J");}
        if(spell_on == 6) {$('#spell6').prepend("J");}

        if(spell_on == 1) {$('#cspell1').prepend("J");}
        if(spell_on == 2) {$('#cspell2').prepend("J");}
        if(spell_on == 3) {$('#cspell3').prepend("J");}
        if(spell_on == 4) {$('#cspell4').prepend("J");}
        if(spell_on == 5) {$('#cspell5').prepend("J");}
        if(spell_on == 6) {$('#cspell6').prepend("J");}

        if(spell_on == 1) {$('#fspell1').prepend("J");}
        if(spell_on == 2) {$('#fspell2').prepend("J");}
        if(spell_on == 3) {$('#fspell3').prepend("J");}
        if(spell_on == 4) {$('#fspell4').prepend("J");}
        if(spell_on == 5) {$('#fspell5').prepend("J");}
        if(spell_on == 6) {$('#fspell6').prepend("J");}
      }
      if(spell == 10) {
        responsiveVoice.speak("K", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("K");}
        if(spell_on == 2) {$('#spell2').prepend("K");}
        if(spell_on == 3) {$('#spell3').prepend("K");}
        if(spell_on == 4) {$('#spell4').prepend("K");}
        if(spell_on == 5) {$('#spell5').prepend("K");}
        if(spell_on == 6) {$('#spell6').prepend("K");}

        if(spell_on == 1) {$('#cspell1').prepend("K");}
        if(spell_on == 2) {$('#cspell2').prepend("K");}
        if(spell_on == 3) {$('#cspell3').prepend("K");}
        if(spell_on == 4) {$('#cspell4').prepend("K");}
        if(spell_on == 5) {$('#cspell5').prepend("K");}
        if(spell_on == 6) {$('#cspell6').prepend("K");}

        if(spell_on == 1) {$('#fspell1').prepend("K");}
        if(spell_on == 2) {$('#fspell2').prepend("K");}
        if(spell_on == 3) {$('#fspell3').prepend("K");}
        if(spell_on == 4) {$('#fspell4').prepend("K");}
        if(spell_on == 5) {$('#fspell5').prepend("K");}
        if(spell_on == 6) {$('#fspell6').prepend("K");}
      }
      if(spell == 11) {
        responsiveVoice.speak("L", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("L");}
        if(spell_on == 2) {$('#spell2').prepend("L");}
        if(spell_on == 3) {$('#spell3').prepend("L");}
        if(spell_on == 4) {$('#spell4').prepend("L");}
        if(spell_on == 5) {$('#spell5').prepend("L");}
        if(spell_on == 6) {$('#spell6').prepend("L");}

        if(spell_on == 1) {$('#cspell1').prepend("L");}
        if(spell_on == 2) {$('#cspell2').prepend("L");}
        if(spell_on == 3) {$('#cspell3').prepend("L");}
        if(spell_on == 4) {$('#cspell4').prepend("L");}
        if(spell_on == 5) {$('#cspell5').prepend("L");}
        if(spell_on == 6) {$('#cspell6').prepend("L");}

        if(spell_on == 1) {$('#fspell1').prepend("L");}
        if(spell_on == 2) {$('#fspell2').prepend("L");}
        if(spell_on == 3) {$('#fspell3').prepend("L");}
        if(spell_on == 4) {$('#fspell4').prepend("L");}
        if(spell_on == 5) {$('#fspell5').prepend("L");}
        if(spell_on == 6) {$('#fspell6').prepend("L");}
      }
      if(spell == 12) {
        responsiveVoice.speak("M", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("M");}
        if(spell_on == 2) {$('#spell2').prepend("M");}
        if(spell_on == 3) {$('#spell3').prepend("M");}
        if(spell_on == 4) {$('#spell4').prepend("M");}
        if(spell_on == 5) {$('#spell5').prepend("M");}
        if(spell_on == 6) {$('#spell6').prepend("M");}

        if(spell_on == 1) {$('#cspell1').prepend("M");}
        if(spell_on == 2) {$('#cspell2').prepend("M");}
        if(spell_on == 3) {$('#cspell3').prepend("M");}
        if(spell_on == 4) {$('#cspell4').prepend("M");}
        if(spell_on == 5) {$('#cspell5').prepend("M");}
        if(spell_on == 6) {$('#cspell6').prepend("M");}

        if(spell_on == 1) {$('#fspell1').prepend("M");}
        if(spell_on == 2) {$('#fspell2').prepend("M");}
        if(spell_on == 3) {$('#fspell3').prepend("M");}
        if(spell_on == 4) {$('#fspell4').prepend("M");}
        if(spell_on == 5) {$('#fspell5').prepend("M");}
        if(spell_on == 6) {$('#fspell6').prepend("M");}
      }
      if(spell == 13) {
        responsiveVoice.speak("N", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("N");}
        if(spell_on == 2) {$('#spell2').prepend("N");}
        if(spell_on == 3) {$('#spell3').prepend("N");}
        if(spell_on == 4) {$('#spell4').prepend("N");}
        if(spell_on == 5) {$('#spell5').prepend("N");}
        if(spell_on == 6) {$('#spell6').prepend("N");}

        if(spell_on == 1) {$('#cspell1').prepend("N");}
        if(spell_on == 2) {$('#cspell2').prepend("N");}
        if(spell_on == 3) {$('#cspell3').prepend("N");}
        if(spell_on == 4) {$('#cspell4').prepend("N");}
        if(spell_on == 5) {$('#cspell5').prepend("N");}
        if(spell_on == 6) {$('#cspell6').prepend("N");}

        if(spell_on == 1) {$('#fspell1').prepend("N");}
        if(spell_on == 2) {$('#fspell2').prepend("N");}
        if(spell_on == 3) {$('#fspell3').prepend("N");}
        if(spell_on == 4) {$('#fspell4').prepend("N");}
        if(spell_on == 5) {$('#fspell5').prepend("N");}
        if(spell_on == 6) {$('#fspell6').prepend("N");}
      }
      if(spell == 14) {
        responsiveVoice.speak("O", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("O");}
        if(spell_on == 2) {$('#spell2').prepend("O");}
        if(spell_on == 3) {$('#spell3').prepend("O");}
        if(spell_on == 4) {$('#spell4').prepend("O");}
        if(spell_on == 5) {$('#spell5').prepend("O");}
        if(spell_on == 6) {$('#spell6').prepend("O");}

        if(spell_on == 1) {$('#cspell1').prepend("O");}
        if(spell_on == 2) {$('#cspell2').prepend("O");}
        if(spell_on == 3) {$('#cspell3').prepend("O");}
        if(spell_on == 4) {$('#cspell4').prepend("O");}
        if(spell_on == 5) {$('#cspell5').prepend("O");}
        if(spell_on == 6) {$('#cspell6').prepend("O");}

        if(spell_on == 1) {$('#fspell1').prepend("O");}
        if(spell_on == 2) {$('#fspell2').prepend("O");}
        if(spell_on == 3) {$('#fspell3').prepend("O");}
        if(spell_on == 4) {$('#fspell4').prepend("O");}
        if(spell_on == 5) {$('#fspell5').prepend("O");}
        if(spell_on == 6) {$('#fspell6').prepend("O");}
      }
      if(spell == 15) {
        responsiveVoice.speak("P", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("P");}
        if(spell_on == 2) {$('#spell2').prepend("P");}
        if(spell_on == 3) {$('#spell3').prepend("P");}
        if(spell_on == 4) {$('#spell4').prepend("P");}
        if(spell_on == 5) {$('#spell5').prepend("P");}
        if(spell_on == 6) {$('#spell6').prepend("P");}

        if(spell_on == 1) {$('#cspell1').prepend("P");}
        if(spell_on == 2) {$('#cspell2').prepend("P");}
        if(spell_on == 3) {$('#cspell3').prepend("P");}
        if(spell_on == 4) {$('#cspell4').prepend("P");}
        if(spell_on == 5) {$('#cspell5').prepend("P");}
        if(spell_on == 6) {$('#cspell6').prepend("P");}

        if(spell_on == 1) {$('#fspell1').prepend("P");}
        if(spell_on == 2) {$('#fspell2').prepend("P");}
        if(spell_on == 3) {$('#fspell3').prepend("P");}
        if(spell_on == 4) {$('#fspell4').prepend("P");}
        if(spell_on == 5) {$('#fspell5').prepend("P");}
        if(spell_on == 6) {$('#fspell6').prepend("P");}
      }
      if(spell == 16) {
        responsiveVoice.speak("Q", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("Q");}
        if(spell_on == 2) {$('#spell2').prepend("Q");}
        if(spell_on == 3) {$('#spell3').prepend("Q");}
        if(spell_on == 4) {$('#spell4').prepend("Q");}
        if(spell_on == 5) {$('#spell5').prepend("Q");}
        if(spell_on == 6) {$('#spell6').prepend("Q");}

        if(spell_on == 1) {$('#cspell1').prepend("Q");}
        if(spell_on == 2) {$('#cspell2').prepend("Q");}
        if(spell_on == 3) {$('#cspell3').prepend("Q");}
        if(spell_on == 4) {$('#cspell4').prepend("Q");}
        if(spell_on == 5) {$('#cspell5').prepend("Q");}
        if(spell_on == 6) {$('#cspell6').prepend("Q");}

        if(spell_on == 1) {$('#fspell1').prepend("Q");}
        if(spell_on == 2) {$('#fspell2').prepend("Q");}
        if(spell_on == 3) {$('#fspell3').prepend("Q");}
        if(spell_on == 4) {$('#fspell4').prepend("Q");}
        if(spell_on == 5) {$('#fspell5').prepend("Q");}
        if(spell_on == 6) {$('#fspell6').prepend("Q");}
      }
      if(spell == 17) {
        responsiveVoice.speak("R", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("R");}
        if(spell_on == 2) {$('#spell2').prepend("R");}
        if(spell_on == 3) {$('#spell3').prepend("R");}
        if(spell_on == 4) {$('#spell4').prepend("R");}
        if(spell_on == 5) {$('#spell5').prepend("R");}
        if(spell_on == 6) {$('#spell6').prepend("R");}

        if(spell_on == 1) {$('#cspell1').prepend("R");}
        if(spell_on == 2) {$('#cspell2').prepend("R");}
        if(spell_on == 3) {$('#cspell3').prepend("R");}
        if(spell_on == 4) {$('#cspell4').prepend("R");}
        if(spell_on == 5) {$('#cspell5').prepend("R");}
        if(spell_on == 6) {$('#cspell6').prepend("R");}

        if(spell_on == 1) {$('#fspell1').prepend("R");}
        if(spell_on == 2) {$('#fspell2').prepend("R");}
        if(spell_on == 3) {$('#fspell3').prepend("R");}
        if(spell_on == 4) {$('#fspell4').prepend("R");}
        if(spell_on == 5) {$('#fspell5').prepend("R");}
        if(spell_on == 6) {$('#fspell6').prepend("R");}
      }
      if(spell == 18) {
        responsiveVoice.speak("S", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("S");}
        if(spell_on == 2) {$('#spell2').prepend("S");}
        if(spell_on == 3) {$('#spell3').prepend("S");}
        if(spell_on == 4) {$('#spell4').prepend("S");}
        if(spell_on == 5) {$('#spell5').prepend("S");}
        if(spell_on == 6) {$('#spell6').prepend("S");}

        if(spell_on == 1) {$('#cspell1').prepend("S");}
        if(spell_on == 2) {$('#cspell2').prepend("S");}
        if(spell_on == 3) {$('#cspell3').prepend("S");}
        if(spell_on == 4) {$('#cspell4').prepend("S");}
        if(spell_on == 5) {$('#cspell5').prepend("S");}
        if(spell_on == 6) {$('#cspell6').prepend("S");}

        if(spell_on == 1) {$('#fspell1').prepend("S");}
        if(spell_on == 2) {$('#fspell2').prepend("S");}
        if(spell_on == 3) {$('#fspell3').prepend("S");}
        if(spell_on == 4) {$('#fspell4').prepend("S");}
        if(spell_on == 5) {$('#fspell5').prepend("S");}
        if(spell_on == 6) {$('#fspell6').prepend("S");}
      }
      if(spell == 19) {
        responsiveVoice.speak("T", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("T");}
        if(spell_on == 2) {$('#spell2').prepend("T");}
        if(spell_on == 3) {$('#spell3').prepend("T");}
        if(spell_on == 4) {$('#spell4').prepend("T");}
        if(spell_on == 5) {$('#spell5').prepend("T");}
        if(spell_on == 6) {$('#spell6').prepend("T");}

        if(spell_on == 1) {$('#cspell1').prepend("T");}
        if(spell_on == 2) {$('#cspell2').prepend("T");}
        if(spell_on == 3) {$('#cspell3').prepend("T");}
        if(spell_on == 4) {$('#cspell4').prepend("T");}
        if(spell_on == 5) {$('#cspell5').prepend("T");}
        if(spell_on == 6) {$('#cspell6').prepend("T");}

        if(spell_on == 1) {$('#fspell1').prepend("T");}
        if(spell_on == 2) {$('#fspell2').prepend("T");}
        if(spell_on == 3) {$('#fspell3').prepend("T");}
        if(spell_on == 4) {$('#fspell4').prepend("T");}
        if(spell_on == 5) {$('#fspell5').prepend("T");}
        if(spell_on == 6) {$('#fspell6').prepend("T");}
      }
      if(spell == 20) {
        responsiveVoice.speak("U", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("U");}
        if(spell_on == 2) {$('#spell2').prepend("U");}
        if(spell_on == 3) {$('#spell3').prepend("U");}
        if(spell_on == 4) {$('#spell4').prepend("U");}
        if(spell_on == 5) {$('#spell5').prepend("U");}
        if(spell_on == 6) {$('#spell6').prepend("U");}

        if(spell_on == 1) {$('#cspell1').prepend("U");}
        if(spell_on == 2) {$('#cspell2').prepend("U");}
        if(spell_on == 3) {$('#cspell3').prepend("U");}
        if(spell_on == 4) {$('#cspell4').prepend("U");}
        if(spell_on == 5) {$('#cspell5').prepend("U");}
        if(spell_on == 6) {$('#cspell6').prepend("U");}

        if(spell_on == 1) {$('#fspell1').prepend("U");}
        if(spell_on == 2) {$('#fspell2').prepend("U");}
        if(spell_on == 3) {$('#fspell3').prepend("U");}
        if(spell_on == 4) {$('#fspell4').prepend("U");}
        if(spell_on == 5) {$('#fspell5').prepend("U");}
        if(spell_on == 6) {$('#fspell6').prepend("U");}
      }
      if(spell == 21) {
        responsiveVoice.speak("V", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("V");}
        if(spell_on == 2) {$('#spell2').prepend("V");}
        if(spell_on == 3) {$('#spell3').prepend("V");}
        if(spell_on == 4) {$('#spell4').prepend("V");}
        if(spell_on == 5) {$('#spell5').prepend("V");}
        if(spell_on == 6) {$('#spell6').prepend("V");}

        if(spell_on == 1) {$('#cspell1').prepend("V");}
        if(spell_on == 2) {$('#cspell2').prepend("V");}
        if(spell_on == 3) {$('#cspell3').prepend("V");}
        if(spell_on == 4) {$('#cspell4').prepend("V");}
        if(spell_on == 5) {$('#cspell5').prepend("V");}
        if(spell_on == 6) {$('#cspell6').prepend("V");}

        if(spell_on == 1) {$('#fspell1').prepend("V");}
        if(spell_on == 2) {$('#fspell2').prepend("V");}
        if(spell_on == 3) {$('#fspell3').prepend("V");}
        if(spell_on == 4) {$('#fspell4').prepend("V");}
        if(spell_on == 5) {$('#fspell5').prepend("V");}
        if(spell_on == 6) {$('#fspell6').prepend("V");}
      }
      if(spell == 22) {
        responsiveVoice.speak("W", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("W");}
        if(spell_on == 2) {$('#spell2').prepend("W");}
        if(spell_on == 3) {$('#spell3').prepend("W");}
        if(spell_on == 4) {$('#spell4').prepend("W");}
        if(spell_on == 5) {$('#spell5').prepend("W");}
        if(spell_on == 6) {$('#spell6').prepend("W");}

        if(spell_on == 1) {$('#cspell1').prepend("W");}
        if(spell_on == 2) {$('#cspell2').prepend("W");}
        if(spell_on == 3) {$('#cspell3').prepend("W");}
        if(spell_on == 4) {$('#cspell4').prepend("W");}
        if(spell_on == 5) {$('#cspell5').prepend("W");}
        if(spell_on == 6) {$('#cspell6').prepend("W");}

        if(spell_on == 1) {$('#fspell1').prepend("W");}
        if(spell_on == 2) {$('#fspell2').prepend("W");}
        if(spell_on == 3) {$('#fspell3').prepend("W");}
        if(spell_on == 4) {$('#fspell4').prepend("W");}
        if(spell_on == 5) {$('#fspell5').prepend("W");}
        if(spell_on == 6) {$('#fspell6').prepend("W");}
      }
      if(spell == 23) {
        responsiveVoice.speak("X", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("X");}
        if(spell_on == 2) {$('#spell2').prepend("X");}
        if(spell_on == 3) {$('#spell3').prepend("X");}
        if(spell_on == 4) {$('#spell4').prepend("X");}
        if(spell_on == 5) {$('#spell5').prepend("X");}
        if(spell_on == 6) {$('#spell6').prepend("X");}

        $('#cspell'+spell_on).prepend("X");
        $('#fspell'+spell_on).prepend("X");
      }
      if(spell == 24) {
        responsiveVoice.speak("Y", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("Y");}
        if(spell_on == 2) {$('#spell2').prepend("Y");}
        if(spell_on == 3) {$('#spell3').prepend("Y");}
        if(spell_on == 4) {$('#spell4').prepend("Y");}
        if(spell_on == 5) {$('#spell5').prepend("Y");}
        if(spell_on == 6) {$('#spell6').prepend("Y");}

        $('#cspell'+spell_on).prepend("Y");
        $('#fspell'+spell_on).prepend("Y");
      }
      if(spell == 25) {
        responsiveVoice.speak("Z", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("Z");}
        if(spell_on == 2) {$('#spell2').prepend("Z");}
        if(spell_on == 3) {$('#spell3').prepend("Z");}
        if(spell_on == 4) {$('#spell4').prepend("Z");}
        if(spell_on == 5) {$('#spell5').prepend("Z");}
        if(spell_on == 6) {$('#spell6').prepend("Z");}

        $('#cspell'+spell_on).prepend("Z");
        $('#fspell'+spell_on).prepend("Z");
        spell = -1;
      }
      /*if(spell == 26) {
        responsiveVoice.speak("A", "US English Female");
        if(spell_on == 1) {$('#spell1').prepend("A");}
        if(spell_on == 2) {$('#spell2').prepend("A");}
        if(spell_on == 3) {$('#spell3').prepend("A");}
        if(spell_on == 4) {$('#spell4').prepend("A");}
        if(spell_on == 5) {$('#spell5').prepend("A");}
        if(spell_on == 6) {$('#spell6').prepend("A");}

        $('#cspell'+spell_on).prepend("A");
        $('#fspell'+spell_on).prepend("A");
        spell = 0;
      }*/
    }

    /* Below is code for rhyming.php */
    if(sPage == "rhyming.php") {
      rhyme_on++;
      if(rhyme_on == 5) {
        rhyme_on = 1;
        $('#rhyme'+rhyme_on).css("background-color", "purple");
        $('#rhyme'+rhyme_on).css("color", "white");
      }
      else {
        $('#rhyme'+rhyme_on).css("background-color", "purple");
        $('#rhyme'+rhyme_on).css("color", "white");
      }

      var x = 1;
      for(x = 1 ; x < 5 ; x++) {
        if(x != rhyme_on) {
          $('#rhyme'+x).css("border-color", "purple");
          $('#rhyme'+x).css("color", "purple");
          $('#rhyme'+x).css("background-color", "white");
        }
      }

      if(question == 1) {
        if(rhyme_on == 1) {slap.play();}
        else if(rhyme_on == 2) {had.play();}
        else if(rhyme_on == 3) {rat.play();}
        else if(rhyme_on == 4) {map.play();}
      }
      else if(question == 2) {
        if(rhyme_on == 1) {drum.play();}
        else if(rhyme_on == 2) {slump.play();}
        else if(rhyme_on == 3) {dump.play();}
        else if(rhyme_on == 4) {fun.play();}
      }
      else if(question == 3) {
        if(rhyme_on == 1) {gas.play();}
        else if(rhyme_on == 2) {cash.play();}
        else if(rhyme_on == 3) {bash.play();}
        else if(rhyme_on == 4) {math.play();}
      }
      else if(question == 4) {
        if(rhyme_on == 1) {yet.play();}
        else if(rhyme_on == 2) {rod.play();}
        else if(rhyme_on == 3) {bed.play();}
        else if(rhyme_on == 4) {web.play();}
      }
      else if(question == 5) {
        if(rhyme_on == 1) {skid.play();}
        else if(rhyme_on == 2) {wig.play();}
        else if(rhyme_on == 3) {whip.play();}
        else if(rhyme_on == 4) {did.play();}
      }
      else if(question == 6) {
        if(rhyme_on == 1) {clock.play();}
        else if(rhyme_on == 2) {slob.play();}
        else if(rhyme_on == 3) {spot.play();}
        else if(rhyme_on == 4) {mop.play();}
      }
      else if(question == 7) {
        if(rhyme_on == 1) {sell.play();}
        else if(rhyme_on == 2) {bill.play();}
        else if(rhyme_on == 3) {mall.play();}
        else if(rhyme_on == 4) {call.play();}
      }
    }
  }
  if(e.keyCode != 32 && e.keyCode != 37 && (e.keyCode < 65 || e.keyCode > 91)) {

    locked = true;
    if(sPage == "addition.php" || sPage == "cornershapes.php" || sPage == "subtraction.php" || sPage == "countingshapes.php") {

      if(sPage == "addition.php") {
        if(addquestion < 10) {
          if(ad == adans) {
            correct_ans.play();
            addquestion++;
            if(!made_mis) {addcorrect++;}
            else {made_mis = 0;}
            $('.addprob').fadeOut();
            $('.addsol').fadeOut();
            $('#additionnumbers').fadeOut();
            $('#adcorrect').delay(500).fadeIn();
            $('#adcorrect').delay(1000).fadeOut();
            $('#additionnumbers').delay(2000).fadeIn();
            $('.addprob').delay(2000).fadeIn();
            $('.addsol').delay(2500).fadeIn();
            setTimeout(function() {
              locked = false;
            }, 2550);
            setTimeout(function() {
              adans = mathProblem();
            }, 1500);
            setTimeout(function() {
              responsiveVoice.speak(a+"plus"+b+"equals");
            }, 2100);
            ad = 0;
            mc = 0;
            $('#adcount').html(mc);
          }
          else {
            maxwrong++;
            add_mis++;
            made_mis = 1;
            false_ans.play();
            /*addquestion++;
            $('#adf').empty();
            $('#adf').append("False... the answer is: "+adans);*/
            $('#adf').empty();
            if(maxwrong < 5) {$('#adf').append("False... try again!");}
            else {$('#adf').append("False... the answer is: "+adans);}
            $('.addprob').fadeOut();
            $('.addsol').fadeOut();
            $('#additionnumbers').fadeOut();
            $('#adfalse').delay(500).fadeIn();
            $('#adfalse').delay(1000).fadeOut();
            $('#additionnumbers').delay(2000).fadeIn();
            $('.addprob').delay(2000).fadeIn();
            $('.addsol').delay(2500).fadeIn();
            setTimeout(function() {
              locked = false;
            }, 2550);
            if(maxwrong < 5) {
              setTimeout(function() {
                responsiveVoice.speak(a+"plus"+b+"equals");
              }, 2100);
            }
            else {
              maxwrong = 0;
              subquestion++;
              setTimeout(function() {
                adans = mathProblem();
              }, 1500);
              setTimeout(function() {
                responsiveVoice.speak(a+"plus"+b+"equals");
              }, 2100);
            }
            ad = 0;
            mc = 0;
            $('#adcount').html(mc);
          }
        }
        else {
          $.ajax({
              type: "GET",
              url: "users.php/correct?correct="+addcorrect+"&activity=simpleadd",
              success: function(data){   
              }
            });

            $.ajax({
              type: "GET",
              url: "users.php/activity?errors="+add_mis+"&activity=simpleadd",
              success: function(data){   
              }
            });

          locked = false;
          $('#additonreg').fadeOut();
          $('#adanswers').prepend("<div style="+"'"+"color:white'"+">You made "+add_mis+" adding mistakes.</div>");
          $('#adanswers').prepend("<div style="+"'"+"color:white'"+">You got "+addcorrect+" correct out of 10!</div>");
          $('#additionreg').fadeOut();
          $('#additionanswers').delay(500).fadeIn();
          setTimeout(function() {
            responsiveVoice.speak("You got "+addcorrect+" correct out of ten!");
            responsiveVoice.speak("You made "+add_mis+" adding mistakes.");
          }, 1000);
          var url = "http://localhost:6969/activities.php";
          setTimeout(function() {
            $('#additionbody').fadeOut(3000);
          }, 6000);
          setTimeout(function() {
            window.location = url;
          }, 9000);
        }
      }

      if(sPage == "subtraction.php") {
        if(subquestion < 10) {
          if(sub == subans) {
            correct_ans.play();
            subquestion++;
            if(!made_mis) {subcorrect++;}
            else {made_mis = 0;}
            $('.subprob').fadeOut();
            $('.subsol').fadeOut();
            $('#subtractionnumbers').fadeOut();
            $('#subcorrect').delay(500).fadeIn();
            $('#subcorrect').delay(1000).fadeOut();
            $('#subtractionnumbers').delay(2000).fadeIn();
            $('.subprob').delay(2000).fadeIn();
            $('.subsol').delay(2500).fadeIn();
            setTimeout(function() {
              locked = false;
            }, 2550);
            setTimeout(function() {
              subans = subMathProblem();
              if(c_first == 1) {
                setTimeout(function() {
                 if(c == 18 && d != 18) {responsiveVoice.speak("Eighteen minus"+d+"equals");}
                 else if(c != 18 && d == 18) {responsiveVoice.speak(c+"minus eighteen equals");}
                 else if(c == 18 && d == 18) {responsiveVoice.speak("Eighteen minus eighteen equals");}
                 else {responsiveVoice.speak(c+"minus"+d+"equals");}
                }, 1100);
              }
              else {
               setTimeout(function() {
                 if(c != 18 && d == 18) {responsiveVoice.speak("Eighteen minus"+c+"equals");}
                 else if(c == 18 && d != 18) {responsiveVoice.speak(d+"minus eighteen equals");}
                 else if(c == 18 && d == 18) {responsiveVoice.speak("Eighteen minus eighteen equals");}
            responsiveVoice.speak(d+"minus"+c+"equals");
                }, 1100);
              }
            }, 1000);
            sub = 0;
            mc = 0;
            $('#subcount').html(sub);
          }
          else {
            false_ans.play();
            made_mis = 1;
            maxwrong++;
            sub_mis++;
            /*
              FIRST TEST: Eliminate false answers. Count mistakes, but let re-try.
    
            subquestion++;
            $('#subf').empty();
            $('#subf').append("False... the answer is: "+subans);
            */
            $('#subf').empty();
            if(maxwrong < 5) {$('#subf').append("False... try again!");}
            else {$('#subf').append("False... the answer is: "+subans);}
            $('.subprob').fadeOut();
            $('.subsol').fadeOut();
            $('#subtractionnumbers').fadeOut();
            $('#subfalse').delay(500).fadeIn();
            $('#subfalse').delay(1000).fadeOut();
            $('#subtractionnumbers').delay(2000).fadeIn();
            $('.subprob').delay(2000).fadeIn();
            $('.subsol').delay(2500).fadeIn();
            setTimeout(function() {
              locked = false;
            }, 2550);
            if(maxwrong < 5) {
              setTimeout(function() {
                if(c_first == 1) {
                  setTimeout(function() {
                   if(c == 18 && d != 18) {responsiveVoice.speak("Eighteen minus"+d+"equals");}
                   else if(c != 18 && d == 18) {responsiveVoice.speak(c+"minus eighteen equals");}
                   else if(c == 18 && d == 18) {responsiveVoice.speak("Eighteen minus eighteen equals");}
                   else {responsiveVoice.speak(c+"minus"+d+"equals");}
                  }, 1100);
                }
                else {
                 setTimeout(function() {
                   if(c != 18 && d == 18) {responsiveVoice.speak("Eighteen minus"+c+"equals");}
                   else if(c == 18 && d != 18) {responsiveVoice.speak(d+"minus eighteen equals");}
                   else if(c == 18 && d == 18) {responsiveVoice.speak("Eighteen minus eighteen equals");}
                   else {responsiveVoice.speak(d+"minus"+c+"equals");}
                  }, 1100);
                }
              }, 1000);
            }
            else {
              maxwrong = 0;
              subquestion++;
              setTimeout(function() {
                subans = subMathProblem();
                if(c_first == 1) {
                  setTimeout(function() {
                   if(c == 18 && d != 18) {responsiveVoice.speak("Eighteen minus"+d+"equals");}
                   else if(c != 18 && d == 18) {responsiveVoice.speak(c+"minus eighteen equals");}
                   else if(c == 18 && d == 18) {responsiveVoice.speak("Eighteen minus eighteen equals");}
                   else {responsiveVoice.speak(c+"minus"+d+"equals");}
                  }, 1100);
                }
                else {
                 setTimeout(function() {
                   if(c != 18 && d == 18) {responsiveVoice.speak("Eighteen minus"+c+"equals");}
                   else if(c == 18 && d != 18) {responsiveVoice.speak(d+"minus eighteen equals");}
                   else if(c == 18 && d == 18) {responsiveVoice.speak("Eighteen minus eighteen equals");}
                   else {responsiveVoice.speak(d+"minus"+c+"equals");}
                  }, 1100);
                }
              }, 1000);
            }
            sub = 0;
            mc = 0;
            $('#subcount').html(sub);
          }
        }
        else {
          $.ajax({
              type: "GET",
              url: "users.php/correct?correct="+subcorrect+"&activity=simplesub",
              success: function(data){   
              }
            });

            $.ajax({
              type: "GET",
              url: "users.php/activity?errors="+sub_mis+"&activity=simplesub",
              success: function(data){   
              }
            });

          locked = false;
          $('#subtractionreg').fadeOut();
          $('#subanswers').prepend("<div style="+"'"+"color:white'"+">You made "+sub_mis+" subtraction mistakes.</div>")
          $('#subanswers').prepend("<div style="+"'"+"color:white'"+">You got "+subcorrect+" correct out of 10!</div>");
          $('#subtractionreg').fadeOut();
          $('#subtractionanswers').delay(500).fadeIn();
          setTimeout(function() {
            responsiveVoice.speak("You got "+subcorrect+" correct out of ten!");
            responsiveVoice.speak("You made "+sub_mis+" subtraction mistakes.");
          }, 1000);
          var url = "http://localhost:6969/activities.php";
          setTimeout(function() {
            $('#subtractionbody').fadeOut(3000);
          }, 6000);
          setTimeout(function() {
            window.location = url;
          }, 9000);
        }
      }

      if(question == 1) {
        /*question++;*/

        //Checking to see if we're on cornershapes.php to perform appropriate action
        if(sPage == "cornershapes.php") {
          $('#box').fadeOut();
          response = checkAnswer(i, 4, 0, maxwrong);
          maxwrong = response;
          appendShape(response, question);
          $('#count').html(mc);
        }
        else if(sPage == "countingshapes.php") {
          $('#cbox').fadeOut();
          response = checkAnswer(count, 20, 0, maxwrong);
          maxwrong = response;
          appendCount(response, question);
          $('#ccount').html(mc);
        }

      }
      else if(question == 2) {

        //Checking to see if we're on cornershapes.php to perform appropriate action
        if(sPage == "cornershapes.php") {
          $('#box').fadeOut();
          response = checkAnswer(i, 3, 0, maxwrong);
          maxwrong = response;
          appendShape(response, question);
          $('#count').html(mc);
        }
        else if(sPage == "countingshapes.php") {
          $('#cbox').fadeOut();
          response = checkAnswer(count, 8, 0, maxwrong);
          maxwrong = response;
          appendCount(response, question);
          $('#ccount').html(mc);
        }
      }
      else if(question == 3) {

        //Checking to see if we're on cornershapes.php to perform appropriate action
        if(sPage == "cornershapes.php") {
          $('#box').fadeOut();
          response = checkAnswer(i, 5, 0, maxwrong);
          maxwrong = response;
          appendShape(response, question);
          $('#count').html(mc);
        }
        else if(sPage == "countingshapes.php") {
          $('#cbox').fadeOut();
          response = checkAnswer(count, 3, 0, maxwrong);
          maxwrong = response;
          appendCount(response, question);
          $('#ccount').html(mc);
        }
      }
      else if(question == 4) {
            
        if(sPage == "cornershapes.php") {
          $('#box').fadeOut();
          response = checkAnswer(i, 6, 0, maxwrong);
          maxwrong = response;
          appendShape(response, question);
          $('#count').html(mc);
        }
        else if(sPage == "countingshapes.php") {
          $('#cbox').fadeOut();
          response = checkAnswer(count, 6, 0, maxwrong);
          maxwrong = response;
          appendCount(response, question);
          $('#ccount').html(mc);
        }
      }
      else if(question == 5) {
        
        if(sPage == "cornershapes.php") {
          $('#box').fadeOut();
          response = checkAnswer(i, 4, 0, maxwrong);
          maxwrong = response;
          appendShape(response, question);
          $('#count').html(mc);
        }
        else if(sPage == "countingshapes.php") {
          $('#cbox').fadeOut();
          response = checkAnswer(count, 7, 0, maxwrong);
          maxwrong = response;
          appendCount(response, question);
          $('#ccount').html(mc);
        }
      }
      else if(question == 6) {
        
        if(sPage == "cornershapes.php") {
          $('#box').fadeOut();
          response = checkAnswer(i, 4, 0, maxwrong);
          maxwrong = response;
          appendShape(response, question);
          $('#count').html(mc);
        }
        else if(sPage == "countingshapes.php"){
          $('#cbox').fadeOut();
          response = checkAnswer(count, 2, 0, maxwrong);
          maxwrong = response;
          appendCount(response, question);
          $('#ccount').html(mc);
        }
      }
      else if(question == 7) {

        if(sPage =="cornershapes.php") {
          $('#box').fadeOut();
          response = checkAnswer(i,4,0,maxwrong);
          maxwrong = response;
          appendShape(response, question);
        }
        else if(sPage == "countingshapes.php") {
          $('#cbox').fadeOut();
          response = checkAnswer(count, 11, 0, maxwrong);
          maxwrong = response;
          appendCount(response, question);
        }
      }
      i = 0;
      count = 0;
    }

    function spellFalse() {
      spell_mis++;
      made_mis = 1;
      false_ans.play();
      $('#spellletterwrapper').fadeOut();
      $('#spellfalsewrapper').delay(500).fadeIn();
      $('#spellfalsewrapper').delay(1000).fadeOut();
      $('#spellletterwrapper').delay(2000).fadeIn();
      setTimeout(function () {
        locked = false;
      }, 2100);
    }

    function spellCorrect_on(on, next) {
      correct_ans.play();
      $('#spellletterwrapper').fadeOut();
      $('#spellcorrectwrapper').delay(500).fadeIn();
      $('#spellcorrectwrapper').delay(1000).fadeOut();
      $('#spellletterwrapper').delay(2000).fadeIn();
      setTimeout(function () {
        locked = false;
      }, 2100);
      spell_on = next;
      spell = -1;
      setTimeout(function() {
        $('#spell_back'+on).css("background-color", "#57E465");
        $('#spell_back'+on).css("color", "green");
        $('#spell_back'+on).css("border-color", "green");

        $('#spell_back'+next).css("background-color", "purple");
        $('#spell_back'+next).css("color", "white");
        $('#spell_back'+next).css("border-color", "black");
      }, 1000);
      setTimeout(function() {
        /* Next Correct */
        $('#c_back'+next).css("background-color", "#57E465");
        $('#c_back'+next).css("color", "green");
        $('#c_back'+next).css("border-color", "green");
        
        /* Next False */
        $('#f_back'+next).css("background-color", "#EC8C8C");
        $('#f_back'+next).css("color", "red");
        $('#f_back'+next).css("border-color", "red");

        /* On needs to be blank */
        $('#c_back'+on).css("background-color", "grey");
        $('#c_back'+on).css("color", "black");
        $('#c_back'+on).css("border-color", "black");

        $('#f_back'+on).css('background-color', "grey");
        $('#f_back'+on).css("color", "black");
        $('#f_back'+on).css("border-color", "black");
      }, 2400);
    }

    /* Spelling stuff */
    if(sPage == "spelling.php") {
      if(question == 1) {
        if(spell_on == 1) {
          if(spell != 1) {spellFalse();}
          else {spellCorrect_on(1, 2);}
        }  
        else if(spell_on == 2) {
          if(spell != 0) {spellFalse();}
          else {spellCorrect_on(2,3);}
        }
        else if(spell_on == 3) {
          if(spell != 19) {spellFalse();}
          else {
            if(!made_mis) {spell_nomis++;}
            else {made_mis = 0;}
            correct_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellcorrectwrapper').delay(500).fadeIn();
            $('#spellcorrectwrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();

            spell = -1;
            setTimeout(function() {
              $('#spell_back3').css("background-color", "#57E465");
              $('#spell_back3').css("color", "green");
              $('#spell_back3').css("border-color", "green");
            }, 1000);
            setTimeout(function() {
              responsiveVoice.speak("You are correct! This is how you spell bat!", "US English Female");
              responsiveVoice.speak("B", "US English Female");
              responsiveVoice.speak("A", "US English Female");
              responsiveVoice.speak("T", "US English Female");
              responsiveVoice.speak("BAT", "US English Female");
              responsiveVoice.speak("How do you spell pen?", "US English Female");
            }, 2500);
            $('#spellwrapper').delay(4100).fadeOut();
            $('.spellheight').delay(4100).fadeOut();

            question++;
            spell_on = 1;

            setTimeout(function() {
              locked = false;

              //Change the picture
              $('#spelling').empty();
              $('#spelling').prepend("<img src="+"'"+"../images/pen.png"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");

              //Reset the letters
              var t = 0;
              for(t = 2 ; t < 4 ; t++) {
                $('#spell_back'+t).css("background-color", "white");
                $('#spell_back'+t).css("color", "black");
                $('#spell_back'+t).css("border-color", "black");
              }
              for(t = 1 ; t < 4; t++) {
                $("#spell"+t).empty();
                $('#cspell'+t).empty();
                $('#fspell'+t).empty();
              }
              $('#spell_back1').css("background-color", "purple");
              $('#spell_back1').css("color", "white");
              $('#spell_back1').css("border-color", "black");

              $('#c_back3').css("background-color", "grey");
              $('#c_back3').css("color", "black");
              $('#c_back3').css("border-color", "black");

              $('#f_back3').css("background-color", "grey");
              $('#f_back3').css("color", "black");
              $('#f_back3').css("border-color", "black");

              $('#c_back1').css("background-color", "#57E465");
              $('#c_back1').css("color", "green");
              $('#c_back1').css("border-color", "green");

              $('#f_back1').css("background-color", "#EC8C8C");
              $('#f_back1').css("color", "red");
              $('#f_back1').css("border-color", "red");
            }, 4500);
            $('#spellwrapper').delay(4550).fadeIn();
            $('.spellheight').delay(4550).fadeIn();
          }
        }
      }
      else if(question == 2) {
        if(spell_on == 1) {
          if(spell != 15) {spellFalse();}
          else {spellCorrect_on(1, 2);}
        }  
        else if(spell_on == 2) {
          if(spell != 4) {spellFalse();}
          else {spellCorrect_on(2,3);}
        }
        else if(spell_on == 3) {
          if(spell != 13) {spellFalse();}
          else {
            if(!made_mis) {spell_nomis++;}
            else {made_mis = 0;}
            correct_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellcorrectwrapper').delay(500).fadeIn();
            $('#spellcorrectwrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();

            spell = -1;
            setTimeout(function() {
              $('#spell_back3').css("background-color", "#57E465");
              $('#spell_back3').css("color", "green");
              $('#spell_back3').css("border-color", "green");
            }, 1000);
            setTimeout(function() {
              responsiveVoice.speak("You are correct! This is how you spell pen!", "US English Female");
              responsiveVoice.speak("P", "US English Female");
              responsiveVoice.speak("E", "US English Female");
              responsiveVoice.speak("N", "US English Female");
              responsiveVoice.speak("PEN", "US English Female");
              responsiveVoice.speak("How do you spell duck?", "US English Female");
            }, 2500);
            $('#spellwrapper').delay(4100).fadeOut();
            $('.spellheight').delay(4100).fadeOut();

            question++;
            spell_on = 1;

            setTimeout(function() {
              locked = false;

              //Change the picture
              $('#spelling').empty();
              $('#spelling').prepend("<img src="+"'"+"../images/duck.png"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");

              //Reset the letters
              var t = 0;
              for(t = 2 ; t < 4 ; t++) {
                $('#spell_back'+t).css("background-color", "white");
                $('#spell_back'+t).css("color", "black");
                $('#spell_back'+t).css("border-color", "black");
              }
              for(t = 1 ; t < 4; t++) {
                $("#spell"+t).empty();
                $('#cspell'+t).empty();
                $('#fspell'+t).empty();
              }
              $('#spell_back1').css("background-color", "purple");
              $('#spell_back1').css("color", "white");
              $('#spell_back1').css("border-color", "black");

              $('#spell_back4').css("background-color", "white");

              $('#c_back3').css("background-color", "grey");
              $('#c_back3').css("color", "black");
              $('#c_back3').css("border-color", "black");

              $('#f_back3').css("background-color", "grey");
              $('#f_back3').css("color", "black");
              $('#f_back3').css("border-color", "black");

              $('#c_back1').css("background-color", "#57E465");
              $('#c_back1').css("color", "green");
              $('#c_back1').css("border-color", "green");

              $('#f_back1').css("background-color", "#EC8C8C");
              $('#f_back1').css("color", "red");
              $('#f_back1').css("border-color", "red");
            }, 4500);
            $('#spellwrapper').delay(4550).fadeIn();
            $('.spellheight').delay(4550).fadeIn();
          }
        }
      }
      else if(question == 3) {
        if(spell_on == 1) {
          if(spell != 3) {spellFalse();}
          else {spellCorrect_on(1,2);}
        }  
        else if(spell_on == 2) {
          if(spell != 20) {spellFalse();}
          else {spellCorrect_on(2,3);}
        }
        else if(spell_on == 3) {
          if(spell != 2) {spellFalse();}
          else {spellCorrect_on(3,4);}
        }
        else if(spell_on == 4) {
          if(spell != 10) {
            false_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellfalsewrapper').delay(500).fadeIn();
            $('#spellfalsewrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();
          }
          else {
            if(!made_mis) {spell_nomis++;}
            else {made_mis = 0;}
            correct_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellcorrectwrapper').delay(500).fadeIn();
            $('#spellcorrectwrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();

            spell = -1;
            setTimeout(function() {
              $('#spell_back4').css("background-color", "#57E465");
              $('#spell_back4').css("color", "green");
              $('#spell_back4').css("border-color", "green");
            }, 1000);
            setTimeout(function() {
              responsiveVoice.speak("You are correct! This is how you spell duck!", "US English Female");
              responsiveVoice.speak("D", "US English Female");
              responsiveVoice.speak("U", "US English Female");
              responsiveVoice.speak("C", "US English Female");
              responsiveVoice.speak("K", "US English Female");
              responsiveVoice.speak("DUCK", "US English Female");
              responsiveVoice.speak("How do you spell flag?", "US English Female");
            }, 2500);
            $('#spellwrapper').delay(4100).fadeOut();
            $('.spellheight').delay(4100).fadeOut();

            question++;
            spell_on = 1;

            setTimeout(function() {
              locked = false;

              //Change the picture
              $('#spelling').empty();
              $('#spelling').prepend("<img src="+"'"+"../images/flag.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");

              //Reset the letters
              var t = 0;
              for(t = 2 ; t < 5 ; t++) {
                $('#spell_back'+t).css("background-color", "white");
                $('#spell_back'+t).css("color", "black");
                $('#spell_back'+t).css("border-color", "black");
              }
              for(t = 1 ; t < 5; t++) {
                $("#spell"+t).empty();
                $('#cspell'+t).empty();
                $('#fspell'+t).empty();
              }
              $('#spell_back1').css("background-color", "purple");
              $('#spell_back1').css("color", "white");
              $('#spell_back1').css("border-color", "black");

              $('#c_back4').css("background-color", "grey");
              $('#c_back4').css("color", "black");
              $('#c_back4').css("border-color", "black");

              $('#f_back4').css("background-color", "grey");
              $('#f_back4').css("color", "black");
              $('#f_back4').css("border-color", "black");

              $('#c_back1').css("background-color", "#57E465");
              $('#c_back1').css("color", "green");
              $('#c_back1').css("border-color", "green");

              $('#f_back1').css("background-color", "#EC8C8C");
              $('#f_back1').css("color", "red");
              $('#f_back1').css("border-color", "red");
            }, 4500);
            $('#spellwrapper').delay(4550).fadeIn();
            $('.spellheight').delay(4550).fadeIn();
          }
        }
      }
      else if(question == 4) {
        if(spell_on == 1) {
          if(spell != 5) {spellFalse();}
          else {spellCorrect_on(1,2);}
        }  
        else if(spell_on == 2) {
          if(spell != 11) {spellFalse();}
          else {spellCorrect_on(2,3);}
        }
        else if(spell_on == 3) {
          if(spell != 0) {spellFalse();}
          else {spellCorrect_on(3,4);}
        }
        else if(spell_on == 4) {
          if(spell != 6) {spellFalse();}
          else {
            if(!made_mis) {spell_nomis++;}
            else {made_mis = 0;}
            correct_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellcorrectwrapper').delay(500).fadeIn();
            $('#spellcorrectwrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();

            spell = -1;
            setTimeout(function() {
              $('#spell_back4').css("background-color", "#57E465");
              $('#spell_back4').css("color", "green");
              $('#spell_back4').css("border-color", "green");
            }, 1000);
            setTimeout(function() {
              responsiveVoice.speak("You are correct! This is how you spell flag!", "US English Female");
              responsiveVoice.speak("F", "US English Female");
              responsiveVoice.speak("L", "US English Female");
              responsiveVoice.speak("A", "US English Female");
              responsiveVoice.speak("G", "US English Female");
              responsiveVoice.speak("FLAG", "US English Female");
              responsiveVoice.speak("How do you spell sock?");
            }, 2500);
            $('#spellwrapper').delay(4100).fadeOut();
            $('.spellheight').delay(4100).fadeOut();

            question++;
            spell_on = 1;

            setTimeout(function() {
              locked = false;

              //Change the picture
              $('#spelling').empty();
              $('#spelling').prepend("<img src="+"'"+"../images/sock.png"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");

              //Reset the letters
              var t = 0;
              for(t = 2 ; t < 5 ; t++) {
                $('#spell_back'+t).css("background-color", "white");
                $('#spell_back'+t).css("color", "black");
                $('#spell_back'+t).css("border-color", "black");
              }
              for(t = 1 ; t < 5; t++) {
                $("#spell"+t).empty();
                $('#cspell'+t).empty();
                $('#fspell'+t).empty();
              }
              $('#spell_back1').css("background-color", "purple");
              $('#spell_back1').css("color", "white");
              $('#spell_back1').css("border-color", "black");

              $('#c_back4').css("background-color", "grey");
              $('#c_back4').css("color", "black");
              $('#c_back4').css("border-color", "black");

              $('#f_back4').css("background-color", "grey");
              $('#f_back4').css("color", "black");
              $('#f_back4').css("border-color", "black");

              $('#c_back1').css("background-color", "#57E465");
              $('#c_back1').css("color", "green");
              $('#c_back1').css("border-color", "green");

              $('#f_back1').css("background-color", "#EC8C8C");
              $('#f_back1').css("color", "red");
              $('#f_back1').css("border-color", "red");
            }, 4500);
            $('#spellwrapper').delay(4550).fadeIn();
            $('.spellheight').delay(4550).fadeIn();
          }
        }
      }
      else if(question == 5) {
        if(spell_on == 1) {
          if(spell != 18) {spellFalse();}
          else {spellCorrect_on(1,2);}
        }  
        else if(spell_on == 2) {
          if(spell != 14) {spellFalse();}
          else {spellCorrect_on(2,3);}
        }
        else if(spell_on == 3) {
          if(spell != 2) {spellFalse();}
          else {spellCorrect_on(3,4);}
        }
        else if(spell_on == 4) {
          if(spell != 10) {spellFalse();}
          else {
            if(!made_mis) {spell_nomis++;}
            else {made_mis = 0;}
            correct_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellcorrectwrapper').delay(500).fadeIn();
            $('#spellcorrectwrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();

            spell = -1;
            setTimeout(function() {
              $('#spell_back4').css("background-color", "#57E465");
              $('#spell_back4').css("color", "green");
              $('#spell_back4').css("border-color", "green");
            }, 1000);
            setTimeout(function() {
              responsiveVoice.speak("You are correct! This is how you spell sock!", "US English Female");
              responsiveVoice.speak("S", "US English Female");
              responsiveVoice.speak("O", "US English Female");
              responsiveVoice.speak("C", "US English Female");
              responsiveVoice.speak("K", "US English Female");
              responsiveVoice.speak("SOCK", "US English Female");
              responsiveVoice.speak("How do you spell stick?");
            }, 2500);
            $('#spellwrapper').delay(4100).fadeOut();
            $('.spellheight').delay(4100).fadeOut();

            question++;
            spell_on = 1;

            setTimeout(function() {
              locked = false;

              //Change the picture
              $('#spelling').empty();
              $('#spelling').prepend("<img src="+"'"+"../images/stick.png"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");

              //Reset the letters
              var t = 0;
              for(t = 2 ; t < 6 ; t++) {
                $('#spell_back'+t).css("background-color", "white");
                $('#spell_back'+t).css("color", "black");
                $('#spell_back'+t).css("border-color", "black");
              }
              for(t = 1 ; t < 5; t++) {
                $("#spell"+t).empty();
                $('#cspell'+t).empty();
                $('#fspell'+t).empty();
              }
              $('#spell_back1').css("background-color", "purple");
              $('#spell_back1').css("color", "white");
              $('#spell_back1').css("border-color", "black");

              $('#c_back4').css("background-color", "grey");
              $('#c_back4').css("color", "black");
              $('#c_back4').css("border-color", "black");

              $('#f_back4').css("background-color", "grey");
              $('#f_back4').css("color", "black");
              $('#f_back4').css("border-color", "black");

              $('#c_back1').css("background-color", "#57E465");
              $('#c_back1').css("color", "green");
              $('#c_back1').css("border-color", "green");

              $('#f_back1').css("background-color", "#EC8C8C");
              $('#f_back1').css("color", "red");
              $('#f_back1').css("border-color", "red");
            }, 4500);
            $('#spellwrapper').delay(4550).fadeIn();
            $('.spellheight').delay(4550).fadeIn();
          }
        }
      }
      else if(question == 6) {
        if(spell_on == 1) {
          if(spell != 18) {spellFalse();}
          else {spellCorrect_on(1,2);}
        }  
        else if(spell_on == 2) {
          if(spell != 19) {spellFalse();}
          else {spellCorrect_on(2,3);}
        }
        else if(spell_on == 3) {
          if(spell != 8) {spellFalse();}
          else {spellCorrect_on(3,4);}
        }
        else if(spell_on == 4) {
          if(spell != 2) {spellFalse();}
          else {spellCorrect_on(4,5);}
        }
        else if(spell_on == 5) {
          if(spell != 10) {
            false_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellfalsewrapper').delay(500).fadeIn();
            $('#spellfalsewrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();
          }
          else {
            if(!made_mis) {spell_nomis++;}
            else {made_mis = 0;}
            correct_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellcorrectwrapper').delay(500).fadeIn();
            $('#spellcorrectwrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();

            spell = -1;
            setTimeout(function() {
              $('#spell_back5').css("background-color", "#57E465");
              $('#spell_back5').css("color", "green");
              $('#spell_back5').css("border-color", "green");
            }, 1000);
            setTimeout(function() {
              responsiveVoice.speak("You are correct! This is how you spell stick!", "US English Female");
              responsiveVoice.speak("S", "US English Female");
              responsiveVoice.speak("T", "US English Female");
              responsiveVoice.speak("I", "US English Female");
              responsiveVoice.speak("C", "US English Female");
              responsiveVoice.speak("K", "US English Female");
              responsiveVoice.speak("STICK", "US English Female");
              responsiveVoice.speak("How do you spell truck?");
            }, 2500);
            $('#spellwrapper').delay(4100).fadeOut();
            $('.spellheight').delay(4100).fadeOut();

            question++;
            spell_on = 1;

            setTimeout(function() {
              locked = false;

              //Change the picture
              $('#spelling').empty();
              $('#spelling').prepend("<img src="+"'"+"../images/truck.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");

              //Reset the letters
              var t = 0;
              for(t = 2 ; t < 6 ; t++) {
                $('#spell_back'+t).css("background-color", "white");
                $('#spell_back'+t).css("color", "black");
                $('#spell_back'+t).css("border-color", "black");
              }
              for(t = 1 ; t < 6; t++) {
                $("#spell"+t).empty();
                $('#cspell'+t).empty();
                $('#fspell'+t).empty();
              }
              $('#spell_back1').css("background-color", "purple");
              $('#spell_back1').css("color", "white");
              $('#spell_back1').css("border-color", "black");

              $('#c_back5').css("background-color", "grey");
              $('#c_back5').css("color", "black");
              $('#c_back5').css("border-color", "black");

              $('#f_back5').css("background-color", "grey");
              $('#f_back5').css("color", "black");
              $('#f_back5').css("border-color", "black");

              $('#c_back1').css("background-color", "#57E465");
              $('#c_back1').css("color", "green");
              $('#c_back1').css("border-color", "green");

              $('#f_back1').css("background-color", "#EC8C8C");
              $('#f_back1').css("color", "red");
              $('#f_back1').css("border-color", "red");
            }, 4500);
            $('#spellwrapper').delay(4550).fadeIn();
            $('.spellheight').delay(4550).fadeIn();
          }
        }
      }
      else if(question == 7) {
        if(spell_on == 1) {
          if(spell != 19) {spellFalse();}
          else {spellCorrect_on(1,2);}
        }  
        else if(spell_on == 2) {
          if(spell != 17) {spellFalse();}
          else {spellCorrect_on(2,3);}
        }
        else if(spell_on == 3) {
          if(spell != 20) {spellFalse();}
          else {spellCorrect_on(3,4);}
        }
        else if(spell_on == 4) {
          if(spell != 2) {spellFalse();}
          else {spellCorrect_on(4,5);}
        }
        else if(spell_on == 5) {
          if(spell != 10) {
            false_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellfalsewrapper').delay(500).fadeIn();
            $('#spellfalsewrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();
          }
          else {
            if(!made_mis) {spell_nomis++;}
            else {made_mis = 0;}
            correct_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellcorrectwrapper').delay(500).fadeIn();
            $('#spellcorrectwrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();

            spell = -1;
            setTimeout(function() {
              $('#spell_back5').css("background-color", "#57E465");
              $('#spell_back5').css("color", "green");
              $('#spell_back5').css("border-color", "green");
            }, 1000);
            setTimeout(function() {
              responsiveVoice.speak("You are correct! This is how you spell truck!", "US English Female");
              responsiveVoice.speak("T", "US English Female");
              responsiveVoice.speak("R", "US English Female");
              responsiveVoice.speak("U", "US English Female");
              responsiveVoice.speak("C", "US English Female");
              responsiveVoice.speak("K", "US English Female");
              responsiveVoice.speak("TRUCK", "US English Female");
              responsiveVoice.speak("How do you spell knot?");
            }, 2500);
            $('#spellwrapper').delay(4100).fadeOut();
            $('.spellheight').delay(4100).fadeOut();

            question++;
            spell_on = 1;

            setTimeout(function() {
              locked = false;

              //Change the picture
              $('#spelling').empty();
              $('#spelling').prepend("<img src="+"'"+"../images/knot.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");

              //Reset the letters
              var t = 0;
              for(t = 2 ; t < 5 ; t++) {
                $('#spell_back'+t).css("background-color", "white");
                $('#spell_back'+t).css("color", "black");
                $('#spell_back'+t).css("border-color", "black");
              }
              for(t = 1 ; t < 6; t++) {
                $("#spell"+t).empty();
                $('#cspell'+t).empty();
                $('#fspell'+t).empty();
              }
              $('#spell_back1').css("background-color", "purple");
              $('#spell_back1').css("color", "white");
              $('#spell_back1').css("border-color", "black");

              $('#spell_back5').css("background-color", "grey");
              $('#spell_back5').css("color", "black");
              $('#spell_back5').css("border-color", "black");

              $('#c_back5').css("background-color", "grey");
              $('#c_back5').css("color", "black");
              $('#c_back5').css("border-color", "black");

              $('#f_back5').css("background-color", "grey");
              $('#f_back5').css("color", "black");
              $('#f_back5').css("border-color", "black");

              $('#c_back1').css("background-color", "#57E465");
              $('#c_back1').css("color", "green");
              $('#c_back1').css("border-color", "green");

              $('#f_back1').css("background-color", "#EC8C8C");
              $('#f_back1').css("color", "red");
              $('#f_back1').css("border-color", "red");
            }, 4500);
            $('#spellwrapper').delay(4550).fadeIn();
            $('.spellheight').delay(4550).fadeIn();
          }
        }
      }
      else if(question == 8) {
        if(spell_on == 1) {
          if(spell != 10) {spellFalse();}
          else {spellCorrect_on(1,2);}
        }  
        else if(spell_on == 2) {
          if(spell != 13) {spellFalse();}
          else {spellCorrect_on(2,3);}
        }
        else if(spell_on == 3) {
          if(spell != 14) {spellFalse();}
          else {spellCorrect_on(3,4);}
        }
        else if(spell_on == 4) {
          if(spell != 19) {spellFalse();}
          else {
            if(!made_mis) {spell_nomis++;}
            else {made_mis = 0;}
            correct_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellcorrectwrapper').delay(500).fadeIn();
            $('#spellcorrectwrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();

            spell = -1;
            setTimeout(function() {
              $('#spell_back4').css("background-color", "#57E465");
              $('#spell_back4').css("color", "green");
              $('#spell_back4').css("border-color", "green");
            }, 1000);
            setTimeout(function() {
              responsiveVoice.speak("You are correct! This is how you spell knot!", "US English Female");
              responsiveVoice.speak("K", "US English Female");
              responsiveVoice.speak("N", "US English Female");
              responsiveVoice.speak("O", "US English Female");
              responsiveVoice.speak("T", "US English Female");
              responsiveVoice.speak("KNOT", "US English Female");
              responsiveVoice.speak("How do you spell shed?");
            }, 2500);
            $('#spellwrapper').delay(4100).fadeOut();
            $('.spellheight').delay(4100).fadeOut();

            question++;
            spell_on = 1;

            setTimeout(function() {
              locked = false;

              //Change the picture
              $('#spelling').empty();
              $('#spelling').prepend("<img src="+"'"+"../images/shed.jpeg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");

              //Reset the letters
              var t = 0;
              for(t = 2 ; t < 5 ; t++) {
                $('#spell_back'+t).css("background-color", "white");
                $('#spell_back'+t).css("color", "black");
                $('#spell_back'+t).css("border-color", "black");
              }
              for(t = 1 ; t < 5; t++) {
                $("#spell"+t).empty();
                $('#cspell'+t).empty();
                $('#fspell'+t).empty();
              }
              $('#spell_back1').css("background-color", "purple");
              $('#spell_back1').css("color", "white");
              $('#spell_back1').css("border-color", "black");


              $('#c_back4').css("background-color", "grey");
              $('#c_back4').css("color", "black");
              $('#c_back4').css("border-color", "black");

              $('#f_back4').css("background-color", "grey");
              $('#f_back4').css("color", "black");
              $('#f_back4').css("border-color", "black");

              $('#c_back1').css("background-color", "#57E465");
              $('#c_back1').css("color", "green");
              $('#c_back1').css("border-color", "green");

              $('#f_back1').css("background-color", "#EC8C8C");
              $('#f_back1').css("color", "red");
              $('#f_back1').css("border-color", "red");
            }, 4500);
            $('#spellwrapper').delay(4550).fadeIn();
            $('.spellheight').delay(4550).fadeIn();
          }
        }
      }
      else if(question == 9) {
        if(spell_on == 1) {
          if(spell != 18) {spellFalse();}
          else {spellCorrect_on(1,2);}
        }  
        else if(spell_on == 2) {
          if(spell != 7) {spellFalse();}
          else {spellCorrect_on(2,3);}
        }
        else if(spell_on == 3) {
          if(spell != 4) {spellFalse();}
          else {spellCorrect_on(3,4);}
        }
        else if(spell_on == 4) {
          if(spell != 3) {spellFalse();}
          else {
            if(!made_mis) {spell_nomis++;}
            else {made_mis = 0;}
            correct_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellcorrectwrapper').delay(500).fadeIn();
            $('#spellcorrectwrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();

            spell = -1;
            setTimeout(function() {
              $('#spell_back4').css("background-color", "#57E465");
              $('#spell_back4').css("color", "green");
              $('#spell_back4').css("border-color", "green");
            }, 1000);
            setTimeout(function() {
              responsiveVoice.speak("You are correct! This is how you spell shed!", "US English Female");
              responsiveVoice.speak("S", "US English Female");
              responsiveVoice.speak("H", "US English Female");
              responsiveVoice.speak("E", "US English Female");
              responsiveVoice.speak("D", "US English Female");
              responsiveVoice.speak("SHED", "US English Female");
              responsiveVoice.speak("How do you spell brush?");
            }, 2500);
            $('#spellwrapper').delay(4100).fadeOut();
            $('.spellheight').delay(4100).fadeOut();

            question++;
            spell_on = 1;

            setTimeout(function() {
              locked = false;

              //Change the picture
              $('#spelling').empty();
              $('#spelling').prepend("<img src="+"'"+"../images/brush.gif"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");

              //Reset the letters
              var t = 0;
              for(t = 2 ; t < 6 ; t++) {
                $('#spell_back'+t).css("background-color", "white");
                $('#spell_back'+t).css("color", "black");
                $('#spell_back'+t).css("border-color", "black");
              }
              for(t = 1 ; t < 5; t++) {
                $("#spell"+t).empty();
                $('#cspell'+t).empty();
                $('#fspell'+t).empty();
              }
              $('#spell_back1').css("background-color", "purple");
              $('#spell_back1').css("color", "white");
              $('#spell_back1').css("border-color", "black");


              $('#c_back4').css("background-color", "grey");
              $('#c_back4').css("color", "black");
              $('#c_back4').css("border-color", "black");

              $('#f_back4').css("background-color", "grey");
              $('#f_back4').css("color", "black");
              $('#f_back4').css("border-color", "black");

              $('#c_back1').css("background-color", "#57E465");
              $('#c_back1').css("color", "green");
              $('#c_back1').css("border-color", "green");

              $('#f_back1').css("background-color", "#EC8C8C");
              $('#f_back1').css("color", "red");
              $('#f_back1').css("border-color", "red");
            }, 4500);
            $('#spellwrapper').delay(4550).fadeIn();
            $('.spellheight').delay(4550).fadeIn();
          }
        }
      }
      else if(question == 10) {
        if(spell_on == 1) {
          if(spell != 1) {spellFalse();}
          else {spellCorrect_on(1,2);}
        }  
        else if(spell_on == 2) {
          if(spell != 17) {spellFalse();}
          else {spellCorrect_on(2,3);}
        }
        else if(spell_on == 3) {
          if(spell != 20) {spellFalse();}
          else {spellCorrect_on(3,4);}
        }
        else if(spell_on == 4) {
          if(spell != 18) {spellFalse();}
          else {spellCorrect_on(4,5);}
        }
        else if(spell_on == 5) {
          if(spell != 7) {spellFalse();}
          else {
            if(!made_mis) {spell_nomis++;}
            else {made_mis = 0;}
            correct_ans.play();
            $('#spellletterwrapper').fadeOut();
            $('#spellcorrectwrapper').delay(500).fadeIn();
            $('#spellcorrectwrapper').delay(1000).fadeOut();
            $('#spellletterwrapper').delay(2000).fadeIn();

            spell = -1;
            setTimeout(function() {
              $('#spell_back5').css("background-color", "#57E465");
              $('#spell_back5').css("color", "green");
              $('#spell_back5').css("border-color", "green");
            }, 1000);
            setTimeout(function() {
              responsiveVoice.speak("You are correct! This is how you spell brush!", "US English Female");
              responsiveVoice.speak("B", "US English Female");
              responsiveVoice.speak("R", "US English Female");
              responsiveVoice.speak("U", "US English Female");
              responsiveVoice.speak("S", "US English Female");
              responsiveVoice.speak("H", "US English Female");
              responsiveVoice.speak("BRUSH", "US English Female");
            }, 2500);
            $('#spellwrapper').delay(6000).fadeOut();
            $('.spellheight').delay(6100).fadeOut();
            $('.spellreg').delay(6100).fadeOut();

            question++;
            spell_on = 1;

            $.ajax({
              type: "GET",
              url: "users.php/correct?correct="+spell_nomis+"&activity=simplespell",
              success: function(data){   
              }
            });

            $.ajax({
              type: "GET",
              url: "users.php/activity?errors="+spell_mis+"&activity=simplespell",
              success: function(data){   
              }
            });

            setTimeout(function() {
              locked = false;

              $('#sanswers').empty();
              $('#sanswers').prepend("<div><h3>You made "+spell_mis+" spelling mistakes.</h3></div>");
              $('#sanswers').prepend("<div><h3>You got "+spell_nomis+" correct without any mistakes!</h3></div>");
            }, 6500);
            $('#spellanswers').delay(6550).fadeIn();
            setTimeout(function() {
              responsiveVoice.speak("You got "+spell_nomis+" correct without any mistakes!");
              responsiveVoice.speak("You made "+spell_mis+" spelling mistakes.");
            }, 9000);
            var url = "http://localhost:6969/activities.php";
            setTimeout(function() {
              $('#spellingbody').fadeOut(3000);
            }, 12000);
            setTimeout(function() {
              window.location = url;
            }, 15000);
          }
        }
      }
    }

    /* Rhyming stuff */
    if(sPage == "rhyming.php") {
      if(question == 1) {
        if(rhyme_on != 3 && maxwrong < 5) {
          rhymeFalse(rhyme_on);
          maxwrong++;
          rhyme_mis++;
          made_mis = 1;
        }
        else {
          if(!maxwrong) {
            rhymeCorrect(3);
            setTimeout(function() {
              rhymeChangeWords("GUM", "DRUM", "SLUMP", "DUMP", "FUN", 3);
            }, 3000);
          }
          else {
            rhymeFalse(rhyme_on); 
            setTimeout(function() {
              rhymeChangeWords("GUM", "DRUM", "SLUMP", "DUMP", "FUN", rhyme_on);
            }, 3000);
            maxwrong = 0;
          }
          if(!made_mis) {rhyme_nomis++;}
          else {made_mis = 0;}
          question++;
          setTimeout(function() {
            responsiveVoice.speak("What rhymes with gum?", "US English Female", {rate: 0.75});
          }, 4000);
        }
      }
      else if(question == 2) {
        if(rhyme_on != 1 && maxwrong < 4) {
          rhymeFalse(rhyme_on);
          maxwrong++;
          rhyme_mis++;
          made_mis = 1;
        }
        else {
          if(!maxwrong) {
            rhymeCorrect(1);
            setTimeout(function() {
              rhymeChangeWords("BATH", "GAS", "CASH", "BASH", "MATH", 1);
            }, 3000);
          }
          else {
            rhyme_mis++;
            rhymeFalse(rhyme_on); 
            setTimeout(function() {
              rhymeChangeWords("BATH", "GAS", "CASH", "BASH", "MATH", rhyme_on);
            }, 3000);
            maxwrong = 0;
          }
          if(!made_mis) {rhyme_nomis++;}
          else {made_mis = 0;}
          question++;
          setTimeout(function() {
            responsiveVoice.speak("What rhymes with bath?", "US English Female", {rate: 0.75});
          }, 4000);
        }
      }
      else if(question == 3) {
        if(rhyme_on != 4 && maxwrong < 4) {
          rhymeFalse(rhyme_on);
          maxwrong++;
          rhyme_mis++;
          made_mis = 1;
        }
        else {
          if(!maxwrong) {
            rhymeCorrect(4);
            setTimeout(function() {
              rhymeChangeWords("RED", "YET", "ROD", "BED", "WEB", 4);
            }, 3000);
          }
          else {
            rhyme_mis++;
            rhymeFalse(rhyme_on); 
            setTimeout(function() {
              rhymeChangeWords("RED", "YET", "ROD", "BED", "WEB", rhyme_on);
            }, 3000);
            maxwrong = 0;
          }
          if(!made_mis) {rhyme_nomis++;}
          else {made_mis = 0;}
          question++;
          setTimeout(function() {
            responsiveVoice.speak("What rhymes with red?", "US English Female", {rate: 0.75});
          }, 4000);
        }
      }
      else if(question == 4) {
        if(rhyme_on != 3 && maxwrong < 4) {
          rhymeFalse(rhyme_on);
          maxwrong++;
          rhyme_mis++;
          made_mis = 1;
        }
        else {
          if(!maxwrong) {
            rhymeCorrect(3);
            setTimeout(function() {
              rhymeChangeWords("TWIG", "SKID", "WIG", "WHIP", "DID", 3);
            }, 3000);
          }
          else {
            rhyme_mis++;
            rhymeFalse(rhyme_on);
            setTimeout(function() {
              rhymeChangeWords("TWIG", "SKID", "WIG", "WHIP", "DID", rhyme_on);
            }, 3000); 
            maxwrong = 0;
          }
          if(!made_mis) {rhyme_nomis++;}
          else {made_mis = 0;}
          question++;
          setTimeout(function() {
            responsiveVoice.speak("What rhymes with twig?", "US English Female", {rate: 0.75});
          }, 4000);
        }
      }
      else if(question == 5) {
        if(rhyme_on != 2 && maxwrong < 4) {
          rhymeFalse(rhyme_on);
          maxwrong++;
          rhyme_mis++;
          made_mis = 1;
        }
        else {
          if(!maxwrong) {
            rhymeCorrect(2);
            setTimeout(function() {
              rhymeChangeWords("STOP", "CLOCK", "SLOB", "SPOT", "MOP", 2);
            }, 3000);
          }
          else {
            rhyme_mis++;
            rhymeFalse(rhyme_on);
            setTimeout(function() {
              rhymeChangeWords("STOP", "CLOCK", "SLOB", "SPOT", "MOP", rhyme_on);
            }, 3000); 
            maxwrong = 0;
          }
          if(!made_mis) {rhyme_nomis++;}
          else {made_mis = 0;}
          question++;
          setTimeout(function() {
            responsiveVoice.speak("What rhymes with stop?", "US English Female", {rate: 0.75});
          }, 4000);
        }
      }
      else if(question == 6) {
        if(rhyme_on != 4 && maxwrong < 4) {
          rhymeFalse(rhyme_on);
          maxwrong++;
          rhyme_mis++;
          made_mis = 1;
        }
        else {
          if(!maxwrong) {
            rhymeCorrect(4);
            setTimeout(function() {
              rhymeChangeWords("BELL", "SELL", "BILL", "MALL", "CALL", 4);
            }, 3000);
          }
          else {
            rhyme_mis++;
            rhymeFalse(rhyme_on);
            setTimeout(function() {
              rhymeChangeWords("BELL", "SELL", "BILL", "MALL", "CALL", rhyme_on);
            }, 3000); 
            maxwrong = 0;
          }
          if(!made_mis) {rhyme_nomis++;}
          else {made_mis = 0;}
          question++;
          setTimeout(function() {
            responsiveVoice.speak("What rhymes with bell?", "US English Female", {rate: 0.75});
          }, 4000);
        }
      }
      else if(question == 7) {
        if(rhyme_on != 1 && maxwrong < 4) {
          rhymeFalse(rhyme_on);
          maxwrong++;
          rhyme_mis++;
          made_mis = 1;
        }
        else {
          if(!made_mis) {rhyme_nomis++;}
          else {made_mis = 0;}
          question++;
          if(!maxwrong) {rhymeCorrect(1);}
          else {
            rhyme_mis++;
            rhymeFalse(rhyme_on); 
            maxwrong = 0;
          }

          $.ajax({
            type: "GET",
            url: "users.php/correct?correct="+rhyme_nomis+"&activity=simplerhyme",
            success: function(data){   
            }
          });

          $.ajax({
            type: "GET",
            url: "users.php/activity?errors="+rhyme_mis+"&activity=simplerhyme",
            success: function(data){   
            }
          });

          $('#ranswers').prepend("<div><h3>You made "+rhyme_mis+" rhyming mistakes.</h3></div>");
          $('#ranswers').prepend("<div><h3>You got "+rhyme_nomis+" correct without mistakes!</h3></div>");
          setTimeout(function() {
            $('#rhymereg').fadeOut();
          }, 2000);
          setTimeout(function() {
            $('#rhymeanswers').fadeIn(1000);
          }, 4000);
          setTimeout(function() {
            responsiveVoice.speak("You got "+rhyme_nomis+" correct without mistakes!");
            responsiveVoice.speak("You made "+rhyme_mis+" rhyming mistakes.");
          }, 5000);
          var url = "http://localhost:6969/activities.php";
          setTimeout(function() {
            $('#rhymingbody').fadeOut(3000);
          }, 9000);
          setTimeout(function() {
            window.location = url;
          }, 12000);
        }
      }
    }
  }
});

$(document).ready(function() {

    if(sPage == "index.php") {
        $('#navbarnotloggedin').delay(4100).fadeIn(1000);
        $('#navbarloggedin').delay(4100).fadeIn(1000);
        $('#indexhomedivnotlog').delay(4100).fadeIn(2200);
        $('#indexhomedivlog').delay(4100).fadeIn(2200);
      setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
      }, 3000);
    }
    else {
        $('#navbarnotloggedin').fadeIn(0);
        $('#navbarloggedin').fadeIn(0);
    }

    if(sPage == "activities.php") {
      $('#activityhomediv').fadeIn(1500);
    }

    if(sPage == "progress.php") {
      $('#progresshomediv').fadeIn(1500);
    }
 
});

$(document).ready(function() {

  if(sPage == "shapesprogress.php") {
    $.ajax({
        type: "GET",
        url: "users.php/studentcorrectscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#vertcorrect').prepend(jsonObject.countvert+" out of 7");
        }
      });
    $.ajax({
        type: "GET",
        url: "users.php/studenterrorscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#verterrors').prepend(jsonObject.countvert);
        }
      });

    $.ajax({
        type: "GET",
        url: "users.php/studentcorrectscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#countcorrect').prepend(jsonObject.countshape+" out of 7");
        }
      });
    $.ajax({
        type: "GET",
        url: "users.php/studenterrorscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#counterrors').prepend(jsonObject.countshape);
        }
      });
  }
  else if(sPage == "wordsprogress.php") {
    $.ajax({
        type: "GET",
        url: "users.php/studentcorrectscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#spellcorrect').prepend(jsonObject.simplespell+" out of 10");
        }
      });
    $.ajax({
        type: "GET",
        url: "users.php/studenterrorscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#spellerrors').prepend(jsonObject.simplespell);
        }
      });

    $.ajax({
        type: "GET",
        url: "users.php/studentcorrectscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#rcorrect').prepend(jsonObject.simplerhyme+" out of 7");
        }
      });
    $.ajax({
        type: "GET",
        url: "users.php/studenterrorscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#rhymeerrors').prepend(jsonObject.simplerhyme);
        }
      });
  }
  else if(sPage == "additionprogress.php") {
     $.ajax({
        type: "GET",
        url: "users.php/studentcorrectscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#add_correct').prepend(jsonObject.simpleadd+" out of 10");
        }
      });
    $.ajax({
        type: "GET",
        url: "users.php/studenterrorscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#add_errors').prepend(jsonObject.simpleadd);
        }
      });
  }
  else if(sPage == "subtractionprogress.php") {
     $.ajax({
        type: "GET",
        url: "users.php/studentcorrectscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#sub_correct').prepend(jsonObject.simplesub+" out of 10");
        }
      });
    $.ajax({
        type: "GET",
        url: "users.php/studenterrorscores",
        success: function(data){ 
          var jsonObject = JSON.parse(data);
          $('#sub_errors').prepend(jsonObject.simplesub);
        }
      });
  }
});

