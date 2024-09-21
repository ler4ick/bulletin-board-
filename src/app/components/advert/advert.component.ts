import { Component } from '@angular/core';

@Component({
  selector: 'app-advert',
  standalone: true,
  imports: [],
  templateUrl: './advert.component.html',
  styleUrl: './advert.component.scss',
})
export class AdvertComponent {
  public title: string = '';
  public imageUrl: string = '';
  public price: number = 0;
  public address: string = '';
  public time: string = '';

  // TODO: Finish component's props handling

  // constructor(
  //   title: string,

  //   imageUrl: string,

  //   address: string,

  //   time: string,

  //   price: number
  // ) {
  //   this.address = address;
  //   this.imageUrl = imageUrl;
  //   this.price = price;
  //   this.time = time;
  //   this.title = title;
  // }
}
