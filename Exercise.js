export class Exercise {
  constructor(name, description) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('Name must be a string with minimum 1 character.')
    }
    if (typeof description !== 'string' || !description.length === 0) {
      throw new Error('Description must be a string with minimum 1 character.')
    }

    this.name = name
    this.description = description
  }
}