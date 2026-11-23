import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MASCOTAS } from '../../data/mascotas.mock';
import { TarjetaMascota } from '../../components/tarjeta-mascota/tarjeta-mascota';
import { FavoritosStore } from '../../services/favoritos-store';

@Component({
  imports: [RouterLink, TarjetaMascota],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
  protected readonly favorito = inject(FavoritosStore);
  destacados = MASCOTAS.filter((mascota) => mascota.adoptada === false).slice(0, 3);
}