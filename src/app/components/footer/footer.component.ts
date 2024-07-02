import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  menuItems = [
    { name: 'HOME', links: true },
    { name: 'ABOUT', links: false },
    { name: 'PRODUCTS', links: false },
    { name: 'SERVICES', links: false },
    { name: 'GALLERY', links: false },
    { name: 'CONTACT US', links: false }
  ];

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


}
