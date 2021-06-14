import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddCar: boolean = false;
  private subject = new Subject<any>();


  constructor() { }

  toggleAddCar(): void {
    this.showAddCar = !this.showAddCar;
    this.subject.next(this.showAddCar);
  }


  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
