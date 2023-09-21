import { GymLibrary } from "./src/GymLibrary.js"

console.log('TESTING')

const testLibrary = new GymLibrary()

testLibrary.createWorkout('Push Day')

const pushExercise1 = testLibrary.createExercise('Bench Press', 'Use a barbell bench press and press the bar up and down.')

pushExercise1.addWarmupSet(10, 40)
pushExercise1.addWarmupSet(4, 60)

pushExercise1.addWorkingSet(8, 80)
pushExercise1.addWorkingSet(8, 80)

const pushExercise2 = testLibrary.createExercise('Cable fly', 'Use a cable machine and pull the cables together in front of you.')

pushExercise2.addWarmupSet(8, 20)

pushExercise2.addWorkingSet(8, 35)
pushExercise2.addWorkingSet(8, 35)

testLibrary.addExerciseToWorkout('Push Day', pushExercise1)
testLibrary.addExerciseToWorkout('Push Day', pushExercise2)

testLibrary.createWorkout('Pull Day')

console.log(testLibrary.listWorkouts())
console.log(testLibrary.getWorkout('Push Day'))
/*
console.log(testLibrary.getWorkout('Pull Day'))
testLibrary.removeWorkout('Pull Day')
testLibrary.removeExerciseFromWorkout('Push Day', 'Bench Press')
console.log(testLibrary.getWorkout('Push Day'))
console.log(testLibrary.listWorkouts())

testLibrary.startRestTimer(10, () => {
  console.log("Rest time is over!")
})
*/