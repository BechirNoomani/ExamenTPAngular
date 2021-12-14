import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponantComponent } from './post-list-componant.component';

describe('PostListComponantComponent', () => {
  let component: PostListComponantComponent;
  let fixture: ComponentFixture<PostListComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
