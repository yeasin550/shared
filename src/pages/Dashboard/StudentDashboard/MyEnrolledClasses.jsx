
const MyEnrolledClasses = () => {

 const data = [
   {
     id: 1,
     name: "John Doe",
     email: "john@example.com",
     image: "https://example.com/john.jpg",
   },
   {
     id: 2,
     name: "Jane Smith",
     email: "jane@example.com",
     image: "https://example.com/jane.jpg",
   },
   {
     id: 3,
     name: "Bob Johnson",
     email: "bob@example.com",
     image: "https://example.com/bob.jpg",
   },
 ];

    return (
      <div>
        My Enrolled Classes
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <img
                      src={row.image}
                      alt={row.name}
                      className="h-10 w-10 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">{row.name}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{row.email}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-lg">
                      Success
                    </button>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyEnrolledClasses;