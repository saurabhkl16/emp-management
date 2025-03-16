import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEmployeComponent } from './project-employe.component';

describe('ProjectEmployeComponent', () => {
  let component: ProjectEmployeComponent;
  let fixture: ComponentFixture<ProjectEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectEmployeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
