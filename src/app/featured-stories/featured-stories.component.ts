import { Component, OnInit } from '@angular/core';
import { FEATURE_STORIES } from '../../mock/featured-stories';

@Component({
  selector: 'app-featured-stories',
  templateUrl: './featured-stories.component.html',
  styleUrls: ['./featured-stories.component.sass']
})
export class FeaturedStoriesComponent implements OnInit {
  stories = FEATURE_STORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
