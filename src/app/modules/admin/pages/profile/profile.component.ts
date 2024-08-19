import { TextFieldModule } from '@angular/cdk/text-field';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { CardGameComponent } from '../../apps/card/gameCard/card-game/card-game.component';
import { Game } from 'app/core/game/game.types';
import { GameService } from 'app/core/game/game.service';
import {  NgFor } from '@angular/common';
@Component({
    selector       : 'profile',
    templateUrl    : './profile.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [RouterLink, FuseCardComponent, MatIconModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, TextFieldModule, MatDividerModule, MatTooltipModule, NgClass, CardGameComponent, NgFor,NgIf,NgForOf],
})
export class ProfileComponent implements OnInit {
  _games: Array<Game> = [];
  _gameService = inject(GameService);

  constructor() {}

  // ngOnInit(): void {
  //   console.log('ProfileComponent initialized');
  //   this._gameService.getGamesOfUser(1013).subscribe(
  //     (games: Array<Game>) => {
  //       this._games = games;
  //       console.log('Games fetched successfully', this._games);
  //     },
  //     (error) => {
  //       console.error('Error fetching games:', error);
  //       // this.router.navigate(['/login']);
  //     }
  //   );
  // }

  ngOnInit(): void {
    console.log('ProfileComponent initialized');
    this._gameService.getGamesOfUser(1013).subscribe(
      (games: Array<Game>) => {
        this._games = games;
        console.log('Games fetched successfully', this._games);
        this.checkGames(); // הוסף שיטת בדיקה
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }

  checkGames(): void {
    console.log('Check Games:', this._games);
    if (this._games.length > 0) {
      this._games.forEach(game => {
        console.log(`Game: ${game.name}, Type: ${game.typeGameId}`);
      });
    } else {
      console.log('No games found');
    }
  }
  bygame(){
    
  }
}
