<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactTableModel;

class ContactController extends Controller
{
    
    public function onInsert(Request $request){
        $name=$request->input('name');
        $email=$request->input('email');
        $message=$request->input('message');
        $result=ContactTableModel::insert(['name'=>$name,'email'=>$email,'message'=>$message]);
        if($result==true){
            return "Data insert succesfully";
        }
        else{
            return "Data insert failed!";
        }
    }
}
