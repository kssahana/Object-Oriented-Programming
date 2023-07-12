function Colck(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    this.printClock = function () {
        console.log(this.hours + " : " + this.minutes + " : " + this.seconds);
    }
    this.setClock = function (seconds) {
        this.hours = parseInt(seconds / 3600);
        this.minutes = parseInt((seconds - (this.hours * 3600)) / 60);
        this.seconds = parseInt(seconds - ((this.minutes * 60 + this.hours * 3600)));
    }
}

let time1 = new Colck(10, 12, 50);
time1.printClock();

time1.setClock(10000);
time1.printClock();