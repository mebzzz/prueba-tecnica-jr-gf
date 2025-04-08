import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../app/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
