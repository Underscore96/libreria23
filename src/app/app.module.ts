import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { BookServiceService } from "./book-service.service";
import { DisplayBookComponent } from "./display-book/display-book.component";
import { AddBookComponent } from "./add-book/add-book.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "add",
        component: AddBookComponent
      },
      {
        path: "display",
        component: DisplayBookComponent
      },
      {
        path: "**",
        redirectTo: '/display'
      }
    ])
  ],
  declarations: [
    AppComponent,
    DisplayBookComponent,
    AddBookComponent
  
  ],
  bootstrap: [AppComponent],
  providers: [BookServiceService]
})
export class AppModule {}