import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInX } from 'ng-animate';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../shared/services/toast.service';
import { I18nService } from '../../../shared/services/i18n.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('flipInX', [transition('* => *', useAnimation(flipInX, {
      params: { timing: .8, delay: 0 }
    }))])
  ],
})
export class LoginComponent implements OnInit, OnDestroy {

  flipInX: any;

  loginForm: FormGroup;
  loginFormDisable: boolean;

  constructor(
    private i18Service: I18nService,
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private toastService: ToastService
  ) {
    this.useTranslate();
  }

  ngOnInit(): void {
    this.i18Service.localeEvent.subscribe({
      next: locale => {this.useTranslate();}
    })
    this.loadLoginForm();
  }

  useTranslate(){
    this.translate.use(this.i18Service.getLanguage());
  }

  ngOnDestroy(): void {
    //this.i18Service.localeEvent.unsubscribe();
  }

  getToastMessage(type: number){
    if(type==1) return 'Autenticación exitosa';
    return 'Correo y/o contraseña incorrecta';
  }

  loadLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });
  }

  // Getters for loginForm
  get emailLoginForm() { return this.loginForm.get('email'); }
  get passwordLoginForm() { return this.loginForm.get('password'); }

  public errorMessages = {
    emailLoginForm: [{ type: 'required', message: 'Required message' }, { type: 'email', message: 'Email message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    passwordLoginForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
  };

  login() {
    this.loginFormDisable = true;
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    this.auth.login(email, password).subscribe({
      next: (res) => {
        if (res.status === 200) {
          console.log('Good login');
          this.toastService.openSuccessToast(this.getToastMessage(1),()=>{},()=>{})
        } else {
          console.log('Bad login');
          this.toastService.openSuccessToast(this.getToastMessage(0),()=>{},()=>{})
        }
      },
      error: (err) => {
        console.error(err);
        this.toastService.openSuccessToast(this.getToastMessage(0),()=>{},()=>{})
      }
    });
  }

}
