import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { NgForm } from "@angular/forms";

import { Subscription } from "rxjs";
import { SendEmailsService } from "./send-emails.service";
//import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-send-email",
  templateUrl: "./send-email.component.html",
  styleUrls: ["./send-email.component.css"],
})
export class SendEmail implements OnInit {
  useremail: String;
  private authStatusSub: Subscription;
  userIsAuthenticated = false;
  private currentuserdata = [];
  currentuser: string;
  isLoading = false;

  constructor(
    private authService: AuthService,
    //private spinner: NgxSpinnerService,
    private sendservice: SendEmailsService
  ) {}
  // getuseremail() {
  //   const useremail = this.authService.getuseremail();
  //   console.log(useremail);
  // }
  ngOnInit() {
    // this.getuseremail;
    this.useremail = this.authService.getuseremail();
    console.log(this.useremail);
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
        this.useremail = this.authService.getuseremail();
        //  localStorage: this.useremail;
        this.currentuser = this.authService.getuseremail();
        this.currentuserdata = [...this.currentuserdata];
        console.log(this.currentuser);
      });

    //console.log(localStorage.token);
  }

  //   getcurrentuseremail() {
  //     //    useremail = this.authService.getuseremail();
  //     console.log(localStorage);
  //   }

  onSendEmail(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.sendservice.sendemail(
      form.value.useremail,
      form.value.remail,
      form.value.content
    );
    console.log(form.value.useremail, form.value.remail, form.value.content);
    // this.isLoading = true;
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
