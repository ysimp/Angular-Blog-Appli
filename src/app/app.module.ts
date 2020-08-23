import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostsService } from './services/posts.service';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './services/auth.service';


const appRoutes : Routes =[
  {path:'auth/signup', component:SignupComponent},
  {path:'auth/signin', component:SigninComponent},
  { path: 'posts',  component: PostListComponentComponent},
  { path: 'new',  component: PostFormComponent},
  { path: '', redirectTo: 'posts', pathMatch :'full'},
  { path: '**', redirectTo: 'posts',}
  
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    HeaderComponent,
    PostFormComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
