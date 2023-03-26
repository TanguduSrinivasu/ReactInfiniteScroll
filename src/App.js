import "./App.css";
import CurrenyContainer from "./CurrenyContainer";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCoinData();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  const getCoinData = async () => {
    const data = await fetch(
      `https://api.coingecko.com//api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
    );

    //based on the page value in URL new data of perpage(numnber of coins) will be loaded
    const jsonData = await data.json();
    //setCoinsData(json);
    setCoinsData((prev) => {
      return [...prev, ...jsonData];
    });
    setLoading(false);
    console.log(coinsData);
  };

  const handleScroll = () => {
    // console.log("Height of the Complete WebPage", document.documentElement.scrollHeight);
    // console.log("Bar vertically scrolled and touched the bottom in Pixels", document.documentElement.scrollTop);
    // console.log("Normal WebSite Height(Window Height)", window.innerHeight);

    if (
      document.documentElement.scrollTop + window.innerHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }; //Need to remove the event Listeners
  // }, []);

  return (
    <div className="App">
      <h1 className="font-bold text-3xl text-center text-white mt-10 mb-7">
        Currency Gallery
      </h1>
      {coinsData.length > 0 && <CurrenyContainer data={coinsData} />}
      {loading && (
         <Shimmer/>
      )}
    </div>
  );
}

export default App;
