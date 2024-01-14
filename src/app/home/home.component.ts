import { Component} from '@angular/core';
import { ReslistComponent } from '../reslist/reslist.component';
import { CommonModule} from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ResAddComponent } from '../res-add/res-add.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReslistComponent, CommonModule,RouterOutlet,RouterLink,RouterLinkActive,ResAddComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'app-reslist';
}

