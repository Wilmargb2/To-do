export function Filters() {
    return `
        <div class="Filters__container">

            <div class="Filters__section">
                <span class="Filters__label">Estado</span>
                <div class="Filters__group">
                    <button class="Filters__button Filters__button--state Filters__button--active" data-filter="todas">
                        Todas
                    </button>
                    <button class="Filters__button Filters__button--state" data-filter="pendiente">
                        Pendientes
                    </button>
                    <button class="Filters__button Filters__button--state" data-filter="completada">
                        Completadas
                    </button>
                    <button class="Filters__button Filters__button--state" data-filter="vencida">
                        Vencidas
                    </button>
                    <button class="Filters__button Filters__button--state" data-filter="cerrada">
                        Cerradas
                    </button>
                </div>
            </div>

            <div class="Filters__divider"></div>

            <div class="Filters__section">
                <span class="Filters__label">ORDENAR POR Prioridad</span>
                <div class="Filters__group">
                    <button class="Filters__button Filters__button--sort Filters__button--active" data-sort="none">
                        Todas
                    </button>
                    <button class="Filters__button Filters__button--sort" data-sort="alta">
                        Alta
                    </button>
                    <button class="Filters__button Filters__button--sort" data-sort="media">
                        Media
                    </button>
                    <button class="Filters__button Filters__button--sort" data-sort="baja">
                        Baja
                    </button>
                </div>
            </div>

        </div>
    `;
}
