import {Http, Response, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  private headers: Headers;

  constructor(private http: Http) { // DI
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
  }

  addTodo(params) {
    return this.http.post(environment.HOST + '/api/todo', params, this.headers)
      .toPromise().then(this.extractData).catch(this.handleError);
  }

  findTodo(): Promise<any> {
    return this.http.get(environment.HOST + '/api/todo')
      .toPromise().then(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.log('handleError--------------------');
    // console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
