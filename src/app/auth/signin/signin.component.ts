import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm : FormGroup;
  errorMessage :string;

  constructor(private formBuilder : FormBuilder,
              private autService  : AuthService,
              private router      : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.signInForm = this.formBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }

  onSubmit(){

    const email =this.signInForm.get('email').value;
    const password =this.signInForm.get('password').value;

    const user = new User(email,password);
    this.autService.signIn(user).then(
      () => {
        this.router.navigate(['/posts']);
      },
      (error) => {
        this.errorMessage =error;
      }
    )
  }

}
