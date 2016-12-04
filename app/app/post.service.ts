import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostService{
    private posts;
    private url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
        
    }

    getPosts(): Observable<Post[]> {
        return this.http.get(this.url)
        .map(res => res.json());
    }

    addPost(newPost) {
        
    }
}