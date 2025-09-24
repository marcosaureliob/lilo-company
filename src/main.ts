import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { Login } from './app/views/login/login';


bootstrapApplication(Login, {
  providers: [provideRouter(routes)],
});
