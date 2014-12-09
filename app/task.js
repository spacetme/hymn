
import $ from 'jquery'

export default function task(name, promise) {
  let el = $(`<div class="task">
                <div class="task--progress-container">
                  <div class="task--progress" style="width: 0%"></div>
                </div>
                <div class="task--text"></div>
              </div>`).appendTo('#progress')
  el.find('.task--text').html(name)
  promise.then(function() {
    el.find('.task--progress').width('100%')
    setTimeout(function() {
      el.remove()
    }, 100)
  })
  return promise
}
