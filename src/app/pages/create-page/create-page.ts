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

@Component({
  selector: 'app-create-page',
  imports: [ProgressBar, PersonalInformation, Experience],
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
      // const controls = this.personalInformation.mainInfoGroup.controls;
      //         const personalInfo = new PersonalInfo(controls.firstName.value!, controls.secondName.value!, controls.email.value!, controls.position.value!);
      //         localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
      //         break;
      case 1:  this.experience.addInfo();
      //const experienceControls = this.experience.experiences;
      //         console.log('adding experience');
      //         let experiences : ModelExperience[] = [];
      //         for(const control of experienceControls.controls){
      //           const group = control as FormGroup;
      //           const companyControl = group.get('company');
      //           const positionControl = group.get('position');
      //           const descriptionControl = group.get('description');
              
      //           if (companyControl && positionControl && descriptionControl) {
      //             const experience: ModelExperience = new ModelExperience(
      //               companyControl.value,
      //               positionControl.value,
      //               descriptionControl.value
      //             );
      //             experiences.push(experience);
      //           }
      //           localStorage.setItem('experiences', JSON.stringify(experiences));
                
      //         }
          break;
    }
  }
  
}
