import { Component, OnInit } from '@angular/core';
import { Car } from '../../Car';
import { CARS } from '../../mock-cars';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  brandName: any;
  faTimes = faTimes;
  faPencil = faPencilAlt;
  faTrash = faTrash;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => this.cars = cars);
  }

  onDelete(car: Car) {
    this.carService.deleteCar(car).subscribe(() => this.cars = this.cars.filter((c) => c.id !== car.id));
  }

  onUpdate(car: Car) {
    this.carService.updateCar(car).subscribe(() => this.cars = this.cars.filter((c) => c.id === car.id));
  }

  onFilterBrand() {
    if (this.brandName == "") {
      this.ngOnInit();
    }
    else {
      this.cars = this.cars.filter(response => {
        return response.brand.toLocaleLowerCase().match(this.brandName.toLocaleLowerCase())
      })
    }
  }

  onSortId() {
    this.carService.sortCarsId().subscribe((cars) => this.cars = cars);
  }

  onSortBrand() {
    this.carService.sortCarsBrand().subscribe((cars) => this.cars = cars);
  }

  onSortModel() {
    this.carService.sortCarsModel().subscribe((cars) => this.cars = cars);
  }

  onSortYear() {
    this.carService.sortCarsYear().subscribe((cars) => this.cars = cars);
  }

  addCar(car: Car) {
    this.carService.addCar(car).subscribe((car) => (this.cars.push(car)));
  }
}
