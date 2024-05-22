import React, { useEffect, useState } from "react";
import { pointsLevel, levelName } from "../constants/level";
import happy from "../images/friend.png";
import { getAxios } from "../api";

export const LevelDisplay = () => {
  const [currentLevel, setLevel] = useState(0);
  useEffect(() => {
    const get = async () => {
      const { data } = await getAxios().get(`/score/`);
      console.log(data);
      setLevel(data.level);
    };
    get();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "10%",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: "2rem",
        marginBottom: "15rem",
        minHeight: "min-content",
      }}
    >
      {Object.entries(pointsLevel).map(([level, point]) => {
        const unlocked = level <= currentLevel;
        let imgStyle, textStyle;
        if (unlocked) {
          imgStyle = {};
          textStyle = { color: "green" };
        } else {
          imgStyle = { filter: "blur(4px)" };
          textStyle = {};
        }
        return (
          <div
            key={level}
            style={{
              width: 100,
              borderRadius: "10px",
              backgroundColor: "#ACDEBA17",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "45%",
              fontWeight: "bold",
              ...textStyle,
            }}
          >
            <img {...happy} style={imgStyle} />
            <p style={{ fontSize: "2rem", margin: 0 }}>{point}</p>
            <p style={{ textAlign: "center" }}>{levelName[level]}</p>
          </div>
        );
      })}
    </div>
  );
};
