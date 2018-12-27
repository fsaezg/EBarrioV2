<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '/libraries/REST_Controller.php';


class Region extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('region_model');
    }

    public function index_get()
    {
        $regiones = $this->region_model->getRegion();

        if (!is_null($regiones)) {
            $this->response(array('response' => $regiones), 200);
        } else {
            $this->response(array('error' => 'No hay Regiones en la base de datos...'), 404);
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
        $region = $this->region_model->getRegion($id);

        if (!is_null($region)) {
            $this->response(array('response' => $region), 200);
        } else {
            $this->response(array('error' => 'region no encontrado...'), 404);
        }
    }

    public function index_post()
    {
        if (!$this->post('region')) {
            $this->response(null, 400);
        }

        $id = $this->region_model->saveProyecto($this->post('tbl_region'));

        if (!is_null($id)) {
            $this->response(array('response' => $id), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }

    public function index_put()
    {
        if (!$this->put('region')) {
            $this->response(null, 400);
        }

        $update = $this->region_model->updateRegion($this->put('tbl_region'));

        if (!is_null($update)) {
            $this->response(array('response' => 'region actualizado!'), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }

    public function index_delete($id)
    {
        if (!$id) {
            $this->response(null, 400);
        }

        $delete = $this->region_model->deleteRegion($id);

        if (!is_null($delete)) {
            $this->response(array('response' => 'Region eliminada!'), 200);
        } else {
            $this->response(array('error', 'Algo se ha roto en el servidor...'), 400);
        }
    }
}