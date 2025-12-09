import React from "react";

export default function Footer() {
  const footerData = [
    { number: "6", label: "million", description: "Users that using this app" },
    { number: "3", label: "million", description: "and compliant" },
    { number: "5", label: "million", description: "happy beta tester" },
    { number: "4.8", label: "star", description: "Google Play Store" },
  ];
  return (
<div className="w-full bg-stone-100 py-12">
  <div className="max-w-5xl mx-auto flex justify-center items-center gap-16">
    {footerData.map((data, index) => (
      <div key={index} className="flex flex-col justify-center items-center text-center">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-orange-500">{data.number}</span>
          <p className="capitalize">{data.label}</p>
        </div>
        <p className="text-stone-600 text-sm">{data.description}</p>
      </div>
    ))}
  </div>
</div>

  );
}