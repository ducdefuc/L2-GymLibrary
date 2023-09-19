import { GymLibrary } from "./src/GymLibrary.js"

console.log('TESTING')

const testLibrary = new GymLibrary()

testLibrary.createWorkout('Push Day')
const pushExercise1 = testLibrary.createExercise('Bench Press', {
  description: 'Use a barbell bench press and press the bar up and down.',
  sets: 2,
  reps: 8,
  weight: 60
})

testLibrary.addExerciseToWorkout('Push Day', pushExercise1)

testLibrary.createWorkout('Pull Day')

console.log(pushExercise1)
console.log(testLibrary.listWorkouts()) 
console.log(testLibrary.getWorkout('Push Day'))
console.log(testLibrary.getWorkout('Pull Day'))
testLibrary.removeWorkout('Pull Day')
testLibrary.removeExerciseFromWorkout('Push Day', 'Bench Press')
console.log(testLibrary.getWorkout('Push Day'))
console.log(testLibrary.listWorkouts())

testLibrary.startRestTimer(10, () => {
  console.log("Rest time is over!")
})
