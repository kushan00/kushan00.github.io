import { Component, Inject, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { register } from 'swiper/element';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

import { Card } from '../_models/card';


register();

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalComponent implements AfterViewInit {
  card: Card;

  swiperConfig = {
    pagination: {
      clickable: true,
      type: 'bullets',
      renderBullet: (index: number, className: string) => {
        return `<span class="${className} swiper-pagination-bullet-custom"></span>`;
      }
    },
    navigation: true,
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  };

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { card: Card }
  ) {
    this.card = data.card;
  }

  ngAfterViewInit() {
    const swiperEl = document.querySelector(
      'swiper-container'
    ) as HTMLElement & { initialize: () => void };

    if (swiperEl) {
      Object.assign(swiperEl, this.swiperConfig);
      swiperEl.initialize();
    }
  }
}
