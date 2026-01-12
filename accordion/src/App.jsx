import { useState } from "react";
import Accordion from "./AccordionList";

export default function App() {
  const [openId, setOpenId] = useState(null);

  return <Accordion openId={openId} setOpenId={setOpenId} />;
}
