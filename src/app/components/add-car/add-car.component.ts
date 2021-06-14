import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { Car } from '../../Car';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @Output() onAddCar: EventEmitter<Car> = new EventEmitter();

  brand: string;
  model: string;
  year: number;
  showAddCar: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddCar = value);
  }

  ngOnInit(): void {
  }

  onSubmit(cars_form: NgForm) {
    if ((!this.brand) || (!this.model) || (!this.year)) {
      alert('Please fill input areas!');
      return;
    }
    if (this.year.toString().length != 4) {
      alert('Please enter proper year!');
      return;
    }

    if (isNaN(this.year)) {
      alert('Year must be a number');
      return;
    }


    const newCar = {
      brand: this.brand,
      model: this.model,
      year: this.year
    }

    this.onAddCar.emit(newCar);

    cars_form.reset();
  }

}
