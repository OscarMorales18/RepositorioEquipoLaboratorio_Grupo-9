<?php

class M_CarreraAlumnos
{
    private Connection $connection;
    private Response $response;

    public function __construct(Connection $connection, Response $response)
    {
        $this->connection = $connection;
        $this->response = $response;
    }

    function SELECT_CARRERA_ALUMNOS()
    {
        $query = "SELECT id_carrera_alumno as id, nombre_carrera_alumno as nombre, descripcion_carrera_alumno as descripcion FROM carrera_alumno ORDER BY id_carrera_alumno DESC";
        $statement = $this->connection->prepare($query);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        $this->response->success("Carreras de alumno obtenidas correctamente", $result, 1);
    }

    function INSERT_CARRERA_ALUMNO($arrayData)
    {
        $nombre_carrera_alumno = $arrayData['nombre'];
        $descripcion_carrera_alumno = $arrayData['descripcion'];

        $query = "INSERT INTO carrera_alumno (nombre_carrera_alumno, descripcion_carrera_alumno) VALUES (:nombre, :descripcion)";
        $statement = $this->connection->prepare($query);
        $statement->execute([
            'nombre' => $nombre_carrera_alumno,
            'descripcion' => $descripcion_carrera_alumno
        ]);
        $this->response->success("Carrera de alumno agregada correctamente", [], 1);
    }

    function UPDATE_CARRERA_ALUMNO($arrayData)
    {
        $id_carrera_alumno = $arrayData['id'];
        $nombre_carrera_alumno = $arrayData['nombre'];
        $descripcion_carrera_alumno = $arrayData['descripcion'];

        $query = "UPDATE carrera_alumno SET nombre_carrera_alumno = :nombre, descripcion_carrera_alumno = :descripcion WHERE id_carrera_alumno = :id";
        $statement = $this->connection->prepare($query);
        $statement->execute([
            'id' => $id_carrera_alumno,
            'nombre' => $nombre_carrera_alumno,
            'descripcion' => $descripcion_carrera_alumno
        ]);
        $this->response->success("Carrera de alumno actualizada correctamente", [], 1);
    }

    function DELETE_CARRERA_ALUMNO($id_carrera_alumno)
    {
        $query = "DELETE FROM carrera_alumno WHERE id_carrera_alumno = :id";
        $statement = $this->connection->prepare($query);
        $statement->execute(['id' => $id_carrera_alumno]);
        $this->response->success("Carrera de alumno eliminada correctamente", [], 1);
    }
}