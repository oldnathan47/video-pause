document.querySelector("#button").addEventListener("click", () => {
  document.getElementById("button").onclick = link();
});

function link() {
  window.open("http://www.spotify.com");
}
