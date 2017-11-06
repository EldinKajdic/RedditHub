import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService } from '../../app/services/reddit.service';
import {DetailsPage} from '../details/details';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditPage {
  collections:any;
  subreddit:any;
  limit:any;
  constructor(public navCtrl: NavController, private redditService:RedditService, public loadingCtrl: LoadingController) {
    this.getStandard();
  }

  ngOnInit(){
    this.getRedditPosts(this.subreddit, this.limit);
  }

  getStandard(){
    if (localStorage.getItem('subreddit') != null) {
      this.subreddit = localStorage.getItem('subreddit');
    }
    else {
    this.subreddit = 'CrappyDesign';
    }

    if (localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    }
    else {
      this.limit = 10;
  }
}

  getRedditPosts(category, limit){
    this.redditService.getRedditPosts(category, limit).subscribe(response => {
      this.collections = response.data.children;
    });
  }

  showItem(collection){
    this.navCtrl.push(DetailsPage, {
      collection: collection
    });
  }

  changeSubreddit(){
  this.getRedditPosts(this.subreddit, this.limit);
}

 fakeLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();

  }

}
