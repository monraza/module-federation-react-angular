import { Component, OnInit } from '@angular/core';
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
export class ProfileComponent implements OnInit {
  currentUser$: Observable<IUser> = new Observable();
  constructor(private profileUserService: ProfileUserService) {}
  ngOnInit(): void {
    this.currentUser$ = this.profileUserService.currentUser$;
  }
}

export default ProfileComponent;
