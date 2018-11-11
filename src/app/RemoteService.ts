import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

/**
 * RemoteService
 */
@Injectable()
export class RemoteService {

    constructor(private http: HttpClient) {

    }

} 