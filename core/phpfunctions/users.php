<?php 

	class Users{

		public static function user_exists($username){

			$conn = db_connect();
			$username = sanitize($conn, $username);

			//query database here to test for username
			$q = "SELECT id FROM Users WHERE username = '$username'";

			$result = $conn->query($q);

			if ($result->num_rows > 0) {
				return true;
			}else{
				return false;
			}
		}

		public static function loginUser($username, $password){

			$conn = db_connect();
			$id = 
			$username = sanitize($conn, $username);
			$password = sanitize($conn, $password);

			//query database here to test for the correct username and password, if the username and password are correct, return the User's ID in the database to be used as the Session ID.
			$q = "SELECT id FROM Users WHERE username = '$username' AND password = '$password'";

			$result = $conn->query($q);
			$row = $result->fetch_assoc();

			if ($result->num_rows > 0) {
				
				return $row['id'];

			}else{
				return false;
			}
		}
		
		public static function isLoggedIn(){
			if ($_SESSION['user_id'] !== null){
				return true;
			}else{
				return false;
			}
		}
	}

?>
