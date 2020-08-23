import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth;
  authSubscription :Subscription;
  constructor(private authService :AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.getAuth().subscribe(
      (auth :boolean) =>{
        this.isAuth= auth;
        console.log(this.isAuth);
      },

      (error)=>{
        console.log(error);
      }
       
    );
    this.authService.emitAuth();
  }

}
