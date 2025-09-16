import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  educationList = [
    {
      title: 'Ingeniería de Sistemas',
      institution: 'Universidad Adventista de Bolivia',
      dates: 'Actualmente cursando'
    },
    {
      title: 'Técnico en Sistemas Informáticos',
      institution: 'Instituto tecnológico "Tte. Armando de Palacios INCOS LA PAZ"',
      dates: 'Finalizado'
    },
    {
      title: 'Técnico en Corte y Confección',
      institution: 'Colegio "Técnico Humanístico Eufrasio Ibáñez Rivero"',
      dates: 'Finalizado'
    },
    {
      title: 'Bachiller en Humanidades',
      institution: 'Colegio "Técnico Humanístico Eufrasio Ibáñez Rivero"',
      dates: 'Finalizado'
    }
  ];
}
