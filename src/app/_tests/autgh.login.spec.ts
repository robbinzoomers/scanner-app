// import { async, TestBed, ComponentFixture } from '@angular/core/testing';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { IonicModule, NavController, ToastController, ModalController } from 'ionic-angular';
// import { Observable } from 'rxjs/Rx';
//
// import { SigninPage } from './signin';
// import { AuthenticationProvider } from '../../../providers/authentication/authentication';
// import { MockAuthenticationProvider } from '../../../providers/authentication/authentication.mock';
// import { SignupPage } from '../signup/signup';
// import { ForgotPasswordPage } from '../forgot-password/forgot-password';
//
//
// describe('SigninPage', () => {
//
//   let page: SigninPage;
//   let fixture: ComponentFixture<SigninPage>;
//   let authProvider;
//
//   let mockModalController;
//
//   beforeEach(async(() => {
//
//     mockModalController = {
//       create: (args: any) => { return this; },
//       present: jasmine.createSpy('present'),
//       dismiss: jasmine.createSpy('dismiss'),
//       onDidDismiss: (args: any) => { return this; }
//     };
//
//     spyOn(mockModalController, 'create').and.returnValue(mockModalController);
//     spyOn(mockModalController, 'onDidDismiss').and.returnValue(mockModalController);
//
//     TestBed.configureTestingModule({
//       declarations: [ SigninPage ],
//       providers: [
//         FormBuilder,
//         NavController,
//         ToastController,
//         { provide: ModalController, useValue: mockModalController },
//         { provide: AuthenticationProvider, useClass: MockAuthenticationProvider }
//       ],
//       imports: [ ReactiveFormsModule, IonicModule.forRoot(SigninPage) ]
//     })
//       .compileComponents()
//       .then(() => {
//         fixture = TestBed.createComponent(SigninPage);
//         authProvider = fixture.debugElement.injector.get(AuthenticationProvider);
//         page = fixture.componentInstance;
//       });
//   }));
//
//
//   it('should be created', () => {
//     expect(page).toBeTruthy();
//   });
//
//
//   it('should create a form with 2 controls', () => {
//     expect(page.signinForm.contains('username')).toBeTruthy();
//     expect(page.signinForm.contains('password')).toBeTruthy();
//   });
//
//
//   it('should set both fields as required', () => {
//     let username = page.signinForm.get('username');
//     let password = page.signinForm.get('password');
//
//     username.setValue('');
//     password.setValue('');
//
//     expect(username.valid).toBeFalsy();
//     expect(password.valid).toBeFalsy();
//   });
//
//
//   it('should call the singin() method', () => {
//     spyOn(authProvider, 'signin').and.returnValue({ subscribe: () => {} });
//
//     page.onSignin();
//
//     expect(authProvider.signin).toHaveBeenCalled();
//   });
//
//
//   it('should create and present the modal when showSignup() is called', () => {
//
//     page.showSignup();
//
//     expect(mockModalController.create).toHaveBeenCalled();
//     expect(mockModalController.create).toHaveBeenCalledWith(SignupPage);
//
//     expect(mockModalController.present).toHaveBeenCalled();
//   });
//
//
//   it('should create and present the modal when showForgotPassword() is called', () => {
//
//     page.showForgotPassword();
//
//     expect(mockModalController.create).toHaveBeenCalled();
//     expect(mockModalController.create).toHaveBeenCalledWith(ForgotPasswordPage);
//
//     expect(mockModalController.present).toHaveBeenCalled();
//   });
//
// });
