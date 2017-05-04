<?php
include 'core/init.php';
?>
<html>
	<?php
	include 'phpinclude/head.php';
	?>
	<script type="text/javascript" src="../core/jsfunctions/wordscores.js"></script>
	<title>Words Progress</title>
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
    					<center><h1 class="progressletters" id="pro1">Word Activity Progress</h1></center>
    					<center><h5 id="pro2">Below are the results of the activies to test your understanding of word recognition and spelling.</h5></center>
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
	    				<div class="col-sm-3"><center><div class="progressnum" >Spelling</div></center></div>
	    				<div class="col-sm-1"></div>
	    				<div class="col-sm-2"><center><div class="progressnum" id="spellerrors"></div></center></div>
	    				<div class="col-sm-1"></div>
	    				<div class="col-sm-4"><center><div class="progressnum" id="spellcorrect"></div></center></div>
	    				<div class="col-sm-12 progresssep"> </div>
	    				<div class="col-sm-3"><center><div class="progressnum" >Rhyming</div></center></div>
	    				<div class="col-sm-1"></div>
	    				<div class="col-sm-2"><center><div class="progressnum" id="rhymeerrors"></div></center></div>
	    				<div class="col-sm-1"></div>
	    				<div class="col-sm-4"><center><div class="progressnum" id="rcorrect"></div></center></div>
	    			</div>
	    			<br>
	    			<div class="row">
	    				
	    			</div>
	    		</div>
    		</div>
    	</div>
	</body>
	
</html>