import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './components/card-form/card-form.component';

@NgModule({
  declarations: [CardFormComponent],
  imports: [
    CommonModule
  ],
  exports: [CardFormComponent]
})
export class GenericsModule { }
