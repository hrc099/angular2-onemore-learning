import { Component } from '@angular/core';

import { PostService } from './post.service';

@Component({
    selector: 'posts',
    template: `<h1>Posts</h1>
        <form (submit)="addPost()">
            <label>Title</label>
            <input type="text" [(ngModel)]="title" name="title">
            <br>
            <label>Body</label>
            <input type="text" [(ngModel)]="body" name="body">
            <input type="submit" value="Submit">
        </form>
        <ul>
            <li *ngFor="let post of posts">
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
            </li>
        </ul>
    `,
    providers: [PostService]
})
export class PostsComponent {
    private posts;
    private title;
    private body;
    private newPost;
    constructor(private postService: PostService) {
        this.posts = this.postService.getPosts();
    }

    addPost() {
        this.newPost = {
            title: this.title,
            body: this.body
        }

        this.postService.addPost(this.newPost);
    }
}