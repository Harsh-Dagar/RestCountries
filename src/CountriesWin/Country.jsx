import { Link, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import './Country.css';


function Country() {
    const [countryData, setCountryData] = useState([]);
    const { countryName } = useParams();
    const ApiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    useEffect(() => {
        const FetchData = async () => {
            const res = await fetch(ApiUrl);
            const jsonRes = await res.json();
            console.log(jsonRes);
            setCountryData(jsonRes);
        }
        FetchData();
    }, [countryName]);

    return (<>
        <div className="BackButton">
            <Link to={`/`}>

                <Button variant="contained" color="info">
                    <i className="fa fas fa-arrow-left"></i>&nbsp; Back Home
                </Button>
            </Link>

        </div>
        {
            countryData.map((data, index) => {
                if (index == 0) {
                    const {
                        numericCode,
                        flags,
                        name,
                        nativeName,
                        population,
                        region,
                        subregion,
                        capital,
                        tld,
                        currencies,
                        languages,
                        borders,
                    } = data
                    return (
                        <div className="CountryDataContainer">
                            <div className='CountryFlag'><img src={flags.png} alt={flags.alt} /></div>
                            <div className="CountryInfo">
                                <div className="CountryName"><h1>{name.common}</h1></div>
                                <div className="CountryInfo2">
                                    <div>
                                        <h5>
                                            {/* {console.log('@@@@@@@@',name.nativeName[Object.keys(name.nativeName)[0]])} */}
                                            Native Name: <span>{name.nativeName[Object.keys(name.nativeName)[0]].common}</span>
                                        </h5>
                                        <h5>
                                            Population: <span>{population.toLocaleString()}</span>
                                        </h5>
                                        <h5>
                                            Region: <span>{region}</span>
                                        </h5>
                                        <h5>
                                            Sub Region: <span>{subregion}</span>
                                        </h5>
                                        <h5>
                                            Capital: <span>{capital}</span>{" "}
                                        </h5>
                                    </div>

                                    <div>
                                        <h5>
                                            Top Level Domain: <span>{tld[0]}</span>
                                        </h5>
                                        {/* {console.log('@@@@@@@@',Object.keys(currencies)[0])} */}
                                        <h5>
                                            Currencies: <span>{currencies[Object.keys(currencies)[0]].name}</span>
                                        </h5>

                                        <h5>
                                            Languages: <span>{Object.values(languages).join(', ')}</span>
                                        </h5>
                                    </div>
                                </div>

                                <div className="CountryInfoBorder">
                                    <h5>Border Countries:
                                        {
                                            (countryData[0].borders) ? (
                                                countryData[0].borders.map((brVal) => {
                                                    return (
                                                        <span className="BorderCountryBtn">
                                                            <Button size="small" variant="contained" color="secondary">
                                                                {brVal}
                                                            </Button>
                                                        </span>
                                                    );
                                                })) : <></>
                                        }
                                    </h5>
                                </div>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <></>
                    );
                }
            }
            )
        }
    </>);
}
export default Country;