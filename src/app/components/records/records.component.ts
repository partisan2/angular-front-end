import { Component, Input } from '@angular/core';
import { Record } from '../../Record';
import { CommonModule } from '@angular/common';
import { RecordService } from '../../record.service';



@Component({
  selector: 'app-records',
  imports: [CommonModule],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent {
  records: Record[] = [];

  constructor(private recordService: RecordService) {}

  ngOnInit() {
    this.recordService.paginatedData$.subscribe((data) => {
      this.records = data; 
    });
  }
  
}
