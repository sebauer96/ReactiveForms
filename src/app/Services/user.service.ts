import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public checkUser(usuario: string) {
    // simulate http.get()
    return of({ isUserAvailable: usuario !== 'prueba'});
  }
  
}
