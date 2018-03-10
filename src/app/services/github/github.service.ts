import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {
  apiUrl: string = 'https://api.github.com';

  constructor(public http: HttpClient) {}

  getUsers(page: number, perPage: number): Observable<User[]> {
    let since = (page - 1) * perPage;

    return this.http.get(
      `${this.apiUrl}/users?since=${since}&per_page=${perPage}`
    ) as Observable<User[]>;
  }
}

export class User {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
