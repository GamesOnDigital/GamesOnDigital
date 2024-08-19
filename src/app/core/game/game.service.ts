import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Game } from './game.types';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _httpClient = inject(HttpClient);

  constructor() { }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  getGamesOfUser(userId: number): Observable<Array<Game>> {
    if (this.accessToken === '') {
      console.error('Access token is missing');
      return throwError('User is needed to be logged in.');
    }

    return this._httpClient.get<Array<Game>>(`https://localhost:7130/api/Game/GetByuserId/${userId}`).pipe(
      switchMap((response: Array<Game>) => {
        return of(response);
      }),
      catchError(error => {
        console.error('Error fetching games:', error);
        return throwError(error);
      })
    );
  }
  getAllGames(): Observable<Array<Game>> {
    return this._httpClient.get<Array<Game>>(`https://localhost:7130/api/Game`).pipe(
      switchMap((response: Array<Game>) => {
        return of(response);
      }),
      catchError(error => {
        console.error('Error fetching games:', error);
        return throwError(error);
      })
    );
  }
}
