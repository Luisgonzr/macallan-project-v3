import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/config/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright: string = "";

  constructor() { }

  ngOnInit(): void {
    this.copyright = AppConstants.SOFTWARE_COPYRIGHT;
  }

}
