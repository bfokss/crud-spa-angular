import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../Car';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://localhost:5000/cars';
  private isSorted: boolean = false;
  //?_sort=brand&order=desc
  //?_sort=brand
  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  sortCarsId(): Observable<Car[]> {
    if (this.isSorted) {
      this.isSorted = false;
      const url = `${this.apiUrl}?_sort=id&_order=asc`;
      return this.http.get<Car[]>(url);
    }
    else {
      this.isSorted = true;
      const url = `${this.apiUrl}?_sort=id&_order=desc`;
      return this.http.get<Car[]>(url);
    }
  }

  sortCarsBrand(): Observable<Car[]> {
    if (this.isSorted) {
      this.isSorted = false;
      const url = `${this.apiUrl}?_sort=brand&_order=asc`;
      return this.http.get<Car[]>(url);
    }
    else {
      this.isSorted = true;
      const url = `${this.apiUrl}?_sort=brand&_order=desc`;
      return this.http.get<Car[]>(url);
    }
  }

  sortCarsModel(): Observable<Car[]> {
    if (this.isSorted) {
      this.isSorted = false;
      const url = `${this.apiUrl}?_sort=model&_order=asc`;
      return this.http.get<Car[]>(url);
    }
    else {
      this.isSorted = true;
      const url = `${this.apiUrl}?_sort=model&_order=desc`;
      return this.http.get<Car[]>(url);
    }
  }

  sortCarsYear(): Observable<Car[]> {
    if (this.isSorted) {
      this.isSorted = false;
      const url = `${this.apiUrl}?_sort=year&_order=asc`;
      return this.http.get<Car[]>(url);
    }
    else {
      this.isSorted = true;
      const url = `${this.apiUrl}?_sort=year&_order=desc`;
      return this.http.get<Car[]>(url);
    }
  }

  deleteCar(car: Car): Observable<Car> {
    const url = `${this.apiUrl}/${car.id}`;
    return this.http.delete<Car>(url);
  }

  updateCar(car: Car): Observable<Car> {
    const url = `${this.apiUrl}/${car.id}`;
    return this.http.put<Car>(url, car, httpOptions);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car, httpOptions);
  }
}
