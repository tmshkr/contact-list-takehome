import { useState, useRef, useEffect } from "react";

export default function ContactTableRow({ contacts, setContacts, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const nameRef = useRef(null);
  const contact = contacts[index];
  const handleChange = (e) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = { ...contact, [e.target.name]: e.target.value };
    setContacts(updatedContacts);
  };

  const handleClickOff = (e) => {
    setIsEditing(false);
    document.removeEventListener("click", handleClickOff);
  };

  useEffect(() => {
    if (isEditing) {
      nameRef.current.focus();
    }
  }, [isEditing]);

  return (
    <tr
      key={contact.id}
      id={contact.id}
      onClick={(e) => {
        if (isEditing) e.stopPropagation();
      }}
    >
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {isEditing ? (
          <input
            ref={nameRef}
            name="name"
            className="max-w-full w-full"
            value={contact.name}
            onChange={handleChange}
          />
        ) : (
          contact.name
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {isEditing ? (
          <input
            name="phone"
            className="max-w-full w-full"
            value={contact.phone}
            onChange={handleChange}
          />
        ) : (
          contact.phone
        )}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            document.addEventListener("click", handleClickOff);
            setIsEditing(!isEditing);
          }}
          className="text-indigo-600 hover:text-indigo-900"
        >
          {isEditing ? "Editing" : "Edit"}
          <span className="sr-only">, {contact.name}</span>
        </button>
      </td>
    </tr>
  );
}
