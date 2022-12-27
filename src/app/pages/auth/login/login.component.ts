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
import { AlertMessages } from '../../../config/alertMesagges';

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
export class LoginComponent implements OnInit {

  flipInX: any;

  loginForm!: FormGroup;
  loginFormDisable!: boolean;
  loginType: string = 'INTEGRATOR';

  constructor(
    private i18Service: I18nService,
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.translate.use(this.i18Service.getLanguage());
    this.i18Service.localeEvent.subscribe({
      next: locale => { this.useTranslate(); }
    })
    this.loadLoginForm();
    this.checkLoginType();
  }

  useTranslate() {
    console.log('login');
    this.translate.use(this.i18Service.getLanguage());
  }

  checkLoginType(){
    const loginType = this.activatedRoute.snapshot.paramMap.get('loginType');
    if(loginType === 'insider'){
      this.loginType = 'INSIDER';
    }
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
    const message = this.i18Service.getMessage(AlertMessages.AUTH);
    this.loginFormDisable = true;
    let email = this.loginForm.get('email')!.value;
    let password = this.loginForm.get('password')!.value;
    this.auth.login(email, password, this.loginType).subscribe({
      next: (res) => {
        if (res.statusCode === 200) {
          console.log('Good login');
          this.toastService.openSuccessToast(message['SUCCESS']['LOGIN'], () => {
            setTimeout(() => {
              this.router.navigate(['/app']);
            }, 1500);
          }, () => { })
        } else {
          console.log('Bad login');
          this.toastService.openErrorToast(message['ERROR']['LOGIN'], () => { }, () => { })
          this.loginFormDisable = false;
        }
      },
      error: (err) => {
        console.error(err);
        this.toastService.openErrorToast(message['ERROR']['LOGIN'], () => { }, () => { })
        this.loginFormDisable = false;
      }
    });
  }

}
