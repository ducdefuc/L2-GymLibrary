import { GymLibrary } from "./src/GymLibrary.js"
import { Workout } from "./src/Workout.js"
import { Exercise } from "./src/Exercise.js"

describe('GymLibrary', () => {
  let lib

  beforeEach(() => {
    lib = new GymLibrary()
  })

  // Testing .createWorkout()
  test('should create a new workout', () => {
    const workoutName = 'Push Day'
    lib.createWorkout(workoutName)
    const workouts = lib.listAllWorkouts()
    expect(workouts).toContain(workoutName)
  })

  // Testing .removeWorkout()
  test('should remove an existing workout', () => {
    const workoutName = 'Push Day'
    lib.createWorkout(workoutName)

    // Ensure workout is added
    expect(lib.listAllWorkouts()).toContain(workoutName)

    // Remove the workout
    lib.removeWorkout(workoutName)

    // Ensure workout is removed
    expect(lib.listAllWorkouts()).not.toContain(workoutName)
  })

  // Testing .removeWorkout() when passing a non-existent workout name
  test('should handle removing a non-existent workout', () => {
    const nonExistentWorkoutName = 'Non-existent Workout'
    const initialWorkouts = lib.listAllWorkouts()

    // Try to remove a non-existent workout
    lib.removeWorkout(nonExistentWorkoutName)

    // Ensure the list remains unchanged
    expect(lib.listAllWorkouts()).toEqual(initialWorkouts)
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

  describe('Exercise', () => {

    // testing the creation of Exercise with a valid name and description
    test('should create a new Exercise instance with a valid name and description', () => {
      const exerciseName = 'Bench Press'
      const exerciseDescription = 'Press the barbell upwards while lying on a bench'
      const exercise = new Exercise(exerciseName, exerciseDescription)

      expect(exercise).toBeInstanceOf(Exercise)
      expect(exercise.name).toBe(exerciseName)
      expect(exercise.description).toBe(exerciseDescription)
    })

    // testing creating an exercise when passing only a name, no description
    test('should create an Exercise instance with only a name', () => {
      const exerciseName = 'Pull Up'
      const exercise = new Exercise(exerciseName)

      expect(exercise).toBeInstanceOf(Exercise)
      expect(exercise.name).toBe(exerciseName)
      expect(exercise.description).toBe("")
    })

    // testsing the creation of Exercise when passing an empty string (name)
    test('should throw an error for an empty name', () => {
      expect(() => {
        new Exercise("")
      }).toThrow(Error)
    })

    // testing the creation of Exercise when passing a non string name, in this case a number
    test('should throw an error for a non-string name', () => {
      expect(() => {
        new Exercise(123)
      }).toThrow(Error)
    })

  })
})