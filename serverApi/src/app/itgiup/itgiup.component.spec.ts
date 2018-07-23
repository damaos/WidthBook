import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItgiupComponent } from './itgiup.component';

describe('ItgiupComponent', () => {
  let component: ItgiupComponent;
  let fixture: ComponentFixture<ItgiupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItgiupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItgiupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
