Reflections based on the clean code book:

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Naming Chapter 2 Clean Code:

Examples:

`startRestTimer(durationInSeconds, callbackWhenExpired, onTick)` Starts a timer:
`Use intention revealing names` - The name startRestTimer clearly suggests the intent of the function - to initiate a timer meant for rest periods. The parameter names durationInSeconds, callbackWhenExpired, and onTick are descriptive and reveal their usage within context. This aligns with the principle of using names that convey the purpose or usage of the function and its parameters. However this only works within the context of the startRestTimer. If the user would not know that this was about a timer, they might have not known what has expired, or what onTick signifies, so maybe better alternative names would be callbackWhenTimerHasExpired and timerOnTick, this aligns with the principle of `making meaningful distinctions`                                   

`private field "#restTimer", and its functions "startRestTimer", "stopRestTimer", "pauseRestTimer", "resumeRestTimer"` initiate a restTimer and its functions:
`Use searchable names` - The user can easily search for all places in the code that involves the rest timer by searching for the field name "restTimer" and get relevant results due to the naming of the functions.

`removeExerciseFromWorkout` removes an exercise from a workout:
`Avoid disinformation` - The chosen name clearly suggests that its removing an exercise and not just any item. It also suggests that it removes from a workout which means that there probally has to be an exercise in the workout from the first place. Therefore it provides an exact representation of what the function does. 

`createWorkout, createExercise, removeWorkout, removeExercise` creates and removes exercises/workouts:
`Pick one word per concept` - For creation, the word "create" is consistently used, for removing the word "remove" is consistently used. 

`Avoiding mental mapping` - Is used throughout the whole code, there is no usage of abbreviations or shortcuts to the words. Instead they are mostly self-explanatory. There is also no room for ambiguity since alot of things are already states such as `listAllWorkouts`. The user does not need to remember what is being listed, since it is already stated that it is workouts.   

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Functions Chapter 3 Clean Code:

Examples: 

[showWorkout](images/image.png): 
Positive: `Have no side effects` - The function does not alter any external states or produce any side effects.  
Negative: `Do one thing` - The method is formatting data, returns a string for each exercise and then returns a final output string. 
Improvement/fix: Seperate the formatting into a function that would handle the formatting and then have a function to return the final output (showworkout). This would adhere to the "do one thing" principle

[addExerciseToWorkout(workoutName, exerciseToAdd)](images/image2.png)
Positive: `Use descriptive name` - The function name is long with alot of words, but it is descriptive and tells us what it does.
Negative: `Do one thing` - The function is finding a workout, then adding it and also handling errors. If going strictly by the book and the "do one thing" principle then this should be seperated.
Improvement/fix: Seperate the finding the workout into a function, then add the exercise and maybe also have a seperate function for error handling.

[removeExerciseFromWorkout(workoutName, exerciseName)](images/image3.png)
Positive: `Small` - The function is very small which is good when trying to read/understand it.
Negative: `Do one thing` - although it is small it still does multiple things similar to adding an exercise, it is trying to find the workout first and then after that trying to remove an exercise. 
Improvement/fix: Seperate the finding of the workout and the removing of an exercise.

[getWorkout(workoutName)](images/image4.png)
Positive: `Prefer Exceptions to Returning Error Codes` - If a workout is not found it returns a descriptive error message of what went wrong instead of just crashing the application with an error code. However since a try-catch block is not used it would still crash the application, which is not ideal. The ideal scenario would be to handle the errors gracefully.
Negative: `Do one thing` - the function is trying to first find the workout and then return the details. Error handling is also mixed in the function.
Improvement/fix: Seperate finding and fetching the details, error handling can also be seperated.

[startRestTimer(durationInSeconds, callbackWhenExpired, onTick)](images/image5.png)
Poistive: `Do one thing` - This function adheres to the principle of doing one thing. It simply starts the rest timer. The function is essentially a wrapper for the internal startTimer function, however this is good as it also promotes the fucntion being small and promotes abstraction by hiding the internal complexities. Developers often appreciates having tools to work with, without having to dive in to underlying details.
Negative: Triad - uses 3 arguments. The function uses three arguments which is not advised. It is advised to use as little arguments as possible as having many arguments generally leads to more complexity.
Improvement/fix: Reduce the arguments by encapsulating the arguments within an object. 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

My own reflection:

Regarding the naming of the the different instances of the code. I think that in general, when we learn to code we automatically are coached to use as good names as possible. I think that this is also something that is natural for us. When we try to create a simple variable for example, I think in general programmers tend to try and use as descriptive names as possible automatically as this helps us understand our own code for personal usage, let alone if working with other people. Personally i found it quite hard to find "bad examples" of my own namings throughout the coding. Although this could also be due to the fact that we had already gone through the chapter before starting this project. That being said an eye opening thing for me regarding this chapter is that, longer descriptive names is more encouraged than shorter names. Before woking with this project I often strived towards using as short but still descriptive names as possible (not abbreviation level short). I always liked using shorter names cause i thought it could reduce complexity. 

Regarding chapter three of the clean code book. I'm a bit skeptical for this chapter. Especially the "do one thing" header. If going strictly of this, we end up with alot of smaller functions since it is adviced to seperate things to only do one job. I think that this could be more complex alot of times, especially if were working with smaller things. I believe that instead of having functions that are easy to understand, which should be the main objective. This could lead to the reader having to try and solve a jigsaw puzzle of tiny functions instead. In my opinion i think that it is more important to find a balance between the larger codes and seperate things that could potentially promote understandability and readability. That being said, i still believe in functions doing one thing. However not on a strict extreme level. 