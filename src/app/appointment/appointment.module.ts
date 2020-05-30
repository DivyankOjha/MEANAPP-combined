import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { AppointmentListComponent } from "./appointment-list/appointment-list.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularMaterialModule } from "../angular.material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomeComponent, AppointmentListComponent, AppointmentComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class AppointmentModule {}
