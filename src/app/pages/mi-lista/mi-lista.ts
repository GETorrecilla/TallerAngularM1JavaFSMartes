import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritosStore } from '../../services/favoritos-store';
import { TarjetaMascota } from '../../components/tarjeta-mascota/tarjeta-mascota';

@Component({
  imports: [RouterLink, TarjetaMascota],
  selector: 'app-mi-lista',
  styleUrl: './mi-lista.css',
  templateUrl: './mi-lista.html',
})
export class MiLista {
  protected readonly favorito = inject(FavoritosStore);
}
