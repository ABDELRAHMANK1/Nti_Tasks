import { Routes } from '@angular/router';
import {PostlistComponent } from './posts/postlist/postlist.component';
import { PostcreateComponent } from './posts/postcreate/postcreate.component';
import {PostupdateComponent } from './posts/postupdate/postupdate.component';

export const routes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts', component: PostlistComponent },
    { path: 'create', component: PostcreateComponent  },
    
    { path: 'update/:id', component: PostupdateComponent },

];

;
