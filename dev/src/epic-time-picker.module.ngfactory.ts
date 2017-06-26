/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './epic-time-picker.module';
import * as i2 from '../node_modules/@angular/material/dialog/dialog-container.ngfactory';
import * as i3 from '../node_modules/@angular/material/snack-bar/snack-bar-container.ngfactory';
import * as i4 from '../node_modules/@angular/material/snack-bar/simple-snack-bar.ngfactory';
import * as i5 from '../node_modules/@angular/material/tooltip/tooltip.ngfactory';
import * as i6 from './time-picker.modal.ngfactory';
import * as i7 from '@angular/common';
import * as i8 from '@angular/material/core/overlay/scroll/scroll-dispatcher';
import * as i9 from '@angular/material/core/overlay/position/viewport-ruler';
import * as i10 from '@angular/material/core/overlay/overlay-container';
import * as i11 from '@angular/material/core/overlay/position/overlay-position-builder';
import * as i12 from '@angular/material/core/overlay/overlay';
import * as i13 from '@angular/forms';
import * as i14 from '@angular/material/core/platform/platform';
import * as i15 from '@angular/material/core/a11y/interactivity-checker';
import * as i16 from '@angular/material/core/a11y/live-announcer';
import * as i17 from '@angular/material/core/projection/projection';
import * as i18 from '@angular/material/core/coordination/unique-selection-dispatcher';
import * as i19 from '@angular/material/dialog/dialog';
import * as i20 from '@angular/http';
import * as i21 from '@angular/material/icon/icon-registry';
import * as i22 from '@angular/material/icon/icon';
import * as i23 from '@angular/platform-browser';
import * as i24 from '@angular/material/core/gestures/gesture-config';
import * as i25 from '@angular/material/snack-bar/snack-bar';
import * as i26 from '@angular/material/core/style/focus-classes';
import * as i27 from '@ngx-translate/core/src/translate.loader';
import * as i28 from '@ngx-translate/core/src/translate.parser';
import * as i29 from '@ngx-translate/core/src/missing-translation-handler';
import * as i30 from '@ngx-translate/core/src/translate.service';
import * as i31 from '@ngx-translate/core/src/translate.store';
import * as i32 from '@angular/material/core/compatibility/compatibility';
import * as i33 from '@angular/material/core/ripple/ripple';
import * as i34 from '@angular/material/core/option/option';
import * as i35 from '@angular/material/core/portal/portal-directives';
import * as i36 from '@angular/material/core/overlay/overlay-directives';
import * as i37 from '@angular/material/autocomplete/index';
import * as i38 from '@angular/material/button/button';
import * as i39 from '@angular/material/card/card';
import * as i40 from '@angular/material/chips/chip-list';
import * as i41 from '@angular/material/checkbox/checkbox';
import * as i42 from '@angular/material/core/line/line';
import * as i43 from '@angular/material/grid-list/grid-list';
import * as i44 from '@angular/material/core/platform/index';
import * as i45 from '@angular/material/input/index';
import * as i46 from '@angular/material/list/list';
import * as i47 from '@angular/material/progress-bar/progress-bar';
import * as i48 from '@angular/material/progress-spinner/progress-spinner';
import * as i49 from '@angular/material/select/index';
import * as i50 from '@angular/material/core/a11y/index';
import * as i51 from '@angular/material/sidenav/sidenav';
import * as i52 from '@angular/material/core/observe-content/observe-content';
import * as i53 from '@angular/material/tabs/tab-group';
import * as i54 from '@angular/material/toolbar/toolbar';
import * as i55 from '@angular/material/core/rtl/dir';
import * as i56 from '@angular/material/button-toggle/button-toggle';
import * as i57 from '@angular/material/dialog/index';
import * as i58 from '@angular/material/menu/menu';
import * as i59 from '@angular/material/radio/radio';
import * as i60 from '@angular/material/slider/slider';
import * as i61 from '@angular/material/slide-toggle/slide-toggle';
import * as i62 from '@angular/material/snack-bar/index';
import * as i63 from '@angular/material/tooltip/tooltip';
import * as i64 from '@angular/material/core/style/index';
import * as i65 from '@angular/material/module';
import * as i66 from '@ngx-translate/core/index';
export const EpicTimePickerModuleNgFactory:i0.NgModuleFactory<i1.EpicTimePickerModule> = i0.ɵcmf(i1.EpicTimePickerModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.MdDialogContainerNgFactory,i3.MdSnackBarContainerNgFactory,i4.SimpleSnackBarNgFactory,
              i5.TooltipComponentNgFactory,i6.TimePickerModalNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(4608,i7.NgLocalization,i7.NgLocaleLocalization,
          [i0.LOCALE_ID]),i0.ɵmpd(5120,i8.ScrollDispatcher,i8.SCROLL_DISPATCHER_PROVIDER_FACTORY,
          [[3,i8.ScrollDispatcher]]),i0.ɵmpd(5120,i9.ViewportRuler,i9.VIEWPORT_RULER_PROVIDER_FACTORY,
          [[3,i9.ViewportRuler],i8.ScrollDispatcher]),i0.ɵmpd(5120,i10.OverlayContainer,
          i10.OVERLAY_CONTAINER_PROVIDER_FACTORY,[[3,i10.OverlayContainer]]),i0.ɵmpd(4608,
          i11.OverlayPositionBuilder,i11.OverlayPositionBuilder,[i9.ViewportRuler]),
          i0.ɵmpd(4608,i12.Overlay,i12.Overlay,[i10.OverlayContainer,i0.ComponentFactoryResolver,
              i11.OverlayPositionBuilder,i0.ApplicationRef,i0.Injector,i0.NgZone]),
          i0.ɵmpd(4608,i13.ɵi,i13.ɵi,([] as any[])),i0.ɵmpd(4608,i14.Platform,i14.Platform,
              ([] as any[])),i0.ɵmpd(4608,i15.InteractivityChecker,i15.InteractivityChecker,
              [i14.Platform]),i0.ɵmpd(5120,i16.LiveAnnouncer,i16.LIVE_ANNOUNCER_PROVIDER_FACTORY,
              [[3,i16.LiveAnnouncer],[2,i16.LIVE_ANNOUNCER_ELEMENT_TOKEN]]),i0.ɵmpd(4608,
              i17.DomProjection,i17.DomProjection,([] as any[])),i0.ɵmpd(5120,i18.UniqueSelectionDispatcher,
              i18.UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY,[[3,i18.UniqueSelectionDispatcher]]),
          i0.ɵmpd(4608,i19.MdDialog,i19.MdDialog,[i12.Overlay,i0.Injector,[3,i19.MdDialog]]),
          i0.ɵmpd(4608,i20.BrowserXhr,i20.BrowserXhr,([] as any[])),i0.ɵmpd(4608,i20.ResponseOptions,
              i20.BaseResponseOptions,([] as any[])),i0.ɵmpd(5120,i20.XSRFStrategy,
              i20.ɵb,([] as any[])),i0.ɵmpd(4608,i20.XHRBackend,i20.XHRBackend,[i20.BrowserXhr,
              i20.ResponseOptions,i20.XSRFStrategy]),i0.ɵmpd(4608,i20.RequestOptions,
              i20.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i20.Http,i20.ɵc,[i20.XHRBackend,
              i20.RequestOptions]),i0.ɵmpd(5120,i21.MdIconRegistry,i22.ICON_REGISTRY_PROVIDER_FACTORY,
              [[3,i21.MdIconRegistry],i20.Http,i23.DomSanitizer]),i0.ɵmpd(4608,i23.HAMMER_GESTURE_CONFIG,
              i24.GestureConfig,([] as any[])),i0.ɵmpd(4608,i25.MdSnackBar,i25.MdSnackBar,
              [i12.Overlay,i16.LiveAnnouncer,[3,i25.MdSnackBar]]),i0.ɵmpd(5120,i26.FocusOriginMonitor,
              i26.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY,[[3,i26.FocusOriginMonitor]]),
          i0.ɵmpd(5120,i27.TranslateLoader,i1.HttpLoaderFactory,[i20.Http]),i0.ɵmpd(4608,
              i28.TranslateParser,i28.TranslateDefaultParser,([] as any[])),i0.ɵmpd(4608,
              i29.MissingTranslationHandler,i29.FakeMissingTranslationHandler,([] as any[])),
          i0.ɵmpd(4608,i30.TranslateService,i30.TranslateService,[i31.TranslateStore,
              i27.TranslateLoader,i28.TranslateParser,i29.MissingTranslationHandler,
              i30.USE_STORE]),i0.ɵmpd(512,i7.CommonModule,i7.CommonModule,([] as any[])),
          i0.ɵmpd(512,i32.CompatibilityModule,i32.CompatibilityModule,([] as any[])),
          i0.ɵmpd(512,i33.MdRippleModule,i33.MdRippleModule,([] as any[])),i0.ɵmpd(512,
              i34.MdOptionModule,i34.MdOptionModule,([] as any[])),i0.ɵmpd(512,i35.PortalModule,
              i35.PortalModule,([] as any[])),i0.ɵmpd(512,i36.OverlayModule,i36.OverlayModule,
              ([] as any[])),i0.ɵmpd(512,i37.MdAutocompleteModule,i37.MdAutocompleteModule,
              ([] as any[])),i0.ɵmpd(512,i38.MdButtonModule,i38.MdButtonModule,([] as any[])),
          i0.ɵmpd(512,i39.MdCardModule,i39.MdCardModule,([] as any[])),i0.ɵmpd(512,
              i40.MdChipsModule,i40.MdChipsModule,([] as any[])),i0.ɵmpd(512,i41.MdCheckboxModule,
              i41.MdCheckboxModule,([] as any[])),i0.ɵmpd(512,i42.MdLineModule,i42.MdLineModule,
              ([] as any[])),i0.ɵmpd(512,i43.MdGridListModule,i43.MdGridListModule,
              ([] as any[])),i0.ɵmpd(512,i13.ɵba,i13.ɵba,([] as any[])),i0.ɵmpd(512,
              i13.FormsModule,i13.FormsModule,([] as any[])),i0.ɵmpd(512,i44.PlatformModule,
              i44.PlatformModule,([] as any[])),i0.ɵmpd(512,i45.MdInputModule,i45.MdInputModule,
              ([] as any[])),i0.ɵmpd(512,i46.MdListModule,i46.MdListModule,([] as any[])),
          i0.ɵmpd(512,i47.MdProgressBarModule,i47.MdProgressBarModule,([] as any[])),
          i0.ɵmpd(512,i48.MdProgressSpinnerModule,i48.MdProgressSpinnerModule,([] as any[])),
          i0.ɵmpd(512,i49.MdSelectModule,i49.MdSelectModule,([] as any[])),i0.ɵmpd(512,
              i50.A11yModule,i50.A11yModule,([] as any[])),i0.ɵmpd(512,i51.MdSidenavModule,
              i51.MdSidenavModule,([] as any[])),i0.ɵmpd(512,i52.ObserveContentModule,
              i52.ObserveContentModule,([] as any[])),i0.ɵmpd(512,i53.MdTabsModule,
              i53.MdTabsModule,([] as any[])),i0.ɵmpd(512,i54.MdToolbarModule,i54.MdToolbarModule,
              ([] as any[])),i0.ɵmpd(512,i17.ProjectionModule,i17.ProjectionModule,
              ([] as any[])),i0.ɵmpd(512,i55.RtlModule,i55.RtlModule,([] as any[])),
          i0.ɵmpd(512,i56.MdButtonToggleModule,i56.MdButtonToggleModule,([] as any[])),
          i0.ɵmpd(512,i57.MdDialogModule,i57.MdDialogModule,([] as any[])),i0.ɵmpd(512,
              i20.HttpModule,i20.HttpModule,([] as any[])),i0.ɵmpd(512,i22.MdIconModule,
              i22.MdIconModule,([] as any[])),i0.ɵmpd(512,i58.MdMenuModule,i58.MdMenuModule,
              ([] as any[])),i0.ɵmpd(512,i59.MdRadioModule,i59.MdRadioModule,([] as any[])),
          i0.ɵmpd(512,i60.MdSliderModule,i60.MdSliderModule,([] as any[])),i0.ɵmpd(512,
              i61.MdSlideToggleModule,i61.MdSlideToggleModule,([] as any[])),i0.ɵmpd(512,
              i62.MdSnackBarModule,i62.MdSnackBarModule,([] as any[])),i0.ɵmpd(512,
              i63.MdTooltipModule,i63.MdTooltipModule,([] as any[])),i0.ɵmpd(512,i64.StyleModule,
              i64.StyleModule,([] as any[])),i0.ɵmpd(512,i65.MaterialRootModule,i65.MaterialRootModule,
              ([] as any[])),i0.ɵmpd(512,i66.TranslateModule,i66.TranslateModule,([] as any[])),
          i0.ɵmpd(512,i1.EpicTimePickerModule,i1.EpicTimePickerModule,([] as any[])),
          i0.ɵmpd(256,i30.USE_STORE,(undefined as any),([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2V0aGFuL3Byb2dyYW1taW5nL2RlYnVnZ2luZy9Nb2JpbGVUaW1lUGlja2VyL2Rldi9zcmMvZXBpYy10aW1lLXBpY2tlci5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvZXRoYW4vcHJvZ3JhbW1pbmcvZGVidWdnaW5nL01vYmlsZVRpbWVQaWNrZXIvZGV2L3NyYy9lcGljLXRpbWUtcGlja2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9