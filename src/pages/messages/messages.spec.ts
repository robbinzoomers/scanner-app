import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ViewController, NavController } from 'ionic-angular';

import { MessagesPage} from './messages';
import { MessageService } from '../../app/_services/message.service';
import { MockMessageService } from '../../app/_mock/messages.mock';


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
        { provide: MessageService, useClass: MockMessageService },
        { provide: ViewController, useValue: viewControllerStub }
      ],
      imports: [ ReactiveFormsModule, IonicModule.forRoot(MessagesPage) ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MessagesPage);
        authProvider = fixture.debugElement.injector.get(MessageService);
        page = fixture.componentInstance;
      });
  }));


  xit('should be created', () => {
    expect(page).toBeTruthy();
  });



});
