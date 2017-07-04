/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './time-picker.component.scss.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../node_modules/@angular/material/input/input-container.ngfactory';
import * as i3 from '@angular/material/input/input-container';
import * as i4 from '@angular/forms';
import * as i5 from './epic-local-time.pipe';
import * as i6 from './epic-utc-time.pipe';
import * as i7 from '@angular/common';
import * as i8 from './time-picker.component';
import * as i9 from '@angular/material/dialog/dialog';
const styles_TimePickerComponent:any[] = [i0.styles];
export const RenderType_TimePickerComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_TimePickerComponent,data:{}});
function View_TimePickerComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),12,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      9,'md-input-container',([] as any[]),[[2,'mat-input-container',(null as any)],
          [1,'align',0],[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
          [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
      [[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,3)._focusInput()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i2.View_MdInputContainer_0,i2.RenderType_MdInputContainer)),i1.ɵdid(1097728,
      (null as any),3,i3.MdInputContainer,([] as any[]),(null as any),(null as any)),
      i1.ɵqud(335544320,1,{_mdInputChild:0}),i1.ɵqud(335544320,2,{_placeholderChild:0}),
      i1.ɵqud(603979776,3,{_hintChildren:1}),(_l()(),i1.ɵted(1,['\n            '])),
      (_l()(),i1.ɵeld(0,(null as any),1,2,'input',[['class','date'],['disabled',''],
          ['mdInput','']],[[8,'value',0],[2,'mat-input-element',(null as any)],[8,
          'id',0],[8,'placeholder',0],[8,'disabled',0],[8,'required',0],[1,'aria-describedby',
          0]],[[(null as any),'blur'],[(null as any),'focus'],[(null as any),'input']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('blur' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,9)._onBlur()) !== false);
              ad = (pd_0 && ad);
            }
            if (('focus' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,9)._onFocus()) !== false);
              ad = (pd_1 && ad);
            }
            if (('input' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,9)._onInput()) !== false);
              ad = (pd_2 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,[[1,4]],0,i3.MdInputDirective,
          [i1.ElementRef,i1.Renderer,[2,i4.NgControl]],{disabled:[0,'disabled'],placeholder:[1,
              'placeholder']},(null as any)),i1.ɵppd(2),(_l()(),i1.ɵted(1,['\n        '])),
      (_l()(),i1.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_16:any = '';
    const currVal_17:any = _co.placeholder;
    _ck(_v,9,0,currVal_16,currVal_17);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = true;
    const currVal_1:any = (null as any);
    const currVal_2:any = i1.ɵnov(_v,3)._shouldForward('untouched');
    const currVal_3:any = i1.ɵnov(_v,3)._shouldForward('touched');
    const currVal_4:any = i1.ɵnov(_v,3)._shouldForward('pristine');
    const currVal_5:any = i1.ɵnov(_v,3)._shouldForward('dirty');
    const currVal_6:any = i1.ɵnov(_v,3)._shouldForward('valid');
    const currVal_7:any = i1.ɵnov(_v,3)._shouldForward('invalid');
    const currVal_8:any = i1.ɵnov(_v,3)._shouldForward('pending');
    _ck(_v,2,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,
        currVal_7,currVal_8);
    const currVal_9:any = (_co.value? i1.ɵunv(_v,8,0,_ck(_v,10,0,i1.ɵnov((<any>_v.parent),
        0),_co.value,_co.format)): (null as any));
    const currVal_10:any = true;
    const currVal_11:any = i1.ɵnov(_v,9).id;
    const currVal_12:any = i1.ɵnov(_v,9).placeholder;
    const currVal_13:any = i1.ɵnov(_v,9).disabled;
    const currVal_14:any = i1.ɵnov(_v,9).required;
    const currVal_15:any = i1.ɵnov(_v,9).ariaDescribedby;
    _ck(_v,8,0,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15);
  });
}
function View_TimePickerComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),9,'md-input-container',([] as any[]),[[2,'mat-input-container',
          (null as any)],[1,'align',0],[2,'ng-untouched',(null as any)],[2,'ng-touched',
          (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
          [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
              (null as any)]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,2)._focusInput()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i2.View_MdInputContainer_0,i2.RenderType_MdInputContainer)),i1.ɵdid(1097728,
      (null as any),3,i3.MdInputContainer,([] as any[]),(null as any),(null as any)),
      i1.ɵqud(335544320,4,{_mdInputChild:0}),i1.ɵqud(335544320,5,{_placeholderChild:0}),
      i1.ɵqud(603979776,6,{_hintChildren:1}),(_l()(),i1.ɵted(1,['\n            '])),
      (_l()(),i1.ɵeld(0,(null as any),1,2,'input',[['class','date'],['disabled',''],
          ['mdInput','']],[[8,'value',0],[2,'mat-input-element',(null as any)],[8,
          'id',0],[8,'placeholder',0],[8,'disabled',0],[8,'required',0],[1,'aria-describedby',
          0]],[[(null as any),'blur'],[(null as any),'focus'],[(null as any),'input']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('blur' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,8)._onBlur()) !== false);
              ad = (pd_0 && ad);
            }
            if (('focus' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,8)._onFocus()) !== false);
              ad = (pd_1 && ad);
            }
            if (('input' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,8)._onInput()) !== false);
              ad = (pd_2 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,[[4,4]],0,i3.MdInputDirective,
          [i1.ElementRef,i1.Renderer,[2,i4.NgControl]],{disabled:[0,'disabled'],placeholder:[1,
              'placeholder']},(null as any)),i1.ɵppd(2),(_l()(),i1.ɵted(1,['\n        '])),
      (_l()(),i1.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_16:any = '';
    const currVal_17:any = _co.placeholder;
    _ck(_v,8,0,currVal_16,currVal_17);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = true;
    const currVal_1:any = (null as any);
    const currVal_2:any = i1.ɵnov(_v,2)._shouldForward('untouched');
    const currVal_3:any = i1.ɵnov(_v,2)._shouldForward('touched');
    const currVal_4:any = i1.ɵnov(_v,2)._shouldForward('pristine');
    const currVal_5:any = i1.ɵnov(_v,2)._shouldForward('dirty');
    const currVal_6:any = i1.ɵnov(_v,2)._shouldForward('valid');
    const currVal_7:any = i1.ɵnov(_v,2)._shouldForward('invalid');
    const currVal_8:any = i1.ɵnov(_v,2)._shouldForward('pending');
    _ck(_v,1,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,
        currVal_7,currVal_8);
    const currVal_9:any = (_co.value? i1.ɵunv(_v,7,0,_ck(_v,9,0,i1.ɵnov((<any>_v.parent),
        1),_co.value,_co.format)): (null as any));
    const currVal_10:any = true;
    const currVal_11:any = i1.ɵnov(_v,8).id;
    const currVal_12:any = i1.ɵnov(_v,8).placeholder;
    const currVal_13:any = i1.ɵnov(_v,8).disabled;
    const currVal_14:any = i1.ɵnov(_v,8).required;
    const currVal_15:any = i1.ɵnov(_v,8).ariaDescribedby;
    _ck(_v,7,0,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15);
  });
}
export function View_TimePickerComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[i1.ɵpid(0,i5.EpicLocalTimePipe,([] as any[])),i1.ɵpid(0,i6.EpicUTCTimePipe,
      ([] as any[])),(_l()(),i1.ɵeld(0,(null as any),(null as any),6,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
      1,(null as any),View_TimePickerComponent_1)),i1.ɵdid(16384,(null as any),0,i7.NgIf,
      [i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf'],ngIfElse:[1,'ngIfElse']},
      (null as any)),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵand(0,
      [['utcTemplate',2]],(null as any),0,(null as any),View_TimePickerComponent_2)),
      (_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i8.TimePickerComponent = _v.component;
    const currVal_0:any = (_co.displayMode !== _co.DisplayModes.UTC);
    const currVal_1:any = i1.ɵnov(_v,7);
    _ck(_v,5,0,currVal_0,currVal_1);
  },(null as any));
}
export function View_TimePickerComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'epic-time-picker',
      ([] as any[]),(null as any),(null as any),(null as any),View_TimePickerComponent_0,
      RenderType_TimePickerComponent)),i1.ɵdid(770048,(null as any),0,i8.TimePickerComponent,
      [i9.MdDialog],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const TimePickerComponentNgFactory:i1.ComponentFactory<i8.TimePickerComponent> = i1.ɵccf('epic-time-picker',
    i8.TimePickerComponent,View_TimePickerComponent_Host_0,{utcString:'utcString',
        placeholder:'placeholder',format:'format',state:'state',type:'type',displayMode:'displayMode',
        disabled:'disabled',isOpen:'isOpen',value:'value'},{utcStringChange:'utcStringChange',
        valueChange:'valueChange',onClose:'onClose',isOpenChange:'isOpenChange'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvbWVsYW1lZS9Eb2N1bWVudHMvcmVwb3MvTW9iaWxlVGltZVBpY2tlci9kZXYvc3JjL3RpbWUtcGlja2VyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9tZWxhbWVlL0RvY3VtZW50cy9yZXBvcy9Nb2JpbGVUaW1lUGlja2VyL2Rldi9zcmMvdGltZS1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvbWVsYW1lZS9Eb2N1bWVudHMvcmVwb3MvTW9iaWxlVGltZVBpY2tlci9kZXYvc3JjL3RpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvbWVsYW1lZS9Eb2N1bWVudHMvcmVwb3MvTW9iaWxlVGltZVBpY2tlci9kZXYvc3JjL3RpbWUtcGlja2VyLmNvbXBvbmVudC50cy5UaW1lUGlja2VyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPHNwYW4+XG4gICAgPHNwYW4gKm5nSWYgPSBcImRpc3BsYXlNb2RlICE9PSBEaXNwbGF5TW9kZXMuVVRDOyBlbHNlIHV0Y1RlbXBsYXRlXCIgPlxuICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgbWRJbnB1dCBjbGFzcz1cImRhdGVcIiBcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwiKHZhbHVlID8gKHZhbHVlIHwgZXBpY0xvY2FsVGltZTogZm9ybWF0KSA6IG51bGwpXCI+XG4gICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cbiAgICA8bmctdGVtcGxhdGUgI3V0Y1RlbXBsYXRlPlxuICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgbWRJbnB1dCBjbGFzcz1cImRhdGVcIiBcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwiKHZhbHVlID8gKHZhbHVlIHwgZXBpY1VUQ1RpbWU6IGZvcm1hdCkgOiBudWxsKVwiPlxuICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9zcGFuPiIsIjxlcGljLXRpbWUtcGlja2VyPjwvZXBpYy10aW1lLXBpY2tlcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0NJO01BQUEsd0VBQW9FO2FBQUEsZ0NBQ2hFO01BQUE7VUFBQTtVQUFBO2NBQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHFFQUFBO01BQUE7YUFBQTthQUFBLGdDQUFvQjtNQUNoQjtVQUFBO1VBQUE7VUFBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7Y0FBQSxzQ0FJSSxJQUEyRDtNQUM5Qzs7SUFKYjtJQUVBO0lBSEosV0FDSSxXQUVBLFVBSEo7OztJQURKO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFdBQUE7UUFBQSxtQkFBQTtJQUtRO1FBQUE7SUFKSjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxXQUlJLFVBSkosaUVBQUE7Ozs7b0JBT2tCLCtDQUN0QjtNQUFBO1VBQUE7VUFBQTtVQUFBO2NBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSxxRUFBQTtNQUFBO2FBQUE7YUFBQSxnQ0FBb0I7TUFDaEI7VUFBQTtVQUFBO1VBQUE7VUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO2NBQUEsc0NBSUksSUFBeUQ7TUFDNUM7O0lBSmI7SUFFQTtJQUhKLFdBQ0ksV0FFQSxVQUhKOzs7SUFESjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxXQUFBO1FBQUEsbUJBQUE7SUFLUTtRQUFBO0lBSko7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsV0FJSSxVQUpKLGlFQUFBOzs7OztxQkFaWjtNQUFBLHdFQUFNO2FBQUEsNEJBQ0Y7TUFBQSxvREFBQTtNQUFBO01BQUEsZUFRTywyQ0FDUDtNQUFBO01BUWM7O0lBakJSO0lBQUE7SUFBTixXQUFNLG1CQUFOOzs7O29CQ0RKO01BQUE7b0NBQUEsVUFBQTtNQUFBO0lBQUE7Ozs7Ozs7In0=
