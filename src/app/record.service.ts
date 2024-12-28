import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Record } from './Record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private paginatedDataSubject = new BehaviorSubject<Record[]>([]);
  paginatedData$ = this.paginatedDataSubject.asObservable();

  updatePaginatedData(data: Record[]) {
    this.paginatedDataSubject.next(data);
  }
}