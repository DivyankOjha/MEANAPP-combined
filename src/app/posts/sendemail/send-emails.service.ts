import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { SendModel } from "./sendemail-model";
import { AuthService } from "src/app/auth/auth.service";
//import { AuthService } from "src/app/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class SendEmailsService {
  constructor(
    private http: HttpClient,
    private router: Router,
    authService: AuthService
  ) {}

  sendemail(useremail: string, remail: string, content: string) {
    const sendData: SendModel = {
      useremail: useremail,
      remail: remail,
      content: content,
    };
    this.http
      .post<{ message: string; email: SendModel }>(
        "http://localhost:3000/api/email/sendemail",
        sendData
      )
      .subscribe(() => {
        this.router.navigate(["/"]);
      });
    console.log("from service", sendData);
  }
}
