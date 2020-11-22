import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IFeatureSlide } from 'src/mock/IFeatureSlide';
import { F_SLIDES } from '../../mock/featured-slides';

@Component({
  selector: 'app-featured-slider',
  templateUrl: './featured-slider.component.html',
  styleUrls: ['./featured-slider.component.sass']
})
export class FeaturedSliderComponent implements OnInit {
  slides = F_SLIDES;
  selectedSlide;

  customOptions: OwlOptions = {
    autoplay: false,
    autoplaySpeed: 3000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    center: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor(private modalService: NgbModal) { }

  open(content, slide: IFeatureSlide) {
    this.selectedSlide = slide;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(() => {
    }, () => {
      this.selectedSlide = undefined;
    });
  }

  ngOnInit(): void {
  }

}
