import { Component, OnInit } from '@angular/core';
import { GithubService, User } from 'app-services/github/github.service';

@Component({
  selector: 'app-ant-table',
  templateUrl: './ant-table.component.html',
  styleUrls: ['./ant-table.component.scss'],
})
export class AntTableComponent implements OnInit {
  page: number = 1;
  perPage: number = 5;
  total: number = 100;
  users: User[] = [];
  loading: boolean = false;
  pageSizes: number[] = [5, 10, 25, 50, 100];

  constructor(private github: GithubService) {}

  ngOnInit() {
    this.loadUsers();
  }

  refreshData(reset = false) {
    if (reset) {
      this.page = 1;
    }
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.github.getUsers(this.page, this.perPage).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

  getTableHeaders(data: any[]) {
    if (data.length) {
      return Object.keys(data[0]);
    }
    return [];
  }
}
