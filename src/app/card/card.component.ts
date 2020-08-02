import { Component, OnInit, Input } from '@angular/core';
import { MovieAbstract } from '../../interfaces/imdb';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent  {
  @Input() film: MovieAbstract;
}
