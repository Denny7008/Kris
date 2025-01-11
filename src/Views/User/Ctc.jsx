import React from 'react';

const Ctc = () => {
  return (
    <div >
            <div className="max-w-lg mx-auto bg-white  rounded-lg p-6 space-y-6 shadow-lg">
              <form>
                <div className="grid grid-cols-2 gap-6">
                  {/* Phone Number 1 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number 1
                    </label>
                    <input
                      type="text"
                      placeholder="Phone Number 1"
                      className="px-2 py-4  mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* Phone Number 2 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number 2
                    </label>
                    <input
                      type="text"
                      placeholder="Phone Number 2"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* E-mail Address */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      E-mail Address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@gmail.com"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* State of Residence */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      State of Residence
                    </label>
                    <input
                      type="text"
                      placeholder="State of Residence"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      className=" px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* Residential Address */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Residential Address
                    </label>
                    <textarea
                      placeholder="18 Junction Site Lekki"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      rows={3}
                    ></textarea>
                  </div>
                </div>
                {/* Update Button */}
                <div className="mt-6 flex ">
                  <button
                    type="submit"
                    className="bg-[#28A745] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
  );
}

export default Ctc;
