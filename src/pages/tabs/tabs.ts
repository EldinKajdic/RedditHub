import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SearchPage } from '../search/search';
import {ProfilePage} from '../profile/profile';
import { SettingsPage } from '../settings/settings';
import { RedditPage } from '../reddits/reddits';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 isAndroid: boolean = false;
  tab1Root = RedditPage;
  tab2Root = ProfilePage;
  tab3Root = SearchPage;
  tab4Root = SettingsPage;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
}
}
