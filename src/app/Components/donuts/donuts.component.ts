import { Component } from '@angular/core';
import { DonutsModel } from 'src/app/Models/donuts-model';
import { DonutsService } from 'src/app/Services/donuts.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {
  constructor(private donutsService: DonutsService){}

  AllDonuts: DonutsModel = {} as DonutsModel;

  ngOnInit(){
    this.donutsService.getDonuts().subscribe((response: DonutsModel) => {
      this.AllDonuts = response;
      console.log(response);
    });
  }
}
