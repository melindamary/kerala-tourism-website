import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import data from '../../../../public/data.json'
import { CarouselCaptionsComponent } from '../../components/carousel-captions/carousel-captions.component';

@Component({
  selector: 'app-individual-district',
  standalone: true,
  imports: [ImageCardComponent,CarouselCaptionsComponent],
  templateUrl: './individual-district.component.html',
  styleUrl: './individual-district.component.scss'
})
export class IndividualDistrictComponent {

  id:number = 1;
  districts:any = {}
  constructor(private route: ActivatedRoute){}

  getData(){
    this.districts = data.districts;
  }
  ngOnInit():void{
    this.getData();
    this.route.params.subscribe(params => {
      this.id = +params['id'] - 1; // (+) converts string 'id' to a number
    });
  }
}
