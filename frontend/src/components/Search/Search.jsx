import React, { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import imgsearch from '../../data/homepage/nike.png';
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from '../../actions/productActions';
const styles = {
    result: {
        position: 'absolute',
        top: '100%',
        backgroundColor: '#fbeaab'
    },
    result_img: {
        display: 'inline-block',
    },
}
export default function Searchbar({ data }) {
    //Filter result and return suggestions
    const [isOpen, setIsOpen] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
        const searchword = event.target.value;
        setWordEntered(searchword);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchword.toLowerCase());
        });
        if (searchword === "") {
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
        }
    };
    //End of filtering result
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };
    
    let result;
    if (filteredData.length === 0 && wordEntered !== "") {
        result = <Link to='/products'><div className='ml-16 w-96 rounded-b-xl pb-5 pl-5' style={styles.result} >No results found. Move to all products <AiOutlineArrowRight className='inline font-bold'/></div></Link>
    }
    else {
        result = <div className={"dataResult ml-16 w-96 rounded-b-xl opacity-90" + (isOpen ? 'open' : 'closed')} style={styles.result}
        >
        {filteredData.slice(0, 5).map((item, index) => {
            return (
                <Link
                    key={index}
                    to={`/products/${item._id}`}
                >
                    <div className='ml-3 flex flex-1 mb-3 hover:bg-amber-300 cursor-pointer'>
                        <img src={imgsearch} alt={item.name} width="50px" height="50px" style={styles.result_img} />
                        <div className='inline h-12 pl-5'>
                            <p className="text-slate-900 inline">{item.name}<br />${item.price}</p>
                        </div>
                    </div>
                </Link>
            );
        })}
    </div>
    }
    return (
        <div>
            <label className="mx-16 flex justify-between items-center relative">
                <input
                    className="placeholder:text-slate-900 bg-slate-900 bg-opacity-5 w-96 h-9 rounded-md pl-6 pr-12 focus:outline-none focus:shadow-lg"
                    placeholder="Search"
                    type="text"
                    name="search"
                    value={wordEntered}
                    onChange={handleFilter}
                />
                {filteredData.length === 0 ? (
                    <AiOutlineSearch className="absolute text-2xl text-slate-900 right-0 mr-3" />
                ) : (
                    <>
                        <AiOutlineClose className="absolute text-xl text-slate-900 right-0 mr-3 cursor-pointer" onClick={clearInput} />
                    </>
                )}
            </label>
            {
                result
            }
        </div>
    );
}
