import { Component, Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.scss']
})
export class ModalpopupComponent {
  @Input() imageUrl: any;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

}
