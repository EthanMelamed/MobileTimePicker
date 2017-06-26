//ANGULAR
    import { Component, Input, Output, EventEmitter } from '@angular/core';
    import { MdDialogRef } from '@angular/material';

//CONFIG
    export class Config {
        descriptor?: TimeDescriptors;
        state?: States;
        type?: Types;
        date?: Date;
        constructor(config: Config){
            this.descriptor = config.descriptor || TimeDescriptors.HR24;
            this.state = config.state !== undefined ? config.state : States.HOUR;
            this.date = config.date || new Date();
            this.type = config.type || Types.DATETIME;
        }
}

//ENUMS

    export enum States  { YEAR = 0, MONTH = 1, DAY = 2, HOUR=3, MINUTE=4, ABBR=5 }

    export enum TimeDescriptors { AM, PM, HR24, Z }

    export enum Types { DATETIME = 0, DATE = 1, TIME = 2 }

/* TimePickerComponent */
    @Component({
        templateUrl: './time-picker.modal.html',
        styleUrls: [
            './time-picker.modal.scss', 
            './time-picker-rotation-keyframes.modal.scss'
        ]
    })
    export class TimePickerModal {

//INPUTS
        get local(): boolean {
            return this.abbrVal !== TimeDescriptors.Z;
        };

//VARIABLES
        public hours: number[] = [];
        public hours24: number[] = [];
        public minutes: number[] = [];
        public months: number[] = [];
        public days: number[] = [];
        public abbrs: TimeDescriptors[] = [];
        public yearVal: number;
        public prevYearVal: number;
        public monthVal: number;
        public dayVal: number;
        public prevDayVal: number;
        public hourVal: number;
        public prevHourVal: number;
        public minuteVal: number;
        public prevMinuteVal: number;
        public abbrVal: TimeDescriptors;
        public state: States;
        public States = States;
        public TimeDescriptors = TimeDescriptors;
        public Types = Types;
        public date: Date;
        private hasInput: boolean = false;
        public config: Config;
        public HOUR = 60 * 60 * 1000;


        set numberValue(n: number){
            if(this.state === States.DAY)
                this.dayVal = n;
            if(this.state === States.YEAR)
                this.yearVal = n;
        }
        get numberValue(): number{
            if(this.state === States.DAY)
                return this.dayVal;
            if(this.state === States.YEAR)
                return this.yearVal;
        }

//LIFE CYCLE HOOKS
        constructor(public dialogRef: MdDialogRef<TimePickerModal>){
            for(let i = 1; i <= 12; i++){
                this.hours.push(i);
            }
            for(let i = 0; i < 24; i++){
                this.hours24.push(i);
            }
            for(let i = 0; i < 60; i++){
                this.minutes.push(i);
            }
            for(let i = 0; i < 12; i++){
                this.months.push(i);
            }
            for(let i = 1; i < 31; i++){
                this.days.push(i);
            }
            for(let i = 0; i < 4; i++){
                this.abbrs.push(i);
            }
        }

        ngOnInit() {
            this.config = this.dialogRef.config.data.config;
            this.abbrVal = this.config.descriptor;
            this.setTime(this.config.date);
            this.setState(this.config.state);
        }


//FUNCTIONS
        disableButton(n: number): boolean{
            if(!this.hasInput) return false;
            switch(this.state){
                case States.YEAR:
                    if(n < 0) return this.yearVal === null;
                    return this.yearVal > 999;
                case States.DAY:
                    if(n < 0) return this.dayVal === null;
                    if(this.dayVal === null) return false;
                    if(this.dayVal > 3) return true;
                    if(this.dayVal === 3 && this.monthVal === 1) return true;
                    if(this.dayVal === 2 && this.monthVal === 1 && n < 9) return false;
                    if(this.dayVal === 2 && this.monthVal === 1 && n === 9) return !this.hasExtraDay(this.monthVal);
                    if(this.dayVal === 3 && this.hasExtraDay(this.monthVal)) n > 1;
                    if(this.dayVal === 3 && !this.hasExtraDay(this.monthVal)) return n > 0;
                    if(this.dayVal < 3) return false;
            }
        }
        private hasExtraDay(month: number): boolean{
            if( month < 0 || 12 < month) return undefined;
            let m = Math.floor(month);
            if(m === 1 && this.yearVal % 4 === 0) return true;
            if(m < 7 && m % 2 === 0) return true;
            else if(m > 6 && m % 2 === 1) return true;
            else return false; 
        }
        public convertToClockHour(h: number){
            if(h > 12){
                return h - 12;
            }
            return h;
        }
        addZero(n: number){
            if(n === null) return null;
            if(n < 10)
                return "0"+n;
            else return n;
        }
        formatYear(year: number){
            if(year === null){
                return '----';
            }
            else if(year < 10){
                return '000' + year;
            }
            else if(year < 100){
                return '00' + year;
            }
            else if(year < 1000){
                return '0' + year;
            }
            else return year;
        }
        formatMonth(month: number){
            if(month === null){
                return '--';
            }
            else if(month < 10){
                return '0' + (month + 1);
            }
            else return month + 1;
        }
        formatDay(day: number){
            if(day === null){
                return '--';
            }
            else if(day < 10){
                return '0' + day;
            }
            else return day;
        }
        formatHour(hour: number){
            
            if(hour === null){
                return '--';
            }
            else if(hour < 10){
                return '0' + hour;
            }
            else {
                if(this.abbrVal === TimeDescriptors.PM)
                    return hour < 10 ? '0' + hour : hour;
                else{
                    return hour;
                }
            };
        }
        formatMinute(minute: number){
            if(minute === null){
                return '--';
            }
            else if(minute < 10){
                return '0' + minute;
            }
            else return minute;
        }
        setAbbr(abbr: TimeDescriptors){
            if(abbr !== this.abbrVal){
                let prevAbbr = this.abbrVal;
                this.abbrVal = abbr;
                let hour = this.date.getHours();
                switch(prevAbbr){
                    case TimeDescriptors.AM:
                        switch(abbr){
                            case TimeDescriptors.PM:    //AM -> PM
                                if(hour < 12){
                                    this.date.setHours(hour + 12);
                                    this.setTime(this.date);
                                }
                                else {
                                    this.abbrVal = TimeDescriptors.AM;
                                }
                            break;
                            case TimeDescriptors.HR24:  //AM -> HR24
                            case TimeDescriptors.Z:     //AM -> Z
                                this.setTime(this.date);
                            break;
                        }
                    break;
                    case TimeDescriptors.PM:
                        switch(abbr){
                            case TimeDescriptors.AM:    //PM -> AM
                                if(hour >= 12){
                                    this.date.setHours(hour - 12);
                                    this.setTime(this.date);
                                }
                                else {
                                    this.abbrVal = TimeDescriptors.PM;
                                }
                            break;
                            case TimeDescriptors.HR24:  //PM -> HR24
                            case TimeDescriptors.Z:     //PM -> Z
                                this.setTime(this.date);
                            break;
                        }
                    break;
                    case TimeDescriptors.HR24:
                        switch(abbr){
                            case TimeDescriptors.AM:    //HR24 -> AM
                                if(hour >= 12){
                                    this.date.setHours(hour - 12);
                                }
                                this.setTime(this.date);
                            break;
                            case TimeDescriptors.PM:    //HR24 -> PM
                                if(hour < 12){
                                    this.date.setHours(hour + 12);
                                }
                                this.setTime(this.date);
                            break;
                            case TimeDescriptors.Z:     //HR24 -> Z
                                this.setTime(this.date);
                            break;
                        }
                    case TimeDescriptors.Z:
                        switch(abbr){
                            case TimeDescriptors.AM:    //Z -> AM
                                if(hour >= 12){
                                    this.date.setHours(hour - 12);
                                }
                                this.setTime(this.date);
                            break;
                            case TimeDescriptors.PM:    //Z -> PM
                                if(hour < 12){
                                    this.date.setHours(hour + 12);
                                }
                                this.setTime(this.date);
                            break;
                            case TimeDescriptors.HR24:  //Z -> HR24
                                this.setTime(this.date);
                            break;
                        }
                    break;
                }                
            }
        }
        setTime(t: any){
            this.date = new Date(t);
            if(this.local){
                this.hourVal = this.date.getHours();
                this.minuteVal = this.date.getMinutes();
                this.yearVal = this.date.getFullYear();
                this.monthVal = this.date.getMonth();
                this.dayVal = this.date.getDate();
            }
            else{
                this.hourVal = this.date.getUTCHours();
                this.minuteVal = this.date.getUTCMinutes();
                this.yearVal = this.date.getUTCFullYear();
                this.monthVal = this.date.getUTCMonth();
                this.dayVal = this.date.getUTCDate();
            }
        }
        setYear(year: number){
            if(this.local){
                this.date.setFullYear(year);
            }
            else{
                this.date.setUTCFullYear(year);
            }
            this.yearVal = year;
        }
        setMonth(month: number, next: boolean = false){
            if(this.local){
                this.date.setMonth(month);
            }
            else{
                this.date.setUTCMonth(month);
            }
            this.monthVal = month;
            if(next){
                this.setState(States.DAY);
            }
        }
        setHour(hour: number, next: boolean = false){
            if(hour !== this.hourVal){
                if(this.local){                    
                    this.date.setHours(hour + (this.abbrVal === TimeDescriptors.PM ? 12 : 0));
                }
                else{
                    this.date.setUTCHours(hour);
                }
                if(this.hourVal !== null)
                    this.prevHourVal = this.hourVal;
                else
                    this.prevHourVal = null;
                this.hourVal = hour;
                if(next){
                    let numHours;
                    if(this.abbrVal === TimeDescriptors.HR24 || this.abbrVal === TimeDescriptors.Z){
                        numHours = 24;
                    }
                    else{
                        numHours = 12;
                    }
                    let arc = Math.abs(((this.prevHourVal % numHours) - (this.hourVal % numHours)) / numHours);
                    let duration = 2;
                    let delay = duration - duration*arc;
                    let runTime = duration - delay;
                    setTimeout(()=>{
                        this.setState(States.MINUTE);
                    }, runTime*1000 + 500);
                }
            }
        }
        setMinute(minute: number){
            if(minute !== this.minuteVal){
                if(this.local){
                    this.date.setMinutes(minute);
                }
                else{
                    this.date.setUTCMinutes(minute);
                }
                this.prevMinuteVal = this.minuteVal || 0;
                this.minuteVal = minute;
            }
        }
        setState(state: States){
            this.hasInput = false;
            this.state = state;
            this.prevHourVal = null;
            this.prevMinuteVal = null;
        }
        dismiss(submitChange: boolean){
            if(submitChange){
                this.dialogRef.close(this.date);
            }
            else{
                this.dialogRef.close();
            }
        }
        //EVENTLISTENER
        numberPadClicked($event: number | string){
            switch($event){
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
                    if(!this.hasInput){
                        this.numberValue = $event;
                    }
                    else {
                        if(this.numberValue !== null){
                            this.numberValue = parseInt(this.numberValue.toString() + $event);
                        }
                        else{
                            this.numberValue = $event;
                        }
                    }
                    break;
                case 'DEL':
                    if(this.numberValue){
                        let s = this.numberValue.toString();
                        if(s.length === 1){
                            this.numberValue = null;
                        }
                        else {
                            this.numberValue = parseInt(s.substr(0, s.length - 1));
                        }
                    }
                    break;
                case 'OK':
                    if(this.state === States.YEAR){
                        this.setState(States.MONTH);
                    }
                    else if(this.state === States.DAY){
                        if(this.config.type === Types.DATE)
                            this.setState(States.ABBR);
                        else if(this.config.type === Types.DATETIME){
                            this.setState(States.HOUR);
                        }
                        else{
                            return this.dismiss(false); //something went wrong, close the window without setting changes
                        }
                    }
            }
            if(this.state === States.YEAR){
                if(this.local){
                    this.date.setFullYear(this.yearVal);
                }
                else {
                    this.date.setUTCFullYear(this.yearVal);
                }
            }
            else if(this.state === States.DAY){
                if(this.local){
                    this.date.setDate(this.dayVal);
                }
                else {
                    this.date.setUTCDate(this.dayVal);
                }
            }
            this.hasInput = true;
        }
    }