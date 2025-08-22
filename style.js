let name = prompt("Enter your name:");

let age = prompt("Enter your age:");

function checkAge(a){
if (a >=18){
return "You can drive";
} else {
    return "You're too young to drive";
}
}

let message = checkAge(age);

alert("Hello "  + name + "," + message);
