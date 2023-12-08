import { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate";


const Search = ({onSearchChangeDebounce}) => {
  const [search, setSearch] = useState(null)
  const URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
  const geoAPIoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_GEO_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
    }
  } ;
     
  const loadOptions = (inputSearch) => {
   
     
    return fetch(`${URL}?minPopulation=1000000&namePrefix=${inputSearch}`, geoAPIoptions)
    .then((response) => response.json())
    .then((response) =>{
      return{
        options: response.data.map((reg)=>{
          return {
            value: `${reg.latitude} ${reg.longitude}`,
                    label: `${reg.city} ${reg.countryCode}`,
                  };
                }),
              };
            });
          };
              
              

            const handleOnChange = (e) => {
              setSearch(e);
              onSearchChangeDebounce(e);
              
          
            }
            


  return (


    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />


  );


};

export default Search;