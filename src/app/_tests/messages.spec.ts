import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ViewController, NavController } from 'ionic-angular';

import { MessagesPage} from './messages';
import { MessagesProvider } from '../../../providers/messages/messages';
import { MockMessagesProvider } from '../../../providers/messages/messages.mock';


describe('MessagesPage', () => {

  let page: MessagesPage;
  let fixture: ComponentFixture<MessagesPage>;
  let authProvider;

  const viewControllerStub = new ViewController();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesPage ],
      providers: [
        FormBuilder,
        NavController,
        { provide: MessagesProvider, useClass: MockMessagesProvider },
        { provide: ViewController, useValue: viewControllerStub }
      ],
      imports: [ ReactiveFormsModule, IonicModule.forRoot(MessagesPage) ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MessagesPage);
        authProvider = fixture.debugElement.injector.get(MessagesProvider);
        page = fixture.componentInstance;
      });
  }));


  it('should be created', () => {
    expect(page).toBeTruthy();
  });



});
