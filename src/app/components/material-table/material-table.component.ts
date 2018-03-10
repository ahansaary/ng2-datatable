import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GithubService, User } from 'app-services/github/github.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
})
export class MaterialTableComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'login', 'avatar_url', 'html_url', 'type'];
  page: number = 1;
  perPage: number = 5;
  total: number = 100;
  users: User[] = [];
  loading: boolean = false;
  pageSizes: number[] = [5, 10, 25, 50, 100];
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private github: GithubService) {}

  ngOnInit() {
    this.loadUsers();
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  refreshData(reset = false) {
    if (reset) {
      this.page = 1;
    }
    this.loadUsers();
  }

  handleSort({ active, direction }) {
    // make api request with the new sort for server side sorting
    console.log(`sort by ${active} in ${direction} order`);
  }

  handlePageChange({ pageIndex, pageSize }) {
    let reset = pageSize !== this.perPage;

    // set the new boundaries
    this.page = pageIndex + 1;
    this.perPage = pageSize;

    // reload the new data
    this.refreshData(reset);
  }

  loadUsers() {
    this.loading = true;
    this.github.getUsers(this.page, this.perPage).subscribe(users => {
      this.loading = false;
      this.users = users;
      this.dataSource.data = users;
    });
  }
}
