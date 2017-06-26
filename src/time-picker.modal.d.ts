import { MdDialogRef } from '@angular/material';
export declare class Config {
    descriptor?: TimeDescriptors;
    state?: States;
    type?: Types;
    date?: Date;
    constructor(config: Config);
}
export declare enum States {
    YEAR = 0,
    MONTH = 1,
    DAY = 2,
    HOUR = 3,
    MINUTE = 4,
    ABBR = 5,
}
export declare enum TimeDescriptors {
    AM = 0,
    PM = 1,
    HR24 = 2,
    Z = 3,
}
export declare enum Types {
    DATETIME = 0,
    DATE = 1,
    TIME = 2,
}
export declare class TimePickerModal {
    dialogRef: MdDialogRef<TimePickerModal>;
    readonly local: boolean;
    hours: number[];
    hours24: number[];
    minutes: number[];
    months: number[];
    days: number[];
    abbrs: TimeDescriptors[];
    yearVal: number;
    prevYearVal: number;
    monthVal: number;
    dayVal: number;
    prevDayVal: number;
    hourVal: number;
    prevHourVal: number;
    minuteVal: number;
    prevMinuteVal: number;
    abbrVal: TimeDescriptors;
    state: States;
    States: typeof States;
    TimeDescriptors: typeof TimeDescriptors;
    Types: typeof Types;
    date: Date;
    private hasInput;
    config: Config;
    HOUR: number;
    numberValue: number;
    constructor(dialogRef: MdDialogRef<TimePickerModal>);
    ngOnInit(): void;
    disableButton(n: number): boolean;
    private hasExtraDay(month);
    convertToClockHour(h: number): number;
    addZero(n: number): string | number;
    formatYear(year: number): string | number;
    formatMonth(month: number): string | number;
    formatDay(day: number): string | number;
    formatHour(hour: number): string | number;
    formatMinute(minute: number): string | number;
    setAbbr(abbr: TimeDescriptors): void;
    setTime(t: any): void;
    setYear(year: number): void;
    setMonth(month: number, next?: boolean): void;
    setHour(hour: number, next?: boolean): void;
    setMinute(minute: number): void;
    setState(state: States): void;
    dismiss(submitChange: boolean): void;
    numberPadClicked($event: number | string): void;
}
