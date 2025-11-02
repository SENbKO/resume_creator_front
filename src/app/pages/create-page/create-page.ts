import { Component, inject, ViewChild } from '@angular/core';
import { ProgressBar } from '../../components/progress-bar/progress-bar';

import { PersonalInformation } from "../../components/personal-information/personal-information";
import { ResumeSection } from '../../model/resume-section';
import { Experience } from "../../components/experience/experience";
import { FormGroup } from '@angular/forms';
import { PersonalInfo } from '../../model/personal-info';
import { Resume } from '../../model/resume';
import { ResumeService } from '../../services/resume-service';
import { ModelExperience } from '../../model/experience';
import { InformationInterface } from '../../model/information-interface';
import { Description } from '../../components/description/description';

@Component({
  selector: 'app-create-page',
  imports: [ProgressBar, PersonalInformation, Experience, Description],
  templateUrl: './create-page.html',
  styleUrl: './create-page.css'
})
export class CreatePage {
  resumeService = inject(ResumeService);

  sections : ResumeSection[] = [
    ResumeSection.PersonalInfo,
    ResumeSection.Experience,
    ResumeSection.Education,
    ResumeSection.Skills
  ]

  @ViewChild(PersonalInformation) personalInformation !: InformationInterface;
  @ViewChild(Experience) experience !: InformationInterface;
  @ViewChild(Description) description !: InformationInterface;
  currentForm : FormGroup | null = null;
  currentStepIndex = 0;

  nextStep(){
    this.addInfo();
    this.currentStepIndex++;
    

  }
  previousStep(){
    this.currentStepIndex--;
  }

  ngOnInit(){
    console.log(localStorage.getItem('resume'));
  }

  addInfo(){
    switch(this.currentStepIndex){
      case 0: 
          this.personalInformation.addInfo();
          break;  
      //         break;
      case 1: 
          this.description.addInfo();
          break;
      case 2:  
          this.experience.addInfo();
          break;
    }
  }
  
}
