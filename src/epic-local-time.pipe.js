//ANGULAR
import { Pipe } from '@angular/core';
/* EpicUTCDatePipe - returns a utc date formatted. look into replacing this with the built in angular date pipe */
var EpicLocalTimePipe = (function () {
    function EpicLocalTimePipe() {
    }
    EpicLocalTimePipe.prototype.transform = function (isoDate, config) {
        if (!isoDate) {
            return null;
        }
        return this.parse(new Date(isoDate), config);
    };
    /* addZero() - adds a preceding 0 to a number under 10
        @params: number */
    EpicLocalTimePipe.prototype.addZero = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    /** parse()
     *
     */
    EpicLocalTimePipe.prototype.parse = function (date, format) {
        var result = format;
        result = result.replace("yyyy", date.getFullYear().toString());
        result = result.replace("MM", this.addZero(date.getMonth() + 1));
        result = result.replace("dd", this.addZero(date.getDate()));
        result = result.replace("hh", this.addZero(date.getHours()));
        result = result.replace("mm", this.addZero(date.getMinutes()));
        return result;
    };
    return EpicLocalTimePipe;
}());
export { EpicLocalTimePipe };
EpicLocalTimePipe.decorators = [
    { type: Pipe, args: [{ name: 'epicLocalTime' },] },
];
/** @nocollapse */
EpicLocalTimePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=epic-local-time.pipe.js.map