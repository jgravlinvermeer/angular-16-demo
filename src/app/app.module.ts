import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SelfClosingComponent} from './components/self-closing/self-closing.component';
import {RequiredInputComponent} from './components/required-input/required-input.component';
import {RouterInputComponent} from "./components/router-input/router-input.component";
import { TakeUntilDestroyedComponent } from './components/take-until-destroyed/take-until-destroyed.component';
import { TakeUntilForeverComponent } from './components/take-until-forever/take-until-forever.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RequiredInputComponent,
    RouterInputComponent,
    SelfClosingComponent,
    TakeUntilDestroyedComponent,
    TakeUntilForeverComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
