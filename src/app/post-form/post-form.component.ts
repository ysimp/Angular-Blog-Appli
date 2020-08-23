import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm :FormGroup;

  constructor(private formBuilder : FormBuilder,
              private postsService : PostsService,
              private router : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm=this.formBuilder.group({
      title : ['',Validators.required],
      contenu : ['',Validators.required]
    })
  }

  onSubmit(){
    const title = this.postForm.get('title').value;
    const contenu = this.postForm.get('contenu').value;

    this.postsService.createNewPost(title,contenu);
    this.router.navigate(['/posts']);
  }

}
