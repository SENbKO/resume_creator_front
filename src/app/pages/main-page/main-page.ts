import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { ResumeService } from '../../services/resume-service';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
  resumeService = inject(ResumeService);
  router = inject(Router);
  transmit(){
    // const resumtId = uuidv4();
    // localStorage.setItem('resumeId', resumtId);
    const resume = this.resumeService.createEmptyResume();
    const resumeId = resume.id;
    this.router.navigate([`/create-page/${resumeId}`]);
  }
}
