import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

// Modals
import { CreateProductComponent } from './modals/create-product/create-product.component';
import { CreateClientComponent } from './modals/create-client/create-client.component';
import { CreateFirstItemComponent } from './modals/create-first-item/create-first-item.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "app"
  },
  {
    path: "app",
    children: [
      // Views
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },

      // Modals
      {
        path: 'new-product',
        outlet: 'modal',
        component: CreateProductComponent,
      },
      {
        path: 'new-client',
        outlet: 'modal',
        component: CreateClientComponent,
      },
      {
        path: 'new-first',
        outlet: 'modal',
        component: CreateFirstItemComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
