import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.css']
})
export class RightCardComponent implements OnInit{

  photo:string =""
  cardTitle:string=""
  @Input()
  id:string=''
  
  constructor(){}

  ngOnInit(): void {
    
    const dadosCard = dataFake.find(card => card.id == this.id)
    if (dadosCard) {
      this.photo = dadosCard.photo;
      this.cardTitle = dadosCard.title;

  }
      
  }
 


}
