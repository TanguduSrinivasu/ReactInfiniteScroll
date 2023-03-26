import React from "react";
import CurrencyCard from "./CurrencyCard";

const CurrenyContainer = ({ data }) => {
  return (
    <div className='flex flex-wrap'>
      { data.length > 0 ?  Object.values(data).map((coin, index) => {
        return (
          <CurrencyCard 
            key={index}
            image={coin?.image}
            name={coin?.name}
            price={coin?.current_price}
          />
        );
      }) : <h1 className="text-white text-center">Data Not Fetched</h1>}
    </div>
  );
};

export default CurrenyContainer;
