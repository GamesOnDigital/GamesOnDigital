import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { FuseCardComponent } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { FuseDrawerComponent } from '@fuse/components/drawer';

@Component({
  selector: 'app-card-game',
  standalone: true,
  imports: [FuseCardComponent,MatIconModule,MatInputModule,MatMenuModule,MatTooltipModule,RouterLink,NgClass,NgIf,FuseDrawerComponent],
  templateUrl: './card-game.component.html',
  encapsulation: ViewEncapsulation.None,

})


export class CardGameComponent implements OnInit {
  @Input() name: string;
  @Input() typeGameId: number;
  @Input() start: Date;
  @Input() end: Date;
  daysRemaining:number

  ngOnInit(): void {
    this.calculateDaysRemaining();
  }

  calculateDaysRemaining(): void {
    const start = new Date(this.start);
    const end = new Date(this.end);
    const today=new Date()
    var timeDiff:number
    if (start > today)
      timeDiff = end.getTime() - start.getTime();
    else
      timeDiff = today.getTime() - start.getTime();
    this.daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if(this.daysRemaining<0)
      this.daysRemaining=0
  }
  isGameExpired(): boolean {
    return this.daysRemaining == 4;
  }
}
