//ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Http } from '@angular/http';
//PIPES
import { EpicUTCTimePipe } from './epic-utc-time.pipe';
import { EpicLocalTimePipe } from './epic-local-time.pipe';
//COMPONENTS
import { TimePickerComponent } from './time-picker.component';
import { TimePickerModal } from './time-picker.modal';
//NGX-TRANSLATE
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, "../assets/i18n/", ".json");
}
var EpicTimePickerModule = (function () {
    function EpicTimePickerModule() {
    }
    return EpicTimePickerModule;
}());
export { EpicTimePickerModule };
EpicTimePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MaterialModule.forRoot(),
                    //TRANSLATE
                    TranslateModule.forChild({
                        loader: {
                            provide: TranslateLoader,
                            useFactory: HttpLoaderFactory,
                            deps: [Http]
                        }
                    })
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
            },] },
];
/** @nocollapse */
EpicTimePickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=epic-time-picker.module.js.map