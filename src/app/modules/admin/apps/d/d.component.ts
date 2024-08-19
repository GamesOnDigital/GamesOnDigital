import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
// import { HelpCenterService } from 'app/modules/admin/apps/help-center/help-center.service';
// import { FaqCategory } from 'app/modules/admin/apps/help-center/help-center.type';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector     : 'd',
    templateUrl  : './d.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule, NgFor, MatExpansionModule],
})
export class d implements OnInit, OnDestroy
{
   
    constructor()
    {
    }

    ngOnInit(): void
    {
     
    }
    ngOnDestroy(): void
    {
       
    }

}
