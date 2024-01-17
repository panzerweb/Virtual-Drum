
function playOnSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //todo Selects the audio with corresponding data-key only
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); //todo Selects key with correspondong data-key only

    if(!audio) {
        return; //todo Stops the function from running together
    };
        audio.currentTime = 0; //todo Allows you to repeatedly play the same keys
        audio.play(); // todo Plays the keys
        key.classList.add('playing'); //todo Adds the styling properties of .playing class from the CSS File

};
function playOnClick(){
    const dataKey = this.getAttribute('data-key'); //todo gets the attribute of data-key
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`); //todo Selects the audio with corresponding data-key only
    const key = document.querySelector(`.key[data-key="${dataKey}"]`); //todo Selects key with correspondong data-key only

    if(!audio) {
        return; //todo Stops the function from running together
    };
        audio.currentTime = 0; //todo Allows you to repeatedly play the same keys
        audio.play(); // todo Plays the keys
        key.classList.add('playing'); //todo Adds the styling properties of .playing class from the CSS File

}


function stopBeats(){ //todo Stop all beats
    const allAudioElements = document.querySelectorAll('audio');
    allAudioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    const allKeyElements = document.querySelectorAll('.key');
    allKeyElements.forEach(key => {
        key.classList.remove('playing');
    });
}


function removeTransition(event){ // todo Function for removing Transition and the styling properties, returning everything to normal
    if(event.propertyName !== 'transform'){ //todo Skips if it is not a transform.
        return;
    }
    this.classList.remove('playing');// todo Removes the styling properties of .playing class from the CSS File
}

window.addEventListener('keydown', playOnSound);


const keys = document.querySelectorAll('.key'); //todo Selects all key element
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', playOnClick);

});
//todo Loops through entire element to attach an event listener 
//todo adds the event Transitionend and the function removeTransition.

//todo Add event listener for the stop button
const stopButton = document.getElementById('stop-btn');
stopButton.addEventListener('click', stopBeats);

