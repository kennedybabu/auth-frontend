import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl,ReactiveFormsModule } from '@angular/forms'
import { LoginUser } from '../../../components/shared/LoginUser.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user-service';
import { HotToastService } from '@ngxpert/hot-toast';
import { UserResponse } from '../../../components/shared/UserResponse';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);
  private toast = inject(HotToastService);
  private router = inject(Router);

  loginUserForm = this.formBuilder.group<LoginUser>({
    email: '',
    password: ''
  })

  loginUser() {
    if(this.loginUserForm.invalid) {
      this.toast.warning("Fill the form to continue")
    }

    this.userService.loginUser(this.loginUserForm.getRawValue()).subscribe({
      next: (resp: UserResponse) => {
        this.router.navigate(["/"])
        this.toast.success(resp.message)
      },
      error: (err) => {
        this.toast.error(err)
      }
    })
  }  

}
