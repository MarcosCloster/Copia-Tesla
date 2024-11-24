import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHover = false;

  cambiarColores(event: MouseEvent): void {
    this.isHover = true;
  }

  resetearColor(event: MouseEvent): void {
    this.isHover = false
  }
}
