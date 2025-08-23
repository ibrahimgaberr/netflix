import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchvideoComponent } from './watchvideo.component';

describe('WatchvideoComponent', () => {
  let component: WatchvideoComponent;
  let fixture: ComponentFixture<WatchvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchvideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
