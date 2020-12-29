/**Funcion para ejecutar los iconos de tipo lottie y controlar su velocidad de reproduccion */
function lottieImage(id, path, loop, speed, autoplay) {
  if (autoplay == false) {
    document.getElementById('animation').addEventListener('mouseover', function () {
      lottie.play();
    });
    document.getElementById('animation').addEventListener('mouseout', function () {
      lottie.stop();
    });
  }
  lottie.loadAnimation({
    container: document.getElementById(id), // the dom element that will contain the animation
    renderer: 'svg',
    loop: loop,
    autoplay: autoplay,
    path: path // the path to the animation json
  });
  lottie.setSpeed(speed);
}