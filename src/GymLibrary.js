import { Workout } from "./Workout.js";
import { Exercise } from "./Exercise.js";
import { Timer } from "./Timer.js";

export default class GymLibrary {
  #restTimer = new Timer();
  #workouts = [];

  createWorkout(workoutName) {
    const workout = new Workout(workoutName);
    this.#workouts.push(workout);
  }

  removeWorkout(workoutName) {
    this.#workouts = this.#workouts.filter(workout => workout.name !== workoutName);
  }

  listAllWorkouts() {
    return this.#workouts.map(workout => workout.name);
  }

  getWorkout(workoutName) {
    const workout = this.#findWorkoutByName(workoutName);
    return workout.showWorkout();
  }

  createExercise(exerciseName, exerciseDescription) {
    return new Exercise(exerciseName, exerciseDescription);
  }

  addExerciseToWorkout(workoutName, exerciseToAdd) {
    const workout = this.#findWorkoutByName(workoutName);
    workout.addExercise(exerciseToAdd);
  }

  removeExerciseFromWorkout(workoutName, exerciseName) {
    const workout = this.#findWorkoutByName(workoutName);
    workout.removeExercise(exerciseName);
  }

  startRestTimer(durationInSeconds, callbackWhenExpired, onTick) {
    this.#restTimer.startTimer(durationInSeconds, callbackWhenExpired, onTick);
  }

  resetRestTimer() {
    this.#restTimer.resetTimer();
  }

  pauseRestTimer() {
    this.#restTimer.pause();
  }

  resumeRestTimer() {
    this.#restTimer.resume();
  }

  isRestTimerRunning() {
    return this.#restTimer.isRunning;
  }

  #findWorkoutByName(name) {
    const workout = this.#workouts.find(workout => workout.name === name);
    if (!workout) {
      throw new Error(`Workout with name ${name} not found.`);
    }
    return workout;
  }
}
