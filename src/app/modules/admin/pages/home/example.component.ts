import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { HelpCenterFaqsComponent } from '../../apps/faqs/faqs.component';
import { PricingModernComponent } from '../../apps/pricing/modern.component';
import { d } from '../../apps/d/d.component';
import { beyondPaymentComponent } from '../../apps/card/beyondPayment/beyond-payment.component';


@Component({
    selector: 'example',
    standalone: true,
    templateUrl: './example.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [MatButtonModule, NgClass, FuseCardComponent, NgIf, MatIconModule, HelpCenterFaqsComponent, PricingModernComponent,d,beyondPaymentComponent],
    animations: [
        trigger('changeText', [
            state('true', style({ opacity: 1 })),
            state('false', style({ opacity: 0 })),
            transition('true => false', [
                animate('0.5s', keyframes([
                    style({ opacity: 1, offset: 0 }),
                    style({ opacity: 0, offset: 1 })
                ]))
            ]),
            transition('false => true', [
                animate('0.5s', keyframes([
                    style({ opacity: 0, offset: 0 }),
                    style({ opacity: 1, offset: 1 })
                ]))
            ])
        ])
    ]
})
export class ExampleComponent implements OnInit {
    eventTypes = ['חתונה', 'יום הולדת', 'בת מצווה', 'חגיגה'];
    isShowingText: boolean = true;
    randomEventType: string = ''; // משתנה המכיל את האות האחרונה של האירוע
    currentIndex: number = 0; // אינדקס לבחירת המילים

    constructor(private el: ElementRef) { }

    ngOnInit(): void { 
        // קריאה לפונקציה updateEventType כל 3000 מילי-שניות (3 שניות)
        setInterval(this.updateEventType.bind(this), 3000); // שינוי ל-3000 מילישניות כדי לראות את האפקט יותר זמן
    }

    updateEventType() {
        const newEventType = this.eventTypes[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.eventTypes.length; // עדכון האינדקס הבא בסדר מחזורי

        const eventTypeSpan = document.getElementById('eventTypeSpan');
        if (eventTypeSpan) {
            this.removeText(eventTypeSpan, () => {
                this.addText(eventTypeSpan, newEventType);
            });
        }
    }

    removeText(element: HTMLElement, callback: () => void) {
        const text = element.innerText;
        let i = text.length;
        const intervalId = setInterval(() => {
            element.innerText = text.substring(0, i--);
            if (i < 0) {
                clearInterval(intervalId);
                callback();
            }
        }, 100); // שינוי כל 100 מילישניות
    }

    addText(element: HTMLElement, text: string) {
        let i = 0;
        const intervalId = setInterval(() => {
            element.innerText += text.charAt(i++);
            if (i > text.length) {
                clearInterval(intervalId);
            }
        }, 170); // שינוי כל 170 מילישניות
    }

    scrollPoint1(el: HTMLElement): void {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
