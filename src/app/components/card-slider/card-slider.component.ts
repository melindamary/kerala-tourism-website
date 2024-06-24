import { Component } from '@angular/core';
import data from '../../../../public/images.json'

@Component({
  selector: 'app-card-slider',
  standalone: true,
  imports: [],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.scss'
})
export class CardSliderComponent {

  keralaImages:any = {};
  getData():void{
    this.keralaImages = data.kerala;
  }
  ngOnInit(){
    this.getData();
    console.log(this.keralaImages)
  }
}
