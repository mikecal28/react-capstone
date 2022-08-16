import { Link } from "react-router-dom";

import SwapiSearch from "../widgets/SwapiSearch";
import WidgetItem from "../items/WidgetItem";

function WidgetsDashboard() {
  const widgets = [{ widget: SwapiSearch, name: "swapi-search" }];

  const renderCards = () => {
    return widgets.map((widget, idx) => {
      return <WidgetItem key={idx} widget={widget} />;
    });
  };
  return (
    <div className="widgets-dashboard">
      <div className="page-title">Widgets Dashboard</div>
      {renderCards()}
    </div>
  );
}

export default WidgetsDashboard;
