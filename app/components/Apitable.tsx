import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

export default function Apitable() {
  return (
    <div className=" relative">
      <div className="max-w-7xl m-auto py-12 px-6 relative">
        <h3 className="text-3xl font-semibold mb-6 lg:mb-12">API Routes</h3>
        <div>
          <div className=" w-full overflow-auto">
            <table className=" min-w-[1080px] relative ">
              <thead className="h-9  w-full">
                <tr
                  className="
                w-full
                grid grid-cols-4
                border-b border-slate-300
                h-14
                items-center px-2
              "
                >
                  <th className="justify-self-start">API</th>
                  <th className="justify-self-start">All data</th>
                  <th className="justify-self-start">Single Data</th>
                  <th className="justify-self-start">Pagination</th>
                </tr>
              </thead>
              <tbody className="w-full text-slate-500">
                <tr
                  className="
                h-14
                items-center
                w-full
                grid grid-cols-4
                border-b border-slate-200 px-2
              "
                >
                  <td className="flex items-center gap-4">
                    <BsFileEarmarkPostFill /> Posts
                  </td>
                  <td>https://myjsonapi.com/api/posts</td>
                  <td>https://myjsonapi.com/api/post/1</td>
                  <td>https://myjsonapi.com/api/posts?page=2</td>
                </tr>
                <tr
                  className="
                h-14
                items-center
                w-full
                grid grid-cols-4
                border-b border-slate-200 px-2
              "
                >
                  <td className="flex items-center gap-4">
                    <ImUsers /> Users
                  </td>
                  <td>https://myjsonapi.com/api/users</td>
                  <td>https://myjsonapi.com/api/user/1</td>
                  <td>https://myjsonapi.com/api/users?page=2</td>
                </tr>
                <tr
                  className="
                h-14
                items-center
                w-full
                grid grid-cols-4
                border-b border-slate-200 px-2
              "
                >
                  <td className="flex items-center gap-4">
                    <FaComments /> Comments
                  </td>
                  <td>https://myjsonapi.com/api/comments</td>
                  <td>https://myjsonapi.com/api/comment/1</td>
                  <td>https://myjsonapi.com/api/comments?page=2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
