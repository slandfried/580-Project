<?php
include 'core/init.php';
?>
<html>
	<head>
	<?php
	include 'phpinclude/head.php';
	?>
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
		if(Users::isLoggedIn()){
			include 'phpinclude/contentloggedin.php';
		}else{
			include 'phpinclude/contentnotloggedin.php';
		}
		?>

	</body>
	
</html>