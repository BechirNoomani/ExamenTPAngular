import { Component,Input, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-post-list-item-componant',
  templateUrl: './post-list-item-componant.component.html',
  styleUrls: ['./post-list-item-componant.component.css']
})
export class PostListItemComponantComponent implements OnInit {
  @Input() BlogName    !:string;
  @Input() BlogContent !:string;
  @Input() BlogItslove !:number;

  constructor() { }

  ngOnInit() {
  }
  pluslove (){
    this.BlogItslove = this.BlogItslove+1
    console.log(this.BlogItslove);
  }
  moinslove(){
    this.BlogItslove = this.BlogItslove-1
    console.log(this.BlogItslove);
  }
}
