import { TestBed } from '@angular/core/testing';
import { TitleWidgetBComponent } from './title-widget-b.component';

describe(TitleWidgetBComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(TitleWidgetBComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(TitleWidgetBComponent);
    cy.get('button').click();
  });
});
