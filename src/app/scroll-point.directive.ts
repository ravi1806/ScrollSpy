import {Directive, ElementRef, HostListener, Inject, Input, Renderer2, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appScrollPoint]'
})
export class ScrollPointDirective {
  @Input() appScrollPoint: number;
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScroll = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(windowScroll);
    if (windowScroll > 0 && windowScroll < 476) {
      this.document.getElementById('first').classList.add('active');
    } else {
      this.document.getElementById('first').classList.remove('active');
    }
    if (windowScroll > 477 && windowScroll < 954) {
      this.document.getElementById('second').classList.add('active');
    } else {
      this.document.getElementById('second').classList.remove('active');
    }
    if (windowScroll > 955 && windowScroll < 1484) {
      this.document.getElementById('third').classList.add('active');
    } else {
      this.document.getElementById('third').classList.remove('active');
    }
  }
}
