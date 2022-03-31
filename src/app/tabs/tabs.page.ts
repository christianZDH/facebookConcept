import { Component } from '@angular/core';

interface TabsI {
  tab: string;
  icon: string;
  notification: boolean;
}
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  tabs: TabsI[] = [];
  tabSelected = '';
  constructor() {
    this.tabs = [
      {
        tab: 'tab1',
        icon: 'assets/icon/home-facebook.svg',
        notification: false,
      },
      {
        tab: 'tab2',
        icon: 'assets/icon/watch-facebook.svg',
        notification: true,
      },
      {
        tab: 'tab3',
        icon: 'assets/icon/market-facebook.svg',
        notification: true,
      },
      {
        tab: 'tab4',
        icon: 'assets/icon/people-facebook.svg',
        notification: false,
      },
      {
        tab: 'tab5',
        icon: 'assets/icon/menu-facebook.svg',
        notification: false,
      },
    ];
  }

  onTabsChange(ev: any) {
    this.tabSelected = ev.tab;
  }
}
