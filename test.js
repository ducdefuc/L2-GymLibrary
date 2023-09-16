import { GymLibrary } from "./GymLibrary.js"
import { Exercise } from "./Exercise.js"

console.log('TESTING')

const library = new GymLibrary()

const exercise1 = new Exercise('Bench Press', "Lay down on a bench press and lift the barbell up and down.")

library.createWorkout('Push Day', exercise1)

console.log(library.listWorkouts()) 
console.log(library.getWorkout('Push Day'))