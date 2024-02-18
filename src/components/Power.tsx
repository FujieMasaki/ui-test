import { useState } from "react";

interface PowerProps {
  name: string;
}

const Power: React.FC<PowerProps> = ({ name }) => {
  const [power, setPower] = useState<boolean>(false);

  return (
    <div style={{ margin: "2em" }}>
      <h1>
        {name} {power ? "ON" : "OFF"}{" "}
      </h1>
      <button onClick={() => setPower(true)} disabled={power ? true : false}>
        ON
      </button>
      <button onClick={() => setPower(false)} disabled={!power ? true : false}>
        OFF
      </button>
    </div>
  );
};

export default Power;
