import React from "react";
import { useForm } from "react-hook-form";

const UpdateAcademicDetailsForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data); // Pass data to the parent component
  };

  return (
    <div className="h-[80vh] flex justify-center">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Update Academic Details
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Institution */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="institution">
              Name of Institution
            </label>
            <input
              {...register("institution", {
                required: "Institution is required",
              })}
              id="institution"
              type="text"
              placeholder="Enter Institution Name"
              className="w-full border rounded-lg p-2 text-gray-700 bg-[#E3EDF9] focus:ring-blue-500"
            />
            {errors.institution && (
              <p className="text-red-500 text-sm mt-1">
                {errors.institution.message}
              </p>
            )}
          </div>

          {/* Course */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="course">
              Course
            </label>
            <input
              {...register("course", { required: "Course is required" })}
              id="course"
              type="text"
              placeholder="Enter Course Name"
              className="w-full border rounded-lg p-2 text-gray-700 bg-[#E3EDF9] focus:ring-blue-500"
            />
            {errors.course && (
              <p className="text-red-500 text-sm mt-1">
                {errors.course.message}
              </p>
            )}
          </div>

          {/* Department */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="department">
              Department
            </label>
            <input
              {...register("department", {
                required: "Department is required",
              })}
              id="department"
              type="text"
              placeholder="Enter Department Name"
              className="w-full border rounded-lg p-2 text-gray-700 bg-[#E3EDF9] focus:ring-blue-500"
            />
            {errors.department && (
              <p className="text-red-500 text-sm mt-1">
                {errors.department.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="location">
              Location
            </label>
            <input
              {...register("location", { required: "Location is required" })}
              id="location"
              type="text"
              placeholder="Enter Location"
              className="w-full border rounded-lg p-2 text-gray-700 bg-[#E3EDF9] focus:ring-blue-500"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="startDate">
              Start Date
            </label>
            <input
              {...register("startDate", { required: "Start Date is required" })}
              id="startDate"
              type="date"
              className="w-full border rounded-lg p-2 text-gray-700 bg-[#E3EDF9] focus:ring-blue-500"
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.startDate.message}
              </p>
            )}
          </div>

          {/* End Date */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="endDate">
              End Date
            </label>
            <input
              {...register("endDate", { required: "End Date is required" })}
              id="endDate"
              type="date"
              className="w-full border rounded-lg p-2 text-gray-700 bg-[#E3EDF9] focus:ring-blue-500"
            />
            {errors.endDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.endDate.message}
              </p>
            )}
          </div>
           {/* Description */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              id="description"
              placeholder="Enter Description"
              className="w-full border rounded-lg p-2 text-gray-700 bg-[#E3EDF9] focus:ring-blue-500"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-[#28A745] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAcademicDetailsForm;
