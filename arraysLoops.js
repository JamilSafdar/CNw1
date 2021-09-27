// let faveSongs = ["bad", "billy jean", "black and white"];

// console.log(faveSongs);

// faveSongs.unshift("thriller", "beat it");
// console.log(faveSongs.pop());


// Activity 1 
let favFilms = [
    "ET",
    "Home Alone",
    "IT",
    "Up",
    "Scream"
]
favFilms.push("Jaws", "Mask");
console.log(favFilms);

for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
    
}

// Activity 2
for (let i = 0; i < 6; i++) {
    console.log(Math.floor(Math.random()*50));  
}

// Activity 3
for (let i = 0; i < 10; i++) {
    console.log (i);  
}

console.log("reverse")
for (let i = 9; i >= 0; i--) {
    console.log (i);  
}

// Activity 4 
let films = [
    "IT",
    "AT",
    "Ghostbusters",
    "NOT",
]
for (let i = 0; i < 1; i++) {
    if( films[2]=="Ghostbusters"){
        console.log("Classic")
    }else{
        console.log("We want Ghostbusters, the original one!")
    } 
}

// Activity 5

for (let i = 0; i < 6; i++) {
    let num = (Math.floor(Math.random()*30));
    if (num % 7 == 0){
        console.log(`${num} is divisible by 7`)
    }else{
        console.log(`${num} is not divisible by 7`)
    }

}

// Activity 6

let myFollowers = [
    "Andy",
    "Woody",
    "Buzz",
    "Slinky"
]
let yourFollowers = [
    "Simba",
    "Narla",
    "Timone",
    "Pumba"
]
for (let i = 0; i < myFollowers.length; i++) {
    for (let j = 0; j < yourFollowers.length; j++) {
        if(myFollowers[i]==yourFollowers[j] ){
            console.log(myFollowers[i], yourFollowers[j])
        }
    }
    
}