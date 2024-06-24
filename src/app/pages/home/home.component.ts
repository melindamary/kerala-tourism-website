import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardSliderComponent } from '../../components/card-slider/card-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,CardSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
