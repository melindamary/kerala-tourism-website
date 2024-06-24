import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor(private router:Router){}
  @Input() title:string = 'title'
  @Input() description:string = 'description'
  @Input() imgSrc:string = ''
  @Input() id:number = 1

  goToDistrictPage(){
    this.router.navigate(['/individual-district',this.id])
  }
}
