import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule} from '@angular/material';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import { AreaComponent } from './widgets/area/area.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        AreaComponent,
        CardComponent,
        PieComponent
    ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ]
})
export class SharedModule { }
