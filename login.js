const DisplayLogin = {

	showLoggedInUser(){    

		const logedInUserObject = JSON.parse(sessionStorage.getItem("logedInUser"));

		if (logedInUserObject !== null) {

			const previousLoggedInUser = document.getElementById('loggedInUser')

			//Checks if the id:loggedInUser exist, if so, only the text is replaced to display correct user.
			if (previousLoggedInUser) {
				const emailSpan = document.getElementById('loggedInUser');
				emailSpan.textContent = logedInUserObject.email;

			// Else creates the elements and appends them with the now logged in user.
			} else {
				const header = document.getElementById('header');
				const emailSpan = document.createElement('h1');
				emailSpan.setAttribute('style', 'float: left; padding: 12px; font-size: 1.2em');
				emailSpan.setAttribute('id', 'loggedInUser');
				emailSpan.textContent = logedInUserObject.email;
				header.prepend(emailSpan);
			}
		}
	},

	//	Handles the loginform, once submitted.
	handleLogin(e){     

		//  Stops the form from submiting(reloding page).
		e.preventDefault();         
		
		//  Gets the users from Jsonplaceholder.
		const xhr = new XMLHttpRequest();
		xhr.open('get','https://jsonplaceholder.typicode.com/users', true);

		//	When the response is loaded it is parsed and validated.
		xhr.addEventListener("load", () => {
			const emailInput = document.getElementById('emailInputField').value; 
			const passwordInput = document.getElementById('passwordInputForm').value;
			const users = JSON.parse(xhr.response);                    

			// If a matching user is found (from JP) that matches the values in the inputfields, that user is returned.
			const validUser = users.find(function (user){               
					return user.email === emailInput && passwordInput === user.address.suite; 
			});

			//  If the the login was successful then validUser now contins the "validuserobject" from JP and the user gets "logged in".
			if(validUser){                                              
				sessionStorage.setItem('logedInUser', JSON.stringify(validUser));
				const modal = document.getElementsByClassName('modal')[0];
				modal.parentElement.removeChild(modal);
				this.showLoggedInUser();     
			} 

			// If the loggin was not sucessfull the email is tested.
			if(!validUser){ 

				// Checks if the user exists. If so "findIndex" returns something else than -1. 
				const wrongPassword = users.findIndex(function(user){   
					return user.email === emailInput;
				});

				//  Runs if the password was wrong(the user was found and "-1" was not returned).
				if(wrongPassword !== -1 ){                              
					const errMSG = document.getElementById('errorMessageSpanPassword');
					const passwordInput = document.getElementById('passwordInputForm');
					const errInvalidUser = document.getElementById('invalidUser');
					errInvalidUser.textContent = '';
					errMSG.innerText = 'Password is incorrect';
					passwordInput.setAttribute('style', 'border: 2px solid red');
				} 

				//	Else runs if the user was not found.
				else {                                               
					this.notExistingUser();
				}
			}
		});

		xhr.send();  
	},

	//	Validates every email "input".
	liveEmailCheck(){
		const errMSG = document.getElementById('errorMessageSpanUsername');
		const emailInput = document.getElementById('emailInputField');
		errMSG.innerText = '';
		emailInput.setAttribute('style', 'border: 2px solid grey');
		if (!emailInput.value.includes('@')){
			errMSG.innerText = 'Email must have a: @';
			emailInput.setAttribute('style', 'border: 2px solid red');
		}
	},

	//	Validates every password "input".
	livePasswordCheck(){
		const errMSG = document.getElementById('errorMessageSpanPassword');
		const passwordInput = document.getElementById('passwordInputForm');
		errMSG.innerText = '';

		//	Checks the inputfield for a non letter/ non number charachter.
		const passwordRegex = /\W/g;
		const containsRegex = passwordInput.value.match(passwordRegex);
		if(!containsRegex) {
			errMSG.innerText = 'Password needs contain character';
			passwordInput.setAttribute('style', 'border: 2px solid red');
		}

		passwordInput.setAttribute('style', 'border: 2px solid grey');

		if (passwordInput.value.length <=2 ){
			errMSG.innerText = 'Password needs to be longar than two charachters';
			passwordInput.setAttribute('style', 'border: 2px solid red');
		}
	},
	notExistingUser(){
			const errMSGOne = document.getElementById('errorMessageSpanUsername');
			const emailInput = document.getElementById('emailInputField');
			errMSGOne.innerText = '';
			emailInput.setAttribute('style', 'border: 2px solid grey');
			
			const errMSGTwo = document.getElementById('errorMessageSpanPassword');
			const passwordInput = document.getElementById('passwordInputForm');
			errMSGTwo.innerText = '';
			passwordInput.setAttribute('style', 'border: 2px solid grey');
	
			const errInvalidUser = document.getElementById('invalidUser');
			errInvalidUser.textContent = 'Invalid User, you do not exist :,(';
	}   

}

//	Class for initializing the login elements and functionality.
class Login {
	constructor(){
		this.initLogin();
	}
	initLogin(){
		
		//  Creates the modals.
		const loginModal = document.createElement('div');
		loginModal.setAttribute('class', 'modal');
		document.body.appendChild(loginModal);

		const loginModalContent = document.createElement('div');
		loginModalContent.setAttribute('class', 'modalContent');
		loginModalContent.setAttribute('style', 'min-height: 300px');
		loginModal.appendChild(loginModalContent);
		
		// Creates the form for the login modal and adds listeners.
		const loginInputForm = document.createElement('form');
		loginInputForm.id = 'usernameInputForm';
		loginInputForm.addEventListener('submit', (e) =>{
			DisplayLogin.handleLogin(e);
		});
		loginModalContent.appendChild(loginInputForm);

		const errorMessageSpanUsername = document.createElement('span');
		errorMessageSpanUsername.setAttribute('class', 'errorMSGAboveInput')
		errorMessageSpanUsername.id = 'errorMessageSpanUsername';
		loginInputForm.appendChild(errorMessageSpanUsername);

		const emailInputField = document.createElement('input');
		emailInputField.id = 'emailInputField';
		emailInputField.setAttribute('placeholder', 'Email...')
		emailInputField.setAttribute('type', 'text', 'name', 'email');
		emailInputField.addEventListener('input', () =>{
			DisplayLogin.liveEmailCheck();
		});      
		loginInputForm.appendChild(emailInputField);
	
		const errorMessageSpanPassword = document.createElement('span');
		errorMessageSpanPassword.setAttribute('class', 'errorMSGAboveInput')
		errorMessageSpanPassword.id = 'errorMessageSpanPassword';
		loginInputForm.appendChild(errorMessageSpanPassword);

		const password = document.createElement('input');
		password.id = 'passwordInputForm';
		password.setAttribute('placeholder', 'Password...')
		password.setAttribute('type', 'password', 'name', 'password');
		password.addEventListener('input', () =>{
			DisplayLogin.livePasswordCheck();
		});          
		loginInputForm.appendChild(password);

		const submitLoginFormBTN = document.createElement('button');
		submitLoginFormBTN.id = 'submitLoginFormBTN';
		submitLoginFormBTN.textContent = 'Login';
		loginInputForm.appendChild(submitLoginFormBTN);

		const errMSG = document.createElement('p');
		errMSG.id ='invalidUser';
		loginModalContent.appendChild(errMSG);
	}
}
