//ANGULAR
    import { Pipe, PipeTransform } from '@angular/core';

/* EpicUTCDatePipe - returns a utc date formatted. look into replacing this with the built in angular date pipe */
    @Pipe({name: 'epicLocalTime'})
    export class EpicLocalTimePipe implements PipeTransform {
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

            let yyyy = new RegExp('yyyy');
            result = result.replace("yyyy", this.addZero(date.getFullYear()));

            let hh = new RegExp('hh');
            result = result.replace("hh", this.addZero(date.getHours()));

            let dd = new RegExp('dd');
            result = result.replace("dd", this.addZero(date.getDate()));

            let h = new RegExp('h');
            result = result.replace("h", date.getHours().toString());

            let mm = new RegExp('mm');
            result = result.replace("mm", this.addZero(date.getMinutes()));

            let m = new RegExp('m');
            result = result.replace("m", this.addZero(date.getMonth() + 1));
            
            return result;
        }
    }