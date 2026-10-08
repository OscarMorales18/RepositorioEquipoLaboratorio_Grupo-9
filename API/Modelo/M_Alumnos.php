<?php

class M_Alumnos
{
    private Connection $connection;
    private Response $response;

    public function __construct(Connection $connection, Response $response)
    {
        $this->connection = $connection;
        $this->response = $response;
    }

    function SELECT_ALUMNOS()
    {
        $query = "SELECT id_alumno as id, id_carrera_alumno as id_carrera, id_estado_alumno as id_estado, carne_alumno as carne, nombre_alumno as nombre, apellido_alumno as apellido, correo_alumno as correo, fecha_nacimiento_alumno as fecha_nacimiento FROM alumno ORDER BY id_alumno DESC";
        $statement = $this->connection->prepare($query);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        $this->response->success("Alumnos obtenidos correctamente", $result, 1);
    }

    function INSERT_ALUMNO($arrayData)
    {
        $id_carrera_alumno = $arrayData['id_carrera'];
        $id_estado_alumno = $arrayData['id_estado'];
        $carne_alumno = $arrayData['carne'];
        $nombre_alumno = $arrayData['nombre'];
        $apellido_alumno = $arrayData['apellido'];
        $correo_alumno = $arrayData['correo'];
        $fecha_nacimiento_alumno = $arrayData['fecha_nacimiento'];

        $query = "INSERT INTO alumno (id_carrera_alumno, id_estado_alumno, carne_alumno, nombre_alumno, apellido_alumno, correo_alumno, fecha_nacimiento_alumno) VALUES (:id_carrera, :id_estado, :carne, :nombre, :apellido, :correo, :fecha_nacimiento)";
        $statement = $this->connection->prepare($query);
        $statement->execute([
            'id_carrera' => $id_carrera_alumno,
            'id_estado' => $id_estado_alumno,
            'carne' => $carne_alumno,
            'nombre' => $nombre_alumno,
            'apellido' => $apellido_alumno,
            'correo' => $correo_alumno,
            'fecha_nacimiento' => $fecha_nacimiento_alumno
        ]);
        $this->response->success("Alumno agregado correctamente", [], 1);
    }

    function UPDATE_ALUMNO($arrayData)
    {
        $id_alumno = $arrayData['id'];
        $id_carrera_alumno = $arrayData['id_carrera'];
        $id_estado_alumno = $arrayData['id_estado'];
        $carne_alumno = $arrayData['carne'];
        $nombre_alumno = $arrayData['nombre'];
        $apellido_alumno = $arrayData['apellido'];
        $correo_alumno = $arrayData['correo'];
        $fecha_nacimiento_alumno = $arrayData['fecha_nacimiento'];

        $query = "UPDATE alumno SET id_carrera_alumno = :id_carrera, id_estado_alumno = :id_estado, carne_alumno = :carne, nombre_alumno = :nombre, apellido_alumno = :apellido, correo_alumno = :correo, fecha_nacimiento_alumno = :fecha_nacimiento WHERE id_alumno = :id";
        $statement = $this->connection->prepare($query);
        $statement->execute([
            'id' => $id_alumno,
            'id_carrera' => $id_carrera_alumno,
            'id_estado' => $id_estado_alumno,
            'carne' => $carne_alumno,
            'nombre' => $nombre_alumno,
            'apellido' => $apellido_alumno,
            'correo' => $correo_alumno,
            'fecha_nacimiento' => $fecha_nacimiento_alumno
        ]);
        $this->response->success("Alumno actualizado correctamente", [], 1);
    }

    function DELETE_ALUMNO($id_alumno)
    {
        $query = "DELETE FROM alumno WHERE id_alumno = :id";
        $statement = $this->connection->prepare($query);
        $statement->execute(['id' => $id_alumno]);
        $this->response->success("Alumno eliminado correctamente", [], 1);
    }
}