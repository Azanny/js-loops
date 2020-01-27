//random string
let generatedString="",
    newLetter,
    letters=/[a-z]/i,
    randomIndex;

while(generatedString.length<25){
    newLetter=String.fromCharCode(Math.floor(Math.random()*57+66));
    if(!newLetter.match(letters)) 
        continue;
    else if(newLetter==="E"||newLetter==="w") 
        break;
    else 
        generatedString+=newLetter;
}

console.log(generatedString);
randomIndex=Math.floor(Math.random()*(generatedString.length+1))
console.log(`Symbol at ${randomIndex} position is ${generatedString.charAt(randomIndex)}`);

if(generatedString.length<5){
    console.log(generatedString.repeat(4));
}
else{
    console.log(generatedString.substring(4));
}


//factorial
let factorial=1,
    counter=12;
while(counter){
    factorial*=counter;
    counter--;
}
console.log("12!="+factorial);

//triangles
let triangleString="";
for (let i=0;i<5;i++){
    triangleString+="#";
    console.log(triangleString);
}

let space=" ",
    sharp="#",
    spaceCount=5;
while(spaceCount){
    spaceCount--;
    if(!spaceCount) console.log(sharp.repeat(5));
    else console.log(space.repeat(spaceCount-1),sharp.repeat(5-spaceCount));
}