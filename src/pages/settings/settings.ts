import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService } from '../../app/services/reddit.service';
import {RedditPage} from '../reddits/reddits';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  subreddit:any;
  limit:any;
  constructor(public navCtrl: NavController, private redditService:RedditService, public toastCtrl: ToastController) {
    this.getStandard();
  }

  getStandard(){
    if (localStorage.getItem('subreddit') != null) {
      this.subreddit = localStorage.getItem('subreddit');
    }
    else {
    this.subreddit = 'all';
    }

    if (localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    }
    else {
      this.limit = 10;
  }
}

  setStandard(){
    localStorage.setItem('subreddit', this.subreddit);
    localStorage.setItem('limit', this.limit);
    this.navCtrl.push(RedditPage);
  }

  saveToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Your changes have been saved.',
      duration: 2000,
      position: 'top'
    });

    toast.present(toast);
}
  
}

