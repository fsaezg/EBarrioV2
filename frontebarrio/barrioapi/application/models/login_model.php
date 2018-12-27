<?php
class Login_model extends CI_Model{
    public function __construct(){
        parent::__construct();
    }

    public function loginUser($email,$password){
        $this->db->where("correo", $email);
        $this->db->where("contrasena", $password);
        $query = $this->db->get("usuario");
        if($query->num_rows() == 1){
            return true;
        }else{
            return false;
        }
    }
}