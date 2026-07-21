import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl,ReactiveFormsModule } from '@angular/forms'
import { SignupUser } from '../../../components/shared/SignUp.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
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
