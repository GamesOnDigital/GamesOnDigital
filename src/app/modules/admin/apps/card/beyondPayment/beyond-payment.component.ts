import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { FuseCardComponent } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-beyond-payment',
  standalone: true,
  imports: [
    FuseCardComponent,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonModule,
    RouterLink,
    NgClass,
    NgIf,
    FuseDrawerComponent,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    TextFieldModule,
    ReactiveFormsModule,
    MatButtonModule,

  ],
  templateUrl: './beyond-payment.component.html',
  encapsulation: ViewEncapsulation.None,

})
export class beyondPaymentComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() typeGameId: number;
  @Input() price: number;
  newPrice: number
  dateRange: { start: Date | null, end: Date | null } = { start: null, end: null };
  dateRangeInDays: number = 0;
  minDate: Date
  ngOnInit(): void {
    this.newPrice = this.price;
    this.minDate = new Date()
  }

  onDateChange(): void {
    if (this.dateRange.start && this.dateRange.end) {
      const start = new Date(this.dateRange.start);
      const end = new Date(this.dateRange.end);
      const timeDiff = end.getTime() - start.getTime();
      this.dateRangeInDays = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1; // +1 לכלול את היום הראשון

      if (this.dateRangeInDays <= 10)
        this.newPrice = this.price
      else
        this.newPrice = this.price * 1.5
    }
    else {
      this.dateRangeInDays = 0;
    }
  }

  onDateRangePickerClosed(): void {

    if (this.dateRangeInDays > 30) {
      // this.dateRange.end = null;  // איפוס תאריך סיום
      // this.dateRangeInDays = 0;
      alert('הטווח הנבחר ארוך מדי. בחר טווח של עד 30 ימים.');
    }
  }
}
