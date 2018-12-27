<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Proyectos_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getProyecto($id = null)
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

    public function saveProyecto($proyecto)
    {
        $this->db->set($this->_setProyecto($proyecto))->insert('proyecto');

        if ($this->db->affected_rows() === 1) {
            return $this->db->insert_id();
        }

        return null;
    }

    public function updateProyecto($proyecto)
    {
        $id = $proyecto['idproyecto'];

        $this->db->set($this->_setProyecto($proyecto))->where('idproyecto', $id)->update('proyecto');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    public function deleteProyecto($id)
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
            'razonsocial'=> $proyecto['razonsocial'],
            'rutsocial'=> $proyecto['rutsocial'],
            'organizacion'=> $proyecto['organizacion'],
            'fechasolicitud'=> $proyecto['fechasolicitud'],
            'nombre'=> $proyecto['nombre'],
            'tarifa'=> $proyecto['tarifa'],
            'destinatario'=> $proyecto['destinatario'],
            'beneficiariodirecto'=> $proyecto['beneficiariodirecto'],
            'beneficiarioindirecto'=> $proyecto['beneficiarioindirecto'],
            'dimensiones'=> $proyecto['dimensiones'],
            'duracion'=> $proyecto['duracion'],
            'region'=> $proyecto['region'],
            'estado'=> $proyecto['estado'],
            'meta'=> $proyecto['meta'],
            'dinero'=> $proyecto['dinero'],
            'aporte'=> $proyecto['aporte']
        );
    }
}