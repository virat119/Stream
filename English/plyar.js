
function goFullScreen() {
      const videoPlayer = document.getElementById('videoPlayer');
      if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
      } else if (videoPlayer.webkitRequestFullscreen) { /* Safari */
        videoPlayer.webkitRequestFullscreen();
      } else if (videoPlayer.msRequestFullscreen) { /* IE11 */
        videoPlayer.msRequestFullscreen();
      }
}
