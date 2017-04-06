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
var loop;
var loopshape;

$(document).ready(function () {
  $('#shape').prepend("<img src="+"'"+"http://www.kidsmathgamesonline.com/images/pictures/shapes/square.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");
  adans = mathProblem();
  for(loop = 2 ; loop < 12 ; loop++) {
      $('#count-shape'+loop).prepend("<img src="+"'"+"http://lghttp.10957.nexcesscdn.net/804DA9/Accuquilt.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/0/50643.jpg"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
  }
  for(loop = 14 ; loop < 24 ; loop++) {
      $('#count-shape'+loop).prepend("<img src="+"'"+"http://lghttp.10957.nexcesscdn.net/804DA9/Accuquilt.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/0/50643.jpg"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
  }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mathProblem() {
  var a = getRandomInt(0,10);
  var b = getRandomInt(0,10);

  $('#adcol4').html("<center>"+a+"</center>");
  $('#adcol6').html("<center>"+b+"</center>");

  return a+b;
}

var correct = 0;

function checkAnswer(x, a, q) {
  if(q != 7) {
    if(x == a) {
      $('#correct').delay(500).fadeIn();
      $('#correct').delay(500).fadeOut();
      $('#box').delay(1500).fadeIn();
      $('#cbox').delay(1500).fadeIn();
      correct++;
      i = 0;
      count = 0;
      return 1;
    }
    else {
      $('#fresponse').empty();
      $('#fresponse').prepend("Sorry! The correct answer is "+a+".");
      $('#false').delay(500).fadeIn();
      $('#false').delay(500).fadeOut();
      $('#box').delay(1500).fadeIn();
      $('#cbox').delay(1500).fadeIn();
      count = 0;
      i = 0;
      return 0;
    }
  }
  else {
    if(x == a) {
      $('#correct').delay(500).fadeIn();
      $('#correct').delay(500).fadeOut();
      count = 0;
      i = 0;
      return 1;
    }
    else{
      $('#fresponse').empty();
      $('#fresponse').prepend("Sorry! The correct answer is "+a+".");
      $('#false').delay(500).fadeIn();
      $('#false').delay(500).fadeOut();
      count = 0;
      i = 0;
      return 0;
    }
  }
}

var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

var count = 0;
var response = 0;
var cresponse = 0;
var i = 0;
var ad = 0;
var question = 1;
$(document).keypress(function (e) {
  if(e.keyCode == 32) {
    i = i + 1;
    ad = ad + 1;
    count = count + 1;
    if(i == 9) {i = 0;}
    if(ad == 21) {ad = 0;}
    if(count == 24) {count = 0;}
    $('#count').html(i);
    $('#adcount').html(ad);
    $('#ccount').html(count);
  }
  if(e.keyCode != 32) {
    $('#shape').empty();
    $('#shape').css("display","none");
    $('.col-sm-1').empty();

    if(ad == adans) {
      $('#additionnumbers').fadeOut();
      $('#adcorrect').delay(500).fadeIn();
      $('#adcorrect').delay(1000).fadeOut();
      $('#additionnumbers').delay(2000).fadeIn();
      adans = mathProblem();
      ad = 0;
      $('#adcount').html(ad);
    }
    else {
      $('#adf').empty();
      $('#adf').append("False... the answer is: "+adans);
      $('#additionnumbers').fadeOut();
      $('#adfalse').delay(500).fadeIn();
      $('#adfalse').delay(1000).fadeOut();
      $('#additionnumbers').delay(2000).fadeIn();
      adans = mathProblem();
      ad = 0;
      $('#adcount').html(ad);
    }

    if(question == 1) {
      question++;

      //Checking to see if we're on cornershapes.php to perform appropriate action
      if(sPage == "cornershapes.php") {
        $('#box').fadeOut();
        response = checkAnswer(i, 4);
        if(response) {
          $('#col1').append("<ol><li>Square: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col1').append("<ol><li>Square: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        $('#shape').prepend("<img src="+"'"+"http://www.kidsmathgamesonline.com/images/pictures/shapes/triangle.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");
        $('#shape').delay(1950).fadeIn();
        $('#count').html(i);
      }
      else if(sPage == "countingshapes.php") {
        $('#cbox').fadeOut();
        response = checkAnswer(count, 20);
        if(response) {
          $('#col1').append("<ol><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col1').append("<ol><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        for(loop = 5 ; loop < 9 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"https://www.collinsdictionary.com/images/thumb/parallelogram_312346814_250.jpg"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
        for(loop = 17 ; loop < 21 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"https://www.collinsdictionary.com/images/thumb/parallelogram_312346814_250.jpg"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
        $('#ccount').html(count);
      }

    }
    else if(question == 2) {
      question++;

      //Checking to see if we're on cornershapes.php to perform appropriate action
      if(sPage == "cornershapes.php") {
        $('#box').fadeOut();
        response = checkAnswer(i, 3);
        if(response) {
          $('#col1').append("<ol start="+"'"+"2"+"'"+"><li>Triangle: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col1').append("<ol start="+"'"+"2"+"'"+"><li>Triangle: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        $('#shape').prepend("<img src="+"'"+"http://www.kidsmathgamesonline.com/images/pictures/shapes/pentagon.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");
        $('#shape').delay(1950).fadeIn();
        $('#count').html(i);
      }
      else if(sPage == "countingshapes.php") {
        $('#cbox').fadeOut();
        response = checkAnswer(count, 8);
        if(response) {
          $('#col1').append("<ol start="+"'"+"2"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col1').append("<ol start="+"'"+"2"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        for(loop = 6 ; loop < 8 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"http://cmuems.com/2015b/wp-content/uploads/2015/10/rgb-triangle.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
        $('#count-shape19').prepend("<img src="+"'"+"http://cmuems.com/2015b/wp-content/uploads/2015/10/rgb-triangle.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        $('#ccount').html(count);
      }
    }
    else if(question == 3) {
      question++;

      //Checking to see if we're on cornershapes.php to perform appropriate action
      if(sPage == "cornershapes.php") {
        $('#box').fadeOut();
        response = checkAnswer(i, 5);
        if(response) {
          $('#col1').append("<ol start="+"'"+"3"+"'"+"><li>Pentagon: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col1').append("<ol start="+"'"+"3"+"'"+"><li>Pentagon: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        $('#shape').prepend("<img src="+"'"+"http://www.kidsmathgamesonline.com/images/pictures/shapes/hexagon.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");
        $('#shape').delay(1950).fadeIn();
        $('#count').html(i);
      }
      else if(sPage == "countingshapes.php") {
        $('#cbox').fadeOut();
        response = checkAnswer(count, 3);
        if(response) {
          $('#col1').append("<ol start="+"'"+"3"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col1').append("<ol start="+"'"+"3"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        for(loop = 4 ; loop < 10 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"http://exchangedownloads.smarttech.com/public/content/3d/3daa12f5-8f14-4761-9097-a462583d46d0/previews/medium/0001.png"+"'"+" style="+"'"+"width:70px;height:70px;"+"'"+">");
        }
        $('#ccount').html(count);
      }
    }
    else if(question == 4) {
      question++;
      
      if(sPage == "cornershapes.php") {
        $('#box').fadeOut();
        response = checkAnswer(i, 6);
        if(response) {
          $('#col2').append("<ol start="+"'"+"4"+"'"+"><li>Hexagon: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col2').append("<ol start="+"'"+"4"+"'"+"><li>Hexagon: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        $('#shape').prepend("<img src="+"'"+"http://www.clipartkid.com/images/734/large-trapezoid-for-pattern-block-set-clipart-etc-xh7hHP-clipart.gif"+"'"+" style="+"'"+"width:500px;height:218px;"+"'"+">");
        $('#shape').delay(1950).fadeIn();
        $('#count').html(i);
      }
      else if(sPage == "countingshapes.php") {
        $('#cbox').fadeOut();
        response = checkAnswer(count, 6);
        if(response) {
          $('#col1').append("<ol start="+"'"+"4"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col1').append("<ol start="+"'"+"4"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        for(loop = 5 ; loop < 9 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"http://mrjoyce.co.uk/Year4/2D_Shape_games_files/shapes_pentagonPurple.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
        for(loop = 17 ; loop < 20 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"http://mrjoyce.co.uk/Year4/2D_Shape_games_files/shapes_pentagonPurple.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
        $('#ccount').html(count);
      }
    }
    else if(question == 5) {
      question++;
      
      if(sPage == "cornershapes.php") {
        $('#box').fadeOut();
        response = checkAnswer(i, 4);
        if(response) {
          $('#col2').append("<ol start="+"'"+"5"+"'"+"><li>Trapezoid: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col2').append("<ol start="+"'"+"5"+"'"+"><li>Trapezoid: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        $('#shape').prepend("<img src="+"'"+"http://etc.usf.edu/clipart/64400/64454/64454_p-gram_o_lg.gif"+"'"+" style="+"'"+"width:550px;height:184px;"+"'"+">");
        $('#shape').delay(1950).fadeIn();
        $('#count').html(i);
      }
      else if(sPage == "countingshapes.php") {
        $('#cbox').fadeOut();
        response = checkAnswer(count, 7);
        if(response) {
          $('#col1').append("<ol start="+"'"+"5"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col1').append("<ol start="+"'"+"5"+"'"+"><li>TFalse... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        $('#count-shape6').prepend("<img src="+"'"+"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Green_square.svg/480px-Green_square.svg.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        $('#count-shape19').prepend("<img src="+"'"+"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Green_square.svg/480px-Green_square.svg.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        $('#ccount').html(count);
      }
    }
    else if(question == 6) {
      question++;
      
      if(sPage == "cornershapes.php") {
        $('#box').fadeOut();
        response = checkAnswer(i, 4);
        if(response) {
          $('#col2').append("<ol start="+"'"+"6"+"'"+"><li>Parallelogram: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col2').append("<ol start="+"'"+"6"+"'"+"><li>Parallelogram: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        $('#shape').prepend("<img src="+"'"+"https://image.freepik.com/free-icon/diamond-shape-ios-7-interface-symbol_318-39084.jpg"+"'"+" style="+"'"+"width:300px;height:300px;"+"'"+">");
        $('#shape').delay(1950).fadeIn();
        $('#count').html(i);
      }
      else if(sPage == "countingshapes.php"){
        $('#cbox').fadeOut();
        response = checkAnswer(count, 2);
        if(response) {
          $('#col1').append("<ol start="+"'"+"6"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col1').append("<ol start="+"'"+"6"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        for(loop = 2 ; loop < 12 ; loop++) {
          $('#count-shape'+loop).prepend("<img src="+"'"+"http://www.clipartkid.com/images/259/pink-diamond-clip-art-6w4WYg-clipart.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        }
        $('#count-shape14').prepend("<img src="+"'"+"http://www.clipartkid.com/images/259/pink-diamond-clip-art-6w4WYg-clipart.png"+"'"+" style="+"'"+"width:50px;height:50px;"+"'"+">");
        $('#ccount').html(count);
      }
    }
    else if(question == 7) {

      if(sPage =="cornershapes.php") {
        $('#box').fadeOut();
        response = checkAnswer(i,4);
        if(response) {
          $('#col3').append("<ol start="+"'"+"7"+"'"+"><li>Diamond: Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col3').append("<ol start="+"'"+"7"+"'"+"><li>Diamond: False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        var percent = correct/7 * 100;
        $('#progess').prepend("<div class="+"'"+"progress-bar progress-bar-success"+"'"+" role="+"'"+"progressbar"+"'"+" aria-valuenow="+"'"+percent+"'"+" aria-valuemin="+"'"+"0"+"'"+" aria-valuemax="+"'"+"100"+"'"+" style="+"'"+"width:"+percent+"%></div>")
        $('#canswers').prepend("You got "+correct+" correct out of 7!");
        $('#cornersreg').fadeOut();
        $('#cornersanswers').delay(500).fadeIn();
      }
      else if(sPage == "countingshapes.php") {
        $('#cbox').fadeOut();
        response = checkAnswer(count, 2);
        if(response) {
          $('#col1').append("<ol start="+"'"+"7"+"'"+"><li>Correct! <span class="+"'"+"glyphicon glyphicon-ok"+"'"+" style="+"'"+"color:green"+"'"+"></span></li></ol>");
        }
        else {
          $('#col1').append("<ol start="+"'"+"7"+"'"+"><li>False... <span class="+"'"+"glyphicon glyphicon-remove"+"'"+" style="+"'"+"color:red"+"'"+"></span></li></ol>");
        }
        var percent = correct/7 * 100;
        $('#progess').prepend("<div class="+"'"+"progress-bar progress-bar-success"+"'"+" role="+"'"+"progressbar"+"'"+" aria-valuenow="+"'"+percent+"'"+" aria-valuemin="+"'"+"0"+"'"+" aria-valuemax="+"'"+"100"+"'"+" style="+"'"+"width:"+percent+"%></div>")
        $('#canswers').prepend("You got "+correct+" correct out of 7!");
        $('#cornersreg').fadeOut();
        $('#cornersanswers').delay(500).fadeIn();
      }
    }
    i = 0;
    count = 0;
  }
});
