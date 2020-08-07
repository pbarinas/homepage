

	
	window.addEventListener("beforeunload", function(event) { console.log('bye bye') });
	
	// Add header content
	root.insert.header();
	
	// Add menu content
	root.insert.menu(0);

	// Fetch url id
	var url = root.tool.getURLparameter();
	
	var text;
	
	if (url == 'about') { 

				
		text = `

				<h3> About Me </h3>

				<img class="floatLeft" src="img/general/mrb.jpg">


				<p> I am a... </p>
				
				<ol>
					<li> teacher </li>
					<li> artist </li>
					<li> and web developer </li>
				</ol>
				
				<p> This site is a place where all three areas come together. </p>

				<p> 
					As a teacher my background includes middle and science education as well as special education case management 
					with an interest in teaching students to code. </p>
				</p>
				
				<p> 
					I am a self-taught web developer.  My skill sets include the basics <b> (HTML/CSS/Javascript) </b> and other common areas such as 
					<b> MySQL </b> and <b>JSON</b>. 
					I wrote this site with straight up vanilla JS from the ground up.  
					No frameworks, no templates, just mastering every little detail to gain sound understanding of the Javascript language.
				</p>
				
				<p>
					My goal is to develop as a <b> frontend-to-fullstack developer </b> that can develop 
					clean, highly legible code that provides a dynamic and self-intuititve interface.  I enjoy writing educational and training web content along 
					with data gathering forms, surveys and assessments. 
				</p>

				<p> I welcome you to visit my latest <a href="page.html?id=myprojects"> projects </a> that showcases some of my skill sets. </p>	
				
				<p> Thank you for visiting! </p>
				
				<p> <span style="text-align: right"> Pedro </span></p>
				
				
				
				`;


	} else if (url == 'contact') {
		

		text = `
				<h3> Contact </h3>
				<input type="text" id="name" name="name" placeholder="Name"> <br>
				<input type="text" id="pw" name="pw" placeholder="Email"> 
				<p> General Comments: </p>
				<textarea id="comments" name="comments" rows="4" cols="50" placeholder="Enter general comments here"> </textarea>	
				<p> <button type="button" id="contactButton" onclick=""> Send </button> </p>
				`;

	} else if (url == 'myprojects') {
		
		text = `
				<table>
					<tr>
						<td> <a href="page.html?id=registerProject1"> Project </a> </td>
						<td> <a href="register.html"> Project </a> </td>
					</tr>
					<tr>
						<td> <a href="page.html?id=registerProject1"> <img src="img/general/Project-folder-1296053v2-no1.png"> </a> </td>
						<td> <a href="register.html"> <img src="img/general/Project-folder-1296053v2-no2.png"> </a> </td><td> </td>
					</tr>
					<tr>
						<td> <a href="page.html?id=project1"> Details </a> </td>
						<td> <a href="page.html?id=project2"> Details </a> </td>
					</tr>
				</table>

				`;
					
		
	} else if (url == 'registerProject1') {
		
		// Oddly enough, it does not work if I do the id 'body' as in --- root.insert.registerContent('header'); --- who knows why
		
		text = `
				<h3> Log in to begin your lesson </h3>
				<p class="italicCaption"> Remember, this is just a demo, so create your own username and password or simply use "jdoe" and "123", respectively.)</p>

				<input type="text" id="uname" name="uname" placeholder="Username"> <br>
				<input type="password" id="pw" name="pw" placeholder="Password"> <br>							  
				<input type="password" id="pwConfirm" name="pw" placeholder="Confirm Password"> <br> 							  
				<button type="button" id="registerButton"> Register </button> 
				
				<div id="dataOutput"> </div>				
				
				`;
				
					
	} else if (url == 'project1') {
		
		text = `

				<h3> Portfolio Project #1</h3><br>
		
				<a href="page.html?id=registerProject1"> <img class="floatLeft" src="img/general/Project-folder-1296053v2-no1.png"> </a>

		
				<a href="page.html?id=registerProject1"> Project 1 </a> is a educational webpage on the food cycle.  The goal is to introduce students to the terms:
				<ul>
					<li> - hervivore </li>
					<li> - carnivore </li>
					<li> - omnivore </li>
				</ul>
		
				<p> 
					You will pretend to be a student logging in for the lesson, so just create a dummy (random) login.  
					On each page you will answer a question to test	
					your understanding of what you have learned.  You will be allowed to move onto the next page after you have chosen the right answer.
				</p>
		
				<p> 
					At the end you will get a score based on the number of questions you answered correctly on your first try.
					Your score and the time you spent on the tutorial will be compared against that of other "students" with dummy data.
				</p>
		
				<p> 
					This project showcases several features, including:
				</p>
		
		
				<ul>
				  <li> - Data Storage </li>
				  <li> - Time tracking </li>
				  <li> - Score tracking </li>
				  <li> - Data Processing </li>
				  <li> - Tabulated Reporting </li>
				</ul>
				
				<p> 
					As opposed to typical, server-side storage, I deliberately chose client-side data storage in your browser's local storage directory 
					so that you can analyze how the data gets stored and structured in realtime.
				</p>

				<!-- 
				<p> 
					You can also watch this <a href="page.html?id=uc"> video guide </a> to preview its contents.
				</p>
				-->
				
				
				<p> 
					Thank you for visiting!  Hope you enjoyed it.
				</p>
		
				`;
		
	} else if (url == 'project2') {
		
		text = `
		
				<h3> Portfolio Project #2</h3>
		
				<a href="register.html"> <img class="floatLeft" src="img/general/Project-folder-1296053v2-no2.png"> </a>

				<p> 
					<a href="register.html"> Project 2 </a> is essentially this very same website by which I teach students how to 
					code using the tried-and-true project-based approach.
					Students learns best when they can apply the theory right away, so I modeled the site to offer mini-projects through 
					which students can gradually improve their skills.
				</p>
				
				<p> 
					Register as a student.  It does not really matter what username or password you choose.  It could be as simple as 
					username: jdoe, password: 123.  Then visit the webpage to view its projects and features.
				</p>
								
				<p> 
					Thank you for visiting!  Hope you enjoyed it.
				</p>
		
				`;

	} else {
		
			text = '<img class="uc" src="img/general/uc.jpg"> </span>';
		
	}
		
	/* You don't want the line of code to run when the conditional used does NOT add a value to var text.  Otherwise, it will output 'undefined' */	
	
	if (text) {
	
		document.getElementById("body").innerHTML = text;
	
	} 
	
	
	
	/* Event listener area  (Remember that it has to be placed after the code that outputs the html to make sure that the DOM is loaded beforehand) */
			
	if (url == 'contact') {

		// Run contact() on click
		document.getElementById('contactButton').addEventListener('click', function(){ root.tool.foo()}); 			
		
			
	} else if (url == 'registerProject1') {
		
			
		/*  
			
			For some reason that I could not figure out, line --- root.insert.registerContent('body'); 	--- wouldn't work here.  I get this error:
			
				main.js:2896 Uncaught TypeError: Cannot set property 'innerHTML' of null
					at Object.register (main.js:2896)
					at HTMLButtonElement.<anonymous> (page.js:178)
				register @ main.js:2896
				(anonymous) @ page.js:178			

			It seems that the registration html from invoking registerContent() does not upload into the DOM prior to calling the event listener.
			
			Might be some hoisting issue.  For now, I will just go the redundancy route and type out the form registration html in this file.
			
		
		*/
	
		// Highlight the fields when clicked (a nice aesthetic)
		root.tool.form.highlightFormFields(0, 3);
	
		// Run register() on click
		document.getElementById('registerButton').addEventListener('click', function(){ root.index.login.register(0, 'lesson.html?id=foodweb')}); 			
	
	}