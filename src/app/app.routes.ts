import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { CreatePage } from './pages/create-page/create-page';

export const routes: Routes = [
    {path: '', component: MainPage},
    {path: 'create-page/:id', component: CreatePage}
];
