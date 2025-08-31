import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [RouterModule],
  exports: [
    LoadingSpinnerComponent
  ]
})

export class SharedModule { }
