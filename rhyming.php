<?php
include 'core/init.php';
?>
<html>
	<?php
	include 'phpinclude/head.php';
	?>

	<link  href="http://fonts.googleapis.com/css?family=Cabin:400,500,600,bold" rel="stylesheet" type="text/css" >

    <link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" >
	<title>Rhyming</title>
	</head>

	<body id="rhymingbody">
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
		<div id="rhyminghomediv">
    		<div class="container">
    			<div id="rhymereg">
        			<div class="row">
        					<center><h1 class="rhymeletters" class="q">What rhymes with _____?</h1>
        						<h5 class="inst">Press the SPACE bar or LEFT arrow to select the correct word.</h5>
        						<h5 class="inst">Press the RIGHT arrow or ENTER to submit answer and advance to the next problem.</h5></center>
        			</div>
                    <div class="row">
                    <div id="rhymewrapper">
                        <div class="col-sm-12"><center><div id="rhyming">CAT</div></center></div>
                        <div class="col-sm-12">
                            <div><center><h3 class="rhymeletters">Choose word below</h3></center></div>
                        </div>
                    </div>
        			</div>
                    <br>
                    <div class="row">
                        <div id="rhymewrapper2">
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhyme1">SLAP</div></center></div>
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhyme2">HAD</div></center></div>
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhyme3">RAT</div></center></div>
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhyme4">MAP</div></center></div>
                        </div>
                        <div id="rhymecorrect">
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhymec1">SLAP</div></center></div>
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhymec2">HAD</div></center></div>
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhymec3">RAT</div></center></div>
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhymec4">MAP</div></center></div>
                        </div>
                        <div id="rhymefalse">
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhymef1">SLAP</div></center></div>
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhymef2">HAD</div></center></div>
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhymef3">RAT</div></center></div>
                            <div class="col-sm-3 rhyme_c"><center><div class="rhyme_w" id="rhymef4">MAP</div></center></div>
                        </div>
                    </div>
    	        </div>
                <div id="rhymeanswers">
                    <div class="row">
                        <center><h1 class="rhymeletters">Here are your results!</h1></center>
                    </div>
                    <br>
                    <br>
                    <br>
                    <div class="row">
                        <center><h3 id="ranswers"></h3></center>
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
        </div>
	</body>
	
</html>