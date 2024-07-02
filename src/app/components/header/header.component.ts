import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems = [
    { name: 'HOME', isActive: false },
    { name: 'ABOUT', isActive: false },
    { name: 'PRODUCTS', isActive: false },
    { name: 'SERVICES', isActive: false },
    { name: 'GALLERY', isActive: false },
    { name: 'CONTACT US', isActive: false }
  ];
  setActive(index: number) {
    this.menuItems.forEach((item, i) => item.isActive = i === index ? true : false);
  }

  socialMediaLinks = [
    {
      name: 'Instagram',
      icon: 'assets/instaIcon.png',
      link: ''
    },
    {
      name: 'Facebook',
      icon: 'assets/fbicon.png',
      link: ''
    },
    {
      name: 'Youtube',
      icon: 'assets/youtubeIcon.png',
      link: ''
    },
  ];

  // setActive(selectedItem:any) {
  //   this.menuItems.forEach(item => item.isActive = false);
  //   selectedItem.isActive = true;
  // }
}
