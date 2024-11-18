import axios from "axios";
import React, { useState, useEffect } from "react";

type CountryType = {
  name: string;
  capitalCity: string;
  continent: string;
  subRegion: string;
  languages: string;
  landArea: string;
  population: string;
  nationality: string;
  independent: string;
  currencies: string;
  map: string;
  flag: string;
  coatOfArms: string;
};

const RestCountries: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [country, setCountry] = useState<CountryType | null>(null); // Change initial state to null
  const [errorResponse, setErrorResponse] = useState<string>("");

  const fetchCountryData = async () => {
    if (!searchTerm) return;

    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${searchTerm}`
      );

      if (response.status === 404) {
        setErrorResponse("Country not found");
        setCountry(null);
      } else {
        const countryData = response.data[0];
        const currencyKey = Object.keys(countryData.currencies)[0];
        const languageKey = Object.keys(countryData.languages)[0];

        setCountry({
          name: countryData.name.official,
          capitalCity: countryData.capital[0],
          continent: countryData.continents[0],
          subRegion: countryData.subregion,
          languages: countryData.languages[languageKey],
          landArea: countryData.area,
          population: countryData.population,
          nationality: countryData.demonyms.eng.m,
          independent: countryData.independent
            ? "Independent State"
            : "Not Independent",
          currencies: countryData.currencies[currencyKey].name,
          map: countryData.maps.googleMaps,
          flag: countryData.flags.png,
          coatOfArms: countryData.coatOfArms.svg,
        });

        setErrorResponse("");
      }
    } catch (error) {
      setErrorResponse("Country not found");
      setCountry(null);
      console.log(error);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchCountryData();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchCountryData(); // Trigger the search when the button is clicked
  };

  return (
    <>
      <div className=" md:py-28 md:px-44 text-center py-12 px-5 bg-slate-200 block fixed top-0 w-full md:static">
        <form
          onSubmit={handleSearch}
          className="flex justify-between items-center gap-5"
        >
          <input
            type="text"
            className="flex-1 md:py-4 py-2 md:px-10 px-4 rounded-full outline-none "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter the country name"
          />
          <button
            className="bg-[#ff7e00] md:px-8 px-5 py-2 rounded-full text-white text-base md:text-lg cursor-pointer hover:opacity-90"
            type="submit"
          >
            Search
          </button>
        </form>
        <h1 className="mt-12 md:text-5xl text-4xl font-bold bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">
          Explore The Universe
        </h1>
      </div>

      {errorResponse ? (
        <p className="text-red-500 md:px-64 px-3 md:py-3 py-2">
          {errorResponse}
        </p>
      ) : (
        country && (
          <div className="lg:px-64 md:px-24 px-3 md:py-10 py-4 md:mt-3 mt-72">
            <img
              loading="lazy"
              src={country.flag}
              alt="flag"
              className="w-full md:w-full md:h-[60dvh] mb-5"
            />
            <div className="flex justify-between items-center gap-2 mb-3">
              <h1>
                <p className="font-bold">Country</p>
                {country.name}
              </h1>
              <p>
                <p className="font-bold">Capital</p>
                {country.capitalCity}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-3">
              <h1>
                <p className="font-bold">Continent</p>
                <p>{country.continent}</p>
              </h1>
              <p>
                <p className="font-bold">Sub-Region</p>
                {country.subRegion}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-3">
              <h1>
                <p className="font-bold">Nationality</p>
                {country.nationality}
              </h1>
              <p>
                <p className="font-bold">Language</p>
                {country.languages}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-3">
              <h1>
                <p className="font-bold">Land Area</p>
                <span>{country.landArea}km²</span>
              </h1>
              <p>
                <p className="font-bold">Population</p>
                {country.population}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-3">
              <p>
                <p className="font-bold">Currency</p>
                {country.currencies}
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default RestCountries;
