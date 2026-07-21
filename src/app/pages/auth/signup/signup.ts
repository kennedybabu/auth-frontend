import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl,ReactiveFormsModule } from '@angular/forms'
import { SignupUser } from '../../../components/shared/SignUp.interface';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
    private formBuilder = inject(FormBuilder);

    signupForm = this.formBuilder.group<SignupUser>({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })

}
