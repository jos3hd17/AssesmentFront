import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.sass']
})
export class CardFormComponent implements OnInit {

  @Input() idCard: number;
  @Output() deleteCard = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  closeForm() {
    this.deleteCard.emit(this.idCard);
  }

}
