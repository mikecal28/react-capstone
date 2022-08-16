import { Link } from "react-router-dom";

function WidgetItem(props) {
  const { name } = props.widget;

  return (
    <div>
      <h3>
        <Link to={`/widgets-dashboard/${name}`}>{name}</Link>
      </h3>
    </div>
  );
}

export default WidgetItem;
