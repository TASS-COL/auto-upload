import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { CapacitorUpdater, DownloadOptions  } from '@capgo/capacitor-updater';

const { Intent } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.updateVersion();
    // }, 30000);
  }

  async updateVersion() {

    let options: DownloadOptions = {url : "https://github.com/TASS-COL/auto-upload/raw/main/dist.zip", version: "2.0.0"}

    const version = await CapacitorUpdater.download(options);

    await CapacitorUpdater.set(version);

    CapacitorUpdater.notifyAppReady();
  }




}