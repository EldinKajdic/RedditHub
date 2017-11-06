import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class RedditService{
    http:any;
    redditBaseUrl: String;

    constructor(http:Http){
        this.http = http;
        this.redditBaseUrl = 'https://www.reddit.com/r';
    }

    getRedditPosts(category, limit){
        return this.http.get(this.redditBaseUrl+'/'+category+'/top.json?limit='+limit)
        .map(res => res.json());
    }
}