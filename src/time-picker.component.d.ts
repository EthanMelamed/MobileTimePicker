import { EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { States, Types } from './time-picker.modal';
import { Subscription } from "rxjs/Subscription";
export declare enum DisplayModes {
    LOCAL12 = 0,
    LOCAL24 = 1,
    UTC = 2,
}
export declare class TimePickerComponent {
    dialog: MdDialog;
    DisplayModes: typeof DisplayModes;
    private valueSubject;
    valueObservable: Observable<Date>;
    subscriptions: Subscription[];
    private isOpenSubject;
    isOpenObservable: Observable<boolean>;
    private _isOpen;
    utcString: string;
    placeholder: string;
    format: string;
    state: States;
    type: Types;
    displayMode: DisplayModes;
    disabled: boolean;
    isOpen: boolean;
    value: Date;
    utcStringChange: EventEmitter<string>;
    valueChange: EventEmitter<Date>;
    onClose: EventEmitter<Date>;
    isOpenChange: EventEmitter<boolean>;
    constructor(dialog: MdDialog);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    open(): void;
}
