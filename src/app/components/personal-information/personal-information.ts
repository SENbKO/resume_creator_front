import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { PersonalInfo } from '../../model/personal-info';
import { InformationInterface } from '../../model/information-interface';

@Component({
  selector: 'app-personal-information',
  imports: [ReactiveFormsModule],
  templateUrl: './personal-information.html',
  styleUrl: './personal-information.css'
})
export class PersonalInformation implements InformationInterface {
  
  addInfo(): void {
    const value = this.mainInfoGroup.value;
    const personalInfo = new PersonalInfo(value.firstName!, value.secondName!, value.email!, value.position!);
    console.log("add personal info");
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));

  }

  @Output() formReady = new EventEmitter<FormGroup>;

  personalInfo : PersonalInfo = JSON.parse(localStorage.getItem("personalInfo")!);
  
  mainInfoGroup = new FormGroup({
    firstName : new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
    secondName : new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    email : new FormControl('', [Validators.required, Validators.email] ),
    position : new FormControl('', Validators.required)
  })


  ngOnInit(){
    if(!!this.personalInfo){
      this.mainInfoGroup = new FormGroup({
        firstName : new FormControl(this.personalInfo.firstName, [Validators.required]),
        secondName : new FormControl(this.personalInfo.secondName, [Validators.required]),
        email : new FormControl(this.personalInfo.email, [Validators.required, Validators.email] ),
        position : new FormControl(this.personalInfo.position, Validators.required)
      })
    }
    
    setTimeout(()=>{
      this.formReady.emit(this.mainInfoGroup);
    }, 0);
    
  }
  

  submit(){
   
  }
}

// if(!this.mainInfoGroup.valid){
//   console.log('Not valid');
// }else{
//   for (const [key, control] of Object.entries(this.mainInfoGroup.controls)){
//     console.log(`Key ${key}, value ${control.value}`);
//     localStorage.setItem(key, control.value!);
//   }
//   const userInfo = {
//     firstName: localStorage.getItem('firstName'),
//     secondName: localStorage.getItem('secondName'),
//     email: localStorage.getItem('email'),
//     position: localStorage.getItem('position')
//   }
//   this.httpClient.post(`${this.url}/api/v1/generate`, userInfo, {responseType: 'blob'})
//   .subscribe(blob=>{
//     const url = window.URL.createObjectURL(blob);
//     window.open(url); 
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'resume.pdf';
//     a.click();
//   });
//   console.log('submitted');
// }