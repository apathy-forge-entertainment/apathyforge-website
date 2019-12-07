<?php
	//contains functions that have common information between slides

	function getMetaData()
	{
		echo '
		<meta charset="UTF-8">
	  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	  	<link rel="stylesheet" href="styles.css">
		';
	}

	function getNavBar()
	{
		echo '
		<ul>
	    	<li><a href="default.php">Home</a></li>
	        <li><a href="projects.php">Projects</a></li>
	        <li><a href="aboutus.php">About Us</a></li>
	        <li><a href="contactus.php">Contact Us</a></li>
		</ul>>
		';
	}

	function getFooter()
	{
		echo '
		<footer>
			Apathyforge Entertainment
		</footer>
		';
	}