import { UserService } from './../../../services/user-service';
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
    private userSevice = inject(UserService);

    signupForm = this.formBuilder.group<SignupUser>({
      firstName: '',
      lastName: '',
      username:'',
      phone:'',      
      email: '',
      password: ''
    })

    createUser() {
      if(this.signupForm.invalid) {
        console.log('invalid')
      }
      console.log(this.signupForm.value)
      this.userSevice.createUser(this.signupForm.getRawValue()).subscribe({
        next: (user) => {
          console.log(user)
        },
        error: (err) => {
          console.log(err)
        }
      })
    }

}
