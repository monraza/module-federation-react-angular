import { Component } from '@angular/core';
import { ProfileUserComponent } from '../profile-user/profile-user.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  standalone: true,
  imports: [SettingsComponent, ProfileUserComponent],
  selector: 'app-layout',
  template: `<app-profile-user></app-profile-user>`,
})
export class LayoutComponent {}
