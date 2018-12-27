<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Efficient_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getEfficient($id = null)
    {
        if (!is_null($id)) {
            $query = $this->db->select('*')->from('efficienthome')->where('idproyecto', $id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }

            return null;
        }

        $query = $this->db->select('*')->from('efficienthome')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }

        return null;
    }

    public function saveEfficient($proyecto)
    {
        $this->db->set($this->_setProyecto($proyecto))->insert('efficienthome');

        if ($this->db->affected_rows() === 1) {
            return $this->db->insert_id();
        }

        return null;
    }

    public function updateEfficient($proyecto)
    {
        $id = $proyecto['idproyecto'];

        $this->db->set($this->_setProyecto($proyecto))->where('idproyecto', $id)->update('efficienthome');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    public function deleteEfficient($id)
    {
        $this->db->where('idproyecto', $id)->delete('efficienthome');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    private function _setEfficient($proyecto)
    {
        return array(
            'id' => $proyecto['id'],
            'nombre'=> $proyecto['nombre'],
            'apellido'=> $proyecto['apellido'],
            'apikey'=> $proyecto['apikey']
        );
    }
}