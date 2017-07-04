//ANGULAR
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { MaterialModule, MdIconRegistry } from '@angular/material';
    import { HttpModule, Http} from '@angular/http';

//PIPES
    import { EpicUTCTimePipe } from './epic-utc-time.pipe';
    import { EpicLocalTimePipe } from './epic-local-time.pipe';

//COMPONENTS
    import { TimePickerComponent } from './time-picker.component';
    import { TimePickerModal } from './time-picker.modal';


    @NgModule({
      imports: [
        CommonModule,
        MaterialModule.forRoot(),
      ],
      exports: [
        TimePickerComponent,
        TimePickerModal,
        EpicUTCTimePipe,
        EpicLocalTimePipe
      ],
      declarations: [
        TimePickerComponent,
        TimePickerModal,
        EpicUTCTimePipe,
        EpicLocalTimePipe
      ],
      entryComponents: [
        TimePickerModal
      ]
    })
    export class EpicTimePickerModule { }
