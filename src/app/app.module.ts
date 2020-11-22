import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FeaturedContentsComponent } from './featured-contents/featured-contents.component';
import { FeaturedStoriesComponent } from './featured-stories/featured-stories.component';
import { DownloadSectionComponent } from './download-section/download-section.component';
import { FeaturedSliderComponent } from './featured-slider/featured-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { InspirationsComponent } from './inspirations/inspirations.component';
import { StoriesSectionComponent } from './stories-section/stories-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    SearchBarComponent,
    FeaturedContentsComponent,
    FeaturedStoriesComponent,
    DownloadSectionComponent,
    FeaturedSliderComponent,
    NewsletterComponent,
    InspirationsComponent,
    StoriesSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
