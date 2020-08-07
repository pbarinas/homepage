	
	
	// Add header content	
	root.insert.header();
	// Add menu content
	root.insert.menu();
	// Add register form
	root.insert.registerContent('registerArea'); 

	// Added anonymous function in order to pass arguments through inputColorChange
	// Otherwise, I couldn't do it, because the addEventListener() syntax don't allow for arguments as the function gets passed as a variable.

	// Highlight the fields when clicked (a nice aesthetic)
	root.tool.form.highlightFormFields(0, 3);


	/*  I thought I could loop the above 'focus' event with a loop but it doesn't work.  It only fires the last iteration
		and if I set the length to inputTag.length ( = 3) it errors out. Go figure. 
		The closes forum on this issue I found is
		https://stackoverflow.com/questions/36946159/adding-addeventlistener-in-loop-only-works-for-last-button
		
		Must keep searching for ways to do do this with less code.  Keep googling change background input color on focus.
		I look for pages on doing this simply without loops and I find js with different syntax as seen here:
		https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
		
		Does it have to do with bubbling or capture?

	*/

	/*
		for (var i = 0; i < 2; i++) {
			
			inputTag[i].addEventListener("focus", function() {inputTag[i].style.backgroundColor = "#F2F591";});
		
		}				
					
	*/

	document.getElementById('registerButton').addEventListener('click', function(){ root.index.login.register(0, 'reference.html')}); 			
