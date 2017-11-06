import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchPage {
reddits: string = "communities";
isAndroid: boolean = false;
items;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, platform: Platform) {
  this.startSearchList();
  this.isAndroid = platform.is('android');
}

  searchPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Search',
      message: "Search for users, posts, subreddits or comments",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

startSearchList() {
    this.items = [
'r/coding',
'r/computerscience',
'r/cpp',
'r/csharp',
'r/css',
'r/csshelp',
'r/dailyprogrammer',
'r/delphi',
'r/engineering',
'r/gamedev',
'r/haskell',
'r/html',
'r/html5',
'r/iOSProgramming',
'r/java',
'r/javahelp',
'r/javascript',
'r/jquery',
'r/learnprogramming',
'r/learnpython',
'r/linux',
'r/netsec',
'r/node',
'r/perl',
'r/php',
'r/programmer',
'r/programming',
'r/python',
'r/ruby',
'r/swift',
'r/technology',
'r/techsupport',
'r/web_design',
'r/web_dev',
'r/wolfram'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.startSearchList();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
