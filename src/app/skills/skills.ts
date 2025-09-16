import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-skills',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skillsList = [
    { icon: 'fas fa-code', name: 'HTML & CSS' },
    { icon: 'fas fa-database', name: 'SQL e Informix' },
    { icon: 'fab fa-php', name: 'PHP' },
    { icon: 'fas fa-project-diagram', name: 'Gestión de proyectos' },
    { icon: 'fas fa-check-circle', name: 'Revisión y calidad de sistemas' },
    { icon: 'fas fa-file-invoice-dollar', name: 'Manejo de sistemas de facturación' },
    { icon: 'fas fa-money-check-alt', name: 'Manejo de sistemas bancarios' },
    { icon: 'fas fa-lightbulb', name: 'Resolución de Problemas' },
    { icon: 'fas fa-headset', name: 'Atención al Cliente' },
    { icon: 'fas fa-boxes', name: 'Control de inventarios' }
  ];
}
