export class Timer {

  constructor() {
    this.startTime = null
    this.endTime = null
    this.timeOut = null
    this.logElapsedTime = null
  }

  startTimer(durationInSeconds, callback) {
    this.startTime = new Date()

    // Set an interval to log the elapsed time every second.
    this.logElapsedTime = setInterval(() => {
      const elapsedTime = (new Date() - this.startTime) / 1000 // Divide by 1000 to convert milliseconds to seconds
      console.log(`Elapsed time: ${elapsedTime.toFixed(0)} seconds`) // Round to 0 decimal using toFixed
    }, 1000)

    // Set a timeout to stop the timer after the duration has elapsed.
    this.timeOut = setTimeout(() => {
      clearInterval(this.logElapsedTime)
      this.endTime = new Date()
      if (callback) callback()
    }, durationInSeconds * 1000)
  }

  // Stop the timer
  stopTimer() {
    clearTimeout(this.timeOut)
    clearInterval(this.logElapsedTime)
    console.log(`Timer stopped`)
  }
}
