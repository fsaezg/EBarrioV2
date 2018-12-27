<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Consumomes_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getSpending($id = null)
    {
        if (!is_null($id)) {
            $query = $this->db->select('*')->from('potencia_mes')->where('usuario_idusuario', $id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }

            return null;
        }

        $query = $this->db->select('*')->from('potencia_mes')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }

        return null;
    }

    public function saveSpending($consumo)
    {
        $this->db->set($this->_setProyecto($consumo))->insert('consumo');

        if ($this->db->affected_rows() === 1) {
            return $this->db->insert_id();
        }

        return null;
    }

    public function updateSpending($consumo)
    {
        $id = $consumo['fecha'];

        $this->db->set($this->_setProyecto($consumo))->where('fecha', $id)->update('consumo');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    public function deleteSpending($id)
    {
        $this->db->where('idproyecto', $id)->delete('proyecto');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    private function _setSpending($proyecto)
    {
        return array(
            'idproyecto' => $proyecto['idproyecto'],
            'nombre' => $proyecto['nombre'],
            'descripcion' => $proyecto['descripcion'],
            'region' => $proyecto['region'],
            'ciudad' => $proyecto['ciudad'],
            'estado' => $proyecto['estado'],
            'requisito' => $proyecto['requisito']
        );
    }
}