import { Exercise } from './Exercise.js'

/**
 * Represents a workout with a specific name and a collection of exercises.
 */
export class Workout {

  #exercises = []

  /**
 * Creates a new workout with a specified name.
 *
 * @param {string} name - The name of the workout.
 * @throws {Error} Throws an error if the name is not a valid string.
 */
  constructor(name) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('Name must be a string with minimum 1 character.')
    }

    this.name = name
  }

  /**
   * Adds a new exercise to the workout.
   *
   * @param {Exercise} exercise - The exercise to be added.
   * @throws {Error} Throws an error if the provided item is not an instance of Exercise.
   */
  addExercise(exercise) {
    if (!(exercise instanceof Exercise)) {
      throw new Error('The provided item is not an instance of Exercise.')
    }

    this.#exercises.push(exercise)
  }

  /**
   * Removes an exercise from the workout based on its name.
   *
   * @param {string} exerciseName - The name of the exercise to be removed.
   * @throws {Error} Throws an error if the workout does not contain an exercise with the specified name.
   */
  removeExercise(exerciseName) {
    if (!this.#exercises.some(exercise => exercise.name === exerciseName)) {
      throw new Error('The workout does not contain an exercise with that name.')
    }
    this.#exercises = this.#exercises.filter(exercise => exercise.name !== exerciseName)
  }

  /**
   * Formats warmup sets of the given exercise for display.
   *
   * @private
   * @param {Exercise} exercise - The exercise whose warmup sets need to be formatted.
   * @returns {string} A formatted string of all warmup sets for the exercise.
   */
  #formatWarmupSets(exercise) {
    // Return a string of all the warmup sets for an exercise
    return exercise.sets
      .filter(set => set.type === 'warmup') // Keep only warmup sets
      .map(set => `Warm up: kg: ${set.weight}, reps: ${set.reps}`) // format each warmup set
      .join('\n') // Add a newline between each set
  }

  /**
   * Formats working sets of the given exercise for display.
   *
   * @private
   * @param {Exercise} exercise - The exercise whose working sets need to be formatted.
   * @returns {string} A formatted string of all working sets for the exercise.
   */
  #formatWorkingSets(exercise) {
    // Return a string of all the working sets for an exercise
    return exercise.sets
      .filter(set => set.type === 'working') // Keep only working sets
      .map(set => `Working set: kg: ${set.weight}, reps: ${set.reps}`) // format each workingset
      .join('\n') // Add a newline between each set
  }

  /**
   * Generates a string representation of the workout with its name and exercises.
   *
   * @returns {string} A constructed string containing details of the workout and its exercises.
   */
  showWorkout() {
    // for each exercise in the workout, format the warmup sets and working sets.
    const exerciseDetails = this.#exercises.map(exercise => {
      const warmupSets = this.#formatWarmupSets(exercise)
      const workingSets = this.#formatWorkingSets(exercise)
      // return a string with the exercise name, warmup sets and working sets.
      return `Exercise : ${exercise.name}\n${warmupSets}\n${workingSets}`
    }).join('\n') // Add a newline between each exercise
    return `Workout: ${this.name}\n${exerciseDetails}` // return a correct string using the variable exerciseDetails.
  }
}