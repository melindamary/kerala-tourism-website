import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import data from '../../../../public/data.json'
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [CardComponent,ImageCardComponent,FooterComponent],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.scss'
})
export class DistrictsComponent {

  districtsData:any = [];
  heading:string = "Districts of Kerala";
  imgSrc:string = 'https://i.pinimg.com/originals/71/0b/3f/710b3f5fa6cfab7aa7a232cdefb59be2.jpg';
  
  getData(){
    this.districtsData = data.districts;
  }

    ngOnInit(){
      this.getData();
      console.log("Districts:",this.districtsData)
    }
    
}
