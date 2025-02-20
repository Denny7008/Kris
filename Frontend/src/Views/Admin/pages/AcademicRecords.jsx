// import React from "react";

// const AcademicRecords = ({employee}) => {
//   if (!employee) {
//     console.log("No Employee Data Found:", employee);
//     return <div className="text-red-500">Error: No Employee Data Available</div>;
//   }

//   return (
//             <div className="flex-1 p-8">
//               <div className="max-w-3xl space-y-8">
//                 {/* Academic Records Section */}
//                 <section>
//                   <h2 className="text-xl font-medium mb-4">Academic Records</h2>
//                   <div className="space-y-3">
//                     <div className="bg-[#F1F4FA] p-4 rounded-lg">
//                       <h3 className="font-medium">Leicester University</h3>
//                       <p className="text-gray-600 text-sm">
//                         B.Sc in Computer Science, May 2014 - May 2018
//                       </p>
//                     </div>
//                     <div className="bg-[#F1F4FA] p-4 rounded-lg">
//                       <h3 className="font-medium">English College</h3>
//                       <p className="text-gray-600 text-sm">
//                         W.A.S.S.C.E, February 2006 - June 2012
//                       </p>
//                     </div>
//                   </div>
//                 </section>

//                 {/* Professional Qualifications Section */}
//                 <section>
//                   <h2 className="text-xl font-medium mb-4">
//                     Professional Qualifications
//                   </h2>
//                   <div className="space-y-3">
//                     <div className="bg-[#F1F4FA] p-4 rounded-lg">
//                       <h3 className="font-medium">CCNA Certification</h3>
//                       <p className="text-gray-600 text-sm">
//                         at New Horizons , May 2019 - September 2021
//                       </p>
//                     </div>
//                     <div className="bg-[#F1F4FA] p-4 rounded-lg">
//                       <h3 className="font-medium">
//                         Google UI / UX Certification
//                       </h3>
//                       <p className="text-gray-600 text-sm">
//                         at Google Inc , September 2021 - September 2022
//                       </p>
//                     </div>
//                     <div className="bg-[#F1F4FA] p-4 rounded-lg">
//                       <h3 className="font-medium">Web Developer</h3>
//                       <p className="text-gray-600 text-sm">
//                         at Google Inc, May 2019 - September 2021
//                       </p>
//                       <ul className="mt-2 text-sm text-gray-600">
//                         <li>
//                           • Collaborated with teammates to deliver valuable
//                           features meeting business and customer needs.
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//   );
// };

// export default AcademicRecords;









import React from "react";

const AcademicRecords = ({ employee }) => {
  if (!employee || !employee.educationDetails) {
    return <p>No academic records available</p>;
  }

  const { academicRecords = [], professionalDetails = [] } =
    employee.educationDetails;

  return (
    <div className="flex-1 p-8">
      <div className="max-w-3xl space-y-8">
        {/* Academic Records Section */}
        <section>
          <h2 className="text-xl font-medium mb-4">Academic Records</h2>
          <div className="space-y-3">
            {academicRecords.length > 0 ? (
              academicRecords.map((record, index) => (
                <div key={index} className="bg-[#F1F4FA] p-4 rounded-lg">
                  <h3 className="font-medium">{record.institute}</h3>
                  <p className="text-gray-600 text-sm">
                    {record.course}, {record.startDate} - {record.endDate}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No academic records found</p>
            )}
          </div>
        </section>

        {/* Professional Qualifications Section */}
        <section>
          <h2 className="text-xl font-medium mb-4">Professional Qualifications</h2>
          <div className="space-y-3">
            {professionalDetails.length > 0 ? (
              professionalDetails.map((detail, index) => (
                <div key={index} className="bg-[#F1F4FA] p-4 rounded-lg">
                  <h3 className="font-medium">{detail.title}</h3>
                  <p className="text-gray-600 text-sm">
                    at {detail.institute}, {detail.startDate} - {detail.endDate}
                  </p>
                  {detail.description && (
                    <ul className="mt-2 text-sm text-gray-600">
                      <li>• {detail.description}</li>
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-600">No professional qualifications found</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicRecords;