<?php
include 'core/init.php';
?>
<html>
	<?php
	include 'phpinclude/head.php';
	?>
	<title>Title Goes Here</title>
	</head>

	<body class="introbody">
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
    					<center><h1 class="shapesletters" id="sl1">Welcome to Subtraction!</h1></center>
    					<center><h5 class="shapesletters">Below are some activies to test your understanding of subtraction.</h5></center>
    			</div>
    			<br>
    			<div class="row">
    				<center><a href="subtraction.php" class="btn btn-default"><span>Simple Subtraction</span></a></center>
    			</div>
    		</div>
    	</div>
	</body>
	
</html>