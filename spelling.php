<?php
include 'core/init.php';
?>
<html>
	<?php
	include 'phpinclude/head.php';
	?>

	<link  href="http://fonts.googleapis.com/css?family=Cabin:400,500,600,bold" rel="stylesheet" type="text/css" >

    <link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" >
	<title>Spelling</title>
	</head>

	<body id="spellingbody">
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
		<div id="spellinghomediv">
    		<div class="container">
    			<div class="row spellreg">
    					<center><h1 class="spellletters" class="q">How do you spell _____?</h1>
    						<h5 class="inst">Press the SPACE bar or LEFT arrow to select the correct letter.</h5>
    						<h5 class="inst">Press the RIGHT arrow or ENTER to submit letter and advance to the next word once you have selected all the correct letters for the current word.</h5></center>
    			</div>
                <div class="row spellreg">
                <div id="spellwrapper">
                    <div class="col-sm-12"><center><div id="spelling"></div></center></div>
                    <div class="col-sm-12">
                        <div><center><h3 class="spellletters">Spell word below</h3></center></div>
                    </div>
                    </div>
    			</div>
                <div class="row spellheight">
                    <div id="spellletterwrapper">
                        <div class="col-sm-3"></div>
                        <div class="col-sm-1 spellword" id="spell_back1"><center><div id="spell1"></div></center></div>
                        <div class="col-sm-1 spellword" id="spell_back2"><center><div id="spell2"></div></center></div>
                        <div class="col-sm-1 spellword" id="spell_back3"><center><div id="spell3"></div></center></div>
                        <div class="col-sm-1 spellword" id="spell_back4"><center><div id="spell4"></div></center></div>
                        <div class="col-sm-1 spellword" id="spell_back5"><center><div id="spell5"></div></center></div>
                        <div class="col-sm-1 spellword" id="spell_back6"><center><div id="spell6"></div></center></div>
                        <div class="col-sm-3"></div>
                    </div>
                    <div id="spellcorrectwrapper">
                        <div class="col-sm-3"></div>
                        <div class="col-sm-1 cspellword" id="c_back1"><center><div id="cspell1"></div></center></div>
                        <div class="col-sm-1 cspellword" id="c_back2"><center><div id="cspell2"></div></center></div>
                        <div class="col-sm-1 cspellword" id="c_back3"><center><div id="cspell3"></div></center></div>
                        <div class="col-sm-1 cspellword" id="c_back4"><center><div id="cspell4"></div></center></div>
                        <div class="col-sm-1 cspellword" id="c_back5"><center><div id="cspell5"></div></center></div>
                        <div class="col-sm-1 cspellword" id="c_back6"><center><div id="cspell6"></div></center></div>
                        <div class="col-sm-3"></div>
                    </div>
                    <div id="spellfalsewrapper">
                        <div class="col-sm-3"></div>
                        <div class="col-sm-1 fspellword" id="f_back1"><center><div id="fspell1"></div></center></div>
                        <div class="col-sm-1 fspellword" id="f_back2"><center><div id="fspell2"></div></center></div>
                        <div class="col-sm-1 fspellword" id="f_back3"><center><div id="fspell3"></div></center></div>
                        <div class="col-sm-1 fspellword" id="f_back4"><center><div id="fspell4"></div></center></div>
                        <div class="col-sm-1 fspellword" id="f_back5"><center><div id="fspell5"></div></center></div>
                        <div class="col-sm-1 fspellword" id="f_back6"><center><div id="fspell6"></div></center></div>
                        <div class="col-sm-3"></div>
                    </div>
                </div>
    		<div id="spellanswers">
    			<div class="row">
    				<center><h1 class="spellletters">Here are your results!</h1></center>
    			</div>
    			<br>
    			<br>
    			<br>
    			<div class="row">
    				<center><h3 id="sanswers"></h3></center>
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