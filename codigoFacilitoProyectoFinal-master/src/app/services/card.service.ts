import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Card } from '../interfaces/card.interface';
import { map } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class CardService {

  URL="https://db.ygoprodeck.com/api/v7/cardinfo.php";
  constructor(private http:HttpClient) { }

  getCards(name:string | null, offset =0)
  { 
    const params: any ={ 
      num:100, 
      offset
    };
    if(name) params.fname = name;
    
    //solo 100 cards,paginacion
    return this.http
    .get<Card[]>(this.URL,{params})
    .pipe(map((res :any ) => res.data));
  }
  getCard(id:string)
  {
    const params = {
      id: id
    };
    return this.http
    .get(this.URL, { params })
    .pipe(map((res :any ) => res.data[0]));
  }
}
