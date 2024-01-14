import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormControl, FormsModule, NgModel } from '@angular/forms';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
              provideClientHydration(),
              importProvidersFrom(HttpClientModule),
              provideHttpClient(withFetch()),
              FormsModule,
              NgModel,
              FormControl,
              NgModule]
};
