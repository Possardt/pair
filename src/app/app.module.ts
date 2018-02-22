import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';
import { PairComponent } from './home/pair.home.component';
import { PairService } from './service/pair.service';
import { TeamComponent } from './team/team.component';
import { MomentModule } from 'angular2-moment/moment.module';
import { PearLoader } from './loader/pear.loader.component';


@NgModule({
  declarations: [
    PairComponent,
    TeamComponent,
    PearLoader
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [PairService],
  bootstrap: [PairComponent]
})
export class AppModule { }
