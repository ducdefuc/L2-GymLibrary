import { Exercise } from './Exercise.js'

export class Workout {

  #exercises = []

  constructor(name) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('Name must be a string with minimum 1 character.')
    }

    this.name = name
  }

  // Add an exercise to the workout.
  addExercise(exercise) {
    if (!(exercise instanceof Exercise)) {
      throw new Error('The provided item is not an instance of Exercise.')
    }

    this.#exercises.push(exercise)
  }

  // Show the workout.
  showWorkout() {
    // Map over exercises array to extract and join names to a string separated by comma.
    const exerciseNames = this.#exercises.map(exercise => exercise.name).join(', ')
    return `Workout: ${this.name} | Exercises: ${exerciseNames}`
  }
}