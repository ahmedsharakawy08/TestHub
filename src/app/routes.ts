import { Routes } from '@angular/router'
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUPComponent } from './sign-up/sign-up.component'
export const appRoutes: Routes = [
    { path: 'contact', component: ContactFormComponent ,


},
  
{ path: '', component: SignUPComponent ,


},


];