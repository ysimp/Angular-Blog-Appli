import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup;
  errorMessage : string ;

  constructor(private formBuilder : FormBuilder,
              private authService : AuthService,
              private router      : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
   this.signUpForm = this.formBuilder.group({
     email : ['',[Validators.required, Validators.email]],
     password : ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
   });
  }

  onSubmit(){
    const email =this.signUpForm.get('email').value;
    const password =this.signUpForm.get('password').value;

    const user = new User(email,password);
    this.authService.createNewUser(user).then(

      () => {
        this.router.navigate(['/posts']);
      },

      (error) => {
        this.errorMessage = error ;
      }
    )
  }

}
