import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
  selector:'[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }

})
export class AutoGrowDirective{

  constructor(private el:ElementRef, private rederer:Renderer){

  }

  onFocus(){
    this.rederer.setElementStyle(this.el.nativeElement, 'width', '200px');
  }

  onBlur(){
    this.rederer.setElementStyle(this.el.nativeElement, 'width', '120px');
  }
}
