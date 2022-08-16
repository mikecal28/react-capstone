import { useState, useEffect } from "react";
import SwapiSearch from "../widgets/SwapiSearch";

function WidgetPage(props) {
  console.log(props);
  return (
    <div className="widget-page">
      {(props.match.params.widget_id = "swapi-search" && <SwapiSearch />)}
    </div>
  );
}

export default WidgetPage;
