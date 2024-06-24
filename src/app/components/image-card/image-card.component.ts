import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {
 @Input() imgSrc:string = '';
 @Input() heading:string = 'heading';
 headingClass:string = '';
 cardOverlayClass:string = '';

 ngOnInit(){
  this.headingClass = this.heading=='Districts of Kerala'?'':'district-title';
  this.cardOverlayClass = this.heading=='Districts of Kerala'?'':'district-card-img-overlay';
 }
}
