<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '/libraries/REST_Controller.php';


class Meta extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('meta_model');
    }

    public function index_get()
    {
        $meta = $this->meta_model->getGoal();

        if (!is_null($meta)) {
            $this->response(array('response' => $meta), 200);
        } else {
            $this->response(array('error' => 'No hay Proyectos en la base de datos...'), 404);
        }
    //     $params = json_decode(file_get_contents('https://api.mlab.com/api/1/databases/efficientmdb/collections/ConsumoMes?apiKey=7K2Y6doZUobEqRHLROy1D26_rHQOL89B'), TRUE);
    //     // print_r(json_encode($params));
    //     $this->response($params[1], 200);
    }

    public function find_get($id)
    {
        if (!$id) {
            $this->response(null, 400);
        }
        $meta = $this->meta_model->getGoal($id);

        if (!is_null($meta)) {
            $this->response(array('response' => $meta), 200);
        } else {
            $this->response(array('error' => 'proyecto no encontrado...'), 404);
        }
    }
}