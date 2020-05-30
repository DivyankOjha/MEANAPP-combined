import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppointmentsService } from "../appointments.service";
import { AppointmentModel } from "../appointment-model";
import { Router } from "@angular/router";

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.css"],
})
export class AppointmentComponent implements OnInit {
  public successMsg: string;
  public errorMsg: string;
  appointmentDate: string;
  name: string;
  email: string;

  constructor(
    private appointmentService: AppointmentsService,
    private router: Router
  ) {}

  ngOnInit() {}

  createAppointment() {
    this.successMsg = "";
    this.errorMsg = "";
    this.appointmentService
      .createAppointment(this.appointmentDate, this.name, this.email)
      .subscribe(
        (createdAppointment: AppointmentModel) => {
          this.appointmentDate = "";
          this.name = "";
          this.email = "";
          const appointmentDate = new Date(
            createdAppointment.appointmentDate
          ).toDateString();
          this.successMsg =
            `Appointment Booked Successfully for ` + appointmentDate;
        },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        }
      );
  }

  onbookedAppointmentList() {
    this.router.navigate(["/appointmentlist"]);
  }
}

//   createAppointment(form: NgForm) {
//   //   this.successMsg = "";
//   //   this.errorMsg = "";

//   //   this.appointmentService.createAppointment(
//   //     this.appointmentDate,
//   //     this.email,
//   //     this.name
//   //   );

//   //   console.log(form.value.appointmentDate, form.value.email, form.value.name);
//   // }
// }
