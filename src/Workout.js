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

  // Remove an exercise
  removeExercise(exerciseName) {
    this.#exercises = this.#exercises.filter(exercise => exercise.name !== exerciseName)
  }

  // Helper function to format warmup sets
  formatWarmupSets(exercise) {
    // Return a string of all the warmup sets for an exercise
    return exercise.sets
      .filter(set => set.type === 'warmup') // Keep only warmup sets
      .map(set => `Warm up: kg: ${set.weight}, reps: ${set.reps}`) // format each warmup set
      .join('\n') // Add a newline between each set
  }

  // Helper function to format working sets
  formatWorkingSets(exercise) {
    // Return a string of all the working sets for an exercise
    return exercise.sets
      .filter(set => set.type === 'working') // Keep only working sets
      .map(set => `Working set: kg: ${set.weight}, reps: ${set.reps}`) // format each workingset
      .join('\n') // Add a newline between each set
  }

  // Show the workout.
  showWorkout() {
    // for each exercise in the workout, format the warmup sets and working sets.
    const exerciseDetails = this.#exercises.map(exercise => {
      const warmupSets = this.formatWarmupSets(exercise)
      const workingSets = this.formatWorkingSets(exercise)
      // return a string with the exercise name, warmup sets and working sets.
      return `Exercise : ${exercise.name}\n${warmupSets}\n${workingSets}`
    }).join('\n') // Add a newline between each exercise
    return `Workout: ${this.name}\n${exerciseDetails}` // return a correct string using the variable exerciseDetails.
  }
}