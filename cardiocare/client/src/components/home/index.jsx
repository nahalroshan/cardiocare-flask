import React from "react";
import { useAuth } from "../../contexts/authContext";
import Heart from "../home/heart.jpeg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const messagewindow = () => {
    navigate("/chat");
  };
  const dietwindow = () => {
    navigate("/diet");
  };
  const navigateToOtherPage = () => {
    fetch("http://localhost:5000/otherpage") // Make an HTTP GET request to the Flask backend route
      .then((response) => {
        if (response.ok) {
          // If the response is successful, navigate to the other page
          window.location.href = "http://localhost:5000/otherpage";
        } else {
          // Handle error if needed
          console.error("Error navigating to other page:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error navigating to other page:", error);
      });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-2xl font-bold pt-14 m-4 ">
          Hello{" "}
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}{" "}
          , Welcome
        </div>

        <div className="flex flex-row justify-evenly">
        
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a href="#">
                <img
                  className="object-cover h-44 w-full rounded-t-lg"
                  src={Heart}
                  alt="Product"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    Get help from the community
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {/* Star icons */}
                    {/* Rating */}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      599
                    </span>
                    <a
                      onClick={messagewindow}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Go to Community
                    </a>
                  </div>
                </div>
              </div>
            </div>
        

          <div className="w-full mx-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img
                className="object-cover h-44 w-full rounded-t-lg"
                src={Heart}
                alt="Product"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  Predict your heart health here
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Star icons */}
                  {/* Rating */}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a
                    onClick={navigateToOtherPage}
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Predict Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img
                className="object-cover h-44 w-full rounded-t-lg"
                src={Heart}
                alt="Product"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  Learn about the diet
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Star icons */}
                  {/* Rating */}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    599
                  </span>
                  <button
                    onClick={dietwindow}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    See Your Diet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
