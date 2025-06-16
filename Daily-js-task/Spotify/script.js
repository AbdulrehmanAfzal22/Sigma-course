async function getsongs() {
    let a = await fetch("http://127.0.0.1:5500/Daily-js-task/Spotify/songs/");
    let response = await a.text();
    console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    console.log(as);

    let songs = [];
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/").pop());  
        }
    }
    return songs;
}

async function main() {
    let songs = await getsongs();
    console.log(songs);

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (let song of songs) {
        songUL.innerHTML += `<li>${song.replaceAll("%20", " ")}</li>`;
    }

    const audio = new Audio("/Daily-js-task/Spotify/songs/" + songs[2]);
    audio.play();

    audio.addEventListener("timeupdate", () => {
        console.log(audio.duration, audio.currentSrc, audio.currentTime);
    });
}

main();
