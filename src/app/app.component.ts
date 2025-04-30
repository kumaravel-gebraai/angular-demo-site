// import { Component } from '@angular/core';
// import { NavbarModule } from './navbar/navbar.module';
// import { FooterModule } from './footer/footer.module';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css'],
//   standalone: true,
//   imports: [NavbarModule, FooterModule, RouterModule]
// })
// export class AboutComponent {
//   // component logic
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'static-website';
}