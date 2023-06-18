import React from 'react'
import './SearchBar.css'
import { useState } from 'react'

const SearchBar = ({searchByName,searchByRegion}) => {
    const [formData,setFormData]=useState("");
    const [filterRegion,setFilterRegion]=useState("");

    function handleSubmit(evt){
        evt.preventDefault();
        if(formData.length>0){
            searchByName(formData);
        }
    }
    function handleChange(evnt){

        // console.log(evnt.target.value);
        setFormData(evnt.target.value);
    }

    function handleFilter(evt){
        // console.log("hello@@@@@",evt.target.value);
        searchByRegion(evt.target.value)
    }
  return (
    <div className='SearchBar'>

        <form className="searchbar-form" onSubmit={handleSubmit} >
            <div className="searchbar">
                <div id="searcharea">

                    <label htmlFor="username"><i style={{color: "rgba(28, 107, 255, 0.81)"}}
                            className="fa fa-sharp fa-light fa-search"></i></label>
                    <input onChange={handleChange} type="text" name="username" id="username" value={formData} placeholder="Search for a country..."/>
                </div>
                <button type="submit">Search</button>
            </div>
        </form>



        <div className="dropdown">
            <div className="dropdown-content">
                <select onChange={handleFilter} id="select">
                    <option  value='All'>Filter By Region: All</option>

                    <option value='Africa'>Filter By Region: Africa</option>
                    
                    <option value='Americas'>Filter By Region: Americas</option>

    
                    <option value='Asia'>Filter By Region: Asia</option>

          

                    <option value='Europe'>Filter By Region: Europe</option>

          
                    <option value='Oceania'>Filter By Region: Oceania</option>
                </select>

            </div>
        </div>
    </div>
  )
}

export default SearchBar;