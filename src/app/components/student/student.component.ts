import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { createStudent } from '../../models/student.model';

@Component({
  selector: 'app-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
  standalone: true
})
export class StudentComponent {

 student : createStudent= {
     firstname: '',
     lastname: '',
     email: '',
     mobile: '',
     address: ''
 }

 onSubmit(form:any) {
    debugger
    if(form.valid){
        console.log(this.student);
    }
 }

 onReset(){
    this.student = {
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        address: '',
      };
 }

}
