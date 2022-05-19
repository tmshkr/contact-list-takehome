import { useState } from "react";
import ContactTable from "./components/ContactTable";
import AddContactForm from "./components/AddContactForm";

export default function App() {
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [contacts, setContacts] = useState([
    { id: 1, name: "Joe", phone: "111-222-3333" },
    { id: 2, name: "Fred", phone: "222-444-6666" },
  ]);

  if (isAddingContact) {
    return (
      <AddContactForm {...{ contacts, setContacts, setIsAddingContact }} />
    );
  }

  return (
    <div className="p-5 max-w-3xl m-auto">
      <div className="sm:flex sm:items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">Manage Contacts</h1>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            onClick={() => setIsAddingContact(true)}
          >
            Add Contact
          </button>
        </div>
      </div>
      <ContactTable {...{ contacts, setContacts }} />
    </div>
  );
}
