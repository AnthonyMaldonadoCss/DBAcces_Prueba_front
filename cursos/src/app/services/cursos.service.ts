import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { curso } from '../models/cursos'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getFacilitadores() {
    return this.http.get(`${this.API_URI}/games`)
  }

  getFacilitador(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  savecursos(cursos: curso) {
    return this.http.post(`${this.API_URI}/games`, cursos);
  }

  deleteCurso(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`)
  }

  updateCurso(id: string, updateCurso: curso) {
    return this.http.put(`${this.API_URI}/games/${id}`, updateCurso)
  }

}
