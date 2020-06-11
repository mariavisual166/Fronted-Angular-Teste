import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({
    email: new FormControl(null, [Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$'), Validators.required]),
    password: new FormControl(null, [Validators.minLength(6), Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }

}
