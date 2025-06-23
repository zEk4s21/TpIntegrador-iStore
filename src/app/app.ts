import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

export const App = () => bootstrapApplication(AppComponent, appConfig);