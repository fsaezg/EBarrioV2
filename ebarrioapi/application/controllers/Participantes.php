<?php
// defined('BASEPATH') OR exit('No direct script access allowed');

// require_once APPPATH . '/libraries/REST_Controller.php';


// class Participantes extends REST_Controller
// {
//     public function __construct()
//     {
//         parent::__construct();
//         $this->load->model('participantes_model');
//     }

//     public function index_get()
//     {
//         $participantes = $this->participantes_model->getProjectWithUsers();

//         if (!is_null($participantes)) {
//             $this->response(array('response' => $participantes), 200);
//         } else {
//             $this->response(array('error' => 'No hay participantes en la base de datos...'), 404);
//         }
    
    // }

    // public function find_get($id)
    // {
    //     if (!$id) {
    //         $this->response(null, 400);
    //     }
    //     $participantes = $this->participantes_model->getProjectWithUsers($id);

    //     if (!is_null($participantes)) {
    //         $this->response(array('response' => $participantes), 200);
    //     } else {
    //         $this->response(array('error' => 'proyecto no encontrado...'), 404);
    //     }
    // }

    // public function index_post()
    // {
    //     if (!$this->post('consumo')) {
    //         $this->response(null, 400);
    //     }

    //     $id = $this->participantes_model->saveSpending($this->post('consumo'));

    //     if (!is_null($id)) {
    //         $this->response(array('response' => $id), 200);
    //     } else {
    //         $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
    //     }
    // }

       // }


defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '/libraries/REST_Controller.php';


class Participantes extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('participantes_model');
    }

    public function index_get()
    {
        $usuarios = $this->participantes_model->getUsuario();

        if (!is_null($usuarios)) {
            $this->response(array('response' => $usuarios), 200);
        } else {
            $this->response(array('error' => 'No hay usuarios en la base de datos...'), 404);
        }
    }

    public function find_get($id)
    {
        if (!$id) {
            $this->response(null, 400);
        }
        $usuario = $this->participantes_model->getUsuario($id);

        if (!is_null($usuario)) {
            $this->response(array('response' => $usuario), 200);
        } else {
            $this->response(array('error' => 'Usuario no encontrado...'), 404);
        }
    }

    public function index_post()
    {
        if (!$this->post('usuario')) {
            $this->response(null, 400);
        }

        $id = $this->participantes_model->saveUsuario($this->post('usuario'));

        if (!is_null($id)) {
            $this->response(array('response' => $id), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }

    public function index_put()
    {
        if (!$this->put('usuario')) {
            $this->response(null, 400);
        }

        $update = $this->participantes_model->updateUsuario($this->put('usuario'));

        if (!is_null($update)) {
            $this->response(array('response' => 'Usuario actualizado!'), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }

    public function index_delete($id)
    {
        if (!$id) {
            $this->response(null, 400);
        }

        $delete = $this->participantes_model->deleteUsuario($id);

        if (!is_null($delete)) {
            $this->response(array('response' => 'Usuario eliminado!'), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }
}