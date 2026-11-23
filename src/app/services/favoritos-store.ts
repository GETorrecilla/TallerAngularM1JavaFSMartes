import { Service, computed, signal } from '@angular/core';
import { MASCOTAS } from '../data/mascotas.mock';

@Service()
export class FavoritosStore {
    readonly ids = signal<number[]>([]);
    readonly favoritos = this.ids.asReadonly();

    readonly mascotasFavoritas = computed(() =>
        MASCOTAS.filter((mascota) => this.ids().includes(mascota.id))
    );

    readonly total = computed(() => {
        return this.ids().length;
    });

    alternar(id: number): void {
        this.ids.update((items) => {
          const yaEsta = items.some((item) => item === id);
      
          if (yaEsta) {
            return items.filter((item) => item !== id);
          }
      
          return [...items, id];
        });
      }

    esFavorita(num: number): boolean {
        return this.ids().some((item) => item === num);
    }

}
