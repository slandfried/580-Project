<?php
include 'core/init.php';
?>
<html>
	<?php
	include 'phpinclude/head.php';
	?>
	<title>Progress</title>
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
		<!--End br tags-->

		<!-- Start Page Content -->
		<div id="progresshomediv">
    		<div class="container">
    			<br>
    			<br>
    			<div class="row">
    				<div class = "col-sm-4"></div>
    				<div class = "col-sm-4">
    					<center><p class="progressletters">Progress</p></center>
    				</div>
    				<div class = "col-sm-4"></div>
    			</div>
    			<div class="row">	
    				<div class = "col-sm-3">
    					<center>
    						<!-- <a href="introshapes.php">Shapes</a> -->
    						<div class="card act_card" style="width: 20rem;">
  							<div class="card-block">
    							<h4 class="card-title" id="shpt">Shapes</h4>
    							<br>
    							<a href="shapesprogress.php" class="btn btn-default">Go!</a>
    							<br>
    							<br>
    							<br>
  							</div>
							</div>
    					</center>
    				</div>
    				<div class = "col-sm-3">
    					<center>
    						<!-- <a href="introaddition.php">Addition</a> -->
    						<div class="card act_card" style="width: 20rem;">
  							<div class="card-block">
    							<h4 class="card-title" id="addt">Addition</h4>
    							<br>
    							<a href="additionprogress.php" class="btn btn-default">Go!</a>
    							<br>
    							<br>
    							<br>
  							</div>
  							</div>
    					</center>
    				</div>
    				<div class = "col-sm-3">
    					<center>
    						<!-- <a href="introsubtraction.php">Subtraction</a> -->
    						<div class="card act_card" style="width: 20rem;">
  							<div class="card-block">
    							<h4 class="card-title" id="subt">Subtraction</h4>
    							<br>
    							<a href="subtractionprogress.php" class="btn btn-default">Go!</a>
    							<br>
    							<br>
    							<br>
  							</div>
  							</div>
    					</center>
    				</div>
    				<div class = "col-sm-3">
    					<center>
    						<!-- <a href="introsubtraction.php">Subtraction</a> -->
    						<div class="card act_card" style="width: 20rem;">
  							<div class="card-block">
    							<h4 class="card-title" id="subt">Words</h4>
    							<br>
    							<a href="wordsprogress.php" class="btn btn-default">Go!</a>
    							<br>
    							<br>
    							<br>
  							</div>
  							</div>
    					</center>
    				</div>
    			</div>
    			<div class="row">
    				<div class="col-sm-4"></div>
    				<div class="col-sm-4"></div>
    				<div class="col-sm-4"></div>
    			</div>
    		</div>
    	</div>


	</body>
	
</html>