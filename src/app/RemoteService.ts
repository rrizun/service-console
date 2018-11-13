import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, finalize, delay, tap, switchMap } from 'rxjs/operators';
import { LogHelper } from "./LogHelper";

export interface Config {

}

/**
 * RemoteService
 */
@Injectable()
export class RemoteService {

    public busy: number = 0;
    public messages: string[] = [];

    constructor(private http: HttpClient) {

    }

    state() {
        
    }

    /**
     * get200
     */
    get200(): Observable<Object> {
        return this.http.get<Object>("http://httpbin.org/delay/.5");
    }

    /**
     * get400
     */
    get400(): Observable<void> {
        return of().pipe(switchMap(()=>{
            return this.http.get<void>("http://httpbin.org/status/400");
        }));
    }

    private log(...args: any[]) {
        new LogHelper(this).log(args);
    }

} 