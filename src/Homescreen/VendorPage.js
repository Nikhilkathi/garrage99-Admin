import React from "react";
const people = [
  {
    Userid: "Nikhil_7141",
    Name: "Nikhil Kathi",
    email: "nikhilkathi@example.com",
    Number: "8106885376",
    roll: "success",
  },
  {
    Userid: "Nikhil_7141",
    Name: "Nikhil Kathi",
    email: "nikhilsonu@example.com",
    Number: "8106885376",
    roll: "failed",
  },
  // More people...
];

export default function Example() {
  return (
    <div className="pl-40 sm:pl-40 lg:pl-40">
      <div className="sm:flex sm:items-center">
        <div className="pl-16 sm:flex-auto">
          <h1 className="pl-16 text-xl font-semibold text-gray-900">Users</h1>
          <p className=" pl-16 mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="px-5 mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add New vendor
          </button>
        </div>
      </div>
      <div className="pl-24 px-8 mt-8 overflow-hidden shadow ring-2 ring-black ring-opacity-5 md:mx-0 md:rounded-lg">
        <table className=" table-auto w-full divide-x divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-4"
              >
                Vendore Id
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Shop Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Email Id
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Number
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Roll
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {people.map((person) => (
              <tr key={person.email}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {person.Userid}
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {person.Name}
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {person.email}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {person.Number}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {person.roll}
                </td>
                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {person.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
