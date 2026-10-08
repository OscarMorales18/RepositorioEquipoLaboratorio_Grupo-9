<?php

class M_EstadoAlumnos
{
    private Connection $connection;
    private Response $response;

    public function __construct(Connection $connection, Response $response)
    {
        $this->connection = $connection;
        $this->response = $response;
    }

    function SELECT_ESTADO_ALUMNOS()
    {
        $query = "SELECT id_estado_alumno as id, nombre_estado_alumno as nombre FROM estado_alumno ORDER BY id_estado_alumno DESC";
        $statement = $this->connection->prepare($query);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        $this->response->success("Estados de alumno obtenidos correctamente", $result, 1);
    }

    function INSERT_ESTADO_ALUMNO($arrayData)
    {
        $nombre_estado_alumno = $arrayData['nombre'];

        $query = "INSERT INTO estado_alumno (nombre_estado_alumno) VALUES (:nombre)";
        $statement = $this->connection->prepare($query);
        $statement->execute([
            'nombre' => $nombre_estado_alumno
        ]);
        $this->response->success("Estado de alumno agregado correctamente", [], 1);
    }

    function UPDATE_ESTADO_ALUMNO($arrayData)
    {
        $id_estado_alumno = $arrayData['id'];
        $nombre_estado_alumno = $arrayData['nombre'];

        $query = "UPDATE estado_alumno SET nombre_estado_alumno = :nombre WHERE id_estado_alumno = :id";
        $statement = $this->connection->prepare($query);
        $statement->execute([
            'id' => $id_estado_alumno,
            'nombre' => $nombre_estado_alumno
        ]);
        $this->response->success("Estado de alumno actualizado correctamente", [], 1);
    }

    function DELETE_ESTADO_ALUMNO($id_estado_alumno)
    {
        $query = "DELETE FROM estado_alumno WHERE id_estado_alumno = :id";
        $statement = $this->connection->prepare($query);
        $statement->execute(['id' => $id_estado_alumno]);
        $this->response->success("Estado de alumno eliminado correctamente", [], 1);
    }
}