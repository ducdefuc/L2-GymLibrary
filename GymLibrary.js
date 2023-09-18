import { Workout } from "./Workout.js"
import { Exercise } from "./Exercise.js"

export class GymLibrary {

  #workouts = []

  // Create a new workout.
  createWorkout(workoutName) {
    const workout = new Workout(workoutName)
    this.#workouts.push(workout)
  }

  createExercise(exerciseName, exerciseDescription) {
    const exercise = new Exercise(exerciseName, exerciseDescription)
    return exercise
  }

  addExerciseToWorkout(workoutName, exerciseToAdd) {
    // find the workout with the name that matches the name passed in as an argument.
    const targetedWorkout = this.#workouts.find(workout => workout.name === workoutName)
    targetedWorkout.addExercise(exerciseToAdd)
  }

  // Get a list of all the workout names
  listWorkouts() {
    // call map function on the array of #workouts. For each workout, return the workout name.
    return this.#workouts.map(workout => workout.name)
  }

  // Get a specific workout by name
  getWorkout(workoutName) {
    // find the workout with the name that matches the name passed in as an argument.
    const workout = this.#workouts.find(workout => workout.name === workoutName)
    return workout.showWorkout()
  }

}