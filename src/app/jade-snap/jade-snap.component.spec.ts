import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadeSnapComponent } from './jade-snap.component';

describe('JadeSnapComponent', () => {
  let component: JadeSnapComponent;
  let fixture: ComponentFixture<JadeSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JadeSnapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JadeSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
