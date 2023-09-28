Testing has been completed for each module, this includes GymLibrary.js, Exercise.js and Workout.js through automated tests. The tests for these modules were supported by Jest. You can also check out the detailed tests through GymLibrary.test.js or by running "npm test". The timer has been tested through manual testing in a seperate file "timerTest.js". This can also be tested by running "npm run test:timer"

| Tested                                     | Tested by                                                                                        | Testresult                 |
|--------------------------------------------|--------------------------------------------------------------------------------------------------|----------------------------|
| `.createWorkout()` for creating a workout  | Creating a new workout and making sure it exists by listing workouts                             | Passed                     |

| `.removeWorkout()` for removing a workout  | Creating a new workout, ensuring its existence, then removing it and verifying its removal       | Passed                     |

| `.removeWorkout()` with faulty workout name| Trying to remove a non-existent workout and verifying that the list of workouts remains unchanged| Passed                     |

| `.addExerciseToWorkout()` with a valid exercise to an existing workout| Creating a workout and an exercise, then adding the exercise to the workout and verifying it in the workouts details |Passed|

| `.addExerciseToWorkout()` with a valid exercise to a non-existent workout| Creating an exercise and try to add it to a non-existent workout, expected method to throw an error due to the missing workout | Passed |

| `.addExerciseToWorkout()` with a non instance of Exercise to an existing workout| Creating an existing workout and attempting to add a string instead of exercise instance, expect method to throw an error | Passed |

| `.removeExerciseFromWorkout()` from an existing workout| Creating an existing workout, adding an exercise to it, then removing the exercise and check if the exercise is gone in the workout details | Passed |

| `.removeExerciseFromWorkout()` with non-existent exercise from a workout| Creating an existing workout, ensure a non-existent exercise isnt in the workout, then attempting to remove the exercise expecting an error to be thrown | Passed |

| `.listAllWorkouts()` with no existing workouts| Creating a new GymLibrary instance and listing workouts without adding any, expecting an empty array | Passed |

| `.listAllWorkouts()` with multiple workouts| Creating a new GymLibrary instance, adding multiple workouts (Push Day, Pull Day, Leg Day), and listing them to ensure they are all returned |Passed |

| `.listAllWorkouts()` after removing a workout| Creating a new GymLibrary instance, adding multiple workouts (Push Day, Pull Day, Leg Day), removing Leg Day workout, and then list the remaining workouts | Passed |

| `.getWorkout(workoutName)` for an existing workout| Creating a new GymLibrary instance, adding a workout (Push Day) with exercise (Bench Press), then getting and verifying the details of the workout | Passed|

| `.getWorkout(workoutName)` for a non-existing workout| Creating a new GymLibrary instance and attempting to get the details of a workout that does not exist. Expecting the method to throw error | Passed | 

| Creation of `Workout` instance with a valid name "Chest Day"| Instantiating a new Workout instance with a name "Chest Day" and verifying that the name property matches the provided name. | Passed |

| Creation of `Exercise` instance with only a name "Pull Up"as parameter| Instantiating a new Exercise with only a name "Pull Up", verifying that the name property matches the provided name + that its an instance of Exercise. Verify that The description property defaults to an empty string | Passed |

| Creation of `Exercise` instance with an empty name "" | Instantiating a new Exercise with an empty string for the name and expecting an error to be thrown | Passed |

| Creation of `Exercise` instance with a number as name| Instantiating a new Exercise with a number "123" for the name and expecting an error to be thrown | Passed |

| Adding a valid warmup set to an `Exercise` instance | Adding a set with valid reps "1" and valid weight "0" to the exercises warmup sets and checking if its included in the list of sets | Passed |

| Attempting to add a warmup set with invalid repetitions to `Exercise`| Trying to add a set with invalid reps "0" and valid weight "0" to the exercises warmup sets and expecting an error to be thrown | Passed |

| Attempting to add a warmup set with negative weight to `Exercise`| Trying to add a set with valid reps "1" and negative weight "-1" to the exercises warmup sets and expecting an error to be thrown | Passed |

| Adding a valid working set to `Exercise`| Adding a set with valid reps "1" and valid weight "0" to the exercises working  sets and checking if its included in the list of sets | Passed |

| Attempting to add a working set with invalid repetitions to `Exercise`| Trying to add a set with invalid reps "0" and valid weight "0" to the exercises working sets and expecting an error to be thrown | Passed |

| Attempting to add a working set with negative weight to `Exercise`| Trying to add a set with valid reps "1" and negative weight "-1" to the exercises working sets and expecting an error to be thrown | Passed |

[Auto test](images/test.png)