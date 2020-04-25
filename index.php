<?php
session_start();
if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
	$uri = 'https://';
} else {
	$uri = 'http://';
}
$uri .= $_SERVER['HTTP_HOST'];
include 'backend/common.php';
if (isset($_SESSION["login"])) {
	$role = (int) $_SESSION["role"];
	$page = '';
	switch ($role) {
		case Roles::Admin:
			$page = "adminIndex.html";
			break;
		case Roles::Head:
			$page = "";
			break;
		case Roles::Quality:
			$page = "";
			break;
		case Roles::Faculty:
			$page = "index.html";
			break;
	}
	header('Location: ' . $uri . '/gp2/' . $page . '');
	exit;
} else {
	header('Location: ' . $uri . '/gp2/login.html');
	exit;
}

?>
Something is wrong with the XAMPP installation :-(