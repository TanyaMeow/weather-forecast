export default class Weather {
    constructor(temperatureMax, temperatureMin, time, code) {
        this.temperatureMax = temperatureMax;
        this.temperatureMin = temperatureMin;
        this.date = time;
        this.code = code;
    }
};