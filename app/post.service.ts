import { Injectable } from '@angular/core';

@Injectable()
export class PostService{
    private posts;

    constructor() {
        this.posts = [
            {
                title: 'Post One',
                body: 'Body for post one'
            },
            {
                title: 'Post Two',
                body: 'Body for post two'
            },
            {
                title: 'Post Three',
                body: 'Body for post three'
            }
        ];
    }

    getPosts() {
        return this.posts;
    }

    addPost(newPost) {
        this.posts.push(newPost);
    }
}