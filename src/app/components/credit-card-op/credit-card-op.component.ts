import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../../config/constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../core/http/api.service';
import { ToastService } from '../../../shared/services/toast.service';
declare var OpenPay: any;
declare var Card: any;

@Component({
  selector: 'app-credit-card-op',
  templateUrl: './credit-card-op.component.html',
  styleUrls: ['./credit-card-op.component.css']
})
export class CreditCardOpComponent implements OnInit {

  cardCreateForm: FormGroup;
  cardCreateFormDisable: boolean;
  deviceSessionId: any;
  pendingAmount!:number;

  constructor(private api:ApiService, private toastService:ToastService) { }

  ngOnInit(): void {
    this.setOpenpay();
    this.loadCardForm();
    this.initGeneralData();
  }

  loadCardForm() {
    this.cardCreateForm = new FormGroup({
      holder_name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      card_number: new FormControl('', [Validators.required, Validators.min(0), Validators.max(9999999999), Validators.minLength(16), Validators.maxLength(19), Validators.pattern('[0-9 ]+')]),
      expiration_year: new FormControl('', [Validators.required, Validators.min(22), Validators.max(99), Validators.minLength(2), Validators.maxLength(2)]),
      expiration_month: new FormControl('', [Validators.required, Validators.min(0), Validators.max(9999999999), Validators.minLength(2), Validators.maxLength(2)]),
      cvv2: new FormControl('', [Validators.required, Validators.min(0), Validators.max(9999), Validators.minLength(3), Validators.maxLength(4)]),
      create_subscription: new FormControl(true,[])
    });
    this.startCardPlugin();
  }

  // Getters for cardCreateForm
  get holder_nameCardCreateForm() { return this.cardCreateForm.get('holder_name'); }
  get card_numberCardCreateForm() { return this.cardCreateForm.get('card_number'); }
  get expiration_yearCardCreateForm() { return this.cardCreateForm.get('expiration_year'); }
  get expiration_monthCardCreateForm() { return this.cardCreateForm.get('expiration_month'); }
  get cvv2CardCreateForm() { return this.cardCreateForm.get('cvv2'); }

  initGeneralData() {
    this.cardCreateFormDisable = false;
    this.getOpenBalanceAmount();
  }

  public errorMessages = {
    holder_nameCardCreateForm: [{ type: 'required', message: 'Campo es obligatorio' }, { type: 'minlength', message: 'El valor ingresado es muy corto' }, { type: 'maxlength', message: 'El valor ingresado es muy largo' },],
    card_numberCardCreateForm: [{ type: 'required', message: 'Campo es obligatorio' }, { type: 'min', message: 'El valor ingresado no es válido' }, { type: 'max', message: 'El valor ingresado no es válido' }, { type: 'minlength', message: 'El valor ingresado es muy corto' }, { type: 'maxlength', message: 'El valor ingresado es muy largo' },],
    expiration_yearCardCreateForm: [{ type: 'required', message: 'Campo es obligatorio' }, { type: 'min', message: 'El valor ingresado no es válido' }, { type: 'max', message: 'El valor ingresado no es válido' }, { type: 'minlength', message: 'El valor ingresado es muy corto' }, { type: 'maxlength', message: 'El valor ingresado es muy largo' },],
    expiration_monthCardCreateForm: [{ type: 'required', message: 'Campo es obligatorio' }, { type: 'min', message: 'El valor ingresado no es válido' }, { type: 'max', message: 'El valor ingresado no es válido' }, { type: 'minlength', message: 'El valor ingresado es muy corto' }, { type: 'maxlength', message: 'El valor ingresado es muy largo' },],
    cvv2CardCreateForm: [{ type: 'required', message: 'Campo es obligatorio' }, { type: 'min', message: 'El valor ingresado no es válido' }, { type: 'max', message: 'El valor ingresado no es válido' }, { type: 'minlength', message: 'El valor ingresado es muy corto' }, { type: 'maxlength', message: 'El valor ingresado es muy largo' },],
  };


  createCard() {
    this.cardCreateFormDisable = true;
    const card_number = this.cardCreateForm.get('card_number').value;
    const card_number_clean = card_number.replace(/\s/g, "");
    const data = {
      holder_name: this.cardCreateForm.get('holder_name').value,
      card_number: card_number_clean,
      expiration_year: this.cardCreateForm.get('expiration_year').value,
      expiration_month: this.cardCreateForm.get('expiration_month').value,
      cvv2: this.cardCreateForm.get('cvv2').value,
    };
    OpenPay.token.create(data,
      (res: any) => {
        let token_id = res['data']['id'];
        let obj = {
          token_id: token_id,
          device_session_id: this.deviceSessionId
        }
        this.api.create('card', obj).subscribe((res) => {
          this.toastService.openSuccessToast('Tu tarjeta ha sido agregada', () => { }, () => { });
          this.loadCardForm();
          this.cardCreateFormDisable = false;
        }, (err) => {
          this.toastService.openErrorToast('Tu tarjeta no pudo ser agregada', () => { }, () => { });
          console.log(err);
        });
      },
      (err: any) => {
        console.log(err);
      });
  }




  setOpenpay() {
    OpenPay.setId(AppConstants.OPENPAY_MERCHANT_ID);
    OpenPay.setApiKey(AppConstants.OPENPAY_PUBLIC_KEY);
    OpenPay.setSandboxMode(1);
    this.deviceSessionId = OpenPay.deviceData.setup();
    //console.log('Session ID: '+this.deviceSessionId);
  }

  onCreateTokenSucceeded(token: any, deviceSessionId: any) {
    let obj = {
      token_id: token.id,
      device_session_id: deviceSessionId

    }
    this.api.create('card', obj).subscribe((res) => {
      this.toastService.openSuccessToast('Tu tarjeta ha sido agregada', () => { }, () => { });
    }, (err) => {
      this.toastService.openErrorToast('Tu tarjeta no pudo ser agregada', () => { }, () => { });
      console.log(err);
    });
  }

  startCardPlugin() {
    const card = new Card({
      // a selector or DOM element for the form where users will
      // be entering their information
      form: '#cc-form', // *required*
      container: '.card-wrapper', // *required*
      formSelectors: {
        expiryInput: 'input[name="month-expiry"], input[name="year-expiry"]'
      },
      // if true, will log helpful messages for setting up Card
      debug: false // optional - default false
    });
  }

  getOpenBalanceAmount(){
    this.api.rcpList('getpendingtopaidamount').subscribe((res)=>{
      this.pendingAmount = res.data.total_open_balance;
    },(err)=>{
      console.log(err);
    });
  }


}
