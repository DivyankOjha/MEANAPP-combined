import { Component, OnInit } from "@angular/core";
import { AppointmentModel } from "../appointment-model";
import { AppointmentsService } from "../appointments.service";
import { mergeMap } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-appointment-list",
  templateUrl: "./appointment-list.component.html",
  styleUrls: ["./appointment-list.component.css"],
})
export class AppointmentListComponent implements OnInit {
  public loading = true;
  public errorMsg: string;
  public successMsg: string;
  public appointments: AppointmentModel[];
  public columns = ["appointmentDate", "name", "email", "cancel"];

  constructor(
    private appointmentService: AppointmentsService,
    private spinner: NgxSpinnerService
    
  ) {}

  ngOnInit() {
    if (this.loading === true) {
      this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1500);
    }

    this.appointmentService.getAppointments().subscribe(
      (appointments: AppointmentModel[]) => {
        this.appointments = appointments;
        this.loading = false;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
        this.loading = false;
      }
    );
  }

  cancelAppointment(id: string) {
    this.appointmentService
      .cancelAppointment(id)
      .pipe(mergeMap(() => this.appointmentService.getAppointments()))
      .subscribe(
        (appointments: AppointmentModel[]) => {
          this.appointments = appointments;
          this.successMsg = "Successfully cancelled appointment";
        },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        }
      );
  }
}
