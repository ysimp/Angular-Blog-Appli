import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

 private postes : Post[] =[] ;

  

  postSubject = new Subject<Post[]>();

  // title: 'Mon premier post', 
        id = 0;
      contenu ='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' ;
      loveIts =  0;
      created_at =  new Date();

      
  constructor() {
    this.postes.push(new Post(this.postes.length,'Mon premier post',this.contenu,0,new Date()),
                      new Post(this.postes.length,'Mon deuxieme post',this.contenu,0,new Date()),
                      new Post(this.postes.length,'Mon Troisième post',this.contenu,0,new Date()),
    );
   }

   


  emitPost(){
    this.postSubject.next(this.postes.slice());
  }

  createNewPost(title: string, contenu :string) {

     const post = new Post(this.postes.length,title,contenu,0,new Date())
    console.log(post);
    this.postes.push(post);
    this.emitPost();
  }

  

  removePost(id: number){
    const index = this.postes.findIndex(
      (post)=>{
        if(post.id === id){
          return true;
        }
      }
    );

    this.postes.splice(index,1);
    this.emitPost();
  }

  modifyPost(post : Post){

    const index = this.postes.findIndex(
      (post)=>{
        if(post=== post){
          return true;
        }
      }
    );
    this.postes[index] = post ;
  }

}
