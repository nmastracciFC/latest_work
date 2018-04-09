<?php
require_once("admin/scripts/connect.php");
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


	// include('admin/scripts/getPics.php');
	// echo $rows;
?>


<html lang="en"><head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Natalie Mastracci</title>
	<link rel="stylesheet" type="text/css" href="prod/css/styles.css">
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
</head>

<body>
	<h1 class="hidden">title</h1>
	<div id="container">
		
		<!-- <nav>
			<img id="logo" src="images/logo-g.png" alt="Natalie's Logo">
			<p id="logoText">Natalie Mastracci</p>

			<ul class="main-nav">
				<li><a href="index.html">HOME</a></li>
				<li><a href="portfolio.html">PORTFOLIO</a></li>
				<li><a href="contact.html">CONTACT</a></li>
			</ul>
		</nav>  -->

		

		<header id="headerColour">	
				<img class="linkedIn" src="images/social-linkedin.png" alt="linkedIn logo">
				<img class="twitter" src="images/social-twitter.png" alt="twitter logo">
				<img class="instagram" src="images/social-instagram.png" alt="instagram logo">
			
			<!-- <img class="stay-put" id="nLogo" src="images/nm_logo-large-grey.png" alt="Natalie's Logo"> -->
			<img class="stay-put" id="tulip1" src="images/tulip-dark-green.png" alt="tulip drawing">
			<img class="stay-put" id="tulip2" src="images/tulip-light-green.png" alt="tulip drawing">
			<img class="stay-put" id="tulip3" src="images/tulip-yellow-green.png" alt="tulip drawing">
			<img class="stay-put" id="nLogo" src="images/nm_logo-large-grey.png" alt="Natalie's Logo">

			<img class="stay-put" id="tulip4" src="images/tulip-dark-pink.png" alt="tulip drawing">
			<img class="stay-put" id="tulip5" src="images/tulip-light-pink.png" alt="tulip drawing">

			<img class="stay-put" id="tulip6" src="images/tulip-white.png" alt="tulip drawing">

			
 			<div id="heading">
 				<h1 >Natalie Mastracci</h1>
				<h4 id="to-portfolio">Go to Portfolio &gt;</h4>
				<h4 id="to-contact" >Keep in Touch  &gt;</h4>
			</div>

			<div id="sub-head">
				
				<h2>Designer &amp; Developer</h2>
				<h3>I believe efficiency, functionality and beauty are created equal but above all else make something great.</h3>
				<h4>Skills include: responsive web design, PHP, mySQL, MVC framework (ex. Laravel, codeigniter), core Javascipt and popular JS libraries (such as greensock, D3.js and three.js), cinema4D and the adobe creative cloud suite.</h4>
				
				
			</div>
		</header>


		<section id="portfolio">
			<h2 class="hidden">Portfolio</h2>
			<section>
			<h1 class="pTitle title">PORTFOLIO</h1>
			<div id="portfolio-menu">
				<h2 id="design" style="color: rgb(85, 85, 85);">Design</h2>
				<h2 id="development" style="">Development</h2>
				<h2 id="artwork" style="">Artwork</h2>
			</div>
			<svg id="underline" height="3" width="1366">
  				<line x1="100" y1="0" x2="1184" y2="0" style="stroke:#777777;stroke-width:3"></line>
			</svg>
		</section>

		

		<section id="development-page" style="display: none;">
			<h2 class="hidden">Development page</h2>

			<!-- CARDS BEGIN -->

			
			<div id="section1">
				<div class="card">
				<img class="data-ref" src="images/logo_parker-white.svg" alt="Parker Clothing Logo">
				<h3>Parker Clothing</h3>
				<p>Developed purely with HTML and CSS this website serves as a tribute to CSS3 transitions. Illustrator and Photoshop were used to create all graphic content.</p>
				<a href="" target="_blank">SEE FULL SITE</a>
			</div>
			
			<div class="card">
				<img class="data-ref" src="images/logo_lotr.png" alt="Lord of the Rings Logo">
				<h3>Lord of the Rings: The Adventure App</h3>
				<p>This project is an excersize in front-end development. It utilizes a combination of vanilla javascript and the greensock library to animate items as well as sass to make style development more efficient.</p>
				<a href="file:///Users/alexandra/Desktop/mastracci_natalie_portfolio-q/lotr/index.html" target="_blank">SEE FULL SITE</a>
			</div>

			<div class="card">
				<!-- <img src="images/logo_parker-white.svg" alt="Parker Clothing Logo"> -->
				<h1 id="summerLEDC">#discoverldnont</h1>
				<h3>LEDC Student Scavenger Hunt</h3>
				<p>As the back-end developer, our team this site used foundation for responsive, mobile-first-application. Code Igniter and core PHP on the server were used with a mySQL database.</p>
				<a href="http://www.reactr.ca/scavenger/index.php/welcome" target="_blank">SEE FULL SITE</a>
			</div>
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
						<p>Full branding was asked of this chient. He needed font choices, colours, posters and merchandise. A combination of Adobe Photoshop, Illustrator and hand drawn images were used to craft this Client's work.</p>
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
						<p>This client required posters to advertise their fundraising events for the JDRF One Walk. Adobe Illustrator was used to create the text layout while which was then brought in to Photoshop as a smart object to create the additional surrounding graphics</p>
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
						<p>This client required two soup labels to launch their retail line of soups. The entirety of the label was created as a vector image in Adobe Illustrator.</p>
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



		<!-- CONTACT SECTION -->

		<section class="contact-box" id="form">
			<h1 class="title ">Let's Keep In Touch</h1>
			<!-- like what you see? -->
			<p class=" description" >Why not fill out the form below and say hello?</p>
			<form id="cform" action="admin/scripts/insert.php" method="POST">
				<label class="contact-label" for="name">name</label>
				<input class="form-mat" type="text"  id="name" name="name">

				<label class="contact-label" for="email">email</label>
				<input class="form-mat" type="email"  id="email" name="email">

				<label for="street" class="hidden">Street: </label>
				<input class="street hidden" name="street" type="text" size="21" maxlength="30" />

				<label class="contact-label" for="message">message</label>
				<textarea class="form-mat" type="text"  id="message" name="message"></textarea>
				<button type="submit"  id="sendbutton">SUBMIT</button>         
                
			</form>
		</section>

		

		
		<footer>
			<ul class="footer-nav">
				<li><a href="index.html">HOME</a></li>
				<li><a href="portfolio.html">PORTFOLIO</a></li>
				<li><a href="contact.html">CONTACT</a></li>
			</ul>
			<h6 class="cright">© Natalie Mastracci 2017</h6>	
		</footer>
	</div>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/plugins/CSSPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/easing/EasePack.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenLite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/plugins/ScrollToPlugin.min.js"></script>
<!--build:js js/main.min.js -->
<!-- <script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/portfolio.js"></script>
<script type="text/javascript" src="js/headerColour.js"></script>
<script type="text/javascript" src="js/scrollNav.js"></script> -->
<!-- endbuild -->
<script type="text/javascript" src="prod/js/scripts.js"></script>

</body></html>