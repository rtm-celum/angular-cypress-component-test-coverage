import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myorg-title-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-widget.component.html',
  styleUrls: ['./title-widget.component.css'],
})
export class TitleWidgetComponent {
  protected somethingToCover():void {
    console.log('cover me');
  }
}
