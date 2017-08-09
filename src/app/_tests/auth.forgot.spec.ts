// import { async, TestBed, ComponentFixture } from '@angular/core/testing';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { IonicModule, ViewController } from 'ionic-angular';
// import { Observable } from 'rxjs/Rx';
//
// import { ForgotPasswordPage } from './forgot-password';
// import { AuthenticationProvider } from '../../../providers/authentication/authentication';
// import { MockAuthenticationProvider } from '../../../providers/authentication/authentication.mock';
//
//
// describe('ForgotPasswordPage', () => {
//
//   let page: ForgotPasswordPage;
//   let fixture: ComponentFixture<ForgotPasswordPage>;
//   let authProvider;
//
//   const viewControllerStub = new ViewController();
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ForgotPasswordPage ],
//       providers: [
//         FormBuilder,
//         { provide: AuthenticationProvider, useClass: MockAuthenticationProvider },
//         { provide: ViewController, useValue: viewControllerStub }
//       ],
//       imports: [ ReactiveFormsModule, IonicModule.forRoot(ForgotPasswordPage) ]
//     })
//       .compileComponents()
//       .then(() => {
//         fixture = TestBed.createComponent(ForgotPasswordPage);
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
//   it('should create a form with 1 controls', () => {
//     expect(page.forgotForm.contains('username')).toBeTruthy();
//   });
//
//
//   it('should set the field as required', () => {
//     let username = page.forgotForm.get('username');
//
//     username.setValue('');
//
//     expect(username.valid).toBeFalsy();
//   });
//
//
//   it('should call the resetPassword() method', () => {
//     spyOn(authProvider, 'resetPassword').and.returnValue({ subscribe: () => {} });
//
//     page.onPasswordForgot();
//
//     expect(authProvider.resetPassword).toHaveBeenCalled();
//   });
//
// });
