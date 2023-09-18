import { Workout } from "./Workout.js"
import { Exercise } from "./Exercise.js"

export class GymLibrary {

  #workouts = []

  // Create a new workout.
  createWorkout(workoutName) {
    const workout = new Workout(workoutName)
    this.#workouts.push(workout)
  }

  // Create a new exercise.
  createExercise(exerciseName, exerciseDetails) {
    const exercise = new Exercise(exerciseName, exerciseDetails)
    return exercise
  }

  // Add an exercise to a workout.
  addExerciseToWorkout(workoutName, exerciseToAdd) {
    // find the workout with the name that matches the name passed in as an argument.
    const targetedWorkout = this.#workouts.find(workout => workout.name === workoutName)
    // if workout is not found, throw error else add the exercise to the workout.
    if (!targetedWorkout) {
      throw new Error(`Workout with name ${workoutName} not found.`)
    } else {
      targetedWorkout.addExercise(exerciseToAdd)
    }
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
    // if workout is not found, throw error else return the workout.
    if (!workout) {
      throw new Error(`Workout with name ${workoutName} not found.`)
    } else {
      return workout.showWorkout()
    }
  }

}