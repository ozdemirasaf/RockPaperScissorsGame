// Get to DOM Elements
const gameContainer = document.querySelector(".container");
userResult = document.querySelector(".user_result img");
cpuResult = document.querySelector(".cpu_result img");
result = document.querySelector(".result");
optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "img/rock.png";
        result.textContent = "Wait.."

        // Loop through each option image again 
        optionImages.forEach((image2, index2) => {

            //If the current index doesn't match the cliked index   
            //Remove the "active" class from the other option images    
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start")

        // Set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove("start")
            // Get the source of the clicked option images
            let imageSrc = e.target.querySelector("img").src;

            // Set the user image to the clicked option image
            userResult.src = imageSrc

            // Generater a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);

            //Create an array of CPU image options
            let cpuImages = ["img/rock.png", "img/paper.png", "img/scissors.png"];
            // Set the CPU image to a random option from the array 
            cpuResult.src = cpuImages[randomNumber];

            // Assing a letter value to the CPU option (R for rock, P paper, S for scissors)
            let cpuValue = ["R", "P", "S"][randomNumber];

            // Assing a letter value to the clicked option (based on index)
            let userValue = ["R", "P", "S"][index];

            // Create an object with all possible autcomes
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",

            };

            // Look up the autcome value based on user and CPU options 
            let autComeValue = outcomes[userValue + cpuValue];

            // Display the Result 
            result.textContent = userValue === cpuValue ? "Match Draw" : `${autComeValue} Won!!`
        }, 2500)

    });
}); 1