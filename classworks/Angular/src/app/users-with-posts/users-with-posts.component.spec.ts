import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWithPostsComponent } from './users-with-posts.component';

describe('UsersWithPostsComponent', () => {
  let component: UsersWithPostsComponent;
  let fixture: ComponentFixture<UsersWithPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersWithPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersWithPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
