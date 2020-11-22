import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SLIDES } from 'src/mock/slides';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ISlide } from 'src/mock/ISlide';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})

export class HeroComponent implements OnInit {
  @Input() public user;
  slides = SLIDES;
  selectedSlide: ISlide;

  constructor(private modalService: NgbModal, ngCarouselConfig: NgbCarouselConfig) {
    ngCarouselConfig.interval = 3000;
    ngCarouselConfig.showNavigationArrows = false;
    ngCarouselConfig.showNavigationIndicators = false;
  }

  open(content, slide: ISlide) {
    this.selectedSlide = slide;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(() => {
    }, () => {
      this.selectedSlide = undefined;
    });
  }

  ngOnInit(): void {
  }
}
