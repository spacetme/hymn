
export default function run(promise) {
  promise.catch(function(e) {
    console.error('Runtime error occured!', e.toString())
    console.error(e.stack || e)
    setTimeout(function() {
      throw e
    }, 0)
  })
}
