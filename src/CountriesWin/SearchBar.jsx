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
            <div className="dropdown-button">Filter By Region </div>
            <div className="dropdown-content">
                <select onChange={handleFilter} id="select" multiple>
                    <option  value='All'>All</option>

                    <option value='Africa'>Africa</option>
                    
                    <option value='Americas'>America</option>

    
                    <option value='Asia'>Asia</option>

          

                    <option value='Europe'>Europe</option>

          
                    <option value='Oceania'>Oceania</option>
                </select>

            </div>
        </div>
    </div>
  )
}

export default SearchBar