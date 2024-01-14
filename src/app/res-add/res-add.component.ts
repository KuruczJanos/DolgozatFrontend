import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-res-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './res-add.component.html',
  styleUrl: './res-add.component.css'
  
})


export class ResAddComponent{

}

