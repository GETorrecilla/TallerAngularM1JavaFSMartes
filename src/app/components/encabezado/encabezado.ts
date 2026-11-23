import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoritosStore } from '../../services/favoritos-store';

@Component({
    imports: [RouterLink, RouterLinkActive],
    selector: 'app-encabezado',
    styleUrl: './encabezado.css',
    templateUrl: './encabezado.html',
})

export class Encabezado {
    nombreApp = 'Huella Amiga';
    eslogan = 'Encuentra a tu próximo amigo';
    protected readonly favorito = inject(FavoritosStore);
}