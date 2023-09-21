export class Exercise {
  constructor(name, description = "") {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('Name must be a string with minimum 1 character.')
    }
    
    if (typeof description !== 'string' || description.length === 0) {
      throw new Error('Description must be a string with minimum 1 character.')
    }

    this.name = name 
    this.description = description
    this.sets = [] 
  }

  // Add a warmup set.
  addWarmupSet(reps, weight) {
    this.sets.push({ type: 'warmup', reps, weight })
  }

  // Add a working set.
  addWorkingSet(reps, weight) {
    this.sets.push({ type: 'working', reps, weight })
  }
}
