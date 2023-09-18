import { Workout } from "./Workout.js"
import { Exercise } from "./Exercise.js"

export class GymLibrary {

  #workouts = []

  // Create a new workout.
  createWorkout(name) {
    const workout = new Workout(name)
    this.#workouts.push(workout)
  }

  addExerciseToWorkout(name, exercise) {
    // find the workout with the name that matches the name passed in as an argument.
    const targetedWorkout = this.#workouts.find(workout => workout.name === name)
    targetedWorkout.addExercise(exercise)
  }

  createExercise(name, description) {
    const exercise = new Exercise(name, description)
    return exercise
  }

  // Get a list of all the workout names
  listWorkouts() {
    // call map function on the array of #workouts. For each workout, return the workout name.
    return this.#workouts.map(workout => workout.name)
  }

  // Get a specific workout by name
  getWorkout(name) {
    // find the workout with the name that matches the name passed in as an argument.
    const workout = this.#workouts.find(workout => workout.name === name)
    return workout.showWorkout()
  }

}