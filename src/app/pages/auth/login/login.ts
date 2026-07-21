import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl,ReactiveFormsModule } from '@angular/forms'
import { LoginUser } from '../../../components/shared/LoginUser.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
   private formBuilder = inject(FormBuilder);

    loginUserForm = this.formBuilder.group<LoginUser>({
      email: '',
      password: ''
    })

}
