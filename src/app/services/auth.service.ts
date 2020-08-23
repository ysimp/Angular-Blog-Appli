import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   users : User[] =[];
   private isAuth =false;
  postSubject = new Subject<User[]>();

  authSubject = new Subject<boolean>();


  constructor() {
    this.users.push(new User('test@test.com','testtest'))
   }

   emitAuth(){
    this.authSubject.next(this.isAuth.valueOf());
   }

   getAuth(){
     return of(this.isAuth.valueOf());
   }

   

   createNewUser(userC:User){
     
      return new Promise (
        (resolve, reject) => {
  
          const index = this.users.findIndex(
            (user) =>{
              if(user.email === userC.email && user.password === userC.password){
                const exist =false;
                console.log('exist :' + exist);
              }
            }
          )
  
          if(index === -1){
            this.users.push( userC );
            console.log(this.users);
            this.isAuth=true;
            console.log('exist : false');
            this.emitAuth()
            resolve();
          }
          else{
            this.isAuth=false;
            console.log('exist : false');
            this.emitAuth();
            reject('This User is already existing !');
          }
  
  
        }
      )
   }

   signIn(userSgn:User){
    return new Promise (
      (resolve, reject) => {

        const index = this.users.findIndex(
          (user) =>{
            if(user.email === userSgn.email && user.password === userSgn.password)
            {
              this.isAuth =true;
              this.emitAuth();
              console.log(this.isAuth);
              resolve();
            }
          }
        )
          console.log(index);
        if(index === -1){
          this.isAuth =false;
          console.log(this.isAuth);
          this.emitAuth();
          reject();
        }

      }
    )

   
  }

  signOut(){
    this.isAuth =false;
    console.log(this.isAuth);
    this.emitAuth();
  }
}
