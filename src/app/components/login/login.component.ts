import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!:FormGroup
  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }
  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),

    })
  }
}
