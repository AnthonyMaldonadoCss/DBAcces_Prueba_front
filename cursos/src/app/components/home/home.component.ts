import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

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
