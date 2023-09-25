import { GymLibrary } from "./src/GymLibrary.js"
import { Workout } from "./src/Workout.js"
import { Exercise } from "./src/Exercise.js"

describe('GymLibrary', () => {
  let lib

  beforeEach(() => {
    lib = new GymLibrary()
  })

  // Testing .createWorkout() function
  describe('createWorkout', () => {
    test('should create a new workout', () => {
      const workoutName = 'Push Day'
      lib.createWorkout(workoutName)
      const workouts = lib.listAllWorkouts()
      expect(workouts).toContain(workoutName)
    })
  })

  // Testing .removeWorkout() function
  describe('removeWorkout', () => {
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

  // testing .addExerciseToWorkout() function
  describe('addExerciseToWorkout', () => {

    let workoutName, exerciseName, exerciseDescription, exercise

    beforeEach(() => {
      workoutName = 'Push Day'
      exerciseName = 'Bench Press'
      exerciseDescription = 'An exercise for the chest'

      lib.createWorkout(workoutName)
      exercise = new Exercise(exerciseName, exerciseDescription)
    })

    // Testing adding a valid exercise to an existing workout
    test('should add a valid exercise to an existing workout', () => {
      lib.addExerciseToWorkout(workoutName, exercise)
      const workoutDetailsString = lib.getWorkout(workoutName)
      expect(workoutDetailsString).toContain(exerciseName)
    })

    // Testing adding an exercise to a non-existent workout
    test('should throw an error if trying to add an exercise to a non-existent workout', () => {
      const nonExistentWorkoutName = 'Non-existent Workout'
      expect(() => {
        lib.addExerciseToWorkout(nonExistentWorkoutName, exercise)
      }).toThrow(Error)
    })

    // Testing adding a non Exercise instance to an existing workout
    test('should throw an error if trying to add a non Exercise instance to an existing workout', () => {
      expect(() => {
        lib.addExerciseToWorkout(workoutName, "Not an Exercise instance")
      }).toThrow(Error)
    })
  })

  describe('removeExerciseFromWorkout', () => {

    let workoutName, exerciseName, exerciseDescription, exercise

    beforeEach(() => {
      workoutName = 'Push Day'
      exerciseName = 'Bench Press'
      exerciseDescription = 'A chest exercise'

      lib.createWorkout(workoutName)
      exercise = new Exercise(exerciseName, exerciseDescription)
      lib.addExerciseToWorkout(workoutName, exercise)
    })

    // Testing removing an exercise from an existing workout
    test('should remove an exercise from an existing workout', () => {
      // Confirm the exercise is in the workout
      const initialWorkoutDetails = lib.getWorkout(workoutName)
      expect(initialWorkoutDetails).toContain(exerciseName)

      // Remove the exercise
      lib.removeExerciseFromWorkout(workoutName, exerciseName)

      // Confirm the exercise is no longer in the workout
      const updatedWorkoutDetails = lib.getWorkout(workoutName)
      expect(updatedWorkoutDetails).not.toContain(exerciseName)
    })

    test('should throw an error when trying to remove a non-existent exercise', () => {
      const nonExistentExerciseName = 'Non-existent Exercise'

      // Ensure the non-existent exercise is not in the workout
      const initialWorkoutDetails = lib.getWorkout(workoutName)
      expect(initialWorkoutDetails).not.toContain(nonExistentExerciseName)

      // Now try to remove the non-existent exercise and expect an error
      expect(() => {
        lib.removeExerciseFromWorkout(workoutName, nonExistentExerciseName)
      }).toThrow('The workout does not contain an exercise with that name.')
    })
  })

  // testing .listAllWorkouts() function
  describe('listAllWorkouts', () => {

    // No Workouts case
    test('should return an empty array when there are no workouts', () => {
      const workouts = lib.listAllWorkouts()
      expect(workouts).toEqual([])
    })

    // Multiple workouts case
    test('should return all workout names', () => {
      const workoutNames = ['Push Day', 'Pull Day', 'Leg Day']
      workoutNames.forEach(workoutName => lib.createWorkout(workoutName))

      const returnedWorkouts = lib.listAllWorkouts()
      expect(returnedWorkouts).toEqual(workoutNames)
    })

    // After removing workouts case
    test('should not list removed workouts', () => {
      const workoutNames = ['Push Day', 'Pull Day', 'Leg Day']
      workoutNames.forEach(workoutName => lib.createWorkout(workoutName))

      lib.removeWorkout('Leg Day')
      const returnedWorkouts = lib.listAllWorkouts()

      expect(returnedWorkouts).toEqual(['Push Day', 'Pull Day'])
    })

  })

  describe('getWorkout', () => {

    let workoutName, exerciseName, exerciseDescription, exercise

    beforeEach(() => {
      workoutName = 'Push Day'
      exerciseName = 'Bench Press'
      exerciseDescription = 'A chest exercise'

      lib.createWorkout(workoutName)
      exercise = new Exercise(exerciseName, exerciseDescription)
      lib.addExerciseToWorkout(workoutName, exercise)
    })

    // Test 1: Retrieve an Existing Workout
    test('should retrieve details of an existing workout', () => {
      const workoutDetails = lib.getWorkout(workoutName)
      expect(workoutDetails).toContain(workoutName)
      expect(workoutDetails).toContain(exerciseName)
    })

    // Test 2: Non-Existent Workout
    test('should throw an error when trying to retrieve a non-existent workout', () => {
      const nonExistentWorkoutName = 'Non-existent Workout'
      expect(() => {
        lib.getWorkout(nonExistentWorkoutName)
      }).toThrow(`Workout with name ${nonExistentWorkoutName} not found.`)
    })

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