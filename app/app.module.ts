import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MyComponent } from './my-component.component';
import { PostsComponent } from './posts.component';
import { FilterArrayPipe } from './filter.pipe';
@NgModule({
  imports:      [ BrowserModule,
  FormsModule ],
  declarations: [ AppComponent,
  MyComponent,
  PostsComponent,
  FilterArrayPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
