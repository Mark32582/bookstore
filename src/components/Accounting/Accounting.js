const Accounting = () => {
    
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
              <span className="book">Jujutsu Kaisen, Vol.1:</span> 6 units
            </div>
            <div className="top">
              <span className="book">A Court of Thorns and Roses:</span> 6 units
            </div>
            <div className="top">
              <span className="book">The Warm Hands of Ghosts:</span> 6 units
            </div>
            <div className="top">
              <span className="book">Waverider:</span> 6 units
            </div>
            <div className="top">
              <span className="book">What Moves the Dead:</span> 6 units
            </div>
          </div>
        </div>
      </div>
      <div className="accounting--sales-container">
        <div className="accounting--sales-container__all-sales">
          <div>
            <h2 className="all-sales-title">Customer Purchase</h2>
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcOHSw-zIhQqj3x6Am1HYtwgIBbqhK69KIArKw7PQJk4qfRZsTV5boH3BnTafmoXG72VtcMvNTywCT/pubhtml?widget=true&amp;headers=false"
              title="spreadsheets"
              className="spreadsheet"
            ></iframe>
            <span className="all-sales-title"><button onClick={()=>window.open("https://docs.google.com/spreadsheets/d/1hBDO-LKGtgo_1LsNYRiK9yLvllepdaVLBjVVtDBWuzY/edit#gid=0", "_blank", "rel=noopener noreferrer")} >Go to Spreadsheet</button></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accounting;
