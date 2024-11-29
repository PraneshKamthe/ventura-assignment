import { Link } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  StepConnector,
  stepConnectorClasses,
  useMediaQuery,
} from "@mui/material";
import styled from "@emotion/styled";

const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "green", 
  },
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepIcon-root": {
    color: "green",
    "&.Mui-active": {
      color: "green",
    },
    "&.Mui-completed": {
      color: "green",
    },
  },
}));

const ListingDetailPage = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="p-6 mx-auto wrapper max-w-screen-lg sora-font">
      <div className="text-gray-500 mb-4">
        {" "}
        <Link to={"/"} className="cursor-pointer hover:underline">
          Home{" "}
        </Link>{" "}
        {">"} Market Report{" "}
      </div>
      <div className="flex flex-col sm:flex-row md:items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="flex items-center gap-4">
            <Link
              to={"/"}
              className="py-2 px-3 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer"
            >
              {"<"}
            </Link>
            <img
              src="https://via.placeholder.com/40"
              alt="OYO"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold">OYO</h1>
            <p className="text-gray-500">OYO Private Limited</p>
          </div>
        </div>
        <button className="bg-blue-950 text-white py-2 px-4 rounded-lg shadow">
          Apply now
        </button>
      </div>

      {/* IPO Details */}
      <div className="mt-6 rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold">IPO Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 border border-gray-200 p-4 rounded-lg">
          <div>
            <p className="text-gray-500">Issue size</p>
            <p className="font-bold">₹3,600 - ₹3,700 Cr.</p>
          </div>
          <div>
            <p className="text-gray-500">Price range</p>
            <p className="font-bold">₹100 - ₹200</p>
          </div>
          <div>
            <p className="text-gray-500">Minimum amount</p>
            <p className="font-bold">₹50,000</p>
          </div>
          <div>
            <p className="text-gray-500">Lot size</p>
            <p className="font-bold">₹50,000</p>
          </div>
          <div>
            <p className="text-gray-500">Issue dates</p>
            <p className="font-bold">12 Dec - 15 Dec 2023</p>
          </div>
          <div>
            <p className="text-gray-500">Listed on</p>
            <p className="font-bold">15 Dec 2023</p>
          </div>
          <div>
            <p className="text-gray-500">Listed price</p>
            <p className="font-bold text-green-500">₹150</p>
          </div>
          <div>
            <p className="text-gray-500">Listing gains</p>
            <p className="font-bold">
              ₹10 <span className="text-orange-600">(10.0%)</span>
            </p>
          </div>
        </div>
      </div>

      {/* IPO Timeline */}
      <div className="mt-6 border border-gray-200 p-6 rounded-lg">
        <div>
          {/* Render Stepper based on screen size */}
          {!isMobile ? (
            <Stepper
              activeStep={6}
              alternativeLabel
              orientation={isMobile ? "vertical" : "horizontal"}
              connector={<CustomStepConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <CustomStepLabel> {label}</CustomStepLabel>
                </Step>
              ))}
            </Stepper>
          ) : (
            <Stepper
              activeStep={6}
              orientation="vertical"
              connector={<CustomStepConnector />}
            >
              {stepsMobile.map((step, index) => (
                <Step key={index}>
                  <CustomStepLabel>{step.label}</CustomStepLabel>
                </Step>
              ))}
            </Stepper>
          )}
        </div>
      </div>

      {/* About the Company */}
      <div className="mt-6 border border-gray-200 p-6 rounded-lg">
        <h2 className="text-lg font-semibold">About the Company</h2>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          fringilla quam odio, eget tincidunt est vehicula a. Proin fermentum
          efficitur lectus, ut varius eros maximus vel.
        </p>
        <p className="mt-2 text-gray-700">
          Curabitur tincidunt, orci eget sollicitudin ullamcorper, lorem nisi
          vestibulum justo, sed accumsan ligula lectus nec ex. Sed vitae
          malesuada nunc, vel gravida lectus.
        </p>
      </div>
    </div>
  );
};

export default ListingDetailPage;

const steps = [
  <div>
    {" "}
    <div> Bidding Starts </div> <div> 12 Dec 2023 </div>{" "}
  </div>,
  <div>
    {" "}
    <div> Bidding Ends </div> <div> 15 Dec 2023 </div>{" "}
  </div>,
  <div>
    {" "}
    <div> Allotment finalization</div> <div> 18 Dec 2023 </div>{" "}
  </div>,
  <div>
    {" "}
    <div> Refund initiation </div> <div> 20 Dec 2023 </div>{" "}
  </div>,
  <div>
    {" "}
    <div> Demat transfer </div> <div> 20 Dec 2023 </div>{" "}
  </div>,
  <div>
    {" "}
    <div> Listing Date </div> <div> 21 Dec 2023 </div>{" "}
  </div>,
];

const stepsMobile = [
  {
    label: (
      <div>
        <div>Bidding Starts</div>
        <div>12 Dec 2023</div>
      </div>
    ),
    description: "",
  },
  {
    label: (
      <div>
        <div>Bidding Ends</div>
        <div>15 Dec 2023</div>
      </div>
    ),
    description: "",
  },
  {
    label: (
      <div>
        <div>Allotment finalization</div>
        <div>18 Dec 2023</div>
      </div>
    ),
    description: "",
  },
  {
    label: (
      <div>
        <div>Refund initiation</div>
        <div>20 Dec 2023</div>
      </div>
    ),
    description: "",
  },
  {
    label: (
      <div>
        <div>Demat transfer</div>
        <div>20 Dec 2023</div>
      </div>
    ),
    description: "",
  },
  {
    label: (
      <div>
        <div>Listing Date</div>
        <div>21 Dec 2023</div>
      </div>
    ),
    description: "",
  },
];
