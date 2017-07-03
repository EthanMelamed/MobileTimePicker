//ANGULAR
import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
//CONFIG
var Config = (function () {
    function Config(config) {
        this.descriptor = config.descriptor || TimeDescriptors.HR24;
        this.state = config.state !== undefined ? config.state : States.HOUR;
        this.date = config.date || new Date();
        this.type = config.type || Types.DATETIME;
    }
    return Config;
}());
export { Config };
//ENUMS
export var States;
(function (States) {
    States[States["YEAR"] = 0] = "YEAR";
    States[States["MONTH"] = 1] = "MONTH";
    States[States["DAY"] = 2] = "DAY";
    States[States["HOUR"] = 3] = "HOUR";
    States[States["MINUTE"] = 4] = "MINUTE";
    States[States["ABBR"] = 5] = "ABBR";
})(States || (States = {}));
export var TimeDescriptors;
(function (TimeDescriptors) {
    TimeDescriptors[TimeDescriptors["AM"] = 0] = "AM";
    TimeDescriptors[TimeDescriptors["PM"] = 1] = "PM";
    TimeDescriptors[TimeDescriptors["HR24"] = 2] = "HR24";
    TimeDescriptors[TimeDescriptors["Z"] = 3] = "Z";
})(TimeDescriptors || (TimeDescriptors = {}));
export var Types;
(function (Types) {
    Types[Types["DATETIME"] = 0] = "DATETIME";
    Types[Types["DATE"] = 1] = "DATE";
    Types[Types["TIME"] = 2] = "TIME";
})(Types || (Types = {}));
/* TimePickerComponent */
var TimePickerModal = (function () {
    //LIFE CYCLE HOOKS
    function TimePickerModal(dialogRef) {
        this.dialogRef = dialogRef;
        //VARIABLES
        this.hours = [];
        this.hours24 = [];
        this.minutes = [];
        this.months = [];
        this.days = [];
        this.abbrs = [];
        this.States = States;
        this.TimeDescriptors = TimeDescriptors;
        this.Types = Types;
        this.hasInput = false;
        this.HOUR = 60 * 60 * 1000;
        for (var i = 1; i <= 12; i++) {
            this.hours.push(i);
        }
        for (var i = 0; i < 24; i++) {
            this.hours24.push(i);
        }
        for (var i = 0; i < 60; i++) {
            this.minutes.push(i);
        }
        for (var i = 0; i < 12; i++) {
            this.months.push(i);
        }
        for (var i = 1; i < 31; i++) {
            this.days.push(i);
        }
        for (var i = 0; i < 4; i++) {
            this.abbrs.push(i);
        }
    }
    Object.defineProperty(TimePickerModal.prototype, "local", {
        //INPUTS
        get: function () {
            return this.abbrVal !== TimeDescriptors.Z;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TimePickerModal.prototype, "numberValue", {
        get: function () {
            if (this.state === States.DAY)
                return this.dayVal;
            if (this.state === States.YEAR)
                return this.yearVal;
        },
        set: function (n) {
            if (this.state === States.DAY)
                this.dayVal = n;
            if (this.state === States.YEAR)
                this.yearVal = n;
        },
        enumerable: true,
        configurable: true
    });
    TimePickerModal.prototype.ngOnInit = function () {
        this.config = this.dialogRef.config.data.config;
        this.abbrVal = this.config.descriptor;
        this.setTime(this.config.date);
        this.setState(this.config.state);
    };
    //FUNCTIONS
    TimePickerModal.prototype.disableButton = function (n) {
        if (!this.hasInput)
            return false;
        switch (this.state) {
            case States.YEAR:
                if (n < 0)
                    return this.yearVal === null;
                return this.yearVal > 999;
            case States.DAY:
                if (n < 0)
                    return this.dayVal === null;
                if (this.dayVal === null)
                    return false;
                if (this.dayVal > 3)
                    return true;
                if (this.dayVal === 3 && this.monthVal === 1)
                    return true;
                if (this.dayVal === 2 && this.monthVal === 1 && n < 9)
                    return false;
                if (this.dayVal === 2 && this.monthVal === 1 && n === 9)
                    return !this.hasExtraDay(this.monthVal);
                if (this.dayVal === 3 && this.hasExtraDay(this.monthVal))
                    n > 1;
                if (this.dayVal === 3 && !this.hasExtraDay(this.monthVal))
                    return n > 0;
                if (this.dayVal < 3)
                    return false;
        }
    };
    TimePickerModal.prototype.hasExtraDay = function (month) {
        if (month < 0 || 12 < month)
            return undefined;
        var m = Math.floor(month);
        if (m === 1 && this.yearVal % 4 === 0)
            return true;
        if (m < 7 && m % 2 === 0)
            return true;
        else if (m > 6 && m % 2 === 1)
            return true;
        else
            return false;
    };
    TimePickerModal.prototype.convertToClockHour = function (h) {
        if (h > 12) {
            return h - 12;
        }
        return h;
    };
    TimePickerModal.prototype.addZero = function (n) {
        if (n === null)
            return null;
        if (n < 10)
            return "0" + n;
        else
            return n;
    };
    TimePickerModal.prototype.formatYear = function (year) {
        if (year === null) {
            return '----';
        }
        else if (year < 10) {
            return '000' + year;
        }
        else if (year < 100) {
            return '00' + year;
        }
        else if (year < 1000) {
            return '0' + year;
        }
        else
            return year;
    };
    TimePickerModal.prototype.formatMonth = function (month) {
        if (month === null) {
            return '--';
        }
        else if (month < 10) {
            return '0' + (month + 1);
        }
        else
            return month + 1;
    };
    TimePickerModal.prototype.formatDay = function (day) {
        if (day === null) {
            return '--';
        }
        else if (day < 10) {
            return '0' + day;
        }
        else
            return day;
    };
    TimePickerModal.prototype.formatHour = function (hour) {
        if (hour === null) {
            return '--';
        }
        else if (hour < 10) {
            return '0' + hour;
        }
        else {
            if (this.abbrVal === TimeDescriptors.PM)
                return hour < 10 ? '0' + hour : hour;
            else {
                return hour;
            }
        }
        ;
    };
    TimePickerModal.prototype.formatMinute = function (minute) {
        if (minute === null) {
            return '--';
        }
        else if (minute < 10) {
            return '0' + minute;
        }
        else
            return minute;
    };
    TimePickerModal.prototype.setAbbr = function (abbr) {
        if (abbr !== this.abbrVal) {
            var prevAbbr = this.abbrVal;
            this.abbrVal = abbr;
            var hour = this.date.getHours();
            switch (prevAbbr) {
                case TimeDescriptors.AM:
                    switch (abbr) {
                        case TimeDescriptors.PM:
                            if (hour < 12) {
                                this.date.setHours(hour + 12);
                                this.setTime(this.date);
                            }
                            else {
                                this.abbrVal = TimeDescriptors.AM;
                            }
                            break;
                        case TimeDescriptors.HR24: //AM -> HR24
                        case TimeDescriptors.Z:
                            this.setTime(this.date);
                            break;
                    }
                    break;
                case TimeDescriptors.PM:
                    switch (abbr) {
                        case TimeDescriptors.AM:
                            if (hour >= 12) {
                                this.date.setHours(hour - 12);
                                this.setTime(this.date);
                            }
                            else {
                                this.abbrVal = TimeDescriptors.PM;
                            }
                            break;
                        case TimeDescriptors.HR24: //PM -> HR24
                        case TimeDescriptors.Z:
                            this.setTime(this.date);
                            break;
                    }
                    break;
                case TimeDescriptors.HR24:
                    switch (abbr) {
                        case TimeDescriptors.AM:
                            if (hour >= 12) {
                                this.date.setHours(hour - 12);
                            }
                            this.setTime(this.date);
                            break;
                        case TimeDescriptors.PM:
                            if (hour < 12) {
                                this.date.setHours(hour + 12);
                            }
                            this.setTime(this.date);
                            break;
                        case TimeDescriptors.Z:
                            this.setTime(this.date);
                            break;
                    }
                case TimeDescriptors.Z:
                    switch (abbr) {
                        case TimeDescriptors.AM:
                            if (hour >= 12) {
                                this.date.setHours(hour - 12);
                            }
                            this.setTime(this.date);
                            break;
                        case TimeDescriptors.PM:
                            if (hour < 12) {
                                this.date.setHours(hour + 12);
                            }
                            this.setTime(this.date);
                            break;
                        case TimeDescriptors.HR24:
                            this.setTime(this.date);
                            break;
                    }
                    break;
            }
        }
    };
    TimePickerModal.prototype.setTime = function (t) {
        this.date = new Date(t);
        if (this.local) {
            this.hourVal = this.date.getHours();
            this.minuteVal = this.date.getMinutes();
            this.yearVal = this.date.getFullYear();
            this.monthVal = this.date.getMonth();
            this.dayVal = this.date.getDate();
        }
        else {
            this.hourVal = this.date.getUTCHours();
            this.minuteVal = this.date.getUTCMinutes();
            this.yearVal = this.date.getUTCFullYear();
            this.monthVal = this.date.getUTCMonth();
            this.dayVal = this.date.getUTCDate();
        }
    };
    TimePickerModal.prototype.setYear = function (year) {
        if (this.local) {
            this.date.setFullYear(year);
        }
        else {
            this.date.setUTCFullYear(year);
        }
        this.yearVal = year;
    };
    TimePickerModal.prototype.setMonth = function (month, next) {
        if (next === void 0) { next = false; }
        if (this.local) {
            this.date.setMonth(month);
        }
        else {
            this.date.setUTCMonth(month);
        }
        this.monthVal = month;
        if (next) {
            this.setState(States.DAY);
        }
    };
    TimePickerModal.prototype.setHour = function (hour, next) {
        var _this = this;
        if (next === void 0) { next = false; }
        if (hour !== this.hourVal) {
            if (this.local) {
                this.date.setHours(hour + (this.abbrVal === TimeDescriptors.PM ? 12 : 0));
            }
            else {
                this.date.setUTCHours(hour);
            }
            if (this.hourVal !== null)
                this.prevHourVal = this.hourVal;
            else
                this.prevHourVal = null;
            this.hourVal = hour;
            if (next) {
                var numHours = void 0;
                if (this.abbrVal === TimeDescriptors.HR24 || this.abbrVal === TimeDescriptors.Z) {
                    numHours = 24;
                }
                else {
                    numHours = 12;
                }
                var arc = Math.abs(((this.prevHourVal % numHours) - (this.hourVal % numHours)) / numHours);
                var duration = 2;
                var delay = duration - duration * arc;
                var runTime = duration - delay;
                setTimeout(function () {
                    _this.setState(States.MINUTE);
                }, runTime * 1000 + 500);
            }
        }
    };
    TimePickerModal.prototype.setMinute = function (minute) {
        if (minute !== this.minuteVal) {
            if (this.local) {
                this.date.setMinutes(minute);
            }
            else {
                this.date.setUTCMinutes(minute);
            }
            this.prevMinuteVal = this.minuteVal || 0;
            this.minuteVal = minute;
        }
    };
    TimePickerModal.prototype.setState = function (state) {
        this.hasInput = false;
        this.state = state;
        this.prevHourVal = null;
        this.prevMinuteVal = null;
    };
    TimePickerModal.prototype.dismiss = function (submitChange) {
        if (submitChange) {
            this.dialogRef.close(this.date);
        }
        else {
            this.dialogRef.close();
        }
    };
    //EVENTLISTENER
    TimePickerModal.prototype.numberPadClicked = function ($event) {
        switch ($event) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                if (!this.hasInput) {
                    this.numberValue = $event;
                }
                else {
                    if (this.numberValue !== null) {
                        this.numberValue = parseInt(this.numberValue.toString() + $event);
                    }
                    else {
                        this.numberValue = $event;
                    }
                }
                break;
            case 'DEL':
                if (this.numberValue) {
                    var s = this.numberValue.toString();
                    if (s.length === 1) {
                        this.numberValue = null;
                    }
                    else {
                        this.numberValue = parseInt(s.substr(0, s.length - 1));
                    }
                }
                break;
            case 'OK':
                if (this.state === States.YEAR) {
                    this.setState(States.MONTH);
                }
                else if (this.state === States.DAY) {
                    if (this.config.type === Types.DATE)
                        this.setState(States.ABBR);
                    else if (this.config.type === Types.DATETIME) {
                        this.setState(States.HOUR);
                    }
                    else {
                        return this.dismiss(false); //something went wrong, close the window without setting changes
                    }
                }
        }
        if (this.state === States.YEAR) {
            if (this.local) {
                this.date.setFullYear(this.yearVal);
            }
            else {
                this.date.setUTCFullYear(this.yearVal);
            }
        }
        else if (this.state === States.DAY) {
            if (this.local) {
                this.date.setDate(this.dayVal);
            }
            else {
                this.date.setUTCDate(this.dayVal);
            }
        }
        this.hasInput = true;
    };
    return TimePickerModal;
}());
export { TimePickerModal };
TimePickerModal.decorators = [
    { type: Component, args: [{
                templateUrl: 'node_modules/mobile-time-picker/src/time-picker.modal.html',
                styleUrls: [
                    'node_modules/mobile-time-picker/src/time-picker.modal.css',
                    'node_modules/mobile-time-picker/src/time-picker-rotation-keyframes.modal.css'
                ]
            },] },
];
/** @nocollapse */
TimePickerModal.ctorParameters = function () { return [
    { type: MdDialogRef, },
]; };
//# sourceMappingURL=time-picker.modal.js.map