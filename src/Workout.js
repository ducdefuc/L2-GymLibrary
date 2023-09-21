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

  // Show the workout.
  showWorkout() {
    // Map over each exercise in the workout to extract and format its details.
    const exerciseDetails = this.#exercises.map(exercise => {

      // Filter the sets to only get warmup sets and then format them.
      const warmupSets = exercise.sets
        .filter(set => set.type === 'warmup')  // Keep only warmup sets
        .map(set => `Warm up: kg: ${set.weight}, reps: ${set.reps}`) // Format warmup sets
        .join('\n')  // Add a newline to each warmup set

      // Filter the sets to only get working sets and then format them.
      const workingSets = exercise.sets
        .filter(set => set.type === 'working')
        .map(set => `Working set: kg: ${set.weight}, reps: ${set.reps}`)
        .join('\n')

      // Return a formatted string for the exercise, including its name and its warmup and working sets.
      return `Exercise : ${exercise.name}\n${warmupSets}\n${workingSets}`
    }).join('\n') // Add a newline after each exercise

    // Return the workout name and the details of each exercise in the workout using the exerciseDetails variable.
    return `Workout: ${this.name}\n${exerciseDetails}`
  }

}