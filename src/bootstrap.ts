import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

// Optional: expose mount/unmount APIs for React host
(window as any).mountAngularApp = async (element: HTMLElement) => {
  const hostEl = document.createElement('app-root');
  element.appendChild(hostEl);
  const moduleRef = await platformBrowserDynamic().bootstrapModule(App);
  return moduleRef;
};

(window as any).unmountAngularApp = async () => {
  // Optional cleanup logic
  const el = document.querySelector('app-root');
  el?.remove();
};
