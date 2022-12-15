const synth = window.speechSynthesis;

let voices = [];


let story = new SpeechSynthesisUtterance(document.querySelector('#text-for-reader').innerHTML);

story.volume = 0.5;
story.lang = 'en';
story.rate = 1;
story.pitch = 1;

setTimeout(() => {
    voices = speechSynthesis.getVoices();
    story.voice = voices[0];
    console.log(story.voice = voices[0]);
}, 1000);

let button = document.querySelector('#play-button');

let play = true;

let start = true;

function readStory(htmlObject) {
    if (play && start) //Kicks off the voice if we're at the start
    {
    play = false;
    start = false;
    console.log(story);
    speechSynthesis.cancel();
    synth.speak(story);

    }

    else if (play) // Picks up from where we left off
    {
    play = false;
    synth.resume();
    }
    else 
    {
    play = true;
    synth.pause();
    }

};

function buttonClicked(e) {

    e.preventDefault();

    if (play) {
        button.innerHTML = "Pause ⏸";
    }

    else {
        button.innerHTML = "Play ▶";
    }
    readStory(story);



}

button.addEventListener("mousedown", buttonClicked, false);





