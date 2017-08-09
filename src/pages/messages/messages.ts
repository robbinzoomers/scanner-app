import { Component, ViewChild } from '@angular/core';
import { List, NavController, ToastController } from 'ionic-angular';

import { MessageService } from '../../app/_services/message.service';
import { MessagesDetailPage } from '../messages-detail/messages-detail';
import { Message } from '../../app/_models/message.model';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})

export class MessagesPage {

  // the list is a child of the messages page
  // @ViewChild('messageList') gets a reference to the list
  // with the variable #messageList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('messageList', { read: List }) messageList: List;

  segment = 'all';
  feeds: Message[] = [];

  constructor(private messageService: MessageService,
              private navCtrl: NavController,
              private toastCtrl: ToastController) { }


  ionViewDidLoad() {
    this.updateMessages();
  }


  doRefresh() {
    this.messageService.getAll().subscribe(
      data => this.feeds = data.feeds,
      error => this.showToast(error.errorMessage)
    );
  }


  updateMessages() {
    this.messageService.getAll().subscribe(
      data => this.feeds = data.feeds,
      error => this.showToast(error.errorMessage)
    );
  }


  goToMessageDetail(message: Message) {
    this.navCtrl.push(MessagesDetailPage, {
      message: message
    });
  }


  private showToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2500,
      cssClass: 'text__center'
    });
    toast.present();
  }

}
