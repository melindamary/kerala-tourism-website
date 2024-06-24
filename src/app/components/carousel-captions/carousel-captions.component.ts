import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-captions',
  standalone: true,
  imports: [],
  templateUrl: './carousel-captions.component.html',
  styleUrl: './carousel-captions.component.scss'
})
export class CarouselCaptionsComponent {
  @Input() attractions:any = {};
}
