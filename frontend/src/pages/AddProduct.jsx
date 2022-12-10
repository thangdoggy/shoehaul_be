import React from 'react';
import AdminHeader from '../components/AdminHeader';
import { useState } from 'react';
import FormInput from '../components/FormInput';

const initialState = {
    id:'',
    name:'',
    brand:'',
    color:'',
    size:'',
    stock:'',
    price:'',
    description:'',
    image: '',
}

function AddProduct(props) {
    var dataJson = require('../data/fakedata/Data.json');
    const [data, setData] = useState(dataJson);
    const [dataInput, setDataInput] = useState(initialState);
    const handleSubmit = () => {
        const cloneData = [...data];
        cloneData.push({...dataInput, id: 100 + Math.random() });
        setData(cloneData);
        setDataInput(initialState);
        /** Update data trên state, chưa thay đổi trên database */
    }
    const handleReset = () => {
        setDataInput(initialState);
    }

    return (
        <div>
            <AdminHeader/>
            <FormInput dataInput={dataInput} setDataInput={setDataInput} handleSubmit={handleSubmit} handleReset={handleReset}/>
        </div>
    );
}

export default AddProduct;