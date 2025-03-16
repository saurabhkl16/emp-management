import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
})
export class LayoutComponent {
  public toggleNavbar() {
    let nav: any = document.querySelector('.navbar');
    const toggleButton: any = document.querySelector('.toggle');
    const isCollapsed: any = nav.classList.contains('collapsed');

    // Toggle the navbar collapse state
    nav.classList.toggle('collapsed', !isCollapsed);

    // Change the toggle button icon text based on the navbar state
    if (isCollapsed) {
      toggleButton.innerHTML =
        '<span class="material-symbols-outlined">chevron_left</span>';
    } else {
      toggleButton.innerHTML =
        '<span class="material-symbols-outlined">chevron_right</span>';
    }
  }
}
