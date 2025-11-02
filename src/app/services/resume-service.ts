import { Injectable } from '@angular/core';
import { Resume } from '../model/resume';
import { v4 as uuidv4 } from 'uuid';
import { PersonalInfo } from '../model/personal-info';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resumes : {[id:string] : Resume} = {};
  createEmptyResume() : Resume {
    const newResume =  {
      id : uuidv4(),
      personalInfo : new PersonalInfo('', '', '', ''),
      experiences : []
    }
    this.resumes[newResume.id] = newResume;
    localStorage.setItem("resume", JSON.stringify(newResume));
    return newResume;
  }
}
