//ANGULAR
import { Pipe } from '@angular/core';
/* EpicUTCDatePipe - returns a utc date formatted. look into replacing this with the built in angular date pipe */
var EpicUTCTimePipe = (function () {
    function EpicUTCTimePipe() {
    }
    EpicUTCTimePipe.prototype.transform = function (isoDate, config) {
        if (!isoDate) {
            return null;
        }
        return this.parse(new Date(isoDate), config);
    };
    /* addZero() - adds a preceding 0 to a number under 10
        @params: number */
    EpicUTCTimePipe.prototype.addZero = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    /** parse()
     *
     */
    EpicUTCTimePipe.prototype.parse = function (date, format) {
        var result = format;
        var yyyy = new RegExp('yyyy');
        result = result.replace("yyyy", this.addZero(date.getUTCFullYear()));
        var hh = new RegExp('hh');
        result = result.replace("hh", this.addZero(date.getUTCHours()));
        var dd = new RegExp('dd');
        result = result.replace("dd", this.addZero(date.getUTCDate()));
        var h = new RegExp('h');
        result = result.replace("h", date.getUTCHours().toString());
        var mm = new RegExp('mm');
        result = result.replace("mm", this.addZero(date.getUTCMinutes()));
        var m = new RegExp('m');
        result = result.replace("m", this.addZero(date.getUTCMonth() + 1));
        return result;
    };
    return EpicUTCTimePipe;
}());
export { EpicUTCTimePipe };
EpicUTCTimePipe.decorators = [
    { type: Pipe, args: [{ name: 'epicUTCTime' },] },
];
/** @nocollapse */
EpicUTCTimePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=epic-utc-time.pipe.js.map