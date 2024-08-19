import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { typeGame } from './typeGame.types';

@Injectable({
  providedIn: 'root'
})
export class typeGameService {
  private _httpClient = inject(HttpClient);

  constructor() { }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  
  async getAllGames(): Promise<typeGame[]> {
    return this._httpClient.get<typeGame[]>("https://localhost:7130/api/TypeGame").pipe(
        switchMap((response: typeGame[]) => of(response)),
        catchError(error => {
            console.error('Error fetching games:', error);
            return throwError(error);
        })
    ).toPromise();
}
}
