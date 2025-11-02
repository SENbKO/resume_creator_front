import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InformationInterface } from '../../model/information-interface';

@Component({
  selector: 'app-description',
  imports: [ReactiveFormsModule],
  templateUrl: './description.html',
  styleUrl: './description.css'
})
export class Description  implements InformationInterface{

  @Output() formValid = new EventEmitter<FormGroup>;

  addInfo(): void {
    const value = this.form.value.description;
    localStorage.setItem('description', value!);
    console.log(localStorage.getItem('description'));
  }

  form = new FormGroup(
    {
      description: new FormControl('', Validators.required)
    }
  )


  ngOnInit(){
    this.formValid.emit(this.form);
  }
}
