import { GymLibrary } from "./src/GymLibrary.js"

console.log('-------------TESTING-------------')

const testLibrary = new GymLibrary()

// Testing creating a workout
testLibrary.createWorkout('Push Day')

// Testing creating an exercise
const pushExercise1 = testLibrary.createExercise('Bench Press', 'Use a barbell bench press and press the bar up and down.')

// Testing adding sets to an exercise both warmup and working sets
pushExercise1.addWarmupSet(10, 40)
pushExercise1.addWarmupSet(4, 60)

pushExercise1.addWorkingSet(8, 80)
pushExercise1.addWorkingSet(8, 80)

const pushExercise2 = testLibrary.createExercise('Cable fly', 'Use a cable machine and pull the cables together in front of you.')

pushExercise2.addWarmupSet(8, 20)

pushExercise2.addWorkingSet(8, 35)
pushExercise2.addWorkingSet(8, 35)

// testing adding exercises to a workout
testLibrary.addExerciseToWorkout('Push Day', pushExercise1)
testLibrary.addExerciseToWorkout('Push Day', pushExercise2)

testLibrary.createWorkout('Pull Day')

// Testing listing all workouts
console.log('------------LISTING WORKOUTS-------------')
console.log(testLibrary.listAllWorkouts())

// Testing getting/showing a workout by name
console.log('----- SHOWING PUSH DAY WORKOUT -----')
console.log(testLibrary.getWorkout('Push Day'))

console.log('----- ShOWING PULL DAY WORKOUT -----')
console.log(testLibrary.getWorkout('Pull Day'))

// Testing removing a workout
testLibrary.removeWorkout('Pull Day')
console.log('------------REMOVED PULL DAY WORKOUT-------------')

// Testing listing all workouts after having removed the pull day workout
console.log('------------LISTING WORKOUTS-------------')
console.log(testLibrary.listAllWorkouts())

// Testing removing an exercise from a workout
testLibrary.removeExerciseFromWorkout('Push Day', 'Bench Press')
console.log('------------REMOVED BENCH PRESS FROM PUSHDAY-------------')

// Testing getting/showing a workout by name after having removed an exercise
console.log('----- SHOWING PUSH DAY WORKOUT AFTER REMOVING BENCH PRESS EXERCISE-----')
console.log(testLibrary.getWorkout('Push Day'))

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
