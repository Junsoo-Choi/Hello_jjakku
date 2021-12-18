
function motion(){
    run.style.animationPlayState = "running";
    hand.style.animationPlayState = "running";
    
    setTimeout(function(){
        run.style.animationPlayState = "paused";
        hand.style.animationPlayState = "paused";
    },1000)
}

function play() { 
    var audio = document.getElementById('audio_play'); 
    audio.volume = 0.2;
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
} 
