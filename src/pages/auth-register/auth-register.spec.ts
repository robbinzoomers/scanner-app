import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ViewController, LoadingController } from 'ionic-angular';

import { AuthRegisterPage } from './auth-register';
import { UserService } from '../../app/_services/user.service';
import { MockUserService } from '../../app/_mock/user.mock';
import { MockLoadingController } from '../../../test-config/mocks/ionic.mocks';


describe('SignupPage', () => {

  let page: AuthRegisterPage;
  let fixture: ComponentFixture<AuthRegisterPage>;
  let authProvider;

  const viewControllerStub = new ViewController();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRegisterPage ],
      providers: [
        FormBuilder,
        { provide: UserService, useClass: MockUserService },
        { provide: ViewController, useValue: viewControllerStub },
        { provide: LoadingController, useClass: MockLoadingController }
      ],
      imports: [ ReactiveFormsModule, IonicModule.forRoot(AuthRegisterPage) ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AuthRegisterPage);
        authProvider = fixture.debugElement.injector.get(UserService);
        page = fixture.componentInstance;
      });
  }));


  it('should be created', () => {
    expect(page).toBeTruthy();
  });


  it('should create a form with 2 controls', () => {
    expect(page.signupForm.contains('email')).toBeTruthy();
    expect(page.signupForm.contains('password')).toBeTruthy();
  });


  it('should set both fields as required', () => {
    let email = page.signupForm.get('email');
    let password = page.signupForm.get('password');

    email.setValue('');
    password.setValue('');

    expect(email.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });


  it('should call the singup() method', () => {
    spyOn(authProvider, 'signup').and.returnValue({ subscribe: () => {} });

    page.onSignup();

    expect(authProvider.signup).toHaveBeenCalled();
  });

});
