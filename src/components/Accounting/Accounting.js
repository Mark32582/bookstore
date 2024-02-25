import axios from "axios";
import { useEffect, useState } from "react";

const Accounting = () => {
  const [accountingData, setAccountingData] = useState();

  const fetchAccountingData = () => {
    const accountingUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcOHSw-zIhQqj3x6Am1HYtwgIBbqhK69KIArKw7PQJk4qfRZsTV5boH3BnTafmoXG72VtcMvNTywCT/pub?output=csv";
    axios
      .get(accountingUrl)
      .then((response) => {
        const parsedCsvData = parseCSV(response.data);
        setAccountingData(parsedCsvData);
        console.log(parsedCsvData);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAccountingData();
  }, []);

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
    const headers = rows[0].split(","); // Extract headers (assumes the first row is the header row)
    const data = []; // Initialize an array to store parsed data
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(","); // Split the row, handling '\r' characters
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }
    return data;
  }
  console.log(accountingData);
  return (
    <div className="accounting">
      <div className="accounting--header-container">
        <div className="accounting--header-container__total-sales">
          <h1 className="title-today">Today's Sales ($)</h1>
          <span className="today-sales">$400.53</span>
        </div>
        <div className="accounting--header-container__location">
          <h2 className="title-today">Sales by Location:</h2>
          <div>
            <div className="location">
              <span className="book">Online:</span> 250.12
            </div>
            <div className="location">
              <span className="book">In Store:</span> 150.41
            </div>
          </div>
        </div>
        <div className="accounting--header-container__top-sellers">
          <h2 className="title-today">Top Sellers:</h2>
          <div>
            <div className="top">
              <span className="book">book title:</span> num copies
            </div>
            <div className="top">
              <span className="book">book title:</span> num copies
            </div>
            <div className="top">
              <span className="book">book title:</span> num copies
            </div>
          </div>
        </div>
      </div>
      <div className="accounting--sales-container">
        <div className="accounting--sales-container__all-sales">
          <div>
            <h2 className="all-sales-title">Customer Purchase</h2>
            <div className="all-sales">
              <div className="grid-orders grid-head">Date</div>
              <div className="grid-orders grid-head">Order Number</div>
              <div className="grid-orders grid-head">Customer Name</div>
              <div className="grid-orders grid-head">Units Sold</div>
              <div className="grid-orders grid-head">Book Title</div>
              <div className="grid-orders grid-head">Price</div>
              <div className="grid-orders grid-head">Taxes</div>
              <div className="grid-orders grid-head">Total Cost</div>
              <div className="grid-orders grid-head">Shipping</div>
              <div className="grid-orders grid-head">Order Location</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accounting;
