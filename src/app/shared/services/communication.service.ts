import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  private emitChangeSource = new Subject<any>();

  /**
   * Observable to be subscribed in order to get the data.
   * Ex:this.communication.changeEmitted$.subscribe(ObjectHere);
   */
  changeEmitted$ = this.emitChangeSource.asObservable();

  /**
   * Communication service is used to change data between components without the
   * need of Input or Outputs.
   * @param change Any object/data that is going to be communicated to a component.
   */
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

}

/*
USAGE EXAMPLE

this.subscription = this.communication.changeEmitted$.subscribe(data => {
  if (data.type === 'myType') {
    // Some action here
  }
});

// Important to unsubscribe on destroy
ngOnDestroy(): void {
    this.subscription?.unsubscribe();
}

*/

