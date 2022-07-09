import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloaderContainerComponent } from './downloader-container.component';

describe('DownloaderContainerComponent', () => {
  let component: DownloaderContainerComponent;
  let fixture: ComponentFixture<DownloaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloaderContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
