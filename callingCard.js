class CallingCard {
  constructor(depletePerMin) {
    this.depletePerMin = depletePerMin;
  }
  addDollars(dollars) {
    let moneyToAdd = dollars * 100;
    let timeToAdd = (moneyToAdd / this.depletePerMin);
    this.remainingTime = timeToAdd;
    this.remainingTime = Math.trunc(this.remainingTime);
    return this.remainingTime
  }
  getRemainingMinutes() {
    return console.log(`${this.remainingTime} minutes left`);
  }
  useMinutes(minutes) {
    this.remainingTime -= minutes;
    if (this.remainingTime < 0) {
      this.remainingTime = 0;
    }
    return this.remainingTime;
  }
}

module.exports = CallingCard;
