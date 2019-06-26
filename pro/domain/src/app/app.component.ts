import { FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      domainName: ["", Validators.required]
    });
  }

  onsubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return alert("empty input!");
    }
    alert("success!!");
  }
}
