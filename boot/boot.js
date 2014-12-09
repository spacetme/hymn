
;(function() {

  var tasks = [
    script("https://google.github.io/traceur-compiler/bin/traceur-runtime.js"),
    moduleLoader,
    script("https://jspm.io/system@0.9.js"),
    script("config.js"),
    function(callback) {
      System.import(document.documentElement.dataset.app).catch(function(e) {
        console.error(e.stack || e)
      })
    }
  ]

  performTasks(tasks)

  function parallel(list) {
    return function(callback) {
      var remaining = list.length
      list.forEach(function(task) {
        task(function(error) {
          if (error) return callback(error)
          remaining -= 1
          if (remaining === 0) callback()
        })
      })
    }
  }

  function serial(list) {
    return function(callback) {
      perform(0)
      function perform(index) {
        if (index < list.length) {
          list[index](function(error) {
            if (error) return callback(error)
            perform(index + 1)
          })
        } else {
          callback()
        }
      }
    }
  }

  function script(src) {
    return function(callback) {
      loadScript(src, callback)
    }
  }

  function loadScript(src, callback) {
    var script = document.createElement('script')
    script.src = src
    script.onload = function() {
      callback()
    }
    script.onerror = function() {
      callback()
    }
    document.body.appendChild(script)
  }

  function performTasks(taskList) {
    serial(taskList)(function(error) {
      if (error) throw error
    })
  }

  function moduleLoader(callback) {
    if (typeof Promise != 'undefined') {
      loadScript("vendor/es6-module-loader/es6-module-loader-sans-promises.js", callback)
    } else {
      loadScript("vendor/es6-module-loader/es6-module-loader.js", callback)
    }
  }

})()

