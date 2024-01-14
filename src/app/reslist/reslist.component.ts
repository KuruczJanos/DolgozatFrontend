import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reslist',
  standalone: true,
  imports: [CommonModule, HomeComponent,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './reslist.component.html',
  styleUrl: './reslist.component.css'
})
export class ReslistComponent implements OnInit {
  foglalasok: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
      this.getFoglalasok();
  }
  getFoglalasok() {
    this.api.getFoglalasok().subscribe({
      next: data => {
        this.foglalasok = data;
      },
      error: err => {
        console.log('Hiba! Az adatok letöltése sikertelen!');
      }
    });
}
title = 'app-root';
}
