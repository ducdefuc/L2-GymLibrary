import { GymLibrary } from "./src/GymLibrary.js"

console.log('TESTING')

const testlibrary = new GymLibrary()

testlibrary.createWorkout('Push Day')
const pushExercise1 = testlibrary.createExercise('Bench Press', {
  description: 'Use a barbell bench press and press the bar up and down.',
  sets: 2,
  reps: 8,
  weight: 60
})

testlibrary.addExerciseToWorkout('Push Day', pushExercise1)

testlibrary.createWorkout('Pull Day')

console.log(pushExercise1)
console.log(testlibrary.listWorkouts()) 
console.log(testlibrary.getWorkout('Push Day'))
console.log(testlibrary.getWorkout('Pull Day'))