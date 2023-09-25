GymLibrary is a library created specifically for developers that wants to develop some kind of training app. It provides simple and understandable methods that can assist you in your training app creation. The library can be used for many different training apps but is mostly tailored for gym related purposes such as planning, creating and storing routines and logging progress. 

Limitations:
The following library does not provide built in training regimes, exercices and workouts. It also uses an internal list to store workouts which means that the stored workouts are session based and the data is not persistent across sessions. This means that the user will have to handle this if they want the desired functionallity. 

----------------------------------------------------------------------------------------------------------------------------------------------------

Installation: 

This is not publicly available in npm so downloading the library is the encouraged approach.

1. Git clone the repository through github using:

    git clone https://github.com/ducdefuc/L2-GymLibrary.git

2. Navigate to the assigned folder using: 

    cd (assigned folder)

3. Open up the library in your code editor.


4. Install the necessary packages using:

    npm install

-------------------------------------------------------------------------------------------------------------------------------------------------------

How to use along with some examples:

1. Start by importing the libary. If you're using ES modules you can use:

    import {GymLibrary} from "your_path_to_GymLibrary"

2. Create an instance of the library example:

    const gymLibrary = new Gymlibrary() 

3. Now you can use the inbuilt methods through your newly assigned variable such as creating a new exercise:

    const squat = gymLibrary.createExercise("squat")

4. Then you can use the existing methods to add details to the exercise:

    Like adding warmup and working sets to the Exercise:

    squat.addWarmupSet(reps, weight)
    squat.addWorkingSet(reps, weight)

5. Now when you've collected the Exercises you want, you can go ahead and create workouts using .createWorkout():

    gymLibrary.createWorkout("Leg day")

6. And then add your exercises to your workout:

    gymLibrary.addExerciseToWorkout("Leg day", squat)

7. Finally you can see what your workout routine would consist of using:

    gymLibrary.getWorkout("Leg day")

8. The library also features an in built Timer that can be used when creating your application, use it by simply starting it using:

    gymLibrary.startRestTimer(durationInSeconds, callbackWhenExpired, onTick) // callbackWhenExpired and onTick is optional.

-------------------------------------------------------------------------------------------------------------------------------------------------------

Full List of available methods:

    General functions:

        - .createWorkout(workoutName)
        - .removeWorkout(workoutName)
        - .createExercise(exerciseName, exerciseDescription)
        - .addExerciseToWorkout(workoutName, exerciseToAdd)
        - .removeExerciseFromWorkout(workoutName, exerciseName)
        - .listAllWorkouts()
        - .getWorkout(workoutName)

    Methods specific to Exercies:

        - exericse.addWarmupSet
        - exericse.addWorkingSet

    Timer functions: 

        - .startRestTimer(durationInSeconds, callbackWhenExpired, onTick)
        - .resetRestTimer()
        - .pauseRestTimer()
        - .resumeRestTimer()

-------------------------------------------------------------------------------------------------------------------------------------------------------

Dependencies:

GymLibrary has the following dependencies:

Babel: Used to transform and compile ES6 code to ensure compatability for platforms.
Jest: For autmoatic unit testing. 

Dont forget to install them using "npm install"

Language:

GymLibrary is written in javascript (ES6). Make sure your environment supports ES6 features. 

Version: 1.0.0

-------------------------------------------------------------------------------------------------------------------------------------------------------

Bugs and Issues:

If encountering any bugs, contact: dp222ky@student.lnu.se

-------------------------------------------------------------------------------------------------------------------------------------------------------

Disclaimer:

Ultimately this is just a fun school project.