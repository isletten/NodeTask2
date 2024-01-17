import chalk from "chalk";

const joke = "jeg pleier å be ungene om å stille seg i hjørnet om de klager på at det er kaldt. Er jo 90 grader der.";

const words = joke.split (" ");

let coloredJoke = "";

for (let i = 0; i <words.length; i++) {
    //choose a color for each word
    const color = chalk.rgb(GetRandomColor(), GetRandomColor(), GetRandomColor());

    //add the color to the word
    coloredJoke += color(words[i]) + " ";
}

console.log (coloredJoke);

//function that generates a random color component
function GetRandomColor(){
    return Math.floor(math.random() * 256);
}