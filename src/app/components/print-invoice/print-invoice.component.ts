import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrintInvoiceComponent implements OnInit {

  imageBase64!: string;
  @ViewChild('printSection', { static: false }) el!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.getBase64ImageFromUrl('https://res.cloudinary.com/ddk36bupk/image/upload/v1637441357/default/macallan-project/Genpro.png')
      .then((data: any) => {
        this.imageBase64 = data;
      })
  }

  makePdf() {
    const quality = 10 // Higher the better but larger file
    html2canvas(this.el.nativeElement,
      { scale: quality }
    ).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.html(canvas, {
        callback: (pdf) => {
          pdf.save("invoice.pdf");
        }
      });
      /*pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save("invoice.pdf");*/
    });

  }

  async getBase64ImageFromUrl(imageUrl: string) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }

}
