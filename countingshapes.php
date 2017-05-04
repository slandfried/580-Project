<?php
include 'core/init.php';
?>
<html>
	<?php
	include 'phpinclude/head.php';
	?>

	<link  href="http://fonts.googleapis.com/css?family=Cabin:400,500,600,bold" rel="stylesheet" type="text/css" >

    <link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" >
	<title>Counting</title>
	</head>

	<body id="countingshapesbody">
		<?php
		if(Users::isLoggedIn()){
			include 'phpinclude/navbarloggedin.php';
		}else{
			include 'phpinclude/navbar.php';
		}
		include 'modalpages/login.php';
		include 'modalpages/contact.html';
		include 'modalpages/about.html';
		?>
		<!--Start br tags to get content below navbar-->
		<br>
		<br>
		<br>
		<br>
		<!--End br tags-->

		<!-- Start Page Content -->
		<div id="countshapeshomediv">
    		<div class="container">
    			<div id="countreg">
    			<div class="row">
    					<center><h1 class="shapesletters">How many shapes do you count?</h1>
    						<h5>Press the SPACE bar or LEFT arrow to select the correct number.</h5>
    						<h5>Press the RIGHT arrow or ENTER to submit answer and advance to the next grouping.</h5></center>
    			</div>
    			<br>
                <div class="row shapecount">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6">
                        <div id = "wrapper"><center><h3 class="shapesletters">Count</h3></center><center>
                            <div id="cbox"><br><div id="ccount">0</div><br></div>
                            <div id = "correct"><h1>Correct!</h1></div>
                            <div id = "false"><h3 id="fresponse"></h3></div>
                        </center></div>
                    </div>
                    <div class="col-sm-3"></div>
                </div>
    			<br>
                <br>
                <div class="row shapecount">
                    <div class="col-sm-1" id="count-shape1"></div>
                    <div class="col-sm-1" id="count-shape2"></div>
                    <div class="col-sm-1" id="count-shape3"></div>
                    <div class="col-sm-1" id="count-shape4"></div>
                    <div class="col-sm-1" id="count-shape5"></div>
                    <div class="col-sm-1" id="count-shape6"></div>
                    <div class="col-sm-1" id="count-shape7"></div>
                    <div class="col-sm-1" id="count-shape8"></div>
                    <div class="col-sm-1" id="count-shape9"></div>
                    <div class="col-sm-1" id="count-shape10"></div>
                    <div class="col-sm-1" id="count-shape11"></div>
                    <div class="col-sm-1" id="count-shape12"></div>
                </div>
                <div class="row shapecount">
                    <div class="col-sm-1" id="count-shape13"></div>
                    <div class="col-sm-1" id="count-shape14"></div>
                    <div class="col-sm-1" id="count-shape15"></div>
                    <div class="col-sm-1" id="count-shape16"></div>
                    <div class="col-sm-1" id="count-shape17"></div>
                    <div class="col-sm-1" id="count-shape18"></div>
                    <div class="col-sm-1" id="count-shape19"></div>
                    <div class="col-sm-1" id="count-shape20"></div>
                    <div class="col-sm-1" id="count-shape21"></div>
                    <div class="col-sm-1" id="count-shape22"></div>
                    <div class="col-sm-1" id="count-shape23"></div>
                    <div class="col-sm-1" id="count-shape24"></div>
                </div>
                <br>
    			</div>
    		<div id="countanswers">
    			<div class="row">
    				<center><h1 class="shapesletters">Here are your results!</h1></center>
    			</div>
    			<br>
    			<br>
    			<br>
    			<div class="row">
    				<center><h3 id="canswers"></h3></center>
    			</div>
    			<br>
    			<br>
    			<div class="row">
    				<div class="col-sm-4" id="col1"></div>
    				<div class="col-sm-4" id="col2"></div>
    				<div class="col-sm-4" id="col3"></div>
    			</div>
    			<div class="row">
    					<div id="progress">
    					</div>
    			</div>
    	</div>
    	</div>


	</body>
	
</html>