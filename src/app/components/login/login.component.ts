import { Component, NgModule, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})

export class LoginComponent implements OnInit {
  


  constructor(private authService: AuthService) {
    
  }

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
      
    });
  }

  

  login(): void {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe();
  }
}