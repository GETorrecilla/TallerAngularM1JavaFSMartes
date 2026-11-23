import { Component, computed, signal, inject } from '@angular/core';
import { MASCOTAS } from '../../data/mascotas.mock';
import { Mascota } from '../../models/mascota';
import { TarjetaMascota } from '../../components/tarjeta-mascota/tarjeta-mascota';
import { FavoritosStore } from '../../services/favoritos-store'

@Component({
  imports: [TarjetaMascota],
  selector: 'app-listado-mascotas',
  styleUrl: './listado-mascotas.css',
  templateUrl: './listado-mascotas.html',
})

export class ListadoMascotas {
  mascotas = MASCOTAS;
  soloDisponibles = signal(false);
  busqueda = signal('');

  private readonly favorito = inject(FavoritosStore);

  mascotasFiltrados = computed(() => {
    const texto = this.busqueda().trim().toLowerCase();

    return this.mascotas.filter(
      (mascota) =>
        mascota.nombre.toLowerCase().includes(texto) &&
        (!this.soloDisponibles() || !mascota.adoptada),
    );
  });

  agregarAFavorito(mascota: Mascota): void {
    this.favorito.alternar(mascota.id);
  }

}
