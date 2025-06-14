import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/interfaces/card.interface';
 
@Component({
  selector: 'app-card',
  standalone: true ,  
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;

  constructor(private router: Router ) { }

  ngOnInit(): void {

     
  }
  goToCard()
  { 
    this.router.navigate([`./card/${this.card.id}`])
  }
}
