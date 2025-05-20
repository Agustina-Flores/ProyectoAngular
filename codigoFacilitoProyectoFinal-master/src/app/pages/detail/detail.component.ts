import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Observable ,tap} from 'rxjs';
import { CardService } from 'src/app/services/card.service';
import { Card } from '../../interfaces/card.interface'; 
import { CommonModule } from '@angular/common';
import { MarketNamePipe } from 'src/app/pipes/market-name.pipe';
  

@Component({
  selector: 'app-detail', 
  standalone: true,
  imports: [CommonModule,MarketNamePipe],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 
  id:string| null = null;   
  cards$! : Observable<Card>;
  constructor(private route:ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get("id") || "";
    this.cards$ = this.cardService.getCard(this.id)
    .pipe(tap(console.log));
    }  
  }



 