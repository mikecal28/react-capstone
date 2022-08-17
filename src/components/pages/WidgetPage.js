import Hangman from "../widgets/Hangman";
import MessageScroller from "../widgets/MessageScroller";
import SwapiSearch from "../widgets/SwapiSearch";
import Weather from "../widgets/Weather";
import AnalogueClock from "../widgets/AnalogueClock";

function WidgetPage(props) {
  console.log(props);
  return (
    <div className="widget-page">
      {props.match.params.widgetId === "swapi-search" ? (
        <SwapiSearch />
      ) : props.match.params.widgetId === "weather" ? (
        <Weather />
      ) : props.match.params.widgetId === "hangman" ? (
        <Hangman />
      ) : props.match.params.widgetId === "message-scroller" ? (
        <MessageScroller />
      ) : props.match.params.widgetId === "analogue-clock" ? (
        <AnalogueClock />
      ) : (
        "Widget Not Found"
      )}
    </div>
  );
}

export default WidgetPage;
