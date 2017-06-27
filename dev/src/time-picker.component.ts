//ANGULAR
    import { Component, Input, Output, EventEmitter } from '@angular/core';
    import { MdDialog } from '@angular/material';
    import { BehaviorSubject } from 'rxjs/BehaviorSubject';
    import { Observable } from 'rxjs/Observable';
    import { TimePickerModal, Config, TimeDescriptors, States, Types} from './time-picker.modal';
    import { Subscription } from "rxjs/Subscription";
    import { Subject } from "rxjs/Subject";

    export enum DisplayModes { LOCAL12 = 0, LOCAL24 = 1, UTC = 2 }

/* TimePickerComponent */
    @Component({
        selector: 'epic-time-picker',
        templateUrl: './time-picker.component.html',
        styleUrls: [
            './time-picker.component.scss', 
        ]
    })
    export class TimePickerComponent {

//VARIABLES
        //ENUMS
        DisplayModes = DisplayModes;

        //OBSERVABLES
        private valueSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);
        public valueObservable: Observable<Date> = this.valueSubject.asObservable();
        subscriptions: Subscription[] = [];

        private isOpenSubject: Subject<boolean> = new Subject() ;
        public isOpenObservable: Observable<boolean> = this.isOpenSubject.asObservable();
        private _isOpen: boolean = false;

        //INPUTS
        @Input() utcString: string;
        @Input() placeholder: string = "";
        @Input() format: string = "medium"
        @Input() state: States =  States.YEAR;
        @Input() type: Types = Types.DATETIME;
        @Input() displayMode: DisplayModes = DisplayModes.LOCAL24;
        @Input() disabled: boolean = false;
        @Input()    get isOpen(): boolean{
                        return this._isOpen;
                    }
                    set isOpen(request: boolean) {
                        this.isOpenSubject.next(request);
                    }
        @Input()    get value(): Date {
                        let d = this.valueSubject.getValue();
                        if(d){
                            let t = d.getTime();
                            if(t != t){
                                return null;
                            }
                        }
                        return d;
                    };
                    set value( value: Date) {
                        this.valueSubject.next(value);
                    }

        //OUTPUTS
        @Output() utcStringChange: EventEmitter<string> = new EventEmitter<string>();
        @Output() valueChange: EventEmitter<Date> = new EventEmitter<Date>();
        @Output() onClose: EventEmitter<Date> = new EventEmitter<Date>();
        @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

//LIFE CYCLE HOOKS
        constructor( public dialog: MdDialog ) {}

        ngOnInit() {
            this.valueObservable.subscribe((time: Date)=>{
                if(time){
                    this.valueChange.emit(time);
                    this.utcStringChange.emit(time.toUTCString());
                }
            });
            this.isOpenObservable.subscribe( (request: boolean) => {
                if(request){
                    this.open();
                }
            });
        }

        ngOnChanges(changes){
            if(changes.value && changes.value.currentValue){
                this.utcString = changes.value.currentValue.toUTCString();
            }
            else if(changes.utcString){
                this.value = new Date(changes.utcString.currentValue());
            }
        }
        ngOnDestroy(){
            this.subscriptions.forEach(subscription => {
                subscription.unsubscribe();
            });
        }

//EVENT LISTENERS
        open(){
            if(this.disabled) return;
            let descriptor: TimeDescriptors;
            switch(this.displayMode){
                case DisplayModes.UTC:
                    descriptor = TimeDescriptors.Z;
                break;
                case DisplayModes.LOCAL24:
                    descriptor = TimeDescriptors.HR24;
                break;
                case DisplayModes.LOCAL12:
                    if(this.value.getHours() >= 12)
                        descriptor = TimeDescriptors.PM;
                    else
                        descriptor = TimeDescriptors.AM;
                break;
            }
            let data = {
                config: new Config({
                    date: this.value,
                    descriptor: descriptor,
                    state: this.state,
                    type: this.type
                })
            };
            console.log(data.config);
            let modal = this.dialog.open(TimePickerModal, {
                data: data,
                disableClose: true
            });
            this.subscriptions.push(modal.afterClosed().subscribe(result => {
                //EMIT THE RESULT IF THE OK BUTTON WAS CLICKED
                if(result){
                    this.value = result;
                    this.onClose.emit(this.value);
                }
                //EMIT NULL IF THE CANCEL BUTTON WAS CLICKED
                else{
                    this.onClose.emit(null);
                }
            }));
        }
    }