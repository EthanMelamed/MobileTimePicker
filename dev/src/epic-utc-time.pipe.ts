//ANGULAR
    import { Pipe, PipeTransform } from '@angular/core';

/* EpicUTCDatePipe - returns a utc date formatted. look into replacing this with the built in angular date pipe */
    @Pipe({name: 'epicUTCTime'})
    export class EpicUTCTimePipe implements PipeTransform {
        transform(isoDate: string, config: string):  string{
            if(!isoDate) {
                return null;
            }
            return this.parse(new Date(isoDate), config);
        }

    /* addZero() - adds a preceding 0 to a number under 10
        @params: number */
        addZero(i): string {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

    /** parse()
     * 
     */
        parse(date: Date, format: string){
            let result: string = format;
            result = result.replace("yyyy", this.addZero(date.getUTCFullYear()));
            result = result.replace("hh", this.addZero(date.getUTCHours()));
            result = result.replace("dd", this.addZero(date.getUTCDate()));
            result = result.replace("MM", this.addZero(date.getUTCMinutes()));
            result = result.replace("mm", this.addZero(date.getUTCMonth() + 1));
            return result;
        }
    }