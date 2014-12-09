
import yaml from "js-yaml"

export function loadFile(url, responseType='arraybuffer') {
  return new Promise(function(resolve, reject) {
    let xh = new XMLHttpRequest()
    xh.open('GET', url, true)
    xh.onload = function() {
      resolve(xh.response)
    }
    xh.onerror = function() {
      reject(new Error(`Error: ${xh.status}`))
    }
    xh.responseType = responseType
    xh.send()
  })
}

export function loadYaml(url) {
  return loadFile(url, 'text').then(function(text) {
    return yaml.safeLoad(text)
  })
}
