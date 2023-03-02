import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutDetailModel } from '../Models/donut-detail';
import { DonutsModel } from '../Models/donuts-model';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {
  constructor(private http: HttpClient) { }

  getDonuts(): Observable<DonutsModel>{
    return this.http.get<DonutsModel>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }

  getDonutDetail(id: number): Observable<DonutDetailModel>{
    return this.http.get<DonutDetailModel>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }
}
