import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Routes } from '@angular/router'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {

  Form=new FormGroup({
username:new FormControl ('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
password:new  FormControl ('',Validators.required)
  })
  constructor() { }


  ngOnInit() {
  }

}
