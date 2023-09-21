export class Timer {
  
  constructor() {
    this.remainingSeconds = null
    this.tickInterval = null
  }

  startTimer(durationInSeconds, callbackWhenExpired, onTick) {
    this.remainingSeconds = durationInSeconds

    this.tickInterval = setInterval(() => {
      this.remainingSeconds -= 1  // Tick down counter every second

      // If onTick callback is provided, call it with remaining time in seconds.
      if (onTick) {
        onTick(this.remainingSeconds)
      }

      // If remainingSeconds is 0 or less, clear the interval and call the expired callback.
      if (this.remainingSeconds <= 0) {
        clearInterval(this.tickInterval)
        if (callbackWhenExpired) callbackWhenExpired()
      }
    }, 1000) // 1000 milliseconds = 1 second
  }

  resetTimer() {
    clearInterval(this.tickInterval)
    this.remainingSeconds = null
  }
}
