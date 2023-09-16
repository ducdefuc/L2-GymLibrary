import { Workout } from "./Workout.js"

export class GymLibrary {

  #workouts = []

  // Create a new workout.
  createWorkout(name, exercise) {
    const workout = new Workout(name, exercise)
    this.#workouts.push(workout)  
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