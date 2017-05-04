<?php
include 'core/init.php';
?>
<html>
	<?php
	include 'phpinclude/head.php';
	?>
	<title>Addition Progress</title>
	</head>

	<body class="progressbody">
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
		<!--End br tags-->

		<!-- Start Page Content -->
		<div id="shapeshomediv">
    		<div class="container">
    			<div class="row">
    					<center><h1 class="progressletters" id="pro1">Addition Activity Progress</h1></center>
    					<center><h5 id="pro2">Below are the results of the activies to test your understanding of addition.</h5></center>
    			</div>
    			<br>
    			<div class="progresstable">
	    			<div class="row progressrow">
	    				<div class="col-sm-3 progressact"><center>Activity (Last Attempt)</center></div>
	    				<div class="col-sm-1"></div>
	    				<div class="col-sm-2 progressmis"><center># of Mistakes</center></div>
	    				<div class="col-sm-1"></div>
	    				<div class="col-sm-4 progressq"><center># of Questions Correct w/ No Mistakes</center></div>
	    				<div class="col-sm-12 progresssep"> </div>
	    				<div class="col-sm-3"><center><div class="progressnum" >Addition</div></center></div>
	    				<div class="col-sm-1"></div>
	    				<div class="col-sm-2"><center><div class="progressnum" id="add_errors"></div></center></div>
	    				<div class="col-sm-1"></div>
	    				<div class="col-sm-4"><center><div class="progressnum" id="add_correct"></div></center></div>

	    			</div>
	    			<br>
	    			<div class="row">
	    				
	    			</div>
	    		</div>
    		</div>
    	</div>
	</body>
	
</html>