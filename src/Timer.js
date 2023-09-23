/**
 * Represents a timer that provides countdown functionality.
 */
export class Timer {

  /**
   * Initializes a new Timer instance.
   */
  constructor() {
    this.remainingSeconds = null
    this.tickInterval = null
    this.isRunning = false
    this.callbackWhenExpired = null
    this.onTick = null
    this.callbackWhenPaused = null
  }

  /**
   * Starts the timer countdown from the given duration.
   *
   * @param {number} durationInSeconds - The initial duration of the timer in seconds.
   * @param {function} callbackWhenExpired - Callback function to execute when the timer expires.
   * @param {function} onTick - Callback function to execute on each timer tick.
   * @throws {Error} Throws an error if the timer is already running.
   */
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

  /**
   * Resets the timer, and its states to default.
   */
  resetTimer() {
    clearInterval(this.tickInterval)
    this.remainingSeconds = null
    this.isRunning = false
    this.callbackWhenExpired = null
    this.onTick = null
  }

  /**
   * Pauses a running timer. 
   *
   * @param {function} callbackWhenPaused - Callback function to execute when the timer is paused.
   * @throws {Error} Throws an error if the timer is not running.
   */
  pause(callbackWhenPaused) {
    this.checkIfRunning(false) // Check if timer is already paused
    clearInterval(this.tickInterval)
    this.isRunning = false
    if (callbackWhenPaused) {
      callbackWhenPaused()
    }
  }

  /**
   * Resumes a paused timer with the remaining seconds. 
   */
  resume() {
    if (this.remainingSeconds !== null) {
      this.startTimer(this.remainingSeconds, this.callbackWhenExpired, this.onTick)
    }
  }

  /**
   * Checks the running state of the timer.
   *
   * @param {boolean} shouldBeRunning - Expected state of the timer (true for running, false for paused).
   * @throws {Error} Throws an error if the timers state does not match the expected state.
   */
  checkIfRunning(shouldBeRunning) {
    if (shouldBeRunning && this.isRunning) {
      throw new Error('Timer is already running.')
    }

    if (!shouldBeRunning && !this.isRunning) {
      throw new Error('Timer is not running.')
    }
  }

}
