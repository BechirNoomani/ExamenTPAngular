import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemComponantComponent } from './post-list-item-componant.component';

describe('PostListItemComponantComponent', () => {
  let component: PostListItemComponantComponent;
  let fixture: ComponentFixture<PostListItemComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListItemComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
