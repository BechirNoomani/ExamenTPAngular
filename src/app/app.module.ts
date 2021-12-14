import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PostListComponantComponent } from './post-list-componant/post-list-componant.component';
import { PostListItemComponantComponent } from './post-list-item-componant/post-list-item-componant.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponantComponent,
    PostListItemComponantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
