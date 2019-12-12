import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {PostsComponent} from '../../modules/posts/posts.component';
import {SharedModule} from '../../shared/shared.module';
import {MatCardModule, MatDividerModule, MatPaginatorModule, MatSidenavModule, MatTableModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {DashboardService} from '../../modules/dashboard.service';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
