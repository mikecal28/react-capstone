import { Link } from "react-router-dom";

import SwapiSearch from "../widgets/SwapiSearch";
import WidgetItem from "../items/WidgetItem";

function WidgetsDashboard() {
  const widgets = [{ name: "Swapi Search", url: "swapi-search" }];

  const renderCards = () => {
    return widgets.map((widget, idx) => {
      return <WidgetItem key={idx} widget={widget} />;
    });
  };
  return <div className="widgets-dashboard">{renderCards()}</div>;
}

export default WidgetsDashboard;
