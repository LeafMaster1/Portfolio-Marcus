import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';


@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  constructor(private themeService: ThemeService) {}

  onToggleTheme() {
    this.themeService.toggleTheme();
  }
}
