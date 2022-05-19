import { useState } from "react";
export default function AddContactForm({
  contacts,
  setContacts,
  setIsAddingContact,
}) {
  const [newContact, setNewContact] = useState({
    id: contacts.length + 1,
    name: "",
    phone: "",
  });
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const addContact = () => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    setIsAddingContact(false);
  };

  return (
    <div className="w-1/2 m-auto mt-36">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="name"
          id="name"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="John Smith"
          value={newContact.name}
          onChange={handleChange}
        />
      </div>
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-gray-700"
      >
        Phone
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="phone"
          id="phone"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="123-456-7890"
          value={newContact.phone}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        className="block mt-6 mx-auto rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        onClick={addContact}
      >
        Add Contact
      </button>
    </div>
  );
}
