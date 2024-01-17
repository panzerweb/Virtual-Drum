
window.addEventListener('keydown', function(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //todo Selects the audio with corresponding data-key only
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); //todo Selects key with correspondong data-key only

    if(!audio) {
        return; //todo Stops the function from running together
    };
        audio.currentTime = 0; //todo Allows you to repeatedly play the same keys
        audio.play(); // todo Plays the keys
        key.classList.add('playing'); //todo Adds the styling properties of .playing class from the CSS File

});


function removeTransition(event){ // todo Function for removing Transition and the styling properties, returning everything to normal
    if(event.propertyName !== 'transform'){ //todo Skips if it is not a transform.
        return;
    }
    this.classList.remove('playing');// todo Removes the styling properties of .playing class from the CSS File
}

const keys = document.querySelectorAll('.key'); //todo Selects all key element
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //todo Loops through entire element to attach an event listener
                                                                            // todo adds the event Transitionend and the function removeTransition.

