import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorService } from './error.service';
import { CityList } from '../classes/city-list';
import { Url } from '../../app/data/url';


@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  public intervalStarted = false;

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getCurrentTemperatures(): Observable<CityList> {
    const weatherUrl = Url.getCurrentTemperatures;
    return this.http.get<CityList>(weatherUrl)
      .pipe(
        catchError(this.errorService.handleError)
      );
  }

  writeOnLocalStorage(data, time): void {
    data.forEach(element => {
      if (!localStorage.getItem(element.id.toString())) { // if is empty is necessary to create
        const createHistory = [];
        createHistory.push({ temp: element.main.temp, time });
        localStorage.setItem(element.id.toString(), JSON.stringify(createHistory));
      } else { // if exists is necessary to update
        let updateHistory = [];
        updateHistory = JSON.parse(localStorage.getItem(element.id.toString()));
        updateHistory.push({ temp: element.main.temp, time });
        localStorage.setItem(element.id, JSON.stringify(updateHistory));
      }
    });
  }

  getHistory(key) {
    return localStorage.getItem(key.toString());
  }

}
