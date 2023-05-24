import { TestBed } from '@angular/core/testing';
import { TitleWidgetComponent } from './title-widget.component';

describe(TitleWidgetComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(TitleWidgetComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(TitleWidgetComponent);
    cy.get('button').click();
  });
});
