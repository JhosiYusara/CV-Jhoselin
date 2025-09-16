import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './header/header';
import { Summary } from './summary/summary';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            Header,
            Summary,
            Education,
            Skills,
            Experience,
            Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('CV-Jhoselin');
}

