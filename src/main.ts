// main.ts in Angular remote
import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
// import { RemoteComponent } from './app/remote/remote.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [importProvidersFrom(BrowserModule)],
}).then((appRef) => {
  const element = createCustomElement(App, { injector: appRef.injector });
  customElements.define('ng-remote-component', element);
});
