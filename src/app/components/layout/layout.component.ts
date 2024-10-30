import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { LeftSideBarComponent } from '../left-side-bar/left-side-bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent,TopNavComponent,LeftSideBarComponent,RouterOutlet,FooterComponent,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
