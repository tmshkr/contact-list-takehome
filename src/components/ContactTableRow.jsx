import { useState } from "react";

export default function ContactTableRow({ contact }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <tr key={contact.id}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {isEditing ? (
          <input className="max-w-full w-full" value={contact.name} />
        ) : (
          contact.name
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {isEditing ? (
          <input className="max-w-full w-full" value={contact.phone} />
        ) : (
          contact.phone
        )}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-indigo-600 hover:text-indigo-900"
        >
          {isEditing ? "Editing" : "Edit"}
          <span className="sr-only">, {contact.name}</span>
        </button>
      </td>
    </tr>
  );
}
