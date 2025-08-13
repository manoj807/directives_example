import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgFor } from './components/ng-for/ng-for';
import { NgIf } from './components/ng-if/ng-if';
import { NgClass } from './components/ng-class/ng-class';
import { NgStyle } from './components/ng-style/ng-style';
import { NgSwitch } from './components/ng-switch/ng-switch';
import { FormsModule } from '@angular/forms';
import { csClassDirective } from './directive/cs-class.directive';
import { csIfDirective } from './directive/cs-if.directive';
import { Highlight } from './directive/highlight';

@NgModule({
  declarations: [
    App,
    NgFor,
    NgIf,
    NgClass,
    NgStyle,
    NgSwitch,
    csClassDirective,
    csIfDirective,
    Highlight
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
