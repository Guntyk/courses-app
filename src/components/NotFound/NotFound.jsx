import Button from "../../common/Button/Button";
import { useHistory } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const { replace } = useHistory();

  return (
    <>
      <div className="not-found">
        <h1 className="not-found-title">This page does not exist :(</h1>
        <Button
          className="btn-primary"
          buttonText="Home"
          onClick={() => {
            replace("/courses");
          }}
        />
      </div>
    </>
  );
}
