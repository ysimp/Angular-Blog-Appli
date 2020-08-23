import { Component,Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

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

}
