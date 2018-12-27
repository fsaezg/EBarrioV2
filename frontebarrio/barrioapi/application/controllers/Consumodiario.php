<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '/libraries/REST_Controller.php';


class Consumodiario extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('proyectos_model');
    }

    public function index_get()
    {
        // $proyectos = $this->proyectos_model->get();

        // if (!is_null($proyectos)) {
        //     $this->response(array('response' => $proyectos), 200);
        // } else {
        //     $this->response(array('error' => 'No hay Proyectos en la base de datos...'), 404);
        // }
        $params = json_decode(file_get_contents('https://api.mlab.com/api/1/databases/efficientmdb/collections/ConsumoDia?apiKey=7K2Y6doZUobEqRHLROy1D26_rHQOL89B'), TRUE);
        // print_r(json_encode($params));
        json_encode($params);
        $this->response($params, 200);
    }

    public function find_get($id)
    {
        if (!$id) {
            $this->response(null, 400);
        }
        $proyecto = $this->proyectos_model->get($id);

        if (!is_null($proyecto)) {
            $this->response(array('response' => $proyecto), 200);
        } else {
            $this->response(array('error' => 'proyecto no encontrado...'), 404);
        }
    }

    public function index_post()
    {
        if (!$this->post('proyecto')) {
            $this->response(null, 400);
        }

        $id = $this->proyectos_model->save($this->post('proyecto'));

        if (!is_null($id)) {
            $this->response(array('response' => $id), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }

    public function index_put()
    {
        if (!$this->put('proyecto')) {
            $this->response(null, 400);
        }

        $update = $this->proyectos_model->update($this->put('proyecto'));

        if (!is_null($update)) {
            $this->response(array('response' => 'proyecto actualizado!'), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }

    public function index_delete($id)
    {
        if (!$id) {
            $this->response(null, 400);
        }

        $delete = $this->proyectos_model->delete($id);

        if (!is_null($delete)) {
            $this->response(array('response' => 'Proyecto eliminada!'), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }
}