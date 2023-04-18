import React from "react";
import { CoreValuesContainer } from "./CoreValues.styles";
import { GlobalHeader } from "../../global/glob-styles";
import CoreValuesItem from "./CoreValuesItem";

import CoreValuesSummary1 from "../../assets/CoreValuesSummary (1).png";
import CoreValuesSummary2 from "../../assets/CoreValuesSummary (2).png";
import CoreValuesSummary3 from "../../assets/CoreValuesSummary (3).png";
import CoreValuesSummary4 from "../../assets/CoreValuesSummary (4).png";

import Vector1 from "../../assets/Vector (1).png";
import Vector2 from "../../assets/Vector (2).png";
import Vector3 from "../../assets/Vector (3).png";
import Vector4 from "../../assets/Vector (4).png";

const CoreValues = () => {
  return (
    <CoreValuesContainer>
      <GlobalHeader style={{ textAlign: "center" }}>
        Rating Outcomes
      </GlobalHeader>
      <div className="core-value-items ">
        <CoreValuesItem
          image={CoreValuesSummary1}
          header={"100+"}
          description={"Happy Clients"}
          backimage={Vector1}
        />
        <CoreValuesItem
          image={CoreValuesSummary2}
          header={"200+"}
          description={"IT Services and Consulting"}
          backimage={Vector2}
        />
        <CoreValuesItem
          image={CoreValuesSummary3}
          header={"300+"}
          description={"Project Delivered"}
          backimage={Vector3}
        />
        <CoreValuesItem
          image={CoreValuesSummary4}
          header={"8000+"}
          description={"Development Hours"}
          backimage={Vector4}
        />
      </div>
    </CoreValuesContainer>
  );
};

export default CoreValues;
