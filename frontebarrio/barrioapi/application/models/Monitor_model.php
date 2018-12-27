<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Monitor_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getProyecto($id = null)
    {
        if (!is_null($id)) {
            $query = $this->db->select('*')->from('monitor')->where('apikey', $id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }

            return null;
        }

        $query = $this->db->select('*')->from('monitor')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }

        return null;
    }

    public function saveProyecto($proyecto)
    {
        $this->db->set($this->_setProyecto($proyecto))->insert('monitor');

        if ($this->db->affected_rows() === 1) {
            return $this->db->insert_id();
        }

        return null;
    }

    public function updateProyecto($proyecto)
    {
        $id = $proyecto['apikey'];

        $this->db->set($this->_setProyecto($proyecto))->where('apikey', $id)->update('monitor');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    public function deleteProyecto($id)
    {
        $this->db->where('apikey', $id)->delete('monitor');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    private function _setProyecto($proyecto)
    {
        return array(
            'proyecto' => $proyecto['proyecto'],
            'apikey'=> $proyecto['apikey']
        );
    }
}