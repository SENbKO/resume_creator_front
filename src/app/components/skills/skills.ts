import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skills: string[] = [];

  handleKeyDown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;

    // Add skill when spacebar is pressed and text isn't empty
    if (event.key === ' ' && input.value.trim() !== '') {
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
