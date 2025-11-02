import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InformationInterface } from '../../model/information-interface';
import { ModelExperience } from '../../model/experience';

@Component({
  selector: 'app-experience',
  imports: [ReactiveFormsModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements InformationInterface {

  addInfo(): void {
    const array: FormArray = this.experiences;
    let experiences : ModelExperience[] = [];

    for (let control of array.controls) {
      const experienceGroup = control as FormGroup;  // cast to FormGroup
      const experience :  ModelExperience =
       new ModelExperience(experienceGroup.get('company')?.value, experienceGroup.get('position')?.value, experienceGroup.get('description')?.value);
      console.log(experienceGroup.get('company')?.value);
      experiences.push(experience);
    }

    localStorage.setItem('experiences', JSON.stringify(experiences));
  }

  @Output() formReady = new EventEmitter<FormGroup>;

  formBuilder = inject(FormBuilder);
  form !: FormGroup;

  ngOnInit(){
    this.form = this.formBuilder.group({
      experiences : this.formBuilder.array([this.createExperience()])
    })

    this.formReady.emit(this.form);

  }

  get experiences() : FormArray{
    return this.form.get('experiences') as FormArray;
  }

  createExperience() : FormGroup{
    return this.formBuilder.group({
      position: ['', [Validators.required]],
      company: ['', Validators.required],
      description: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    })
    
  }
  addExperience(): void {
    this.experiences.push(this.createExperience());
  }
  removeExperience(index: number): void {
    this.experiences.removeAt(index);
  }
}
