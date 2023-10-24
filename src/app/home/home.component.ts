import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  isAuth = window?.localStorage?.getItem('auth');
  errorScreen =
    'You are not allowed to access this site. Please get login to get authentication';

  constructor(
    private dataService: DataService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    // @ts-ignore
    await this?.dataService?.getData()?.subscribe((data) => {
      this.data = data;
      this.cdr.detectChanges();
    });
  }

  redirect() {
    this.router.navigate(['/login']);
  }
}
