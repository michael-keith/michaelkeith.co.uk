function set_vid_height() {
  let vid_width = document.getElementById('banner_video').offsetWidth
  let vid_height = vid_width/(16/9)
  document.getElementById("banner_video").style.height = vid_height + "px"
}

(() => {
  set_vid_height()
})()

window.onresize = set_vid_height
