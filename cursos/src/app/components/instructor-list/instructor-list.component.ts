import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service'

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.sass']
})
export class InstructorListComponent implements OnInit {

  cursos: any = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.getFacilitadores().subscribe(
      res => {
        this.cursos = res;
      },
      err => console.error(err)
    )
  }

}
