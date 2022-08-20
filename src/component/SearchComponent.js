import React, { useState } from "react";
import { API_KEY, BASE_SEARCH_URL } from "../ApiHelpers";
const axios = require("axios").default;

// Search Component : User can search for specfic location . 
// This method returns the geolocation cordinates ie.  Lat and lon
// There are few drawbacks with this Api, we might need to pay to upgrade and get more benifits from this Api.
//This Api is restricted to max 5 cities and for this reason, i have restricted this search only for Australia.

const SearchComponent = (props) => {

    const [cityName, setcityName] = useState("");
    const onSearchBtnClick = () => {

        if (cityName !== "") {
            props.setisSearchActive(true)
            var SEARCH_API_URL =
                // eslint-disable-next-line no-useless-concat
                BASE_SEARCH_URL + "=" + cityName + "&limit=1&appid=" + API_KEY;
            axios
                .get(SEARCH_API_URL)
                .then(function (response) {

                    var temp_coordinate = {
                        lat: response["data"][0].lat,
                        lon: response["data"][0].lon
                    }
                    props.setGeoLocation(temp_coordinate)

                })
                .catch(function (error) {
                    alert("Please select a correct location in Australia.")
                    console.log(error);
                });
        }
    };

    const onClearBtnClick = () => {
        if (cityName !== '') {
            document.getElementById("textbox").value = "";
            setcityName('')
        }
    }

    const SearchtextBox = (value) => {
        if (value !== '')
            setcityName(value)

    }

    return (
        <div className="row">
            <div className="mb-3 row justify-content-end">

                <input
                    type="text"
                    id="textbox"
                    class="form-control"
                    placeholder="Search City"
                    aria-label="search City"
                    aria-describedby="basic-addon1"
                    data-toggle="tooltip" data-placement="top" title="Please enter CityName,CountryCode(Ex:geelong,AU)"
                    value={cityName}
                    onChange={(e) => SearchtextBox(e.target.value)}
                />
                <span className=" justify-content-end p-2 align-bottom">
                    <button
                        className="btn btn-primary"
                        style={{ height: "fit-content" }}
                        onClick={onSearchBtnClick}
                    >
                        Find
                    </button>
                    <span> <button
                        className="btn btn-primary
                        "
                        style={{ height: "fit-content" }}
                        onClick={onClearBtnClick}
                    >
                        Clear
                    </button></span>
                    
                </span>
            </div>
        </div>
    );
};

export default SearchComponent;
