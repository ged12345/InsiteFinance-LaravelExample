import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const { announcements } = usePage().props;

    console.log(usePage());

    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("announcements.destroy", e.currentTarget.id));
        }
    }

    return (
        <Authenticated auth={props.auth} errors={props.errors} header={<></>}>
            <Head title="Announcements" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={route("announcements.create")}
                                >
                                    Create Announcement
                                </Link>
                            </div>

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Content</th>
                                        <th className="px-4 py-2">
                                            Start Date
                                        </th>
                                        <th className="px-4 py-2">End Date</th>
                                        <th className="px-4 py-2">Active</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {announcements.map(
                                        ({
                                            id,
                                            title,
                                            content,
                                            startDate,
                                            endDate,
                                            active,
                                        }) => (
                                            <tr>
                                                <td className="border px-4 py-2">
                                                    {id}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {title}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {content}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {startDate}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {endDate}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {
                                                    (active === 1) ?
                                                    "true" : "false"
                                                    }
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <Link
                                                        tabIndex="1"
                                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                        href={route(
                                                            "announcements.edit",
                                                            id
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={destroy}
                                                        id={id}
                                                        tabIndex="-1"
                                                        type="button"
                                                        className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    )}

                                    {announcements.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No announcements found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
