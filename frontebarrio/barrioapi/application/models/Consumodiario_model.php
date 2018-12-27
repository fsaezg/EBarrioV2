<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Consumodiario_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function get($id = null)
    {
        if (!is_null($id)) {
            $query = $this->db->select('*')->from('proyecto')->where('idproyecto', $id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }

            return null;
        }

        $query = $this->db->select('*')->from('proyecto')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }

        return null;
    }

    public function save($proyecto)
    {
        $this->db->set($this->_setProyecto($proyecto))->insert('proyecto');

        if ($this->db->affected_rows() === 1) {
            return $this->db->insert_id();
        }

        return null;
    }

    public function update($proyecto)
    {
        $id = $proyecto['idproyecto'];

        $this->db->set($this->_setProyecto($Proyecto))->where('idproyecto', $id)->update('proyecto');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    public function delete($id)
    {
        $this->db->where('idproyecto', $id)->delete('proyecto');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    private function _setProyecto($proyecto)
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