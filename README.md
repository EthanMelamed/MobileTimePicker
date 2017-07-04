# MobileTimePicker
An angular2 datetime picker for touch devices

Installation:


Add the following to package.json and run npm install:

    "mobile-time-picker": "git+https://github.com/EthanMelamed/MobileTimePicker.git"

For projects that do not already have ngx-translate:

    Add these lines to your app.module.ts file:

    //NGX-TRANSLATE
        import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
        import { TranslateHttpLoader } from '@ngx-translate/http-loader';
        // AoT requires an exported function for factories
        export function HttpLoaderFactory(http: Http) {
            return new TranslateHttpLoader(http, "node_modules/mobile-time-picker/dev/src/assets/i18n/", ".json");
        }

    Import ngx-translate into your app.module.ts like this under [imports]:

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),

    Import Translate service into your app.component.ts

        import { TranslateService } from "@ngx-translate/core";
    
    Inject the service through the constructor and add these lines, so:

        constructor(public translate: TranslateService){
            //init translate
            translate.addLangs(["en", "fr"]);
            translate.setDefaultLang('en');
        }

For projects that already have ngx-translate installed:

    Copy the translation values from the json files at node_modules/mobile-time-picker/dev/src/assets/i18n


Add overlay styles to styles.scss if you don't have them: (You'll know because the background won't be greyed out and the clock should look wonky)
    .cdk-overlay-container {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        pointer-events: none;
        .cdk-global-overlay-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .cdk-overlay-backdrop{    
            pointer-events: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 1000;
            opacity: 0.48;
            transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .cdk-overlay-dark-backdrop {
            background: rgba(0, 0, 0, 0.6);
        }
        .cdk-overlay-pane{
            z-index: 1000;
            background-color: #fff;
        }
    }

