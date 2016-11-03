import {Component} from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
        <h1>{{title}}</h1>
        <img [src]="imageLink">
        <br>
        <button (click)="runClick()">Click</button>
        <input type="text" [(ngModel)]="note" (keyup.enter)="saySomething($event)">
        {{note}}
        `
})

export class MyComponent {
    private title;
    private imageLink;
    private note;

    constructor() {
        this.title = 'Hello world!';
        this.imageLink = 'http://placehold.it/350x150';
        this.note;
    }

    runClick() {
        console.log('Click!');
    }

    saySomething(e) {
        console.log(e.target.value)
    }
}