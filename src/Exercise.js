export class Exercise {
  constructor(name, details = {}) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('Name must be a string with minimum 1 character.')
    }

    if (typeof details !== 'object' || details === null) {
      throw new Error('Details must be an object.')
    }

    if (details.description && (typeof details.description !== 'string' || details.description.length === 0)) {
      throw new Error('Description must be a string with minimum 1 character.')
    }

    this.name = name
    this.description = details.description
    this.sets = details.sets
    this.reps = details.reps
    this.weight = details.weight
  }
}