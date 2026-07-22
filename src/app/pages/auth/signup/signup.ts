import { UserService } from './../../../services/user-service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl,ReactiveFormsModule } from '@angular/forms'
import { SignupUser } from '../../../components/shared/SignUp.interface';
import { RouterLink } from "@angular/router";
import { HotToastService } from '@ngxpert/hot-toast';
import { UserResponse } from '../../../components/shared/UserResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
    private formBuilder = inject(FormBuilder);
    private userSevice = inject(UserService);
    private toast = inject(HotToastService)
    private router = inject(Router)
    

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
      this.userSevice.createUser(this.signupForm.getRawValue()).subscribe({
        next: (user: UserResponse) => {
          this.router.navigate(["/"])
          this.toast.success(user.message)
        },
        error: (err) => {
          console.log(err)
          this.toast.error(err)
        }
      })
    }

}
