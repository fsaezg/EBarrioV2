<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Region_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getRegion($id = null)
    {
        if (!is_null($id)) {
            $query = $this->db->select('*')->from('tbl_region')->where('id', $id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }

            return null;
        }

        $query = $this->db->select('*')->from('tbl_region')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }

        return null;
    }

    public function saveRegion($region)
    {
        $this->db->set($this->_setProyecto($region))->insert('tbl_region');

        if ($this->db->affected_rows() === 1) {
            return $this->db->insert_id();
        }

        return null;
    }

    public function updateRegion($region)
    {
        $id = $region['id'];

        $this->db->set($this->_setProyecto($region))->where('id', $id)->update('tbl_region');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    public function deleteRegion($id)
    {
        $this->db->where('id', $id)->delete('tbl_region');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    private function _setRegion($proyecto)
    {
        return array(
            'id' => $region['id'],
            'nombre' => $region['nombre'],
            'ISO_3166_2_CL' => $region['ISO_3166_2_CL']
        );
    }
}