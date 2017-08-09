// import { async, TestBed, ComponentFixture } from '@angular/core/testing';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { IonicModule, ViewController } from 'ionic-angular';
// import { Observable } from 'rxjs/Rx';
//
// import { SignupPage } from './signup';
// import { AuthenticationProvider } from '../../../providers/authentication/authentication';
// import { MockAuthenticationProvider } from '../../../providers/authentication/authentication.mock';
//
//
// describe('SignupPage', () => {
//
//   let page: SignupPage;
//   let fixture: ComponentFixture<SignupPage>;
//   let authProvider;
//
//   const viewControllerStub = new ViewController();
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SignupPage ],
//       providers: [
//         FormBuilder,
//         { provide: AuthenticationProvider, useClass: MockAuthenticationProvider },
//         { provide: ViewController, useValue: viewControllerStub }
//       ],
//       imports: [ ReactiveFormsModule, IonicModule.forRoot(SignupPage) ]
//     })
//       .compileComponents()
//       .then(() => {
//         fixture = TestBed.createComponent(SignupPage);
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
//     expect(page.signupForm.contains('username')).toBeTruthy();
//     expect(page.signupForm.contains('password')).toBeTruthy();
//   });
//
//
//   it('should set both fields as required', () => {
//     let username = page.signupForm.get('username');
//     let password = page.signupForm.get('password');
//
//     username.setValue('');
//     password.setValue('');
//
//     expect(username.valid).toBeFalsy();
//     expect(password.valid).toBeFalsy();
//   });
//
//
//   it('should call the singup() method', () => {
//     spyOn(authProvider, 'signup').and.returnValue({ subscribe: () => {} });
//
//     page.onSignup();
//
//     expect(authProvider.signup).toHaveBeenCalled();
//   });
//
// });
