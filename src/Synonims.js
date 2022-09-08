import React from "react";

export default function Synonims(props) {
  if (props.synonims) {
    return (
      <div className="Synonims">
        {props.synonims.map(function (synonim, index) {
          return <li key={index}>{synonim}</li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
