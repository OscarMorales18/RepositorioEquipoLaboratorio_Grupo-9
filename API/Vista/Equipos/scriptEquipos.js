(function(){
const API = "/RepositorioEquipoLaboratorio_Grupo-9/API/Controlador/";
const equipos = { lista: [], categorias: [], estados: [] };
const $ = selector => document.querySelector(selector);
const escapar = valor => String(valor ?? "").replace(/[&<>"']/g, caracter => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[caracter]));

async function solicitar(archivo, metodo = "GET", datos = null){
    const opciones = {method: metodo, cache: "no-store"};
    if (datos) opciones.body = new URLSearchParams(datos);
    const respuesta = await fetch(API + archivo, opciones);
    const contenido = await respuesta.json();
    if (!respuesta.ok || contenido.code !== 1) throw new Error(contenido.message || "No se pudo completar la solicitud.");
    return contenido.data;
}

function llenarOpciones(selector, lista, texto){
    const seleccion = $(selector);
    const valorActual = seleccion.value;
    seleccion.innerHTML = `<option value="">${texto}</option>` + lista.map(item => `<option value="${item.id}">${escapar(item.nombre)}</option>`).join("");
    seleccion.value = valorActual;
}

async function cargarCatalogos(){
    [equipos.categorias, equipos.estados] = await Promise.all([
        solicitar("C_CategoriaEquipo.php"), solicitar("C_EstadoEquipo.php")
    ]);
    llenarOpciones("#id_categoria_equipo", equipos.categorias, "Seleccione una categoría");
    llenarOpciones("#id_estado_equipo", equipos.estados, "Seleccione un estado");
    llenarOpciones("#filtroCategoria", equipos.categorias, "Todas");
    llenarOpciones("#filtroEstado", equipos.estados, "Todos");
    dibujarCatalogos();
}

function dibujarCatalogos(){
    $("#listaCategorias").innerHTML = equipos.categorias.map(item => `<li><span>${escapar(item.nombre)}</span><button type="button" data-editar-categoria="${item.id}">Editar</button></li>`).join("") || "<li>No hay categorías registradas.</li>";
    $("#listaEstados").innerHTML = equipos.estados.map(item => `<li><span>${escapar(item.nombre)}</span><button type="button" data-editar-estado="${item.id}">Editar</button></li>`).join("") || "<li>No hay estados registrados.</li>";
}

async function cargarEquipos(){
    try {
        equipos.lista = await solicitar("C_Equipos.php");
        dibujarEquipos();
    } catch (error) {
        $("#mensajeInventario").textContent = error.message;
    }
}

function dibujarEquipos(){
    const consulta = $("#buscarEquipo").value.trim().toLowerCase();
    const categoria = $("#filtroCategoria").value;
    const estado = $("#filtroEstado").value;
    const activo = $("#filtroActivo").value;
    const lista = equipos.lista.filter(item =>
        (!consulta || [item.codigo,item.nombre,item.numero_serie].some(valor => String(valor ?? "").toLowerCase().includes(consulta))) &&
        (!categoria || String(item.id_categoria) === categoria) &&
        (!estado || String(item.id_estado) === estado) &&
        (activo === "" || String(item.activo) === activo)
    );
    const activos = equipos.lista.filter(item => Number(item.activo) === 1);
    const disponibles = activos.filter(item => Number(item.disponible) === 1).length;
    $("#resumenEquipo").textContent = `${activos.length} equipos activos · ${disponibles} disponibles`;
    $("#tablaEquipo").innerHTML = lista.map(item => `<tr>
        <td>${escapar(item.codigo)}</td><td>${escapar(item.nombre)}</td><td>${escapar(item.categoria)}</td>
        <td>${escapar(item.numero_serie || "Sin número")}</td><td>${escapar(item.estado)}</td>
        <td>${escapar(item.fecha_adquisicion || "—")}</td>
        <td><button type="button" data-editar-equipo="${item.id}">Editar</button>${Number(item.activo) ? ` <button type="button" data-baja-equipo="${item.id}">Dar de baja</button>` : " <span>Inactivo</span>"}</td>
    </tr>`).join("");
    $("#mensajeInventario").textContent = lista.length ? "" : "No hay equipos que coincidan con la búsqueda.";
}

function abrir(id){ $(id).classList.remove("oculto"); }
function cerrar(id){ $(id).classList.add("oculto"); }
function limpiarEquipo(){ $("#formEquipo").reset(); $("#id_equipo").value = ""; $("#tituloFormularioEquipo").textContent = "Registrar equipo"; }

$("#Nuevo_equipo").addEventListener("click", () => { limpiarEquipo(); abrir("#ventanaEquipo"); $("#codigo_equipo").focus(); });
$("#Administrar_catalogos").addEventListener("click", () => abrir("#ventanaCatalogos"));
document.querySelectorAll("[data-cerrar]").forEach(boton => boton.addEventListener("click", () => cerrar("#" + boton.dataset.cerrar)));
["#buscarEquipo", "#filtroCategoria", "#filtroEstado", "#filtroActivo"].forEach(selector => $(selector).addEventListener("input", dibujarEquipos));

$("#formEquipo").addEventListener("submit", async evento => {
    evento.preventDefault();
    const datos = {
        id_categoria: $("#id_categoria_equipo").value, id_estado: $("#id_estado_equipo").value,
        codigo: $("#codigo_equipo").value.trim(), nombre: $("#nombre_equipo").value.trim(),
        descripcion: $("#descripcion_equipo").value.trim(), numero_serie: $("#numero_serie_equipo").value.trim(),
        fecha_adquisicion: $("#fecha_adquisicion_equipo").value, imagen_url: $("#imagen_url_equipo").value.trim()
    };
    try {
        const id = $("#id_equipo").value;
        await solicitar("C_Equipos.php", id ? "PUT" : "POST", id ? {id, ...datos} : datos);
        cerrar("#ventanaEquipo"); limpiarEquipo(); await cargarEquipos();
    } catch (error) { alert(error.message); }
});

$("#Limpiar_equipo").addEventListener("click", limpiarEquipo);
$("#tablaEquipo").addEventListener("click", async evento => {
    const editar = evento.target.closest("[data-editar-equipo]");
    const baja = evento.target.closest("[data-baja-equipo]");
    if (editar) {
        const item = equipos.lista.find(equipo => String(equipo.id) === editar.dataset.editarEquipo);
        if (!item) return;
        $("#id_equipo").value = item.id;
        $("#id_categoria_equipo").value = item.id_categoria;
        $("#id_estado_equipo").value = item.id_estado;
        $("#codigo_equipo").value = item.codigo;
        $("#nombre_equipo").value = item.nombre;
        $("#descripcion_equipo").value = item.descripcion;
        $("#numero_serie_equipo").value = item.numero_serie || "";
        $("#fecha_adquisicion_equipo").value = item.fecha_adquisicion || "";
        $("#imagen_url_equipo").value = item.imagen_url || "";
        $("#tituloFormularioEquipo").textContent = "Editar equipo";
        abrir("#ventanaEquipo"); $("#codigo_equipo").focus();
    }
    if (baja && confirm("¿Dar de baja este equipo? El registro se conservará en el historial.")) {
        try { await solicitar("C_Equipos.php", "DELETE", {id: baja.dataset.bajaEquipo}); await cargarEquipos(); }
        catch (error) { alert(error.message); }
    }
});

$("#formCategoria").addEventListener("submit", async evento => {
    evento.preventDefault();
    const id = $("#id_categoria").value;
    const datos = {nombre: $("#nombre_categoria").value.trim(), descripcion: $("#descripcion_categoria").value.trim()};
    try { await solicitar("C_CategoriaEquipo.php", id ? "PUT" : "POST", id ? {id, ...datos} : datos); evento.target.reset(); $("#id_categoria").value = ""; await cargarCatalogos(); }
    catch (error) { alert(error.message); }
});

$("#formEstado").addEventListener("submit", async evento => {
    evento.preventDefault();
    const id = $("#id_estado").value;
    const datos = {nombre: $("#nombre_estado").value.trim()};
    try { await solicitar("C_EstadoEquipo.php", id ? "PUT" : "POST", id ? {id, ...datos} : datos); evento.target.reset(); $("#id_estado").value = ""; await cargarCatalogos(); }
    catch (error) { alert(error.message); }
});

$("#listaCategorias").addEventListener("click", evento => {
    const boton = evento.target.closest("[data-editar-categoria]"); if (!boton) return;
    const item = equipos.categorias.find(categoria => String(categoria.id) === boton.dataset.editarCategoria);
    $("#id_categoria").value = item.id; $("#nombre_categoria").value = item.nombre; $("#descripcion_categoria").value = item.descripcion || "";
});
$("#listaEstados").addEventListener("click", evento => {
    const boton = evento.target.closest("[data-editar-estado]"); if (!boton) return;
    const item = equipos.estados.find(estado => String(estado.id) === boton.dataset.editarEstado);
    $("#id_estado").value = item.id; $("#nombre_estado").value = item.nombre;
});

Promise.all([cargarCatalogos(), cargarEquipos()]).catch(error => { $("#mensajeInventario").textContent = error.message; });
})();
