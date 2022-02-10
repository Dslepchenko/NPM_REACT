import Loader from "react-loader-spinner";
import React from 'react';
import { useSelector } from "react-redux";


const Spinner = () => {
    const spinner = useSelector((state) => state.appReducer.loading);
    console.log(spinner);
    return (
        <div className="loader-styles">
            <Loader 
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            visible={spinner}
            />
        </div>
    );
};


export default Spinner;
