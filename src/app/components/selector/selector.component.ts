import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { PaginationComponent } from "../pagination/pagination.component";
import { Record } from '../../Record';
import { RECORDS } from '../../records';
import { RecordService } from '../../record.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-selector',
  imports: [MatIconModule, PaginationComponent,CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {
  records: Record[] = RECORDS;
  currentPage=1;
  itemsPerPage=12;

  constructor(private recordService: RecordService) {}

  get paginatedData(){
    const start = (this.currentPage-1)* this.itemsPerPage;
    const end = start + this.itemsPerPage;
    console.log(start,end)
    return this.records.slice(start,end);
  }

  changePage(page : number){
    this.currentPage= page;
    const paginatedData = this.paginatedData; 
    this.recordService.updatePaginatedData(paginatedData);
  }

  ngOnInit() {
    this.changePage(this.currentPage); 
  }

  activeButton: string = 'drafts'; 
  setActive(button: string) {
    this.activeButton = button;
  }
}
