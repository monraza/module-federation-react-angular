import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProfileUserService } from '../profile-user/profile-user.service';
import { IUser } from '../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProfileComponent implements OnInit, OnChanges {
  @Input() user!: IUser;
  @Output() onReset: EventEmitter<string> = new EventEmitter();
  currentUser$: Observable<IUser> = new Observable();
  constructor(private profileUserService: ProfileUserService) {}

  private updateUser() {
    this.profileUserService.currentUser$.subscribe((user) => {
      if (
        this.user === undefined ||
        (this.user.name === '' && this.user.email === '')
      ) {
        this.user = user;
      }
    });
  }

  ngOnInit(): void {
    console.log('Log: user initialized in angular component', this.user);
    this.updateUser();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      console.log('Log: user changed in angular component', this.user);
      this.updateUser();
    }
  }

  resetUser() {
    this.profileUserService.currentUser$.subscribe((user) => {
      this.user = user;
      console.log('Log: resetUserEmitter set user default', this.user);
    });
    this.onReset.emit('');
  }
}

export default ProfileComponent;
