import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private isAuth() {
    const checkAcc = window?.localStorage?.getItem('auth');
    return !!checkAcc;
  }

  private apiUrl = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  getData() {
    if (this.isAuth()) {
      return this.http.get(this.apiUrl!);
    } else {
      return [
        {
          error: 'Error',
        },
      ];
    }
  }
}
