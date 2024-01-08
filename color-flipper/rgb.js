const colors = ["green", "red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random number between 0-3
    //const randomNumber = 2;
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    var RGB_values=[0,0,0];
    for(let i =0;i<3;i++){
    
    RGB_values[i]= getRandomNumber();
    console.log(RGB_values);
    }

    const output_RGB = "rgba("+RGB_values[0]+','+RGB_values[1]+','+RGB_values[2]+')';


    document.body.style.backgroundColor= output_RGB;
    color.textContent = output_RGB;
});

function getRandomNumber(){
    return Math.floor(Math.random()*255);
}

