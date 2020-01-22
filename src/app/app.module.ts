import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUPComponent } from './sign-up/sign-up.component'
import { appRoutes } from './routes';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContactFormComponent,
    SignUPComponent,
    
 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
