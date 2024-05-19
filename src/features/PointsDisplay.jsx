import React, { useState, useEffect } from "react";

export const PointsDisplay = ({ meter }) => {
  const [points, setPoints] = useState(0);
  useEffect(() => {
    const get = async () => {
      let apiPoints, apiOld, apiLiters;
      if (false) {
        const { points: apiPoints, is_old: apiOld } = await getAxios().get(
          `/points/`
        );
      } else {
        apiPoints = 9;
        apiLiters = 9;
        apiOld = false;
      }
      setPoints(apiPoints);
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
        <meter max="10" value={points} min="0" style={{ flexGrow: 1 }} />
      )}
    </div>
  );
};
