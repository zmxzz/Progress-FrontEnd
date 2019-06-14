import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PanelService {
    pageSource = new BehaviorSubject<string>('');

    changePage(message: string): void {
      this.pageSource.next(message);
    }

    getPage(): Observable<string> {
        return this.pageSource.asObservable();
    }
}
