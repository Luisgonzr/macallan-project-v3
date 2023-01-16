import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-customer-action-profile',
  templateUrl: './customer-action-profile.component.html',
  styleUrls: ['./customer-action-profile.component.css']
})
export class CustomerActionProfileComponent implements OnInit {

  @Input() customer!: any;
  showCard: boolean = false;

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getUserType() === 'INTEGRATOR' ? this.showCard = false : this.showCard = true;
  }

}
