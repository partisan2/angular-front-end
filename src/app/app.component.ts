import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import {MatIconModule} from '@angular/material/icon';
import { BodyComponent } from "./components/body/body.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MatIconModule, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end-project';
}
