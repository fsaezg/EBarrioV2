<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Consumohistorico_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getConsumo($id = null)
    {
        if (!is_null($id)) {
            $query = $this->db->select('*')->from('consumo')->where('idconsumo', $id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }

            return null;
        }

        $query = $this->db->select('*')->from('consumo')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }

        return null;
    }

    public function saveConsumo($consumo)
    {
        $this->db->set($this->_setProyecto($consumo))->insert('consumo');

        if ($this->db->affected_rows() === 1) {
            return $this->db->insert_id();
        }

        return null;
    }

    public function updateConsumo($consumo)
    {
        $id = $consumo['idconsumo'];

        $this->db->set($this->_setProyecto($consumo))->where('idconsumo', $id)->update('consumo');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    public function deleteConsumo($id)
    {
        $this->db->where('idconsumo', $id)->delete('idconsumo');

        if ($this->db->affected_rows() === 1) {
            return true;
        }

        return null;
    }

    private function _setConsumo($consumo)
    {
        return array(
            'idconsumo' => $proyecto['idconsumo'],
            'nciente'=> $proyecto['nciente'],
            'distribuidora'=> $proyecto['distribuidora'],
            'usuario'=> $proyecto['usuario'],
            'direccion'=> $proyecto['direccion'],
            'nmedidor'=> $proyecto['nmedidor'],
            'mes_uno'=> $proyecto['mes_uno'],
            'consumo_uno'=> $proyecto['consumo_uno'],
            'boleta_uno'=> $proyecto['boleta_uno'],
            'mes_dos'=> $proyecto['mes_dos'],
            'consumo_dos'=> $proyecto['consumo_dos'],
            'boleta_dos'=> $proyecto['boleta_dos'],
            'mes_tres'=> $proyecto['mes_tres'],
            'consumo_tres'=> $proyecto['consumo_tres'],
            'boleta_tres'=> $proyecto['boleta_tres'],
            'mes_cuatro'=> $proyecto['mes_cuatro'],
            'consumo_cuatro'=> $proyecto['consumo_cuatro'],
            'boleta_cuatro'=> $proyecto['boleta_cuatro'],
            'mes_cinco'=> $proyecto['mes_cinco'],
            'consumo_cinco'=> $proyecto['consumo_cinco'],
            'boleta_cinco'=> $proyecto['boleta_cinco'],
            'mes_seis'=> $proyecto['mes_seis'],
            'consumo_seis'=> $proyecto['consumo_seis'],
            'boleta_seis'=> $proyecto['boleta_seis'],
            'porcentaje'=> $proyecto['porcentaje']
        );
    }
}