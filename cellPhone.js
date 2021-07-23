class CellPhone {
  constructor(card) {
    this.CallingCard = card;
    this.onCall = false;
    this.callLog = [];
    this.callDuration = 0;
    this.currentNum = null;
  }

  talking() {
    return console.log(this.onCall);
  }

  call(phoneNum) {
    this.onCall = true;
    this.currentNum = phoneNum;
    return;
  }

  tick() {
    this.CallingCard.useMinutes(1);
    this.callDuration++;

    if (this.CallingCard.timeRemaining <= 0) {
      this.onCall = false;
      if (this.callDuration === 1) {
        this.callLog.push(`${this.currentNum} (disconnect at ${this.callDuration} minute.)`);
      } else {
        this.callLog.push(`${this.currentNum} (disconnect at ${this.callDuration} minutes.)`);
      }
      this.currentNum = null;
      this.callDuration = 0;
      return;
    }
    return
  }

  endCall() {
    this.onCall = false;

    if (this.callDuration === 1) {
      this.callLog.push(`${this.currentNum} (${this.callDuration} minute.)`);
    } else {
      this.callLog.push(`${this.currentNum} (${this.callDuration} minutes.)`);
    }
    this.currentNum = null;
    this.callDuration = 0;
    return;
  }

  getHistory() {
    return console.log(this.callLog);
  }
}

module.exports = CellPhone
