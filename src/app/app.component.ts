import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  sectionId: string;
  isActive: boolean;
}
interface GalleryImage {
  thumbnail: string;
  full: string;
}

interface SocialMediaLink {
  name: string;
  icon: string;
  link: string;
}

interface ProductImage {
  src: string;
  alt: string;
  visible: boolean;
}

interface GalleryImage {
  thumbnail: string;
  full: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentImageIndex: number = 0;
  showModal = false;
  selectedImage = '';
  menuItems: MenuItem[] = [
    { name: 'HOME', sectionId: 'home', isActive: true },
    { name: 'ABOUT', sectionId: 'about', isActive: false },
    { name: 'PRODUCTS', sectionId: 'products', isActive: false },
    { name: 'GALLERY', sectionId: 'gallery', isActive: false },
    { name: 'CONTACT US', sectionId: 'contact', isActive: false }
  ];

  setActive(index: number) {
    this.menuItems.forEach((item, i) => {
      if (i === index) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
  }

  socialMediaLinks: SocialMediaLink[] = [
    { name: 'Instagram', icon: 'assets/instaIcon.png', link: '' },
    { name: 'Facebook', icon: 'assets/fbicon.png', link: '' },
    { name: 'Youtube', icon: 'assets/youtubeIcon.png', link: '' }
  ];

  productImages: ProductImage[] = [
    { src: 'assets/container_1.jpg', alt: 'Image 1', visible: true },
    { src: 'assets/container_4.jpg', alt: 'Image 4', visible: false },
    { src: 'assets/container_9.jpg', alt: 'Image 9', visible: false },
    { src: 'assets/container_11.jpg', alt: 'Image 11', visible: false },
    { src: 'assets/container_10.jpg', alt: 'Image 11', visible: false },
    { src: 'assets/container_12.jpg', alt: 'Image 11', visible: false },
  ];

  galleryImages: GalleryImage[] = [
    { thumbnail: 'assets/container_12.jpg', full: 'assets/container_12.jpg' },
    { thumbnail: 'assets/container_1.jpg', full: 'assets/container_1.jpg' },
    { thumbnail: 'assets/container_4.jpg', full: 'assets/container_4.jpg' },
    { thumbnail: 'assets/container_9.jpg', full: 'assets/container_9.jpg' },
    { thumbnail: 'assets/container_4.jpg', full: 'assets/container_4.jpg' },
    { thumbnail: 'assets/container_10.jpg', full: 'assets/container_10.jpg' },
    { thumbnail: 'assets/container_12.jpg', full: 'assets/container_12.jpg' },
    { thumbnail: 'assets/container_1.jpg', full: 'assets/container_1.jpg' },
  ];

  isImageViewerOpen = false;
  zoomLevel = 1;

  openImageViewer(index: number): void {
    this.currentImageIndex = index;
    this.isImageViewerOpen = true;
    this.zoomLevel = 1; // Reset zoom level when opening a new image
  }

  closeImageViewer(): void {
    this.isImageViewerOpen = false;
  }

  // zoomIn(): void {
  //   this.zoomLevel += 0.1;
  // }

  // zoomOut(): void {
  //   if (this.zoomLevel > 0.1) {
  //     this.zoomLevel -= 0.1;
  //   }
  // }

  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.startImageCarousel();
  }

  startImageCarousel(): void {
    setInterval(() => {
      this.showNextSlide();
    }, 1000);
  }

  showNextSlide(): void {
    const currentIndex = this.productImages.findIndex(image => image.visible);
    const nextIndex = (currentIndex + 1) % this.productImages.length;

    this.productImages[currentIndex].visible = false;
    this.productImages[nextIndex].visible = true;
  }

  openModal(imageUrl: string): void {
    this.selectedImage = imageUrl;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }


  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
