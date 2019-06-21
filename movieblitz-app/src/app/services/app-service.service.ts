import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable  } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  secrete: any;
  baseUrl = 'https://api.themoviedb.org/3/';
private url = 'https://api.themoviedb.org/3/movie/550?api_key=8e324389a8ec73157c366565cc96a207';

// private urltrending = 'https://api.themoviedb.org/3/trending/movie/week?api_key=8e324389a8ec73157c366565cc96a207';

private urlgener = 'https://api.themoviedb.org/3/genre/movie/list?api_key=8e324389a8ec73157c366565cc96a207&language=en-US';
  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe(data => this.secrete=data, error => console.log(error));
   }
   
   public getJSON(): Observable<any> {
    this.secrete = this.http.get("./assets/secret.json");
    return this.secrete
  }

  getTrendingMovies(forUrl: string, api_key: string, lang: string): Observable<any> {
    let compUrl = lang ? `${this.baseUrl}${forUrl}?api_key=${api_key}&language=${lang}`
                      : `${this.baseUrl}${forUrl}?api_key=${api_key}`;
    return this.http
        .get<any>(compUrl)
        .pipe(map(x => {
          return x
        }));
  }

  getGenere(): Observable<any> {
  return this.http
      .get<any>(`${this.urlgener}`)
      .pipe(map(x => {
        return x
      }));
}

idDetailurl = 'https://api.themoviedb.org/3/movie/299537?api_key=8e324389a8ec73157c366565cc96a207&language=en-US';
getdetailByID(id: number) : Observable<any> {
  return this.http
      .get<any>(`${this.idDetailurl}`)
      .pipe(map(x => {
        return x
      }));
}


}