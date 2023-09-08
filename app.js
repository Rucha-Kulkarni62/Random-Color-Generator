//Random color generator function
const getColor = () =>{
//Hex Code: converion of random numbers into hexadecimal code, cause colors are in hex format
   const randomNumber = Math.floor(Math.random() * 16777215); // Generates a random no
   const randomCode = "#" + randomNumber.toString(16); //Coverts the given no into a string.16 stnad for hexadecimal code
   document.body.style.backgroundColor = randomCode;
   document.getElementById("color-code").innerText = randomCode;

//The code will be copied automatically when a user clicks on the button.
   navigator.clipboard.writeText(randomCode);
}

//Event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//Initial call. when the page is being loaded this wil be called/ This funston will be called the momentg page loads
getColor();