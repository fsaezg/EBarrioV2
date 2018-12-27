<?php
// defined('BASEPATH') OR exit('No direct script access allowed');

// class Participantes_model extends CI_Model
// {
//     public function __construct()
//     {
//         parent::__construct();
//     }

//     public function getProjectWithUsers($id = null)
//     {
        //SELECT * FROM proyecto WHERE EXISTS (SELECT * FROM usuario WHERE proyecto.usuario_idusuario=usuario.idusuario)
//         if (!is_null($id)) {
//             $query = $this->db->query($query);select('*')->from('potencia_mes')->where('usuario_idusuario', $id)->get();
//             if ($query->num_rows() === 1) {
//                 return $query->row_array();
//             }

//             return null;
//         }
//         $consulta="SELECT usuario.nombre, usuario.apellido
// FROM usuario
// INNER JOIN proyecto ON usuario.idusuario = proyecto.usuario_idusuario";

//         $query = $this->db->query($consulta);
//         if ($query->num_rows() > 0) {
//             return $query->result_array();
//         }

//         return null;
//     }

    // public function saveSpending($consumo)
    // {
    //     $this->db->set($this->_setProyecto($consumo))->insert('consumo');

    //     if ($this->db->affected_rows() === 1) {
    //         return $this->db->insert_id();
    //     }

    //     return null;
    // }

    // public function updateSpending($consumo)
    // {
    //     $id = $consumo['fecha'];

    //     $this->db->set($this->_setProyecto($consumo))->where('fecha', $id)->update('consumo');

    //     if ($this->db->affected_rows() === 1) {
    //         return true;
    //     }

    //     return null;
    // }

    // public function deleteSpending($id)
    // {
    //     $this->db->where('idproyecto', $id)->delete('proyecto');

    //     if ($this->db->affected_rows() === 1) {
    //         return true;
    //     }

    //     return null;
    // }

    // private function _setSpending($proyecto)
    // {
    //     return array(
    //         'idproyecto' => $proyecto['idproyecto'],
    //         'nombre' => $proyecto['nombre'],
    //         'descripcion' => $proyecto['descripcion'],
    //         'region' => $proyecto['region'],
    //         'ciudad' => $proyecto['ciudad'],
    //         'estado' => $proyecto['estado'],
    //         'requisito' => $proyecto['requisito']
    //     );
    // }
//}

defined('BASEPATH') OR exit('No direct script access allowed');

class Participantes_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getUsuario($id = null)
    {
        if (!is_null($id)) {
            $query = $this->db->select('*')->from('usuario')->where('idusuario', $id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }

            return null;
        }

        $query = $this->db->select('*')->from('usuario')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }

        return null;
    }

    public function saveUsuario($usuario)
    {
        $this->db->set($this->_setUsuario($usuario))->insert('usuario');

        if ($this->db->affected_rows() === 1) {
            return $this->db->insert_id();
        }

        return null;
    }

    public function updateUsuario($usuario)
    {
        $id = $usuario['id'];

        $this->db->set($this->_setProyecto($usuario))->where('idusuario', $id)->update('usuario');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    public function deleteUsuario($id)
    {
        $this->db->where('idusuario', $id)->delete('usuario');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    private function _setUsuario($usuario)
    {
        return array(
            'idusuario' => $proyecto['idusuario'],
            'nombre' => $proyecto['nombre'],
            'apellido' => $proyecto['apellido'],
            'contrasena' => $proyecto['contrasena'],
            'correo' => $proyecto['correo'],
            'nacimiento' => $proyecto['nacimiento']
        );
    }
}