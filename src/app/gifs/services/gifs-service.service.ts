import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string='kJI79AWzgyCpeZPX0bD77QAM7xQYVgrK';
  get historial() {

    return [...this._historial];
  }

  constructor( private http : HttpClient){}

 buscarGifs(query: string) {

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=kJI79AWzgyCpeZPX0bD77QAM7xQYVgrK&q=dragon ball z&limit=10')
    .subscribe( resp =>{
      console.log(resp);
      
    })

  }

}
