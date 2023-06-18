import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const ApiUrl = 'https://restcountries.com/v3.1/all';
import './Countries.css';
import SearchBar from './SearchBar';
import Button from '@mui/material/Button';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        FetchData();
    }, []);
    const FetchData = async () => {
        const res = await fetch(ApiUrl);
        const jsonRes = await res.json();
        setCountries(jsonRes);
    }

    async function searchByName(name) {
        await FetchData();
        setCountries((curr) => {
            const filteredVal = curr.filter((val) => {
                let len = name.length;
                let countryNameLen = val.name.common.length;
                let i = 0;
                while (i < len && i < countryNameLen) {
                    if (name[i] !== val.name.common[i]) {
                        return false;
                    }
                    i++;
                }
                if (i === len) return true;
                return false;
                // return val.name.common===name;
            });
            return filteredVal;
        })
    }
    async function searchByRegion(regionVal) {
        await FetchData();
        if (regionVal == "All") {
            return;
        }
        setCountries((curr) => {
            const filteredVal = curr.filter((val) => {
                let { region } = val;
                return region === regionVal;
            });
            return filteredVal;
        })

    }
    return (
        <>
            <SearchBar searchByName={searchByName} searchByRegion={searchByRegion} />
            <div className='Countries'>


                {countries.map((country, ind) => {
                    const { name, region, population, capital, flags } = country;
                    return (
                        <div key={ind + "country"} className="CountryBox">
                            <div className='CountryBoxImage'><img src={flags.png} alt={flags.alt} /></div>
                            <div className='CountryBoxData'>
                                <h2>{name.common}</h2>
                                <p><span>Population:</span> {population}</p>
                                <p><span>Region:</span> {region}</p>
                                <p><span>Capital:</span> {capital}</p>
                            </div>
                            <div className='VisitBtn'>
                                <Link to={`/countries/${name.common}`}>
                                    <Button size="small" variant="contained" color="info">
                                        Visit
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    );
                })}



            </div>
        </>

    )
}

export default Countries;