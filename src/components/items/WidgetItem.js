import { Link } from "react-router-dom";

function WidgetItem(props) {
  const { name, url } = props.widget;

  return (
    <Link to={`/widgets-dashboard/${url}`}>
      <div className="widget-item">
        <h3>{name}</h3>
      </div>
    </Link>
  );
}

export default WidgetItem;
