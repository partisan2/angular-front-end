import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SelectorComponent } from "../selector/selector.component";
import { RecordsComponent } from "../records/records.component";

@Component({
  selector: 'app-body',
  imports: [SidebarComponent, SelectorComponent, RecordsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  version:string = "5.0";
  owner:string="© 2024 eZuite. All rights reserved."
}
