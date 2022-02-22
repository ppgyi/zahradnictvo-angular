import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [
    trigger('move', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }),
        animate(500)
      ])
    ])
  ]
})
export class AuthComponent implements OnInit {
  isLoading = false;
  error = null;
  typeVisible = "password";
  classVisible = "glyphicon glyphicon-eye-open";
  @ViewChild('f') loginForm!: NgForm;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.loginForm.valid){
      return;
    }
    const email = this.loginForm.value.login;
    const password = this.loginForm.value.password;

    this.isLoading= true;
    this.authService.login(email, password).subscribe(
      resData => {
        console.log(resData);
        this.isLoading= false;
        this.router.navigate(['/klienti']);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading= false;
      }
    );

    this.loginForm.reset();
    this.error = null;
  }

  clearEmail() {
    this.loginForm.form.patchValue({login:''})
  }

  eyeOpen() {
    this.typeVisible="text";
    this.classVisible="glyphicon glyphicon-eye-close";
  }

  eyeClose() {
    this.typeVisible="password";
    this.classVisible="glyphicon glyphicon-eye-open";
  }
}
