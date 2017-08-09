import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController, ModalController, LoadingController, Events } from 'ionic-angular';

import { AuthLoginPage } from './auth-login';
import { UserService } from '../../app/_services/user.service';
import { MockUserService } from '../../app/_mock/user.mock';
import { MockLoadingController, MockToastController, MockEvents } from '../../../test-config/mocks/ionic.mocks';
import { AuthRegisterPage } from '../auth-register/auth-register';
import { AuthForgotPage } from '../auth-forgot/auth-forgot';


describe('SigninPage', () => {

  let page: AuthLoginPage;
  let fixture: ComponentFixture<AuthLoginPage>;
  let authProvider;

  let mockModalController;

  beforeEach(async(() => {

    mockModalController = {
      create: (args: any) => { return this; },
      present: jasmine.createSpy('present'),
      dismiss: jasmine.createSpy('dismiss'),
      onDidDismiss: (args: any) => { return this; }
    };

    spyOn(mockModalController, 'create').and.returnValue(mockModalController);
    spyOn(mockModalController, 'onDidDismiss').and.returnValue(mockModalController);


    TestBed.configureTestingModule({
      declarations: [ AuthLoginPage ],
      providers: [
        { provide: LoadingController, useClass: MockLoadingController },
        { provide: ModalController, useValue: mockModalController },
        { provide: UserService, useClass: MockUserService },
        { provide: ToastController, useClass: MockToastController },
        { provide: Events, useClass: MockEvents },
        FormBuilder,
        NavController
      ],
      imports: [ ReactiveFormsModule, IonicModule.forRoot(AuthLoginPage) ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AuthLoginPage);
        authProvider = fixture.debugElement.injector.get(UserService);
        page = fixture.componentInstance;
      });
  }));


  it('should be created', () => {
    expect(page).toBeTruthy();
  });


  it('should create a form with 2 controls', () => {
    expect(page.signinForm.contains('email')).toBeTruthy();
    expect(page.signinForm.contains('password')).toBeTruthy();
  });


  it('should set both fields as required', () => {
    let email = page.signinForm.get('email');
    let password = page.signinForm.get('password');

    email.setValue('');
    password.setValue('');

    expect(email.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });


  it('should call the singin() method', () => {
    spyOn(authProvider, 'signin').and.returnValue({ subscribe: () => {} });

    page.onSignin();

    expect(authProvider.signin).toHaveBeenCalled();
  });


  it('should create and present the modal when showSignup() is called', () => {

    page.showSignup();

    expect(mockModalController.create).toHaveBeenCalled();
    expect(mockModalController.create).toHaveBeenCalledWith(AuthRegisterPage);

    expect(mockModalController.present).toHaveBeenCalled();
  });


  it('should create and present the modal when showForgotPassword() is called', () => {

    page.showForgotPassword();

    expect(mockModalController.create).toHaveBeenCalled();
    expect(mockModalController.create).toHaveBeenCalledWith(AuthForgotPage);

    expect(mockModalController.present).toHaveBeenCalled();
  });

});
