import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  // @Input()  title : string;
  // @Input()  contenu : string;
  // @Input()  loveIts : number;
  // @Input()  created_at: Date;
  @Input()  index : number;
  @Input()  post :Post;
 

  constructor(private postsService : PostsService) { }

  ngOnInit() {
  }

  loveIt(){
    this.post.loveIts = this.post.loveIts + 1;
    this.postsService.modifyPost(this.post);
  }

  dontLoveIt(){
    this.post.loveIts = this.post.loveIts - 1;
    this.postsService.modifyPost(this.post);
  }

  getColor(){
    if(this.post.loveIts > 0){
      return "green";
    }
    else if(this.post.loveIts < 0) {
      return "red";
    }
    else{
      return "";
    }
    
  }

  onDelete(){
    console.log(this.index)
    this.postsService.removePost(this.index);
 
  };

}
