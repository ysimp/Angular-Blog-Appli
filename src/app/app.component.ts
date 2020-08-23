import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from './models/post';
import { PostsService } from './services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'blogAppli';

  postes : Post[]=[];
  postesSubscription : Subscription

  constructor(private postsService : PostsService){ }

  ngOnInit() {
    this.postesSubscription= this.postsService.postSubject.subscribe(
      (postes :Post[]) =>{
        this.postes =postes;
      }
    )
      
    this.postsService.emitPost();
  }


  ngOnDestroy(){
    this.postesSubscription.unsubscribe();
  }

  // @Input() posts :Array;
  
  //   postes =[
  //   {
  //     title: 'Mon premier post',  
  //     contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+
  //               'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',  
  //     loveIts: 0,   
  //     created_at: new Date()
  //   }, 
  //   {
  //     title: 'Mon deuxième post',  
  //     contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+
  //               'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //     loveIts: 0,   
  //     created_at: new Date()
  //   }, 
  //   {
  //     title: 'encore un post',  
  //     contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+
  //               'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //     loveIts: 0,   
  //     created_at: new Date()
  //   }
  // ]
}
