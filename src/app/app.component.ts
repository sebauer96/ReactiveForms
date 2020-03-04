import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { userAsyncValidator } from './ValidatorsForms/Usuario.directive';
import { UserService } from './Services/user.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Formularios";

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService:UserService) {}

  public ngOnInit() {
    this.loginForm = this.fb.group({
      usuario: new FormControl("", [Validators.required], [userAsyncValidator(this.userService)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)])
    });
  }

  public sendLogin() {}
}
