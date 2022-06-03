import { Fragment, useState } from "react";
//import { Dialog, Menu, Transition } from "@headlessui/react";

import { ScaleIcon } from "@heroicons/react/outline";
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from "@heroicons/react/solid";

const cards = [
  { name: "New Orders", href: "#", icon: ScaleIcon, amount: "0" },
  { name: "Cancelled Orders", href: "#", icon: ScaleIcon, amount: "0" },
  { name: "Pending Orders", href: "#", icon: ScaleIcon, amount: "0" },
  { name: "All Orders", href: "#", icon: ScaleIcon, amount: "0" },
  // More items...
];
const transactions = [
  {
    id: "0123456",
    userid: "#0123456",
    productname: "Helmet",
    href: "#",
    delpincode: "510006",
    price: "20,000",
    quantity: "100",
    netamount: "20000",
    status: "confirmed",
  },
  {
    id: "0123456",
    userid: "#0123456",
    productname: "Helmet",
    href: "#",
    delpincode: "510006",
    price: "20,000",
    quantity: "100",
    netamount: "20000",
    status: "confirmed",
  },
  // More transactions...
];
const statusStyles = {
  confirmed: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <main>
        <div className="pl-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pl-16">
            <main className="flex-1 pb-8">
              {/* Page header */}
              <div className="bg-white shadow">
                <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:pl-16">
                  <div className="pl-16 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200"></div>
                </div>
              </div>

              <div className="pl-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pl-16">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Overview
                  </h2>
                  <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {cards.map((card) => (
                      <div
                        key={card.name}
                        className="bg-white overflow-hidden shadow rounded-lg"
                      >
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <card.icon
                                className="h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                  {card.name}
                                </dt>
                                <dd>
                                  <div className="text-lg font-medium text-gray-900">
                                    {card.amount}
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                          <div className="text-sm">
                            <a
                              href={card.href}
                              className="font-medium text-cyan-700 hover:text-cyan-900"
                            >
                              View all
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:pl-16">
                  New Orders
                </h2>

                {/* Activity table (small breakpoint and up) */}
                <div className="hidden sm:block">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-16">
                    <div className="flex flex-col mt-2">
                      <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="w-full">
                            <tr>
                              <th
                                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                scope="col"
                              >
                                Transaction Id
                              </th>
                              <th
                                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                scope="col"
                              >
                                Product Name
                              </th>
                              <th
                                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                scope="col"
                              >
                                Price
                              </th>
                              <th
                                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                scope="col"
                              >
                                Quantity
                              </th>
                              <th
                                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                scope="col"
                              >
                                Net Amount
                              </th>
                              <th
                                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                scope="col"
                              >
                                User Id
                              </th>
                              <th
                                className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                scope="col"
                              >
                                Delivery Pincode
                              </th>
                              <th
                                className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block"
                                scope="col"
                              >
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {transactions.map((transaction) => (
                              <tr key={transaction.id} className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a
                                      href={transaction.href}
                                      className="group inline-flex space-x-2 truncate text-sm"
                                    >
                                      <CashIcon
                                        className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                      />
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        {transaction.id}
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  {transaction.productname}
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  {transaction.price}
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  {transaction.quantity}
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  {transaction.netamount}
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  {transaction.userid}
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  {transaction.delpincode}
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span
                                    className={classNames(
                                      statusStyles[transaction.status],
                                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                                    )}
                                  >
                                    {transaction.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <time dateTime={transaction.datetime}>
                                    {transaction.date}
                                  </time>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {/* Pagination */}
                        <nav
                          className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                          aria-label="Pagination"
                        >
                          <div className="hidden sm:block">
                            <p className="text-sm text-gray-700">
                              Showing <span className="font-medium">1</span> to{" "}
                              <span className="font-medium">10</span> of{" "}
                              <span className="font-medium">20</span> results
                            </p>
                          </div>
                          <div className="flex-1 flex justify-between sm:justify-end">
                            <a
                              href="#"
                              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                              Previous
                            </a>
                            <a
                              href="#"
                              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                              Next
                            </a>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </>
  );
}
