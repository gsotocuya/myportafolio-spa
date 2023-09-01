import {Injectable} from '@angular/core';
import {Phrase} from "@core/models/phrase";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  private URL = 'https://webapi-phraseoftheday.azurewebsites.net/api';
  // private URL = 'https://localhost:7114/api';

  constructor(private httpClient: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getPhrase(): Observable<any> {
    return this.httpClient.get<Phrase>(
      `${this.URL}/phrase`
    )
  }


}
