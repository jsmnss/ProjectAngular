import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainWindowModule } from './components/main-window/main-window.module';

import { createCustomElement } from '@angular/elements'; 


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    HttpClientModule, MainWindowModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('custom-elements', el);
  }

  ngDoBootstrap() {}

}
