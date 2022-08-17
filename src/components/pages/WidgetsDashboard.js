import WidgetItem from "../items/WidgetItem";

function WidgetsDashboard() {
  const widgets = [
    { name: "Swapi Search", url: "swapi-search" },
    { name: "Weather", url: "weather" },
    { name: "Hangman", url: "hangman" },
    { name: "Message Scroller", url: "message-scroller" },
    { name: "Analogue Clock", url: "analogue-clock" },
  ];

  const renderCards = () => {
    return widgets.map((widget, idx) => {
      return <WidgetItem key={idx} widget={widget} />;
    });
  };
  return <div className="widgets-dashboard">{renderCards()}</div>;
}

export default WidgetsDashboard;
