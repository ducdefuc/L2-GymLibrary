import { Workout } from "./Workout.js"
import { Exercise } from "./Exercise.js"
import { Timer } from "./Timer.js"

export class GymLibrary {

  #restTimer = new Timer()
  #workouts = []

  // Create a new workout.
  createWorkout(workoutName) {
    const workout = new Workout(workoutName)
    this.#workouts.push(workout)
  }

  // Remove a workout
  removeWorkout(workoutName) {
    this.#workouts = this.#workouts.filter(workouts => workouts.name !== workoutName)
  }

  // Create a new exercise.
  createExercise(exerciseName, exerciseDescription = "") {
    const exercise = new Exercise(exerciseName, exerciseDescription)
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

  // Remove an exercise from a workout
  removeExerciseFromWorkout(workoutName, exerciseName) {
    const workout = this.#workouts.find(workout => workout.name === workoutName)
    workout.removeExercise(exerciseName)
  }

  // Get a list of all the workout names
  listAllWorkouts() {
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

  // Start the rest timer
  startRestTimer(durationInSeconds, callbackWhenExpired, onTick) {
    this.#restTimer.startTimer(durationInSeconds, callbackWhenExpired, onTick)
  }

  // Stop the rest timer
  resetRestTimer() {
    this.#restTimer.resetTimer()
  }
  // Pause the rest timer
  pauseRestTimer() {
    this.#restTimer.pause()
  }
  // Resume the rest timer
  resumeRestTimer() {
    this.#restTimer.resume()
  }

}