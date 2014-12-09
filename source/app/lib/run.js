
export default function run(promise) {
  promise.catch(e => console.error(e.stack))
}
