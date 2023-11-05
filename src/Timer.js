/**
 * Provides functionality for a countdown timer.
 */
export class Timer {
  constructor() {
    this.remainingSeconds = 0;
    this.tickInterval = null;
    this.isRunning = false;
    this.callbackWhenExpired = null;
    this.onTickCallback = null;
    this.callbackWhenPaused = null;
  }

  startTimer(durationInSeconds, callbackWhenExpired, onTickCallback) {
    this.#ensureTimerIsNotRunning();
    this.remainingSeconds = durationInSeconds;
    this.callbackWhenExpired = callbackWhenExpired;
    this.onTickCallback = onTickCallback;
    this.isRunning = true;
    this.#initializeTick();
  }

  resetTimer() {
    this.#clearTickInterval();
    this.remainingSeconds = 0;
    this.isRunning = false;
    this.callbackWhenExpired = null;
    this.onTickCallback = null;
  }

  pause(callbackWhenPaused) {
    this.#ensureTimerIsRunning();
    this.#clearTickInterval();
    this.isRunning = false;
    if (callbackWhenPaused) {
      callbackWhenPaused();
    }
  }

  resume() {
    if (this.remainingSeconds > 0) {
      this.startTimer(this.remainingSeconds, this.callbackWhenExpired, this.onTickCallback);
    }
  }

  #initializeTick() {
    this.tickInterval = setInterval(() => {
      this.remainingSeconds--;

      if (this.onTickCallback) {
        this.onTickCallback(this.remainingSeconds);
      }

      if (this.remainingSeconds <= 0) {
        this.#timerExpired();
      }
    }, 1000);
  }

  #timerExpired() {
    this.#clearTickInterval();
    this.isRunning = false;
    if (this.callbackWhenExpired) {
      this.callbackWhenExpired();
    }
  }

  #clearTickInterval() {
    clearInterval(this.tickInterval);
  }

  #ensureTimerIsNotRunning() {
    if (this.isRunning) {
      throw new Error('Timer is already running.');
    }
  }

  #ensureTimerIsRunning() {
    if (!this.isRunning) {
      throw new Error('Timer is not running.');
    }
  }
}
