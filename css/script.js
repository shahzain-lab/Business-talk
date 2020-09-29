const play= document.getElementById("play");
const music= document.querySelector("audio");

let isPlaying =false;

        let playMusic= () => {
            isPlaying = true;
            music.play();
            play.classList.replace('fa-play',"fa-pause");
            // img.classList.add("animate");
        };
        // pause
        const pauseMusic =() => {
            isPlaying = false;
            music.pause();
            play.classList.replace("fa-pause","fa-play");
            // img.classList.remove("animate");
        };
        play.addEventListener('click',() => {
            // if(isPlaying) {
            //     pauseMusic();
            // }else{
            //     playMusic();
            // }
            isPlaying ?  pauseMusic() : playMusic();
        });
