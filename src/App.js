import "./styles.css";

import { useState } from "react";
import Table from "./components/Table";

export default function App() {
  const contactList = [
    { id: 1, name: "Joe", phone: "111-222-3333" },
    { id: 2, name: "Fred", phone: "222-444-6666" },
  ];
  const [contacts, setContacts] = useState(contactList);

  return (
    <div className="App p-5">
      <Table {...{ contacts }} />
      <h2>Add Contact</h2>
      <div>TODO: Interface to add a contact</div>
    </div>
  );
}
