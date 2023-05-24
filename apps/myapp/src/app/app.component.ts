import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TitleWidgetComponent } from '../../../../libs/mylib-a/src/lib/title-widget/title-widget.component';
import { TitleWidgetBComponent } from '../../../../libs/mylib-b/src/lib/title-widget-b/title-widget-b.component';

@Component({
  standalone: true,
             imports: [NxWelcomeComponent, RouterModule, TitleWidgetComponent, TitleWidgetBComponent],
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myapp';
}
