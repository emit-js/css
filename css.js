/* global document */
module.exports = function(dot, opts) {
  if (dot.state.css) {
    return
  }

  dot.state.css = opts || {}
  dot.any("css", css)
}

function css(prop, arg) {
  var link = document.createElement("link")

  link.type = "text/css"
  link.rel = "stylesheet"
  link.href = arg.href

  document.head.appendChild(link)

  return link
}
