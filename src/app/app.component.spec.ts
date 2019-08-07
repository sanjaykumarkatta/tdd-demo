import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component'
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
let app, fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListOfUsersComponent,
        UserComponent,
        HttpClientModule
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
// const fixture = TestBed.createComponent(AppComponent);
    
    expect(app).toBeTruthy();
  });
});
