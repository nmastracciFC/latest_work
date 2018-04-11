<?php
// require_once("admin/scripts/connect.php");
require_once("admin/scripts/config.php");

if (isset($_POST['name'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$street = $_POST['street'];
	$direct = "thankyou.php";
	
	if($street === ""){
		$sendMail = submitMessage($name, $email, $message, $direct);
		$querysert = "INSERT INTO visitors (visitors_name, visitors_email, visitors_message) VALUES ($name, $email, $message)";
		$postit = $link->query($querysert);
		echo $name;
	echo $email;
	echo $message;
	
	} 
}

?> 

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name=”description” content=”Portfolio of Web Designer Natalie Mastracci“>
	<title>Natalie Mastracci</title>
	<link href="https://fonts.googleapis.com/css?family=Parisienne|Tangerine:400,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Reem+Kufi" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script|Quicksand" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="prod/css/styles.css">

	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
</head>

<body>
	<h1 class="hidden">title</h1>
	<div id="container">
		<!-- <div class="initial"></div> -->
		<nav>
			<img id="logo" src="images/logo-g.png" alt="Natalie's Logo">
			<div class="social">
				<a href="https://www.instagram.com/nmastracci/" target="_blank" rel="noopener"><img class="instagram" src="images/social-instagram.png" alt="instagram logo"></a>	
				
				<a href="https://twitter.com/NMastracci" target="_blank" rel="noopener"><img class="twitter" src="images/social-twitter.png" alt="twitter logo"></a>
				<a href="https://www.linkedin.com/in/natalie-mastracci-b8772257/" target="_blank" rel="noopener"><img class="linkedIn" src="images/social-linkedin.png" alt="linkedIn logo" ></a>
			</div>
		<ul class="main-nav">
				
				<li><a id="navToPort" href="#portfolio">PORTFOLIO</a></li>
				<li><a id="navToForm" href="#form">CONTACT</a></li>
			</ul>


		</nav> 

		

		<header  id="headerBack">

 			<div id="heading">
 				<h1 >Natalie Mastracci</h1>
 				<h3>After spending nine years facing backward in a boat it’s time to look forward.</h3>
				<h4 id="to-portfolio">Go to <strong>Portfolio &gt;</strong></h4>
				<h4 id="to-contact" >Keep <strong>in Touch  &gt;</strong></h4>
			</div>
			<img id="eight" src="images/eight-nowhite.png" alt="eight rowing">

			<div id="sub-head">
				
				<!-- <h2>Designer &amp; Developer</h2> -->
				<h2>Web Developer</h2>
				<h3>I believe efficiency, functionality and beauty are created equal but above all else make something great.</h3>
				<h4>Areas of study: procedural and OOP PHP, mySQL database architecture, MVC frameworks (ex. Laravel, codeigniter), core Javascipt and popular JS libraries (such as greensock, D3.js and three.js), responsive web design with media queries (as well as foundation and bootstrap), cinema4D and the adobe creative cloud suite.</h4>
				<!-- <ul>
					Areas of study: 
					<li>procedural and OOP PHP,</li>
					<li>mySQL database architecture,</li>
					<li>MVC frameworks (Laravel, codeigniter),</li>
					<li>core Javascipt and popular JS libraries (greensock, D3.js and three.js),</li>
					<li>responsive web design with media queries (as well as foundation and bootstrap),</li>
					<li>cinema4D and the adobe creative cloud suite.</li>    
				</ul> -->
	
			</div>
		</header>

		


		<section id="portfolio">
			<h2 class="hidden">Portfolio</h2>
			
			<h1 class="pTitle">PORTFOLIO</h1>
			<div id="portfolio-menu">
				<h2 id="design" style="color: rgb(85, 85, 85);">Design</h2>
				<h2 id="development" style="">Development</h2>
				<h2 id="artwork" style="">Artwork</h2>
			</div>


		<section class="i-love-lightboxes">
			<span class="close-box">X</span>
			<img class="this-looks-great" src="images/reactr-team.jpg" alt="portfolio image">
			<p class="lightbox-desc"></p>
		</section>



		<section id="development-page" style="display: none;">
			<h2 class="hidden">Development page</h2>
			<div class="center">
			<!-- CARDS BEGIN -->
			<div class="card">
				<img class="data-ref" src="images/logo_hrd-white.png" alt="HR Downloads">
				<h3>Back End Dev</h3>
				<p>Working on a team of three to create the Time and Attendance module that will fit into HRDownload's greater product. This app will use laravel--with eloquent models and migrations--as well as vue.js components.</p>
				<p>The module is being created for multiple users with different levels of access to features. Managers will be able to create, set and assign schedules and Employees will be able to see their schedule and request time off. Daily scrum, weekly sprints and frequent code review will see that this product is complete in early April</p>
				<span class="to-box" id="8">SEE THE TEAM</span>
			</div>

			<div class="card">
				<h1 class="summerLEDC">#discoverldnont</h1>
				<h3>Back End Dev</h3>
				<p>In three weeks, without prior knowledge of php or MVC, our team of two delivered this mobile-first web app for the LEDC's treasure hunt contest. Through client meetings, our team settled on Code Igniter and core PHP with a mySQL database for the back-end. The front-end uses foundation to create the responsive environment.</p>
				<p>Students who registered their team on the app, recieved an email to sign in to their team's checklist and begin completing tasks. The committee who determined the winner could see each team's progress in real time from their dashboard.</p>
				<a href="http://www.reactr.ca/scavenger/index.php/welcome" target="_blank" rel="noopener">SEE FULL SITE</a>
			</div>

			<div class="card">
				<h1 class="summerLEDC">Parallax Exercise</h1>
				<h3>Front End Dev</h3>
				<p>A study in the illusion of depth. A multi-layered scene was created in Adobe Illustrator. The different layers were exported as SVGs and absolutely positioned over one another. Then each picture's speed of scroll was altered to move at different individual percentages of the window's pageYOffset.</p>
				<a href="parallax/index.html" target="_blank" rel="noopener">SEE FULL SITE</a>
			</div>

			

				<div class="card">
				<img class="data-ref" src="images/logo_parker-white.svg" alt="Parker Clothing Logo">
				<h3>Front End Dev</h3>
				<p>With javascript turned off in the browser this site still works seamlessly.  Developed purely with HTML and CSS this website serves as a tribute to CSS3 transitions. Illustrator and Photoshop were used to create all graphic content.</p>
				<a href="parker/index.html" target="_blank" rel="noopener">SEE FULL SITE</a>
			</div>

			<div class="card">
				<img  src="images/logo_zou-bw.svg" alt="Zou Lipstick Logo">
				<h3>Back End Dev</h3>
				<p>Built a secure CMS that allows resellers of this lipstick company to login as  admin add subscribers and view their updated inventory. Written with php using a relational mySQL database.</p>
				<!-- <a href="parker/index.html" target="_blank" rel="noopener">SEE FULL SITE</a> -->
			</div>

			<div class="card">
				
				<h1 class=" chattr">chattr</h1>
				<h3>Front End Dev</h3>
				<p>A chat app that allows multiple users to log in and talk to one another. Users can see when others log on, log off, and are able to choose their own screen names. Built asyncronously with Express and chat.io API so that users may enjoy real-time messaging.</p>
				<!-- <a href="parker/index.html" target="_blank" rel="noopener">SEE FULL SITE</a> -->
			</div>
			
			<!-- <div class="card">
				<img class="data-ref" src="images/logo_lotr.png" alt="Lord of the Rings Logo">
				<h3>Front End Dev</h3>
				<p>This project is an excersize in front-end development. It utilizes a combination of vanilla javascript and the greensock library to animate items as well as sass to make style development more efficient.</p>
				<a href="file:///Users/alexandra/Desktop/mastracci_natalie_portfolio-q/lotr/index.html" target="_blank">SEE FULL SITE</a>
			</div> -->

			
			</div>

		</section>

		<section id="design-page" style="display: block;">
			<h2 class="hidden">Design page</h2>

			<div class="portGrid">
				<div class="scrollingSide">
					<div class="greyBack small-block">
						<img src="images/ee_poster1-sm.jpg" alt="Eric Ethridge poster">
					</div>
					<div class="greyBack small-block">
						<img src="images/ee_merchHat-sm.jpg" alt="Eric Ethridge Merchandise">
					</div>
					<div class="greyBack small-block">
						<img src="images/ee_merchShirt-sm.jpg" alt="Eric Ethridge Merchandise">
					</div>
				</div>

				<div class="staticSide">
					<div class="greyBack large-block">
						<div class="info">
						<h4>Eric Ethridge</h4>
						<h5>Musician: Festival Posters and Merch</h5>
						<p>Full branding was developed for this client: a country singer with a dark modern edge. He required font choices, colours, posters and merchandise mock-ups.  A combination of Adobe Photoshop, Illustrator and hand drawn images were used to craft this Client's work.</p>
					</div>
					</div>
				</div>
				
	
			</div>

			<div class="portGrid">

				<div class="staticSide">
					<div class="greyBack large-block">
						<div class="info">
						<h4>Team BETA WATCH OUT</h4>
						<h5>Fundraising Posters for JDRF One Walk</h5>
						<p>This client required posters to advertise their fundraising events for the JDRF One Walk. They requested the posters be catchy, fun and aligned with the JDRF One Walk colour scheme. Adobe Illustrator was used to create the text layout while which was then brought in to Photoshop as a smart object to create the additional surrounding graphics</p>
					</div>
					</div>
				</div>


				<div class="scrollingSide">
					<div class="greyBack small-block">
						<img src="images/tlm_poster1-sm.jpg" alt="Teresa's poster">
					</div>
					<div class="greyBack small-block">
						<img src="images/tlm_poster2-sm.jpg" alt="Teresa's poster">
					</div>
					
				</div>

			</div>



			<div class="portGrid">
				<div class="scrollingSide">
					<div class="greyBack small-block">
						<img src="images/ww_tomato-sm.jpg" alt="Tomato Soup Label">
					</div>
					<div class="greyBack small-block">
						<img src="images/ww_carrot-sm.jpg" alt="Carrot Soup Label">
					</div>
				</div>

				<div class="staticSide">
					<div class="greyBack large-block">
						<div class="info">
						<h4>WICH IS WICH</h4>
						<h5>Restaurant: Retail Labels</h5>
						<p>This client required two soup labels to launch their retail line of soups. They requested clean, minimalist, high-contrast design to continue their current branding. The entirety of the label was created as a vector image in Adobe Illustrator.</p>
					</div>
					</div>
				</div>
				
	
			</div>

			

		</section>

		<section id="artwork-page" style="display: none;">
			<h2 class="hidden">artwork page</h2>
			<svg id="rect1" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
				<rect width="400" height="200" fill="#cccccc"></rect>
			</svg>
			<div id="walking"></div>
			<img id="name1" class="backwhite" src="images/n_logo-backwhite.png" alt="n logo">
			<div id="ashley"></div>
			<svg id="rect2" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
				<rect x="700" width="400" height="200" fill="#cccccc"></rect>
			</svg>
			<div id="christine"></div>
			<img id="name2" class="backwhite" src="images/m_logo-backwhite.png" alt="letter m">
			<div id="purpleDress"></div>
			<svg id="rect3" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
				<rect x="500" width="300" height="700" fill="#cccccc"></rect>
			</svg>
			<div id="profile"></div>
			<img id="name3" class="backwhite" src="images/n_logo-backwhite.png" alt="n logo">
			<div id="greenDress"></div>
			<img id="name4" class="backwhite" src="images/m_logo-backwhite.png" alt="letter m">

		
		</section>
		</section>



		<!-- CONTACT -->

		<section class="contact-box" id="form">
			<h1 class="hidden">Let's Keep In Touch</h1>
			<h1 class="title ">Let's Keep In Touch</h1>
			<!-- like what you see? -->
			<p class=" description" >Why not fill out the form below and say hello?</p>
			<form  action="admin/scripts/insert.php" method="POST">
				<label class="contact-label" for="name">name</label>
				<input class="form-mat" type="text"  id="name" name="name">

				<label class="contact-label" for="email">email</label>
				<input class="form-mat" type="email"  id="email" name="email">

				<label for="street" class="hidden">Street: </label>
				<input class="street hidden" name="street" type="text" size="21" maxlength="30" />

				<label class="contact-label" for="message">message</label>
				<textarea class="form-mat"   id="message" name="message"></textarea>
				<button type="submit"  id="sendbutton">SUBMIT</button>         
                
			</form>
		</section>

		

		
		<footer>
			<ul class="footer-nav">
				<!-- <li><a href="index.html">HOME</a></li> -->
				<li><a id="navToPort2" href="#portfolio">PORTFOLIO</a></li>
				<li><a id="navToForm2" href="#form">CONTACT</a></li>
			</ul>
			<h6 class="cright">© Natalie Mastracci 2017</h6>
				<a href="infographic/index.html" target="_blank" rel="noopener"><img class="instagram" src="images/social-instagram.png" alt="instagram logo"></a>	
				
				<a href="tulips/index.php" target="_blank" rel="noopener"><img class="twitter" src="images/social-twitter.png" alt="twitter logo"></a>
				<a href="https://www.linkedin.com/in/natalie-mastracci-b8772257/" target="_blank" rel="noopener"><img class="linkedIn" src="images/social-linkedin.png" alt="linkedIn logo"></a>
				
		</footer>
	</div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenLite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TimelineLite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/plugins/CSSPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/plugins/ScrollToPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/easing/EasePack.min.js"></script>

<script type="text/javascript" src="prod/js/scripts.js"></script>

</body></html>