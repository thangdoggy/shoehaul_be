import React from 'react';
import {Card, Row, Input, Space, Button} from 'antd';
import {Link} from 'react-router-dom';

const styles = {
    row: {
        margin: '10px',
        border: 'none',
    },
    card: {
        border: 'none',
    },
    button: {
        marginTop: '50px',
        marginLeft: '15px',
        marginRight: '15px',

        padding: '10px',

        width: '150px',
        height: 'auto',
        textAlign: 'center',
    },
}

function FormChange({dataInput, setDataInput, handleSubmit, handleDelete }) {
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDataInput({...dataInput, [name]:value});
    };

    return (
        <Row justify="center" style={styles.row}>
            <Card style={styles.card}>
                <h1 className='font-bold mb-5 text-xl text-center'>Product Information</h1>
                <Space direction="vertical" style={{width: '100%'}}></Space>

                <label htmlFor="name" className='text-sm mx-1 mt-3 font-bold'>Name</label>  
                <input type="text" style={styles.input} name="name" value={dataInput.name} onChange={handleChange} placeholder='Name'className="w-full h-10 mb-3 text-base p-3 border border-gray borer-solid rounded-lg hover:shadow-md"/>

                <label htmlFor="brand" className='text-sm mx-1 mt-3 font-bold'>Brand</label>
                <input type="text" style={styles.input} name="brand" value={dataInput.brand} onChange={handleChange} placeholder='Brand'className="w-full h-10 mb-3 text-base p-3 border border-gray borer-solid rounded-lg hover:shadow-md"/>

                <div className='flex flex-3 mt-3 font-bold'>
                    <label htmlFor="price" className='text-sm mx-2 flex-1'>Price</label>
                    <label htmlFor="color" className='text-sm mx-2 flex-1'>Color</label>
                    <label htmlFor="size" className='text-sm mx-2 flex-1'>Size</label>
                </div>
                <div className='flex flex-3 mb-3'>
                    <input type="text" style={styles.input} name="price" value={dataInput.price} onChange={handleChange} placeholder='Price'className="mr-2 h-10 mb-2 text-base p-3 border border-gray borer-solid rounded-lg hover:shadow-md flex-1"/>
                    <input type="text" style={styles.input} name="color" value={dataInput.color} onChange={handleChange} placeholder='Color'className="ml-2 h-10 mb-2 text-base p-3 border border-gray borer-solid rounded-lg hover:shadow-md flex-1"/>
                    <input type="text" style={styles.input} name="size" value={dataInput.size} onChange={handleChange} placeholder='Size'className="ml-2 h-10 mb-2 text-base p-3 border border-gray borer-solid rounded-lg hover:shadow-md flex-1"/>
                </div>

                <label htmlFor="image" className='text-sm mx-1 mt-3 font-bold'>Image URL</label>
                <input type="text" style={styles.input} name="image" value={dataInput.description} onChange={handleChange} placeholder='Image URL'className="w-full h-10 mb-6 text-base p-3 border border-gray borer-solid rounded-lg hover:shadow-md"/>

                <label htmlFor="description" className='text-sm mx-1 mt-3 font-bold'>Description</label>
                <textarea type="text" style={styles.input} name="description" value={dataInput.description} onChange={handleChange} placeholder='Description'className="w-full h-52 mb-3 text-base p-3 border border-gray borer-solid rounded-lg hover:shadow-md"/>
                
                <div className='text-center'>
                    <Button onClick={handleSubmit} style={styles.button}>Save change</Button>
                    <Button onClick={handleDelete} style={styles.button}>Delete</Button>
                    <Link to={`/products`}>
                        <Button style={styles.button}>Cancel</Button>
                    </Link>
                </div>
            </Card>
        </Row>
    );
}

export default FormChange;