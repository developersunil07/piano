const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");


let allkeys = [],
 audio = new Audio("tunes/a.wav") //by default, audio src is "a" tune

const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`; //passing audio src based on key pressed
   audio.play(); //playing audio
   console.log(allkeys);

   const clickedkey = document.querySelector(`[data-key="${key}"]`)//getting clicked key element
   clickedkey.classList.add("active");//adding active class to the clicked key element

   setTimeout(() => { //removing active class after 150ms from the clicked key element
     clickedkey.classList.remove("active")
   },150);


}





pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key);
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
    console.log(key.dataset.key);
});


const handleVolume = (e) =>{
    audio .volume = e .target .value;//passing the range slider value as an audio volume
}

const showHidekeys = () =>{
    // toggle hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedkey = (e) =>{
    //if the pressed key is in the allkeys array,only call the playTune function
   if(allkeys.includes(e.key))playTune(e.key);
}

keysCheckbox.addEventListener("click", showHidekeys)
volumeSlider.addEventListener("input",handleVolume)
document.addEventListener("keydown",pressedkey)