import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  host: {
    "(click)": "handleClick( $event )"
  },
})
export class ModalComponent {

  private elementRef: ElementRef;
  private router: Router;

  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    router: Router,
    elementRef: ElementRef
  ) {
    this.elementRef = elementRef;
    this.router = router;
  }

  public closeModal($event: any) {
    //this.router.navigate([{ outlets: { modal: null } }]);
    this.router.navigate(['/app', { outlets: { modal: null } }]);
    this.modalClose.next($event);
    console.info('Closed modal')
  }

  // I handle a click on the modal-view.
  public handleClick(event: MouseEvent): void {

    // If the user clicked directly on the modal backdrop, let's treat that as a
    // desire to close the modal window - empty the auxiliary route.
    if (event.target === this.elementRef.nativeElement) {

      this.closeModal(event);

    }

  }

}
