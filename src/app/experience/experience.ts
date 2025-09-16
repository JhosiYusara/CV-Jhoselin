import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experienceList = [
    {
      title: 'Soporte de proyectos y calidad de sistemas',
      company: 'Diaconía FRIF – IFD | Gerencia de Tecnología información y comunicación GTIC',
      dates: 'Abril/2023 – A la fecha',
      responsibilities: [
        'Manejo de base de datos SQL e Informix',
        'Manejo sistema Netbank, SAI, SALAR',
        'Revisión y control de calidad aplicaciones móviles, banca electrónica y programas',
        'Soporte a usuarios finales en distintas plataformas',
        'Pruebas y control de versiones en plataformas bancarias',
        'Manejo de sistemas de información',
        'Conocimiento de metodologías ágiles SCRUM y KANBAN'
      ]
    },
    {
      title: 'Práctica pre profesional',
      company: 'Diaconía FRIF – IFD | Gerencia de Tecnología información y comunicación GTIC',
      dates: 'Octubre/2022 – Marzo/2023',
      responsibilities: [
                    'Manejo de base de datos',
                    'Colaboración en Help Desk',
                    'Realización de Backups diarios',
                    'Manejo aplicativo Netbank',
                    'Revisión y validación de programas',
                    'Validaciones manuales de distintos programas y datos',
                    'Colaboración a Gerencia y Subgerencia en distintos trabajos en relación con el área'
      ]
    },
    {
      title: 'Encargada de Ventas',
      company: 'Thiago Sport',
      dates: 'Octubre/2021 – Enero/2022',
      responsibilities: [
                    'Encargada de tienda de productos ortopédicos',
                    'Ventas por mayor y menor',
                    'Atención al cliente',
                    'Inventarios'
      ]
    },
     {
      title: 'Niñera',
      company: 'Familia Merlo Limachi',
      dates: 'Marzo/2021 – Septiembre/2021',
      responsibilities: [
                    'Cuidado de bebe',
                    'Colaboración en casa'
      ]
    },
     {
      title: 'Asistente de Ventas',
      company: 'Guti Sport',
      dates: 'Diciembre/2019 – Enero/2020',
      responsibilities: [
                    'Ventas de calzados deportivos',
                    'Atención al cliente',
                    'Inventarios'
      ]
    },
    {
      title: 'Práctica pre profesional',
      company: 'Ministerio de Defensa | Unidad de Movilización Territorial',
      dates: 'Abril/2019 – Agosto/2019',
      responsibilities: [
                    'Actualización de base de datos',
                    'Mantenimiento de equipos',
                    'Instalación y actualización de programas'
      ]
    },
  ];
}
