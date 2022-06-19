import { useStepperContext } from "../../contexts/StepperContext";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl font-medium">Security code</h1>
      <p>Please check your email for a message
with your code.</p>
      <div className="flex-1 w-full my-3">
      <div className="h-6 mb-1 text-xs font-semibold leading-8 text-gray-500">
          Code
        </div>
        <div className="flex p-1 bg-white border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="*****"
            className="w-full p-1 px-2 text-gray-800 outline-none appearance-none"
          />
        </div>
      </div>
    
    </div>
  );
}
