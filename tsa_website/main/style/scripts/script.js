

if (document.body.classList.contains("profile_body")){ // ONLY run this script on the PROFILE page!!!

	const usernameInput = document.getElementById("username");
	const usernameStep = document.getElementById("username_step");
	const avatarStep = document.getElementById("avatar_step");

	const continueButton = document.getElementById("continue_button");
	const backButton = document.getElementById("back_button");
	const createProfileButton = document.getElementById("create_profile");

	const usernameError = document.getElementById("username_error");
	const avatarError = document.getElementById("avatar_error");
	const avatarWelcome = document.getElementById("avatar_welcome");

	const avatarOptions = document.querySelectorAll(".avatar_option");
	let playerUsername = "";
	let selectedAvatar = null;


	//Check if the username input is valid before proceeding to the avatar selection step
	//If the username is empty, display an error message and focus the input field
	//If the username is valid, store it in the playerUsername variable and show the avatar selection step
	continueButton.addEventListener("click", function(){
		const username = usernameInput.value.trim();

		if (username.length < 3){
    		usernameError.textContent = "Your username must be at least 3 characters long!";
    		usernameInput.focus();
    		return;
		}
		usernameError.textContent = "";
		playerUsername = username;
	
		avatarWelcome.textContent = "Nice to meet you, " + playerUsername + "! Now it's time to pick an avatar!";
	
		usernameStep.classList.remove("active"); //Hides username and shows avatar selection
		avatarStep.classList.add("active");
	});

	//CLEAR USERNAME ERROR WHILE TYPING
	usernameInput.addEventListener("input", function(){
		usernameError.textContent = "";
	});

//AVATAR SELECTION
	avatarOptions.forEach(function(avatar){
		avatar.addEventListener("click", function(){

			avatarOptions.forEach(function(option){
				option.classList.remove("selected");
				option.setAttribute("aria-pressed", "false");
			});

			avatar.classList.add("selected");
			avatar.setAttribute("aria-pressed", "true");
			selectedAvatar = avatar.dataset.avatar;
			avatarError.textContent = "";
		});
	});

	//RETURN TO USERNAME SCREEN
	backButton.addEventListener("click", function(){
		avatarStep.classList.remove("active");
		usernameStep.classList.add("active");
	});

//CREATE PROFILE!!
	createProfileButton.addEventListener("click", function(){
		if(selectedAvatar === null){
			avatarError.textContent = "Please choose an avatar!";
			return;
		}

		const player = {
			username: playerUsername,
			avatar: selectedAvatar,
			theme: selectedAvatar,
			xp: 0,
			coins: 0,
			level: 1,
			badges: [],
			completedLessons: [],

			//Not yet added!!!!!!!!!!!
			unlockedAvatars: [selectedAvatar],
			unlockedThemes: [selectedAvatar]
		};
		localStorage.setItem("player", JSON.stringify(player));
		window.location.href = "index.html";
	});
}

/*if(avatarOptions.length > 0){
	
	avatarOptions.forEach(function(avatar){
		avatar.addEventListener("click", function(){

			avatarOptions.forEach(function(option){
				option.classList.remove("selected");
			});

			avatar.classList.add("selected");
			selectedAvatar = avatar.dataset.avatar;
		});
	});
}

if(createProfileButton){
	createProfileButton.addEventListener("click", function(){

		const username = usernameInput.value.trim();

		if(username === ""){
			alert("Please enter a username.");
			return;
		}
		if(selectedAvatar === null){
			alert("Please select an avatar.");
			return;
		}

		const player = {
			username: username,
			avatar: selectedAvatar,
			theme: selectedAvatar,
			xp: 0,
			coins: 0,
			level: 1,
			badges: [],
			completedLessons: []
		}

		localStorage.setItem("player", JSON.stringify(player));
		window.location.href = "index.html";
	});
}*/