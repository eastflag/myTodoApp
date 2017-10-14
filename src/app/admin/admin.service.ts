import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise';
import {environment} from "../../environments/environment";

@Injectable()
export class AdminService {
  private headers: Headers;

  constructor(private http: Http) { // DI
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
  }

  imageUpload(formData: FormData): Promise<any> {
    let headers = new Headers();
    // headers.append('Content-Type', 'multipart/form-data'); //브라우저가 자동 생성함.
    // headers.append("Authorization", "Bearer " + sessionStorage.getItem("admin_token"));
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.HOST + '/api/imageUpload', formData, options)
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
