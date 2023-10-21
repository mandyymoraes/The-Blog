import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.css']
})
export class LeftCardComponent implements OnInit {

  photo: string = ""
  cardTitle: string = ""
  cardDescription: string = ""
  @Input()
  id:string='0'


  constructor() { }

  ngOnInit(): void {
    const dadosCard = dataFake.find(card => card.id === this.id);
    if (dadosCard) {
      this.photo = dadosCard.photo;
      this.cardTitle = dadosCard.title;
      this.cardDescription = dadosCard.description;

  }

}
}
