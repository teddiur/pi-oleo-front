import React, { useState, useEffect } from "react";
import { getAxios } from "../api";

export const PointsDisplay = ({ meter }) => {
  const [points, setPoints] = useState(0);
  const [meterPoints, setMeterPoints] = useState(0);
  useEffect(() => {
    const get = async () => {
      const { data } = await getAxios().get(`/score/`);
      setPoints(data.score);
      setMeterPoints(data.score % 10);
    };
    get();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontWeight: 900,
          fontSize: "5rem",
          color: "#128232",
          margin: 0,
        }}
      >
        {points}
      </p>
      <p
        style={{
          fontWeight: 900,
          fontSize: "2rem",
          margin: 0,
        }}
      >
        Pontos
      </p>
      {meter && (
        <meter
          max="10"
          value={meterPoints}
          min="0"
          style={{ flexGrow: 1, minWidth: 200 }}
        />
      )}
    </div>
  );
};
