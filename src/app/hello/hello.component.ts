import { Component, Input, ElementRef, Renderer2, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit, OnChanges {

  @Input() name: string;
  // Input is for parent child communication

  @Input() hcolor = 'pink';

  text = 'Hello';

  @Output()
  touch = new EventEmitter<string>();

  constructor(private renderer: Renderer2, private el: ElementRef) {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'grey');
  }

  ngOnInit() {
    this
      .renderer
      .setStyle(this.el.nativeElement, 'color', this.hcolor);
  }

  ngOnChanges() {
    this
      .renderer
      .setStyle(this.el.nativeElement, 'color', this.hcolor);
  }

  emit() {
    this.touch.emit('touched');
  }

}
