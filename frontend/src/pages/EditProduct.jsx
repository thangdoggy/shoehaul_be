import React from 'react';
import Data from '../data/fakedata/Data.json';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FormChange from '../components/FormChange';
import AdminHeader from '../components/AdminHeader';

function EditProduct() {
    const { productID } = useParams();
    const thisProduct = Data.find((product) => product.id == productID);

    const [name, setName] = useState(thisProduct.name);
    const [brand, setBrand] = useState(thisProduct.brand);
    const [color, setColor] = useState(thisProduct.color);
    const [size, setSize] = useState(thisProduct.size);
    const [stock, setStock] = useState(thisProduct.stock);
    const [price, setPrice] = useState(thisProduct.price);
    const [description, setDescription] = useState(thisProduct.description);
    const [image, setImage] = useState(thisProduct.image);
    
    const initialState = {
        id: productID,
        name: name,
        brand: brand,
        color: color,
        size: size,
        stock: stock,
        price: price,
        description: description,
        image: image,
    };
    const [data, setData] = useState(Data);
    const [dataInput, setDataInput] = useState(initialState);

    const handleSubmit = () => {
        const cloneData = [...data];
        let dataEdit = [];
        const filterDataNoEdit = cloneData.filter(item => item.id != dataInput.id);
        dataEdit = [...filterDataNoEdit, dataInput].sort((a,b) => a.id - b.id);
        setData(dataEdit);

        console.log(data);
        //Data được chỉnh sửa
    };
    function handleDelete(){
        const cloneData = [...data];

        const filterData = cloneData.filter(item => item.id != dataInput.id);
        setData(filterData);

        console.log(data);
        //Data được chỉnh sửa
    };
    
    return (
        <div>
            <AdminHeader/>
            <FormChange dataInput={dataInput} setDataInput={setDataInput} handleSubmit={handleSubmit} handleDelete = {handleDelete} />
        </div>
    );
}

export default EditProduct;