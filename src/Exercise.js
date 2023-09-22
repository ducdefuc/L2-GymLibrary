export class Exercise {
  constructor(name, description = "") {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('Name must be a string with minimum 1 character.')
    }

    this.name = name 
    this.description = description
    this.sets = [] 
  }

  // Add a warmup set.
  addWarmupSet(reps, weight) {
    this.errorHandler(reps, weight)
    this.sets.push({ type: 'warmup', reps, weight })
  }

  // Add a working set.
  addWorkingSet(reps, weight) {
    this.errorHandler(reps, weight)
    this.sets.push({ type: 'working', reps, weight })
  }

  // Handles potential errors for addWarmupSet and addWorkingSet
  errorHandler(reps, weight) {
    if (typeof reps !== 'number' || reps < 1) {
      throw new Error('You have to do atleast 1 rep.')
    }
    if (typeof weight !== 'number' || weight < 0) {
      throw new Error('Weight cannot be negative.')
  }  
  }
}
