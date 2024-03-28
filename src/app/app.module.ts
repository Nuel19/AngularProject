import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TradingFirmComponent } from './trading-firm/trading-firm.component';
import { ProprietaryComponent } from './proprietary/proprietary.component';
import { TabSectionComponent } from './tab-section/tab-section.component';
import { SayComponent } from './say/say.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AnyQuestionsComponent } from './any-questions/any-questions.component';
import { StartNowComponent } from './start-now/start-now.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TradingFirmComponent,
    ProprietaryComponent,
    TabSectionComponent,
    SayComponent,
    OurTeamComponent,
    AnyQuestionsComponent,
    StartNowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
