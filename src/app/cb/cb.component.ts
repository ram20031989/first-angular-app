import { Component, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cb',
  templateUrl: './cb.component.html',
  styleUrls: ['./cb.component.css']
})
export class CbComponent {

  body = this.el.nativeElement.ownerDocument.body;

  activateColor = 'white';

  @Output()
  colorChange = new EventEmitter<string>();
  // EventEmitter is for child parent communication

  buttonname = 'Change Background';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  changeBg() {

    // this.body.nativeElement.style.background = 'lightblue';

    // this
    // .renderer
    // .selectRootElement('body')
    // .style
    // .background = 'lightblue';
    // Erases innerHTML

    this.colorChange.emit(this.activateColor);

    this.activateColor === 'white'
      ? this.activateColor = 'lightblue'
      : this.activateColor = 'white'

    this.renderer.setStyle(
      this.body,
      'background',
      this.activateColor
    )

  }
}
