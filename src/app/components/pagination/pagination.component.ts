import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-pagination',
  imports: [CommonModule,MatIconModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
 @Input() totalItems?: any;
 @Input() currentPage: any;
 @Input() itemsPerPage: any;
 @Output() onClicked: EventEmitter<number> = new EventEmitter();

 totalPages = 0;
 pages: number[] = [];

 constructor(){
  
 }

 ngOnInit():void{
  if (this.totalItems) {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array.from({length: this.totalPages},(_,i)=>i+1)
  }
 }

 pageClicked(page: number){
  if(page<=this.totalPages && page>=1){
    this.onClicked.emit(page);
  }
 }
}
