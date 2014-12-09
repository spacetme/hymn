
export function loadFile(url) {
  return new Promise(function(resolve, reject) {
    let xh = new XMLHttpRequest()
    xh.open('GET', url, true)
    xh.onload = function() {
      resolve(xh.response)
    }
    xh.onerror = function() {
      reject(new Error(`Error: ${xh.status}`))
    }
    xh.responseType = 'arraybuffer'
    xh.send()
  })
}

