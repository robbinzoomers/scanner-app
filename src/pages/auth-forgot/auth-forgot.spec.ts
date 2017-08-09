import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {IonicModule, LoadingController, ViewController} from 'ionic-angular';

import { AuthForgotPage } from './auth-forgot';
import { UserService } from '../../app/_services/user.service';
import { MockUserService } from '../../app/_mock/user.mock';
import { MockLoadingController } from '../../../test-config/mocks/ionic.mocks';


describe('ForgotPasswordPage', () => {

  let page: AuthForgotPage;
  let fixture: ComponentFixture<AuthForgotPage>;
  let authProvider;

  const viewControllerStub = new ViewController();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthForgotPage ],
      providers: [
        FormBuilder,
        { provide: UserService, useClass: MockUserService },
        { provide: LoadingController, useClass: MockLoadingController },
        { provide: ViewController, useValue: viewControllerStub }
      ],
      imports: [ ReactiveFormsModule, IonicModule.forRoot(AuthForgotPage) ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AuthForgotPage);
        authProvider = fixture.debugElement.injector.get(UserService);
        page = fixture.componentInstance;
      });
  }));


  it('should be created', () => {
    expect(page).toBeTruthy();
  });


  it('should create a form with 1 controls', () => {
    expect(page.forgotForm.contains('email')).toBeTruthy();
  });


  it('should set the field as required', () => {
    let email = page.forgotForm.get('email');

    email.setValue('');

    expect(email.valid).toBeFalsy();
  });


  it('should call the resetPassword() method', () => {
    spyOn(authProvider, 'resetPassword').and.returnValue({ subscribe: () => {} });

    page.onPasswordForgot();

    expect(authProvider.resetPassword).toHaveBeenCalled();
  });

});
