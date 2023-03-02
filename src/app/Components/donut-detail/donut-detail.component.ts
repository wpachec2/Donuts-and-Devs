import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutDetailModel } from 'src/app/Models/donut-detail';
import { DonutsService } from 'src/app/Services/donuts.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent {
  result: DonutDetailModel = {} as DonutDetailModel

  constructor(private route: ActivatedRoute, private donutsService: DonutsService){}

  ngOnInit(){
    let routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));
    
    this.donutsService.getDonutDetail(id).subscribe((response: DonutDetailModel) => {
      this.result = response;
      console.log(response);
    })
  }
}

