import { Component, OnInit } from '@angular/core';
import { CARDS } from '../../mock/feature-cards';

@Component({
  selector: 'app-featured-contents',
  templateUrl: './featured-contents.component.html',
  styleUrls: ['./featured-contents.component.sass']
})
export class FeaturedContentsComponent implements OnInit {
  cards = CARDS;

  constructor() { }

  ngOnInit(): void {
  }

}
