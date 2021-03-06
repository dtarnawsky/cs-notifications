import { Component, OnInit } from '@angular/core';
import { ScheduleResult, PermissionStatus, ScheduleOptions, LocalNotificationSchema, LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  permission: string;
  constructor() {
  }

  async ngOnInit() {    
    const permissionsStatus: PermissionStatus = await LocalNotifications.requestPermissions();
    this.permission = permissionsStatus.display;
  }

  async scheduleLocalNotification(sound?: string) {
    const notification: LocalNotificationSchema = {
      id: 123,
      title: 'Title', 
      body: 'Here is the notification', 
      sound: sound
    };
    const options: ScheduleOptions = {notifications: [notification]};
    const result: ScheduleResult = await LocalNotifications.schedule(options);
    console.log(result);
  }
}
