<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class customerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id = null)
    {
        if ($id == null) {
            return \App\Customer::orderBy('id', 'asc')->get();
        } else {
            return $this->show($id);
        }

        //$customers = \App\Customer::all();
        //header('Access-Control-Allow-Origin: *');
        //return $customers;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cust = new \App\Customer;
        $cust->name = $request->input('name');
        $cust->email = $request->input('email');
        $cust->save();
        return 'Customer record successfully created with id ' . $cust->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return \App\Customer::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $cust = \App\Customer::find($id);
        $cust->name = $request->input('name');
        $cust->email = $request->input('email');
        $cust->save();
        return 'Customer record successfully updated with id ' . $cust->id;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
 
    public function destroy(Request $request, $id) {
        $cust = \App\Customer::find($id);
        $cust->delete();
        return "Customer record successfully deleted #" . $request->input('id');
    }
}
