import { Workout } from "./Workout.js"
import { Exercise } from "./Exercise.js"
import { Timer } from "./Timer.js"

export class GymLibrary {

  #restTimer = new Timer()
  #workouts = []

  /**
   * Creates a new workout and adds it to the internal workouts list.
   *
   * @param {string} workoutName - The name of the new workout.
   */
  createWorkout(workoutName) {
    const workout = new Workout(workoutName)
    this.#workouts.push(workout)
  }

  /**
   * Removes a workout from the internal workouts list based on its name.
   *
   * @param {string} workoutName - The name of the workout to be removed.
   */
  removeWorkout(workoutName) {
    // Filter out the workout with the specified name from the internal list
    this.#workouts = this.#workouts.filter(workout => workout.name !== workoutName)
  }


  /**
   * Creates a new Exercise instance with the given name and description.
   *
   * @param {string} exerciseName - The name of the exercise to be created.
   * @param {string} [exerciseDescription] - A description of the exercise.
   * @returns {Exercise} An instance of the Exercise class.
   */
  createExercise(exerciseName, exerciseDescription) {
    const exercise = new Exercise(exerciseName, exerciseDescription)
    return exercise
  }

  /**
   * Adds an exercise to a specified workout.
   * 
   * Searches for the workout by its name in the internal workouts list.
   *
   * @param {string} workoutName - The name of the workout which the exercise should be added to.
   * @param {Exercise} exerciseToAdd - The exercise to be added.
   * @throws {Error} Throws an error if a workout is not found.
   */
  addExerciseToWorkout(workoutName, exerciseToAdd) {
    // find the workout with the name that matches the name passed in as an argument.
    const targetedWorkout = this.#workouts.find(workout => workout.name === workoutName)
    if (!targetedWorkout) {
      throw new Error(`Workout with name ${workoutName} not found.`)
    } else {
      targetedWorkout.addExercise(exerciseToAdd)
    }
  }

  /**
   * Removes an exercise from the specified workout.
   * 
   * Looks up the workout by its name in the internal workouts list.
   *
   * @param {string} workoutName - The name of the workout which the exercise should be removed from.
   * @param {string} exerciseName - The name of the exercise to be removed.
   */
  removeExerciseFromWorkout(workoutName, exerciseName) {
    const workout = this.#workouts.find(workout => workout.name === workoutName)
    workout.removeExercise(exerciseName)
  }

  /**
   * Retrieves the names of all stored workouts in the internal list.
   * 
   * @returns {string[]} An array of workout names.
   */
  listAllWorkouts() {
    return this.#workouts.map(workout => workout.name)
  }

  /**
   * Retrieves a specific workout from the internal list based on its name.
   * 
   * @param {string} workoutName - The name of the workout to retrieve.
   * @returns {object} The details of the specified workout.
   * @throws {Error} Throws an error if the specified workout is not found.
   */
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

  /**
   * Starts the rest timer with the specified duration.
   * 
   * This method starts an internal rest timer which counts down from the given
   * duration in seconds. It also provides optional callback functions
   * that can be used to execute code when the timer ticks or expires.
   * 
   * @param {number} durationInSeconds - The duration for the rest timer in seconds.
   * @param {function} callbackWhenExpired - Callback function to execute when the timer expires.
   * @param {function} onTick - Callback function to execute on each timer tick.
   */
  startRestTimer(durationInSeconds, callbackWhenExpired, onTick) {
    this.#restTimer.startTimer(durationInSeconds, callbackWhenExpired, onTick)
  }

  /**
   * Resets the rest timer to its default state.
   * 
   */
  resetRestTimer() {
    this.#restTimer.resetTimer()
  }

  /**
   * Pauses the rest timer, which means that the remaining seconds is perserved.
   * 
   */
  pauseRestTimer() {
    this.#restTimer.pause()
  }

  /**
   * If the rest timer was previously paused, this method resumes the countdown from the remaining seconds.
   * 
   */
  resumeRestTimer() {
    this.#restTimer.resume()
  }

}