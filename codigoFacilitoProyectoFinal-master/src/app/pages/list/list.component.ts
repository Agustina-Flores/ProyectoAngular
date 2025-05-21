import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/componentes/card/card.component';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'; 
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-list',  
  standalone: true,
  imports: [CommonModule,CardComponent,ReactiveFormsModule,InfiniteScrollModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards : Card[] = [];
  offset= 0;

  cardTextFormControl  = new FormControl("");
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardTextFormControl.valueChanges.pipe(
      debounceTime(1000)
    ) 
      .subscribe((res)  => { 
      console.log("RESPUESTA" , res);
      this.cards = [];
      this.searchCards(res); 
     });
     this.searchCards(); 
    }

    onScroll() { 
      console.log("scrolled");
      this.offset += 100;
      this.searchCards();
    }

    searchCards(cardName : string  | null = null) { 
      this.cardService.getCards(cardName, this.offset).subscribe({ 
        next:(data) => {   
        console.log('cards', data); 
        this.cards = [...this.cards,...data];}, //sumar para que se vean todas las cards
          error: (err) => console.error('Error cargando cards', err)
        });
    }
  }
  
 
