import React from "react"
import LyricsView from "./views/lyrics"

export function display(data) {
  React.render(React.createElement(LyricsView, { data: data }),
    document.querySelector('#lyrics'))
}
