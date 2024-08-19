import { NgClass, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardComponent } from '@fuse/components/card';
import { HelpCenterFaqsComponent } from '../faqs/faqs.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { filter } from 'lodash';
import { Directive, ElementRef } from '@angular/core';
import { typeGame } from 'app/core/typeGame/typeGame.types';
import { typeGameService } from 'app/core/typeGame/typeGame.service';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { beyondPaymentComponent } from '../card/beyondPayment/beyond-payment.component';

@Component({
    selector: 'pricing-modern',
    templateUrl: './modern.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf,NgForOf,NgClass,MatButtonModule,MatIconModule,FuseCardComponent,FuseDrawerComponent, HelpCenterFaqsComponent,beyondPaymentComponent,],
    styles: [
        `
          beyond-payment {
            position: static;
            display: block;
            flex: none;
            width: auto;
          }
    
          @media (screen and min-width: 1280px) {
            empty-layout + settings .settings-cog {
              right: 0 !important;
            }
          }
        `,
      ],
})
export class PricingModernComponent implements OnInit {
    public  _typeGame: Array<typeGame> = [];
    _gameService = inject(typeGameService);
    yearlyBilling: boolean = true;

    /**
     * Constructor
     */
    constructor(
        private el: ElementRef,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,

    ) { }





    ngOnInit(): void {
        console.log('ProfileComponent initialized');
        this._gameService.getAllGames()
            .then((games: typeGame[]) => {
                this._typeGame = games;
                console.log('typeGame fetched successfully', this._typeGame);
            })
            .catch((error) => {
                console.error('Error fetching typeGame:', error);
            });
    }
    
    scrollPoint1(el: HTMLElement): void {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


}



