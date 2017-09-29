export const scrollAnimate = function (elementY, duration) {
  var startingY = window.pageYOffset
  var diff = elementY - startingY
  var start

  // Define the animation - it will get called right before next frame is rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)

    window.scrollTo(0, startingY + diff * percent)

    // Proceed with animation 
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}
