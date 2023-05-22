import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      // Import the module into the application, with configuration
      AuthModule.forRoot({
        domain: 'dev-c51obv1iqljhar1k.us.auth0.com',
        clientId: 'Fax7sKMmuoRf0ATcaYGzMOnlHbwmYVlU',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
