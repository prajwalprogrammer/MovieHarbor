import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <img className="h-96" src="spinner.jpg" alt="Loading" />
      {/* <p>Loading...</p> */}
    </div>
  );
}
