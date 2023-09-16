export class gymLibrary {
  constructor() {
    this.workouts = []
  }

  createWorkout(workout) {
    {
      this.workouts.push(workout)
      return workout
    }
  }

  showWorkouts() {
    return this.workouts
  }
}