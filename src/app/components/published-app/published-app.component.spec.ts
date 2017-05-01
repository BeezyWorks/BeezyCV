import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedAppComponent } from './published-app.component';

describe('PublishedAppComponent', () => {
  let component: PublishedAppComponent;
  let fixture: ComponentFixture<PublishedAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
