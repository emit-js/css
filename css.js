/* global document */
module.exports = function(emit) {
  if (emit.css) {
    return
  }

  emit.any("css", css)
}

function css(arg) {
  var link = document.createElement("link")

  link.type = "text/css"
  link.rel = "stylesheet"
  link.href = arg.href

  document.head.appendChild(link)

  return link
}
