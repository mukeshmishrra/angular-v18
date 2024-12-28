import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'student-list',
        pathMatch: 'full'
    },

    {
        path: 'student-list',
        component: StudentComponent
    },

    {
        path: 'create-student',
        component: CreateStudentComponent
    }
];
