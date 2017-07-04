import { PipeTransform } from '@angular/core';
export declare class EpicUTCTimePipe implements PipeTransform {
    transform(isoDate: string, config: string): string;
    addZero(i: any): string;
    /** parse()
     *
     */
    parse(date: Date, format: string): string;
}
