import AppointmentDoctor from "./AppointmentDoctor";
import { useRef, useState } from "react";

const SetNewAppointmentForm2 = ({ Id, classes, resetForm }) => {
  const doctorsSectionRef = useRef(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Track selected doctor
  const [collapsed, setCollapsed] = useState(false); // Track if the section is collapsed
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // Track selected time slot

  const scrollLeft = () => {
    if (doctorsSectionRef.current) {
      doctorsSectionRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (doctorsSectionRef.current) {
      doctorsSectionRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const handleDoctorClick = (doctorId) => {
    setSelectedDoctor(doctorId);
    setCollapsed(true); // Collapse the section when a doctor is clicked
    setSelectedTimeSlot(null); // Reset time slot when a new doctor is selected
  };

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot); // Select the clicked time slot
  };

  const confirmAppointment = () => {
    if (selectedTimeSlot !== null) {
    //   alert(`Appointment confirmed for Doctor ${selectedDoctor + 1} at ${selectedTimeSlot}`);
      resetForm(); // Reset form after confirmation
    }
  };

  return (
    <div id={Id} className={`h-80 flex gap-x-4 overflow-hidden ${classes}`}>
      {/* Doctors section */}
      <div
        className={`transition-all duration-500 ${
          collapsed ? "w-[50%]" : "w-full"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">
          These are the Doctors available for <span>{"Your case"}</span>
        </h2>

        {/* Scrollable doctors section */}
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
            onClick={scrollLeft}
          >
            &#8249; {/* Left arrow icon */}
          </button>

          <div
            ref={doctorsSectionRef}
            className="doctors-section flex gap-x-8 overflow-x-scroll overflow-y-hidden py-4 custom-scrollbar"
          >
            {["Doctor1", "Doctor2", "Doctor3", "Doctor4", "Doctor5"].map(
              (doctor, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-4 bg-white shadow-md rounded-lg transition-all duration-300 ${
                    selectedDoctor === index ? "border-2 border-blue-500" : "border"
                  }`}
                  onClick={() => handleDoctorClick(index)}
                >
                  <AppointmentDoctor />
                </div>
              )
            )}
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
            onClick={scrollRight}
          >
            &#8250; {/* Right arrow icon */}
          </button>
        </div>
      </div>

      {/* Time slots section (appears when a doctor is selected) */}
      {collapsed && (
        <div className="w-[50%] transition-all duration-500 p-4 bg-white border border-gray-200 shadow-lg rounded-lg">
          {selectedDoctor !== null ? (
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Available Time Slots for Doctor {selectedDoctor + 1}
              </h3>
              {/* Static time slots with clickable functionality */}
              <ul className="space-y-2">
                {["09:00 AM - 09:30 AM", "10:00 AM - 10:30 AM", "11:00 AM - 11:30 AM"].map(
                  (timeSlot, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer p-2 rounded-lg border transition-all duration-300 ${
                        selectedTimeSlot === timeSlot
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => handleTimeSlotClick(timeSlot)}
                    >
                      {timeSlot}
                    </li>
                  )
                )}
              </ul>

              {/* Confirmation button */}
              {selectedTimeSlot && (
                <button
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
                  onClick={confirmAppointment}
                >
                  Confirm Appointment
                </button>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Select a doctor to view available time slots
            </p>
          )}
        </div>
      )}

      {/* Inline internal styles for scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
      `}</style>
    </div>
  );
};

export default SetNewAppointmentForm2;
