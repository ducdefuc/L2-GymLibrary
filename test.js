import { gymLibrary } from "./index.js"

const gym = new gymLibrary()

const newWorkout = {
    name: "Chest Day",
    exercises: ["Bench Press", "Incline Bench Press", "Decline Bench Press"]
}

gym.createWorkout(newWorkout)
console.log(gym.showWorkouts())