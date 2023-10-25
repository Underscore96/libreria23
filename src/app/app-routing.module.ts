import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [

    {
      path: 'add',
      component: AddBookComponent
    },
    {
      path: 'display',
      component: DisplayBookComponent
    },
    {
      path: 'detail/:id',
      component: DetailComponent
    },
    {
      path: '**',
      redirectTo: 'display'
    },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
