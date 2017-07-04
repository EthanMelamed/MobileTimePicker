//ANGULAR
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TimePickerModal, Config, TimeDescriptors, States, Types } from './time-picker.modal';
import { Subject } from "rxjs/Subject";
export var DisplayModes;
(function (DisplayModes) {
    DisplayModes[DisplayModes["LOCAL12"] = 0] = "LOCAL12";
    DisplayModes[DisplayModes["LOCAL24"] = 1] = "LOCAL24";
    DisplayModes[DisplayModes["UTC"] = 2] = "UTC";
})(DisplayModes || (DisplayModes = {}));
/* TimePickerComponent */
var TimePickerComponent = (function () {
    //LIFE CYCLE HOOKS
    function TimePickerComponent(dialog) {
        this.dialog = dialog;
        //VARIABLES
        //ENUMS
        this.DisplayModes = DisplayModes;
        //OBSERVABLES
        this.valueSubject = new BehaviorSubject(null);
        this.valueObservable = this.valueSubject.asObservable();
        this.subscriptions = [];
        this.isOpenSubject = new Subject();
        this.isOpenObservable = this.isOpenSubject.asObservable();
        this._isOpen = false;
        this.placeholder = "";
        this.format = "medium";
        this.state = States.YEAR;
        this.type = Types.DATETIME;
        this.displayMode = DisplayModes.LOCAL24;
        this.disabled = false;
        //OUTPUTS
        this.utcStringChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.isOpenChange = new EventEmitter();
    }
    Object.defineProperty(TimePickerComponent.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (request) {
            this.isOpenSubject.next(request);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimePickerComponent.prototype, "value", {
        get: function () {
            var d = this.valueSubject.getValue();
            if (d) {
                var t = d.getTime();
                if (t != t) {
                    return null;
                }
            }
            return d;
        },
        set: function (value) {
            this.valueSubject.next(value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    TimePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valueObservable.subscribe(function (time) {
            if (time) {
                _this.valueChange.emit(time);
                _this.utcStringChange.emit(time.toUTCString());
            }
        });
        this.isOpenObservable.subscribe(function (request) {
            if (request) {
                _this.open();
            }
        });
    };
    TimePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.value && changes.value.currentValue) {
            this.utcString = changes.value.currentValue.toUTCString();
        }
        else if (changes.utcString) {
            this.value = new Date(changes.utcString.currentValue());
        }
    };
    TimePickerComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    //EVENT LISTENERS
    TimePickerComponent.prototype.open = function () {
        var _this = this;
        if (this.disabled)
            return;
        var descriptor;
        switch (this.displayMode) {
            case DisplayModes.UTC:
                descriptor = TimeDescriptors.Z;
                break;
            case DisplayModes.LOCAL24:
                descriptor = TimeDescriptors.HR24;
                break;
            case DisplayModes.LOCAL12:
                if (this.value.getHours() >= 12)
                    descriptor = TimeDescriptors.PM;
                else
                    descriptor = TimeDescriptors.AM;
                break;
        }
        var data = {
            config: new Config({
                date: this.value,
                descriptor: descriptor,
                state: this.state,
                type: this.type
            })
        };
        var modal = this.dialog.open(TimePickerModal, {
            data: data,
            disableClose: true
        });
        this.subscriptions.push(modal.afterClosed().subscribe(function (result) {
            //EMIT THE RESULT IF THE OK BUTTON WAS CLICKED
            if (result) {
                _this.value = result;
                _this.onClose.emit(_this.value);
            }
            else {
                _this.onClose.emit(null);
            }
        }));
    };
    return TimePickerComponent;
}());
export { TimePickerComponent };
TimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'epic-time-picker',
                templateUrl: 'node_modules/mobile-time-picker/src/time-picker.component.html',
                styleUrls: [
                    'node_modules/mobile-time-picker/src/time-picker.component.css',
                ]
            },] },
];
/** @nocollapse */
TimePickerComponent.ctorParameters = function () { return [
    { type: MdDialog, },
]; };
TimePickerComponent.propDecorators = {
    'utcString': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'format': [{ type: Input },],
    'state': [{ type: Input },],
    'type': [{ type: Input },],
    'displayMode': [{ type: Input },],
    'disabled': [{ type: Input },],
    'isOpen': [{ type: Input },],
    'value': [{ type: Input },],
    'utcStringChange': [{ type: Output },],
    'valueChange': [{ type: Output },],
    'onClose': [{ type: Output },],
    'isOpenChange': [{ type: Output },],
};
//# sourceMappingURL=time-picker.component.js.map