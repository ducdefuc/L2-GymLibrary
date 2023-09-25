import { GymLibrary } from "../src/GymLibrary.js"

const testLibrary = new GymLibrary()

console.log('-------------TESTING TIMER-------------')
testLibrary.startRestTimer(10,
  () => {
    console.log("Rest time is over!")
  },
  (remainingSeconds) => {
    console.log(`Remaining time: ${remainingSeconds} seconds`)
  }
)

setTimeout(() => {
  console.log('Pausing the rest timer...')
  testLibrary.pauseRestTimer()

  setTimeout(() => {
    console.log('Resuming the rest timer...')
    testLibrary.resumeRestTimer() 
  }, 3000)

}, 3000)
