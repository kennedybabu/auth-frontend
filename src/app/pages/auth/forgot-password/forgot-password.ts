import { Component, inject } from '@angular/core';
import { ResetPassword } from '../../../components/shared/ResetPassword.interface';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
   private formBuilder = inject(FormBuilder);

    resetPasswordForm = this.formBuilder.group<ResetPassword>({
      email: ''
    })

}
