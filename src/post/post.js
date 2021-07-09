import React from "react";
export default function Post({ state }) {
  function nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }
  return (
    <div className="post">
      <h2>
        {state.country}{" "}
        <img
          className="flag"
          src={state.countryInfo.flag}
          alt={`flag of ${state.country}`}
        />
      </h2>

      <div className="post_info">
        <h5>Population: {nFormatter(state.population)}</h5>
        <p>
          Active Cases: <span className="des">{nFormatter(state.active)}</span>
        </p>
        <p>
          Total Cases: <span className="des">{nFormatter(state.cases)}</span>
        </p>
        <p>
          New Cases: <span className="des">{nFormatter(state.todayCases)}</span>
        </p>
        <p>
          Total Deaths:
          <span className="des">{nFormatter(state.deaths)}</span>
        </p>
        <p>
          New Deaths:{" "}
          <span className="des">{nFormatter(state.todayDeaths)}</span>
        </p>
        <p>
          Total Recovered:{" "}
          <span className="des">{nFormatter(state.recovered)}</span>
        </p>
        <p>
          New Recovered:{" "}
          <span className="des">{nFormatter(state.todayRecovered)}</span>
        </p>
        <p>
          Critical Cases:
          <span className="des">{nFormatter(state.critical)}</span>
        </p>
      </div>
    </div>
  );
}
