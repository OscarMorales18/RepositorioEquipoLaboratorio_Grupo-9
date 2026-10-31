<div id="contenidoModulo" data-modulo="6" class="inventario">
    <div class="inventario_encabezado">
        <div>
            <h1 class="titulo">Inventario de equipos</h1>
            <p>Consulta y administra el equipo médico y de laboratorio.</p>
        </div>
        <div class="inventario_ayuda">
            <div class="inventario_mensaje">¿Buscas algún equipo?<br><span>Usa los filtros para encontrarlo.</span></div>
            <img src="images/mascota_vitalab.png" alt="Mascota de VitaLab con una bata y un matraz de laboratorio">
        </div>
    </div>

    <div class="inventario_acciones">
        <button type="button" id="Nuevo_equipo" class="AgregarModificar">＋ Registrar equipo</button>
        <button type="button" id="Administrar_catalogos">Administrar categorías y estados</button>
    </div>

    <div class="inventario_resumen" id="resumenEquipo" aria-live="polite"></div>

    <div class="inventario_filtros">
        <div class="inventario_filtro"><label for="buscarEquipo">Buscar equipo</label><input type="search" id="buscarEquipo" placeholder="Código, nombre o número de serie"></div>
        <div class="inventario_filtro"><label for="filtroCategoria">Categoría</label><select id="filtroCategoria"><option value="">Todas</option></select></div>
        <div class="inventario_filtro"><label for="filtroEstado">Estado</label><select id="filtroEstado"><option value="">Todos</option></select></div>
        <div class="inventario_filtro"><label for="filtroActivo">Registro</label><select id="filtroActivo"><option value="1">Activos</option><option value="0">Dados de baja</option><option value="">Todos</option></select></div>
    </div>

    <div class="inventario_tabla_scroll">
        <table class="contenido inventario_tabla">
            <thead><tr><th>Código</th><th>Equipo</th><th>Categoría</th><th>Número de serie</th><th>Estado</th><th>Adquisición</th><th>Acciones</th></tr></thead>
            <tbody id="tablaEquipo"></tbody>
        </table>
    </div>
    <p id="mensajeInventario" class="inventario_mensaje_estado" aria-live="polite"></p>

    <div id="ventanaEquipo" class="inventario_modal oculto" role="dialog" aria-modal="true" aria-labelledby="tituloFormularioEquipo">
        <div class="inventario_modal_contenido">
            <button type="button" class="inventario_cerrar" data-cerrar="ventanaEquipo" aria-label="Cerrar">×</button>
            <h2 id="tituloFormularioEquipo">Registrar equipo</h2>
            <form id="formEquipo" class="formulario">
                <input type="hidden" id="id_equipo" class="idRegistro">
                <div class="campos">
                    <label>Código<input id="codigo_equipo" maxlength="50" required></label>
                    <label>Nombre<input id="nombre_equipo" maxlength="50" required></label>
                    <label>Categoría<select id="id_categoria_equipo" required><option value="">Seleccione una categoría</option></select></label>
                    <label>Estado<select id="id_estado_equipo" required><option value="">Seleccione un estado</option></select></label>
                    <label>Descripción<input id="descripcion_equipo" maxlength="150" required></label>
                    <label>Número de serie (opcional)<input id="numero_serie_equipo" maxlength="100"></label>
                    <label>Fecha de adquisición<input type="date" id="fecha_adquisicion_equipo"></label>
                    <label>Imagen (opcional)<input id="imagen_url_equipo" maxlength="500"></label>
                </div>
                <div class="botones"><button type="submit" id="Guardar_equipo" class="AgregarModificar">Guardar equipo</button><button type="button" id="Limpiar_equipo">Limpiar</button></div>
            </form>
        </div>
    </div>

    <div id="ventanaCatalogos" class="inventario_modal oculto" role="dialog" aria-modal="true" aria-labelledby="tituloCatalogos">
        <div class="inventario_modal_contenido inventario_catalogos">
            <button type="button" class="inventario_cerrar" data-cerrar="ventanaCatalogos" aria-label="Cerrar">×</button>
            <h2 id="tituloCatalogos">Administrar categorías y estados</h2>
            <div class="inventario_catalogo_columnas">
                <section><h3>Categorías</h3><form id="formCategoria"><input type="hidden" id="id_categoria"><label>Nombre<input id="nombre_categoria" maxlength="100" required></label><label>Descripción<input id="descripcion_categoria" maxlength="255"></label><button type="submit" class="AgregarModificar">Guardar categoría</button></form><ul id="listaCategorias"></ul></section>
                <section><h3>Estados de equipo</h3><form id="formEstado"><input type="hidden" id="id_estado"><label>Nombre<input id="nombre_estado" maxlength="50" required></label><button type="submit" class="AgregarModificar">Guardar estado</button></form><ul id="listaEstados"></ul></section>
            </div>
        </div>
    </div>
</div>
