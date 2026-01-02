import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/progressBar/ProgressBar";
import Pagination from "./components/Pagination/Pagination";
import Button from "./components/buttons/Button";
import Input from "./components/input/Input";
import Checkbox from "./components/checkbox/Checkbox";
// import Accordion from "./components/accordion2/Accordion";

import Accordion from "./components/accordion/Accordion";
import AccordionItem from "./components/accordion/AccordionItem";
import AccordionHeader from "./components/accordion/AccordionHeader";
import AccordionPanel from "./components/accordion/AccordionPanel";

import RadioGroup from "./components/radioGroup/RadioGroup";
import RadioOption from "./components/radioGroup/RadioOption";

function App() {
  const [currentPage, setCurrentPage] = useState(1); //3
  const [selected, setSelected] = useState("male");

  const handlePageChange = (page) => {
    setCurrentPage(page); //3
  };
  // const handleOpen = (page) => {
  //   setOpen((pre) => !pre);
  // };
  return (
    <div style={{ padding: "40px" }}>
      {/* <Pagination
        totalItems={43}
        perPage={7}
        current={currentPage}
        onChange={handlePageChange}
      />

      <p>Current Page: {currentPage}</p>
      <div style={{ padding: "16px", width: "100px" }}>
        <ProgressBar value={70} visibility={true} />
      </div>
      <Button variant="danger">Hello </Button>
      <div style={{ width: "300px" }}>
        <Input placeholder="Enter your name" />
      </div>
      <Checkbox label={"accept terms and conditions"} /> */}

      {/* <div style={{ padding: "40px", maxWidth: "500px" }}>
        <Accordion
          label="What is React?"
          isOpen={open}
          onToggle={() => setOpen(!open)}
        >
          React is a JavaScript library used to build user interfaces. It allows
          developers to create reusable UI components.
        </Accordion>
      </div> */}
<h1>Accordion</h1>
      <Accordion>
        <AccordionItem>
          <AccordionHeader>what is react</AccordionHeader>
          <AccordionPanel>
            <strong>This is the first item’s accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It’s also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>what is html</AccordionHeader>
          <AccordionPanel>
            <strong>This is the first item’s accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It’s also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>what is Javascript</AccordionHeader>
          <AccordionPanel>
            <strong>This is the first item’s accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It’s also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
{console.log(selected)}
      <RadioGroup value={selected} onChange={setSelected} name="gender">
        <RadioOption value="female" label="female"/>
        <RadioOption value="male" label="male" className="naresh"/>
         <RadioOption value="other" label="other"/>
      </RadioGroup>
    </div>
  );
}

export default App;
