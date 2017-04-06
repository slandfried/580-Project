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

	<body id="additionbody">
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
		<div id="additionhomediv">
    		<div class="container">
    			<div id="additionreg">
    			<div class="row">
    					<center><h3 class="additionletters">What is the answer to this addition problem?</h3>
    						<h6 style="color:white">Press the SPACE bar to select the correct number.</h6>
    						<h6 style="color:white">Press any other key to submit answer and advance to next problem.</h6></center>
    			</div>
    			<br>
    			<br>
    			<br>
    			<div class="row">
                    <div class="additionletters" id="additionnumbers">    
    					<div class="col-xs-2"></div>
                        <div class="col-xs-1"></div>
                        <div class="col-xs-1" id="adcol4"></div>
                        <div class="col-xs-1" id="adcol5"><center>+</center></div>
                        <div class="col-xs-1" id="adcol6"></div>
                        <div class="col-xs-1" id="adcol7"><center>=</center></div>
                        <div class="col-xs-2" id="adcol8"><center><div id="adcount">0</div></center></div>
                        <div class="col-xs-1" id="adcol9"></div>
                        <div class="col-xs-2"></div>
                    </div>
                    <div class="additionletters" id="adcorrect">    
                        <div class="col-xs-2"></div>
                        <div class="col-xs-1"></div>
                        <div class="col-xs-1" id="adcol4"></div>
                        <div class="col-xs-4" id="adc">You are correct!</div>
                        <div class="col-xs-2" id="adcol9"></div>
                        <div class="col-xs-2"></div>
                    </div>
                    <div class="additionletters" id="adfalse">    
                        <div class="col-xs-2"></div>
                        <div class="col-xs-1"></div>
                        <div class="col-xs-1" id="adcol4"></div>
                        <div class="col-xs-4" id="adf"></div>
                        <div class="col-xs-2" id="adcol9"></div>
                        <div class="col-xs-2"></div>
                    </div>
    		</div>
    		<div id="additionanswers">
    			<div class="row">
    				<center><h1 class="additionletters">Here are your results!</h1></center>
    			</div>
    			<br>
    			<br>
    			<br>
    			<div class="row">
    				<center><h3 id="adanswers"></h3></center>
    			</div>
    			<br>
    			<br>
    			<div class="row">
    				<div class="col-sm-4" id="adcol1"></div>
    				<div class="col-sm-4" id="adcol2"></div>
    				<div class="col-sm-4" id="adcol3"></div>
    			</div>
    			<div class="row">
    					<div id="adprogress">
    					</div>
    			</div>
    	</div>
    	</div>


	</body>
	
</html>