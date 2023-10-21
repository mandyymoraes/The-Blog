import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    photo:string=""
    cardTitle:string=""
    cardDescription:string=""
    private id:string | null = "0"
  
    constructor(){}
  
    ngOnInit(): void {
  
      this.setValuesToComponent(this.id)
        
    }
    setValuesToComponent(id:string | null){
      const result = dataFake.filter(articles => articles.id == id)[0]
  
      this.cardTitle = result.title
      this.cardDescription = result.description
      this.photo = result.photo
  
      }
  }

