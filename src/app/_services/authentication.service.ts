import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { ApiBaseService } from './api-base.service';

@Injectable()
export class AuthenticationService {
    private user = new Subject<User>();
    private accountUrl = this.apiBase.apiUrl + '/account';

    constructor(private http: Http, private apiBase: ApiBaseService) { }

    login(username: string, password: string) {
        return this.http
            .post(this.accountUrl + '/login', 
                JSON.stringify({ username: username, password: password }),
                { headers: this.apiBase.headers() })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.accessToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.user.next(user);
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.user.next();
    }

    onStatusChange(): Observable<User> {
        return this.user.asObservable();
    }
}
