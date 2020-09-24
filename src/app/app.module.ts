import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {FormComponent} from "./components/form/form.component"
import {HeaderComponent} from "./components/header/header.component"


@NgModule({
  declarations: [AppComponent,FormComponent,HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
