<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Meta_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getGoal($id = null)
    {
        //SELECT * FROM proyecto WHERE EXISTS (SELECT * FROM usuario WHERE proyecto.usuario_idusuario=usuario.idusuario)
        if (!is_null($id)) {
            $query = $this->db->query($query);select('*')->from('meta')->where('id_usuario', $id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }

            return null;
        }
        $query = $this->db->select('*')->from('meta')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }

        return null;
    }
}
