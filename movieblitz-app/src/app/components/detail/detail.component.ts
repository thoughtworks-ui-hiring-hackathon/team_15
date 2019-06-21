import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  params: any = {};
  detailsObj: any = {};

  constructor(private route: ActivatedRoute,
    private appServiceService: AppServiceService) {
    this.route.params.subscribe( params => {
      this.params = params; console.log(params);
     });
  }

  ngOnInit() {
    this.getMoviewDetails(this.params['id']);
  }

  getMoviewDetails(id: number) {
    this.appServiceService.getdetailByID(id).subscribe((res) => {
      this.detailsObj = res;
    });
  }

}
