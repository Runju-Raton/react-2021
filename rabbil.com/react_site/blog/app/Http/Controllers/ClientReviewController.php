<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClientReviewModel;
class ClientReviewController extends Controller
{
    public function onAllSelect(){
        $result=ClientReviewModel::all();
        return $result;
    }
}
