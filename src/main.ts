import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




  class Points  //class declation
  {
 public h:number;
  y:string;

  constructor( x?:number,y?:string) //optional
  {
this.h=x;
  }
draw()  
{
return this.h;

}
  }
  interface Point   //interface declation 
  {
    x:number,y:number
  }

let  p=new Points; 
p.h=3
//let z=p.h;

 
 console.log(p);


function x (p:Point){console.log(p.x);} //simple function

x({x:30000,y:2});


let s=(m,v)=>console.log(m+v); //arrow function 
s(3,4)
