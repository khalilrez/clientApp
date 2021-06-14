import { Component, OnInit } from '@angular/core';
import { statData, revenueChart, salesAnalytics, sparklineEarning, sparklineMonthly, chatData, transactions, accounts} from '../data';
import {Account, Transaction} from '../dashboard.model';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.component.html',
  styleUrls: ['transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  accounts: Account[];
  transactions: Transaction[];
  term: any;
  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Amennet' }, { label: 'Dashboard' }, { label: 'Mouvements' }];
    this._fetchData();
  }
  private _fetchData() {

    this.accounts = accounts;

  }

}
