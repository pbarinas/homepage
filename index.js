

	// Add header content
	root.insert.header();
	// Add menu content
	root.insert.menu(1);
	// Add logon on header
	root.index.login.loginContent();	
	// Add link quickLinks dropdown
	root.tool.dropdownWithValues('Link');


	let text = `

				 <h3> Let's Code! </h3>

				 <p>
				   Want to code sites and games?  Here you can learn to add...
				 </p>

				   
					  
					  <button onclick='document.getElementById("dataOutput").innerHTML = root.index.apear(1)'> Words </button> 
				   
					  
					  <button onclick='document.getElementById("dataOutput").innerHTML = root.index.apear(3);'> Pics </button> 
					 
					   
					  <button onclick='document.getElementById("dataOutput").innerHTML = root.index.apear(2);'> Inputs </button> 

					   
					  <button id="colorButton"> Colors </button> 
					 
					   
					  <button onclick='document.getElementById("dataOutput").innerHTML = root.index.apear(4);'> Vids </button>
				   
				 <p>
				   to your HTML and more!  If you are one of my students, log in above and if you're interested, <a href="page.html?id=contact">contact</a> me for info.
				 </p>


				`;

	document.getElementById('body').innerHTML = text;

	/*
	 
		Note that to avoid that changeStyle() is wrapped inside an anonymous function; otherwise, 
		the function will fire immediately without waiting for the even to take place.
		Therefore, must place changeStyle() inside an anonymous function so that the function is called
		rather than invoked.

		Another option is to use .bind but I don't know how the heck that works.  Seems complicated.

		Details on this work around are found here:
		https://stackoverflow.com/questions/35667267/addeventlistenerclick-firing-immediately

	*/
	document.getElementById("colorButton").addEventListener("mouseover", function(){root.tool.changeStyle(1)});					
	document.getElementById("colorButton").addEventListener("mouseout", function(){root.tool.changeStyle(2)});	