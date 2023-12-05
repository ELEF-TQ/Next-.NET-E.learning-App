"use client"
import React from 'react';

interface CertificateProps {
  username: string;
}

const Certificate: React.FC<CertificateProps> = ({ username }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
<>
  <div className="certificate bg-gray-800 text-white p-10 rounded-lg shadow-md max-w-5xl w-full mx-auto mt-16 flex">

    {/* Left Side - Certificate Information */}
    <div className="flex-1">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-yellow-300 mb-4">Certificate of Completion</h1>
        <p className="text-gray-300">This is to certify that</p>
      </div>

      {/* User Details */}
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-extrabold mb-2 text-blue-300">{username}</h2>
        <p className="text-lg text-gray-300">has successfully completed the</p>
        <p className="text-2xl font-semibold text-blue-300">Full Stack Developer Certification</p>
      </div>

      {/* Certification Information */}
      <div className="mb-6 text-center">
        <p className="text-gray-300">Issued on: <span className="font-semibold">{new Date().toLocaleDateString()}</span></p>
        <p className="text-gray-300">Certificate ID: <span className="font-semibold">ABC123XYZ</span></p>
        <p className="text-gray-300">Issued by: <span className="font-semibold">E_Learning</span></p>
      </div>

      <div className="flex items-center justify-center mb-6">
        <img
          src="https://emploi24.ma/wp-content/uploads/2022/07/Concours-de-recrutement-Universite-Ibn-Zohr-2022.webp"
          alt="Certificate_Illustration"
          className="w-16 h-16 object-cover rounded-full mr-4"
        />

        <p className="text-gray-300">Ibn Zohr University</p>
      </div>

      {/* Signature */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-300">Authorized Signature</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bill_Kaulitz_signature.svg/511px-Bill_Kaulitz_signature.svg.png"
          alt="signature"
          className="w-30 h-16 object-cover mt-4"
        />
      </div>
    </div>

    {/* Right Side - University Logo */}
    <div className="flex-1 flex items-center justify-center">
      <img
        src="/assets/Certification-bro.svg"
        alt="certification-bro"
        className="w-full h-full object-cover"
      />
    </div>

  </div>

  {/* Print Button Container */}
  <div className="text-center mt-4">
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handlePrint}>
      Print Certificate
    </button>
  </div>
</>

  );
};

export default Certificate;
