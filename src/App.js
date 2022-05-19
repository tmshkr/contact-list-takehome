import "./styles.css";

import { useState } from "react";

export default function App() {
  const contactList = [
    { id: 1, name: "Joe", phone: "111-222-3333" },
    { id: 2, name: "Fred", phone: "222-444-6666" }
  ];
  const [contacts, setContacts] = useState(contactList);

  return (
    <div className="App">
      <h1>Manage Contacts</h1>
      <h2>Contact List</h2>
      <div>
        TODO: List Contacts here showing name and phone, with edit button for
        each contact
      </div>
      <h2>Add Contact</h2>
      <div>TODO: Interface to add a contact</div>
    </div>
  );
}
