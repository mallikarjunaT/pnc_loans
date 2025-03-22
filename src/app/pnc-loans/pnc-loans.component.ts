import { AfterViewInit, Component } from '@angular/core';
import { LabelType, NgxSliderModule, } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-pnc-loans',
  imports: [NgxSliderModule, FormsModule, NgClass, RouterLink],
  templateUrl: './pnc-loans.component.html',
  styleUrl: './pnc-loans.component.css'
})
export class PncLoansComponent implements AfterViewInit {


  filters: any;
  value: string
  pemi = {
    value:
      25 as number
  }
  remi = {
    value: 8.5 as number
  }
  temi = {
    value: 20 as number
  }
  memi = {
    value: 240 as number
  }

  query = {
    amount: "",
    interest: "",
    tenureYr: "",
    tenureMo: ""
  }

  result = {
    emi: "",
    interest: "",
    total: ""
  }
  yrToggel: boolean;
  poptions: any = {
    floor: 1,
    ceil: 100,
    translate: (value: number, label: LabelType): any => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>L</b>';
        case LabelType.High:
          return value + '<b>L</b>';
        default:
          return value + '<b>L</b>';
      }
    }
  };
  roptions: any = {
    floor: 5,
    ceil: 20,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>%</b>';
        case LabelType.High:
          return value + '<b>%</b>';
        default:
          return value + '<b>%</b>';
      }
    }
  };
  toptions: any = {
    floor: 1,
    ceil: 30,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>Yr</b>';
        case LabelType.High:
          return value + '<b>Yr</b>';
        default:
          return value + '<b>Yr</b>';
      }
    }
  };
  moptions: any = {
    floor: 1,
    ceil: 360,
    translate: (value: any, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>Mo</b>';
        case LabelType.High:
          return value + '<b>Mo</b>';
        default:
          return value + '<b>Mo</b>';
      }
    }
  };
  constructor() {
    this.yrToggel = true;
    this.value = "0";
  }

  ngAfterViewInit() {
    this.update();
  }

  tbupdate(id: any) {
    if (id == 0) {
      this.pemi.value = Number(this.query.amount) / 100000;
    }
    else if (id == 1) {
      this.remi.value = Number(this.query.interest);
    }
    else if (id == 2) {
      this.temi.value = Number(this.query.tenureYr);
    }
    else if (id == 3) {
      this.memi.value = Number(this.query.tenureMo);
    }
    this.update();
  }

  update() {

    var loanAmount = Number(this.pemi.value) * 100000;
    var numberOfMonths = (this.yrToggel) ? (Number(this.temi.value) * 12) : Number(this.memi.value);
    var rateOfInterest = Number(this.remi.value);
    var monthlyInterestRatio = (rateOfInterest / 100) / 12;

    this.query.amount = loanAmount.toString();
    this.query.interest = rateOfInterest.toString();
    if (this.yrToggel) {
      this.query.tenureYr = this.temi.value.toString();
    }
    else {
      this.query.tenureMo = this.memi.value.toString();
    }

    var top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
    var bottom = top - 1;
    var sp = top / bottom;
    var emi = ((loanAmount * monthlyInterestRatio) * sp);
    var full = numberOfMonths * emi;
    var interest = full - loanAmount;
    var int_pge = (interest / full) * 100;

    this.result.emi = emi.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.result.total = full.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.result.interest = interest.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
