import { useEffect, useState } from "react";

const BillReminder = () => {
  const [reminder, setReminder] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setReminder("Electricity Bill Due Tomorrow!");
    }, 5000);
  }, []);

  return reminder ? <p>{reminder}</p> : null;
};

export default BillReminder;
