import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocgiaListComponent } from './docgia-list.component';

describe('DocgiaListComponent', () => {
  let component: DocgiaListComponent;
  let fixture: ComponentFixture<DocgiaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocgiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocgiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
