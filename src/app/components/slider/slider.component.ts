import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Item } from '../item/item';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  @Input() items: Item[] = [];
  @Input() isBanner: boolean = false;

  currentSlideIndex: number = 0;

  // readonly makes the variable immutable, it can be read but not changed
  readonly imageSizes = IMAGE_SIZES;
  isMobile = this.deviceService.isMobile();

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
