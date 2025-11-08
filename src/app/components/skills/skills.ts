import { Component, EventEmitter, Output } from '@angular/core';
import { InformationInterface } from '../../model/information-interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  imports: [ReactiveFormsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements InformationInterface{
  @Output() formValid = new EventEmitter<FormGroup>;

  addInfo(): void {
    if(this.skills.length!==0){
      localStorage.setItem('skills', JSON.stringify(this.skills));
    }
    console.log('skills added');
    
  }

  ngOnInit(){
    this.formValid.emit(this.skillInput);
  }

  skills: string[] = [];
  skillInput = new FormGroup({
    skills: new FormControl('', Validators.required)
  });

  handleKeyDown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;

    // Add skill when spacebar is pressed and text isn't empty
    if (event.key === ',' && input.value.trim() !== '') {
      event.preventDefault(); // prevent actual space
      const skill = input.value.trim();

      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
        console.log(this.skills)
      }


      input.value = '';
    }

    // Remove last skill if Backspace pressed and input empty
    if (event.key === 'Backspace' && input.value === '' && this.skills.length > 0) {
      this.skills.pop();
    }
  }

  removeSkill(skill: string): void {
    this.skills = this.skills.filter(s => s !== skill);
  }

}
