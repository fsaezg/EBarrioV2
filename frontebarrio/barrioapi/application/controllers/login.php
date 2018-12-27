<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Israel
 * Date: 3/07/13
 * Time: 15:15
 * To change this template use File | Settings | File Templates.
 */
class Login extends CI_Controller{
    public  function __construct(){
        parent::__construct();
    }
    public function index(){
        $this->load->view("login");
    }

    //logueamos usuarios con codeigniter y angularjs
    public function loginUser(){
        if($this->input->post("email") && $this->input->post("password"))
        {
            $this->form_validation->set_rules('password', 'password', 'trim|required|xss_clean');
            $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email|xss_clean');
            if($this->form_validation->run() == false){
                echo json_encode(array("respuesta" => "incomplete_form"));
            }else{
                $this->load->model("login_model");
                $email = $this->input->post("email");
                $password = $this->input->post("password");
                $loginUser = $this->login_model->loginUser($email,$password);
                if($loginUser === true){
                    echo json_encode(array("respuesta" => "success"));
                }else{
                    echo json_encode(array("respuesta" => "failed"));
                }
            }
        }else{
            echo json_encode(array("respuesta" => "incomplete_form"));
        }
    }

    public function logoutUser(){
        $this->session->sess_destroy();
    }
}