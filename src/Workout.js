import { Exercise } from './Exercise.js'

export class Workout {

  #exercises = []

  constructor(name) {
    this.#validateName(name)
    this.name = name
  }

  addExercise(exercise) {
    this.#ensureIsExerciseInstance(exercise)
    this.#exercises.push(exercise)
  }

  removeExercise(exerciseName) {
    this.#ensureExerciseExists(exerciseName)
    this.#exercises = this.#exercises.filter(exercise => exercise.name !== exerciseName)
  }

  showWorkout() {
    return {
      name: this.name,
      exercises: this.#exercises.map(exercise => {
        return {
          name: exercise.name,
          warmupSets: this.#formatWarmupSets(exercise),
          workingSets: this.#formatWorkingSets(exercise)
        }
      })
    }
  }

  #validateName(name) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('Name must be a string with minimum 1 character.')
    }
  }

  #ensureIsExerciseInstance(exercise) {
    if (!(exercise instanceof Exercise)) {
      throw new Error('The provided item is not an instance of Exercise.')
    }
  }

  #ensureExerciseExists(exerciseName) {
    if (!this.#exercises.some(exercise => exercise.name === exerciseName)) {
      throw new Error('The workout does not contain an exercise with that name.')
    }
  }

  #formatWarmupSets(exercise) {
    return exercise.sets
      .filter(set => set.type === 'warmup')
      .map(set => `Warm up: kg: ${set.weight}, reps: ${set.reps}`)
  }

  #formatWorkingSets(exercise) {
    return exercise.sets
      .filter(set => set.type === 'working')
      .map(set => `Working set: kg: ${set.weight}, reps: ${set.reps}`)
  }
}