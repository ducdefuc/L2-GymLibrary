export class Timer {

  constructor() {
    this.remainingSeconds = null
    this.tickInterval = null
    this.isRunning = false
    this.callbackWhenExpired = null
    this.onTick = null
  }

  startTimer(durationInSeconds, callbackWhenExpired, onTick) {
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
  }

  pause() {
    clearInterval(this.tickInterval)
    this.isRunning = false
  }

  resume() {
    if (this.remainingSeconds !== null) {
      this.startTimer(this.remainingSeconds, this.callbackWhenExpired, this.onTick)
    }
  }
}
