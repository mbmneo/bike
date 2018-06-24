import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResgistrationComponent } from './view-resgistration.component';

describe('ViewResgistrationComponent', () => {
  let component: ViewResgistrationComponent;
  let fixture: ComponentFixture<ViewResgistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResgistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResgistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
