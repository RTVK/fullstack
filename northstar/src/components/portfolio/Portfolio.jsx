import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  allPortfolio,
  bankPortfolio,
  insPortfolio,
  taxPortfolio,
  stockPortfolio,
  commoditiesPortfolio,
  vehiclePortfolio,
} from "../../data";
import Marquee from "react-fast-marquee";
function handleImageClick() {
  // do something with the selected portfolio item
  <a href="#contact"/>
}
export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "1 Stop",
    },
    {
      id: "banking",
      title: "Banking",
    },
    {
      id: "insurance",
      title: "Insurance",
    },
    {
      id: "stocks",
      title: "Stocks",
    },
    {
      id: "commodities",
      title: "Commodities",
    },
    {
      id: "taxes",
      title: "Taxes",
    },
    {
      id: "vehicles",
      title: "Vehicles",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allPortfolio);
        break;
      case "banking":
        setData(bankPortfolio);
        break;
      case "insurance":
        setData(insPortfolio);
        break;
      case "taxes":
        setData(taxPortfolio);
        break;
      case "stocks":
        setData(stockPortfolio);
        break;
      case "commodities":
        setData(commoditiesPortfolio);
        break;
        case "vehicles":
          setData(vehiclePortfolio);
          break;
        
      default:
        setData(bankPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Products</h1><br/>
        <Marquee>
            Equity Stocks,  Commodities,     Currency,   Portfolio Management,    Mutual Funds / SIP,    Corporate FD,    BANK FD, Home Loan / Mortgage, Vehicle Loan, Finance, General Insurance, Life Insurance, Health Insurance, Fastag, Digital Signature, ITR/ GST, Physical Shares, Recovery Shares.
        </Marquee>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href="#contact">
              <img
                src={d.img}
                alt=""
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
