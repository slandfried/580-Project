<?php
include 'core/init.php';
?>
<html>
	<?php
	include 'phpinclude/head.php';
	?>

	<link  href="http://fonts.googleapis.com/css?family=Cabin:400,500,600,bold" rel="stylesheet" type="text/css" >

    <link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" >
	<title>Title Goes Here</title>
	</head>

	<body>
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
		<br>
		<br>
		<br>
		<!--End br tags-->

		<!-- Start Page Content -->
		<div id="shapeshomediv">
    		<div class="container">
    			<div id="cornersreg">
    			<div class="row">
    					<center><h1 class="shapesletters" class="q">How many corners (vertices) does this shape have?</h1>
    						<h5 class="inst">Press the SPACE bar or LEFT arrow to select the correct number.</h5>
    						<h5 class="inst">Press the RIGHT arrow or ENTER to submit answer and advance to next problem.</h5></center>
    			</div>
    			<br>
    			<br>
    			<br>
    			<div class="row">
    				<div class="col-sm-6"><center><div id="shape"></div></center></div>
    				<div class="col-sm-6">
    					<div id = "wrapper"><center><h3 class="shapesletters" id="sl2">Number of Corners</h3></center><center>
    						<div id="box"><br><div id="count">0</div><br></div>
    						<div id = "correct"><h1>Correct!</h1></div>
    						<div id = "false"><h3 id="fresponse"></h3></div>
    					</center></div>
    			</div>
    		</div>
    		</div>
    		<div id="cornersanswers">
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