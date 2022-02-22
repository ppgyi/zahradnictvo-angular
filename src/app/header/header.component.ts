import {Component, OnInit} from '@angular/core';
import {StorageDataService} from "../shared/storage-data.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor(private storage: StorageDataService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  ulozitData() {
    this.storage.vytvorenieAUlozenieDat();
  }

  nacitatData() {
    this.storage.nacitanieDat().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
