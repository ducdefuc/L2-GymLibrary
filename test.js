import { GymLibrary } from "./GymLibrary.js"

console.log('TESTING')

const testlibrary = new GymLibrary()

testlibrary.createWorkout('Push Day')
const pushExercise1 = testlibrary.createExercise('Bench Press', 'Use a barbell bench press and press the bar up and down.')
const pushExercise2 = testlibrary.createExercise('Cable flies', 'Use a cable machine and cross your arms towards each other.')
const pushExercise3 = testlibrary.createExercise('Rope tricep extensions', 'Attach a rope to a cable machine and start pressing downwards and outwards.')
testlibrary.addExerciseToWorkout('Push Day', pushExercise1)
testlibrary.addExerciseToWorkout('Push Day', pushExercise2)
testlibrary.addExerciseToWorkout('Push Day', pushExercise3)

testlibrary.createWorkout('Pull Day')
const pullExercise1 = testlibrary.createExercise('Lat Pulldowns', 'Attach a pulldown bar to the machine and pull the bar towards your chest.')
const pullExercise2 = testlibrary.createExercise('Dumbell upper back row', 'Pull dumbells using your elbows back towards your chest.')
const pullExercise3 = testlibrary.createExercise('Dumbell bicep curls', 'Hold dumbells in your hands and curl them up towards your chest.')

testlibrary.addExerciseToWorkout('Pull Day', pullExercise1)
testlibrary.addExerciseToWorkout('Pull Day', pullExercise2)
testlibrary.addExerciseToWorkout('Pull Day', pullExercise3)


console.log(testlibrary.listWorkouts()) 
console.log(testlibrary.getWorkout('Push Day'))
console.log(testlibrary.getWorkout('Pull Day'))