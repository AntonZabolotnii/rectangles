import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-panel',
  templateUrl: './data-panel.component.html',
  styleUrls: ['./data-panel.component.css']
})
export class DataPanelComponent {
  @Input() data;
  @Input() title;
  @Input() description;
}
