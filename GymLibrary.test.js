import { GymLibrary } from "./src/GymLibrary.js"
import { Workout } from "./src/Workout.js"

// Testing .createWorkout()
describe('GymLibrary', () => {
  let lib

  beforeEach(() => {
    lib = new GymLibrary()
  })

  test('should create a new workout', () => {
    const workoutName = 'Push Day'
    lib.createWorkout(workoutName)
    const workouts = lib.listAllWorkouts()
    expect(workouts).toContain(workoutName)
  })
})

describe('Workout', () => {

  // testing creating a workout with a valid name
  test('should create a new workout with a valid name', () => {
    const workoutName = 'Chest Day'
    const workout = new Workout(workoutName)
    expect(workout.name).toBe(workoutName)
  })

  // testing creating a workout when passing an empty string (name)
  test('should throw an error for an empty name', () => {
    expect(() => {
      new Workout("")
    }).toThrow(Error)
  })

  // testing creating a workout when passing a non-string name, in this case a number
  test('should throw an error for a non-string name', () => {
    expect(() => {
      new Workout(123)
    }).toThrow(Error)
  })

})