import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBookComponent } from './display-book.component';

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('DisplayBookComponent', () => {
  let component: DisplayBookComponent;
  let fixture: ComponentFixture<DisplayBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayBookComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(DisplayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
