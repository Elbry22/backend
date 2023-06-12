import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = "http://localhost:61565/";
  subscribe: any;

  geturl="api/ContactApiController/GetAllData/";
  posturl="api/ContactApiController/Post";
  replyurl="api/ContactApiController/reply"

  constructor( private http:HttpClient) { }

  SendContactFormData(data:any){
    
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin',this.url);
    return this.http.post(this.url+this.posturl , data);
  }
  /*GetContactFormData(){
    return this.http.get(this.url+this.geturl);
  }*/
  GetContactFormData(): Observable<any[]> {
    return this.http.get<any[]>(this.url+this.geturl);
  }
  GetContactFormDataById(id : any){
    return this.http.get(this.url+this.geturl+id);
  }
  replyButton(){
    return this.http.get(this.url+this.replyurl);
  }
}
