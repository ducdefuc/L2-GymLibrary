/**
 * Represents an exercise class which can have warmup and working sets.
 */
export class Exercise {

  /**
   * Creates a new Exercise instance.
   * 
   * @param {string} name - The name of the exercise.
   * @param {string} [description=""] - A brief description of the exercise. This is optional.
   * @throws {Error} Throws an error if the name is not a string or has no characters.
   */
  constructor(name, description = "") {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('Name must be a string with minimum 1 character.')
    }

    this.name = name
    this.description = description
    this.sets = []
  }

  /**
   * Adds a warmup set to the exercise.
   * 
   * @param {number} reps - Number of reps for the set.
   * @param {number} weight - Weight for the set.
   * @throws {Error} Throws an error if reps or weight values are invalid.
   */
  addWarmupSet(reps, weight) {
    this.#errorHandler(reps, weight)
    this.sets.push({ type: 'warmup', reps, weight })
  }

  /**
   * Adds a working set to the exercise.
   * 
   * @param {number} reps - Number of reps for the set.
   * @param {number} weight - Weight for the set.
   * @throws {Error} Throws an error if reps or weight values are invalid.
   */
  addWorkingSet(reps, weight) {
    this.#errorHandler(reps, weight)
    this.sets.push({ type: 'working', reps, weight })
  }

  /**
   * Validates reps and weight for the sets.
   * 
   * @private
   * @param {number} reps - Number of reps.
   * @param {number} weight - Weight.
   * @throws {Error} Throws an error if reps or weight values are invalid.
   */
  #errorHandler(reps, weight) {
    if (typeof reps !== 'number' || reps < 1) {
      throw new Error('You have to do atleast 1 rep.')
    }
    if (typeof weight !== 'number' || weight < 0) {
      throw new Error('Weight cannot be negative.')
    }
  }
}
