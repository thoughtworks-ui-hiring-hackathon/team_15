import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestMovies: any;
  trndingMovies: any;
  genereList: any;
  customGenereObj: any;
  apiKey: string;
  baseUrl: string;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor(
    private AppServiceService: AppServiceService,
    private Router: Router
  ) { }

  ngOnInit() {
    this.baseUrl = 'https://image.tmdb.org/t/p/original/';
    
    this.AppServiceService.getJSON().subscribe(data => {
      this.apiKey = data['api_key'];
      this.fetchTrendingMovies();
      this.fetchLatesMovies();
    });

    this.getGenere();

  }

  getGenere() {
    this.AppServiceService.getGenere().subscribe((res) => {
      let genereList = res.genres ? res.genres : {};
      this.customGenereObj = {};
      genereList.forEach(element => {
        this.customGenereObj[element['id']] = element['name'];
      });
    });
  }

  fetchLatesMovies() {
    this.AppServiceService.getTrendingMovies('movie/latest', this.apiKey, 'en-US').subscribe((res) => {
      this.latestMovies = res.results ? res.results : [];
    });
  }

  fetchTrendingMovies() {
    this.AppServiceService.getTrendingMovies('trending/movie/week', this.apiKey, undefined).subscribe((res) => {
      this.trndingMovies = res.results ? res.results : [];
    });
  }

}
