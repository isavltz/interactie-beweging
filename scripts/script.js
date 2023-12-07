console.log("Balloon Dog");

const videoElement = document.querySelector("#animation");


const icon1 = document.querySelector("#playVideoIcon1");
const icon2 = document.querySelector("#playVideoIcon2");
const icon3 = document.querySelector("#playVideoIcon3");

const videoIcon1 = document.querySelector("#playVideoIcon1 video");
const videoIcon2 = document.querySelector("#playVideoIcon2 video");
const videoIcon3 = document.querySelector("#playVideoIcon3 video");

icon1.onclick = changeSrcAnimation1;
icon2.onclick = changeSrcAnimation2;
icon3.onclick = changeSrcAnimation3;

function changeSrcAnimation1(){
    videoElement.src = "mp4/animatie-geluid-1.mp4";
    videoElement.play();
    videoIcon1.play();
}

function changeSrcAnimation2(){
    videoElement.src = "mp4/animatie-geluid-2.mp4";
    videoElement.play();
    videoIcon2.play();
}

function changeSrcAnimation3(){
    videoElement.src = "mp4/animatie-geluid-3.mp4";
    videoElement.play();
    videoIcon3.play();
}


// Icoon 1
// var playVideoIcon1 = document.getElementById('playVideoIcon1');

//         playVideoIcon1.addEventListener('click', function () {
//             playVideoIcon1.play();

//             console.log("test");
//         });

//         playVideoIcon1.addEventListener('mouseleave', function () {
//             playVideoIcon1.pause();
//             Video.currentTime = 0;
//         });



// // Icoon 2
// var playVideoIcon2 = document.getElementById('playVideoIcon2');

//         playVideoIcon2.addEventListener('click', function () {
//             playVideoIcon2.play();
//         });

//         playVideoIcon2.addEventListener('mouseleave', function () {
//             playVideoIcon2.pause();
//             Video.currentTime = 0;
//         });



// // Icoon 3
// var playVideoIcon3 = document.getElementById('playVideoIcon3');

//         playVideoIcon3.addEventListener('click', function () {
//             playVideoIcon3.play();    
//         });

//         playVideoIcon3.addEventListener('mouseleave', function () {
//             playVideoIcon3.pause();
//             Video.currentTime = 0;
//         });



// // video's
//         function playVideo(videoId) {
//             var video = document.getElementById(videoId);
//             video.style.display = 'block'; // Show the video
//             video.play(); // Start playing the video

//             // Hide other videos
//             var allVideos = document.getElementById('animation1','animation2','animation3');
//             for (var i = 0; i < allVideos.length; i++) {
//                 if (allVideos[i].id !== videoId) {
//                     allVideos[i].style.display = 'none';
//                     allVideos[i].pause(); // Pause other videos
//                 }
//             }
//         }

