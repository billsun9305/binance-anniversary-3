var playButton = document.getElementById("play_button");
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (intro_video.paused == true) {
    // Play the video
    intro_video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    intro_video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});