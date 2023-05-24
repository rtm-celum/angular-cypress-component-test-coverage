import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myorg-title-widget-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-widget-b.component.html',
  styleUrls: ['./title-widget-b.component.css'],
})
export class TitleWidgetBComponent {
  protected somethingToCover():void {
    console.log('cover me b');
  }
}
