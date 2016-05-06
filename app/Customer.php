<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    public $timestamps = false; //Eloquent will maintain the created_at and updated_at columns on database 
    protected $fillable = array('id', 'name', 'email');

}
