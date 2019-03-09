import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  fb: FormBuilder;
  cards: number[];
  cardValue = 0;
  constructor() { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario(): void {
    this.form = this.fb.group({});
    this.form.addControl('name', this.fb.control('', []));
    this.form.addControl('address', this.fb.control('', []));
    this.form.addControl('city', this.fb.control('', []));
    this.form.addControl('phone', this.fb.control('', []));
  }

  addCard() {
    const cardValue = this.cardValue += 1;
    const json = {
      ...this.cards,
      cardValue
    };
    this.cards = json;
  }

  deleteCard() {
  
  }
}
