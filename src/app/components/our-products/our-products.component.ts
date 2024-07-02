import { Component } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent {

  productImages: { src: string, alt: string, visible: boolean }[] = [
    { src: 'image1.jpg', alt: 'Image 1', visible: true },
    { src: 'image2.jpg', alt: 'Image 2', visible: false },
    { src: 'image3.jpg', alt: 'Image 3', visible: false }
  ];
  constructor() { }
  ngOnInit(): void {
    setInterval(() => {
      this.showNextSlide();
    }, 2000); // Change image every 2 seconds
  }

  showNextSlide() {
    const currentIndex = this.productImages.findIndex(image => image.visible);
    const nextIndex = (currentIndex + 1) % this.productImages.length;

    this.productImages[currentIndex].visible = false;
    this.productImages[nextIndex].visible = true;
  }

}
