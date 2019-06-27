import { EmployeeService } from "./../../../../services/services/src/app/employee.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeNameComponent } from "./employee-name/employee-name.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, EmployeeDetailsComponent, EmployeeNameComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
