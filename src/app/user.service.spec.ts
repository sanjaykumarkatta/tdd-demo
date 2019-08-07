import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from './user.model';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UserService]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should return the list of userIds and userNames', () => {
    let user =[{id: '10', username: 'sanjay'}]
    const service: UserService = TestBed.get(UserService);
    let list = service.getUserDetails();

    expect(list).toBe(user) 

  });


});
