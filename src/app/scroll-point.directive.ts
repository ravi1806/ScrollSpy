import {Directive, ElementRef, HostListener, Inject, Input, Renderer2, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appScrollPoint]'
})
export class ScrollPointDirective {
  @Input() appScrollPoint: number;
  @ViewChild('section1') section1;
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScroll = this.document.documentElement.scrollTop;
    console.log(windowScroll);
    if (windowScroll > this.appScrollPoint) {
      console.log('reached here');
      // add class to the native element
      console.log(this.el);
      console.log(this.section1);
      this.renderer.setAttribute(this.el.nativeElement, 'flag', 'hi');
    } else {
      // remove class from native element
      this.renderer.addClass(this.el.nativeElement, 'acti');
    }
  }
}
