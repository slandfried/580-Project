<?php
include 'core/init.php';
?>
<html>
	<head>
	<?php
	include 'phpinclude/head.php';
	?>
	<title>Activities For All</title>
	</head>

	<body id="indexbody">
		<?php
		if(Users::isLoggedIn()){
			if(Users::isTeacher()) {
				include 'modalpages/studentscores.html';
				include 'modalpages/studentcorrect.html';
				include 'phpinclude/teachernavbarloggedin.php';
			}
			else {
				include 'phpinclude/navbarloggedin.php';
			}
		}else{
			include 'phpinclude/navbar.php';
			include 'modalpages/signup.html';
		}
		include 'modalpages/login.php';
		include 'modalpages/contact.html';
		include 'modalpages/about.html';
		if(Users::isLoggedIn()){
			if(Users::isTeacher()) {include 'phpinclude/teachercontentloggedin.php';}
			else {include 'phpinclude/contentloggedin.php';}
		}else{
			include 'phpinclude/contentnotloggedin.php';
		}
		?>

	</body>
	
</html>