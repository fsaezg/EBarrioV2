<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '/libraries/REST_Controller.php';


class Consumohistorico extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('consumohistorico_model');
    }

    public function index_get()
    {
        $consumos = $this->consumohistorico_model->getConsumo();

        if (!is_null($consumos)) {
            $this->response(array('response' => $consumos), 200);
        } else {
            $this->response(array('error' => 'No hay Registro de consumos en la base de datos...'), 404);
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
        $consumo = $this->consumohistorico_model->getConsumo($id);

        if (!is_null($consumo)) {
            $this->response(array('response' => $consumo), 200);
        } else {
            $this->response(array('error' => 'consumo no encontrado...'), 404);
        }
    }

    public function index_post()
    {
        if (!$this->post('consumo')) {
            $this->response(null, 400);
        }

        $id = $this->consumohistorico_model->saveConsumo($this->post('consumo'));

        if (!is_null($id)) {
            $this->response(array('response' => $id), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }

    public function index_put()
    {
        if (!$this->put('consumo')) {
            $this->response(null, 400);
        }

        $update = $this->consumohistorico_model->updateConsumo($this->put('consumo'));

        if (!is_null($update)) {
            $this->response(array('response' => 'consumo actualizado!'), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }

    public function index_delete($id)
    {
        if (!$id) {
            $this->response(null, 400);
        }

        $delete = $this->consumohistorico_model->deleteConsumo($id);

        if (!is_null($delete)) {
            $this->response(array('response' => 'Proyecto eliminada!'), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }
}