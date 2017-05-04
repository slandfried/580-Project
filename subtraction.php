<?php
include 'core/init.php';
?>
<html>
	<?php
	include 'phpinclude/head.php';
	?>

	<link  href="http://fonts.googleapis.com/css?family=Cabin:400,500,600,bold" rel="stylesheet" type="text/css" >

    <link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" >
	<title>Subtraction</title>
	</head>

	<body id="subtractionbody">
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
		<div id="subtractionhomediv">
    		<div class="container">
    			<div id="subtractionreg">
    			<div class="row">
    					<center><h3 class="subtractionletters" class="q">What is the answer to this subtraction problem?</h3>
    						<h6 style="color:white" class="inst">Press the SPACE bar or LEFT arrow to select the correct number.</h6>
    						<h6 style="color:white" class="inst">Press the RIGHT arrow or ENTER to submit answer and advance to the next problem.</h6></center>
    			</div>
    			<br>
    			<br>
    			<br>
    			<div class="row">
                    <div class="subtractionletters" id="subtractionnumbers">    
    					<div class="col-xs-2"></div>
                        <div class="col-xs-1"></div>
                        <div class="col-xs-1 subprob" id="subcol4"></div>
                        <div class="col-xs-1 subprob" id="subcol5"><center>-</center></div>
                        <div class="col-xs-1 subprob" id="subcol6"></div>
                        <div class="col-xs-1 subprob" id="subcol7"><center>=</center></div>
                        <div class="col-xs-2 subsol" id="subcol8"><center><div id="subcount">0</div></center></div>
                        <div class="col-xs-1" id="subcol9"></div>
                        <div class="col-xs-2"></div>
                    </div>
                    <div class="subtractionletters" id="subcorrect">    
                        <div class="col-xs-2"></div>
                        <div class="col-xs-1"></div>
                        <div class="col-xs-1" id="subcol4"></div>
                        <div class="col-xs-4" id="subc">You are correct!</div>
                        <div class="col-xs-2" id="subcol9"></div>
                        <div class="col-xs-2"></div>
                    </div>
                    <div class="subtractionletters" id="subfalse">    
                        <div class="col-xs-2"></div>
                        <div class="col-xs-1"></div>
                        <div class="col-xs-1" id="subcol4"></div>
                        <div class="col-xs-4" id="subf"></div>
                        <div class="col-xs-2" id="subcol9"></div>
                        <div class="col-xs-2"></div>
                    </div>
    		</div>
            </div>
    		<div id="subtractionanswers">
    			<div class="row">
    				<center><h1 class="subtractionletters">Here are your results!</h1></center>
    			</div>
    			<br>
    			<br>
    			<br>
    			<div class="row">
    				<center><h3 id="subanswers"></h3></center>
    			</div>
    			<br>
    			<br>
    			<div class="row">
    				<div class="col-sm-4" id="subcol1"></div>
    				<div class="col-sm-4" id="subcol2"></div>
    				<div class="col-sm-4" id="subcol3"></div>
    			</div>
    			<div class="row">
    					<div id="adprogress">
    					</div>
    			</div>
    	</div>
    	</div>


	</body>
	
</html>