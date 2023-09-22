export class Timer {

  constructor() {
    this.remainingSeconds = null
    this.tickInterval = null
    this.isRunning = false
    this.callbackWhenExpired = null
    this.onTick = null
    this.callbackWhenPaused = null
  }

  startTimer(durationInSeconds, callbackWhenExpired, onTick) {
    this.checkIfRunning(true) // Check if timer is already running
    this.remainingSeconds = durationInSeconds
    this.isRunning = true
    this.callbackWhenExpired = callbackWhenExpired
    this.onTick = onTick

    this.tickInterval = setInterval(() => {
      this.remainingSeconds -= 1  // Tick down counter every second

      // If onTick callback is provided, call it with remaining time in seconds.
      if (onTick) {
        onTick(this.remainingSeconds)
      }

      // If remainingSeconds is 0 or less, clear the interval and call the expired callback.
      if (this.remainingSeconds <= 0) {
        clearInterval(this.tickInterval)
        this.isRunning = false
        if (callbackWhenExpired) {
          callbackWhenExpired()
        }
      }
    }, 1000)
  }

  resetTimer() {
    clearInterval(this.tickInterval)
    this.remainingSeconds = null
    this.isRunning = false
    this.callbackWhenExpired = null
    this.onTick = null
  }

  pause(callbackWhenPaused) {
    this.checkIfRunning(false) // Check if timer is already paused
    clearInterval(this.tickInterval)
    this.isRunning = false
    if (callbackWhenPaused) {
      callbackWhenPaused()
    }
  }
  

  resume() {
    if (this.remainingSeconds !== null) {
      this.startTimer(this.remainingSeconds, this.callbackWhenExpired, this.onTick)
    }
  }

  checkIfRunning(shouldBeRunning) {
    if (shouldBeRunning && this.isRunning) {
      throw new Error('Timer is already running.')
    }

    if (!shouldBeRunning && !this.isRunning) {
      throw new Error('Timer is not running.')
    }
}

}
