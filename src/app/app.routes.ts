import { RouterModule, Routes } from '@angular/router';
import { ReslistComponent } from './reslist/reslist.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'reslist', component: ReslistComponent },
    { path: 'home', component: HomeComponent},
]
RouterModule.forRoot(routes)
