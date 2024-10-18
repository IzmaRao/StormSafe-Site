import React from 'react';
import Image from 'next/image';

function Resources() {
  return (
    <div className="bg-white p-6 space-y-10">
      <div className="bg-[#F3F4F6] my-14 mx-3 py-7 px-8 space-y-4">
        
        {/* Links to Shelters and Emergency Services */}
        <div className="space-y-3">
          <h3 className="text-[#1E3A8A] sm:text-3xl font-semibold lg:text-4xl md:text-3xl text-xl">Links to Shelters and Emergency Services</h3>
          <p className="text-[#1F2937] text-base">
            Emergency shelters provide temporary housing for individuals and families displaced by hurricanes. These shelters are equipped with basic necessities such as food, water, and medical supplies. It&apos;s crucial to know the locations and contact information of these shelters in advance.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#1F2937] text-base">
            <li><b>Local Government Websites</b>: Many local government websites have dedicated sections for emergency preparedness, including lists of shelters and emergency services.</li>
            <li><b><a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer">Red Cross</a></b>: The American Red Cross provides information on shelters and emergency services during disasters.</li>
            <li><b><a href="https://www.fema.gov" target="_blank" rel="noopener noreferrer">FEMA</a></b>: The Federal Emergency Management Agency (FEMA) offers resources and guidance on finding shelters and emergency services.</li>
          </ul>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrzPY12hV0HtCZ1N9-zczdpjLKn_SfiGd7g&s" alt="Emergency Shelter" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        
        {/* Recovery and Aid Information */}
        <div className="space-y-3">
          <h3 className="text-[#1E3A8A] sm:text-3xl font-semibold lg:text-4xl md:text-3xl text-xl">Recovery and Aid Information</h3>
          <p className="text-[#1F2937] text-base">
            Recovery after a hurricane involves a long and often challenging process. It includes rebuilding homes, restoring infrastructure, and providing support to affected individuals and communities.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#1F2937] text-base">
            <li><b><a href="https://www.fema.gov" target="_blank" rel="noopener noreferrer">FEMA</a></b>: Provides financial help for temporary lodging, basic home repairs, and other disaster-caused expenses.</li>
            <li><b><a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer">American Red Cross</a></b>: Offers disaster assistance, including cleanup kits and temporary housing.</li>
            <li><b><a href="https://hopeflorida.com" target="_blank" rel="noopener noreferrer">HOPE Florida</a></b>: Assists Florida residents with unmet needs after a disaster.</li>
            <li><b><a href="https://www.crisiscleanup.org" target="_blank" rel="noopener noreferrer">Crisis Cleanup</a></b>: Connects residents who need help cleaning up damage to local voluntary relief organizations.</li>
          </ul>
        </div>
        
        {/* Government and NGO Contact Details */}
        <div className="space-y-3">
          <h3 className="text-[#1E3A8A] sm:text-3xl font-semibold lg:text-4xl md:text-3xl text-xl">Government and NGO Contact Details</h3>
          <p className="text-[#1F2937] text-base">
            Government agencies and non-governmental organizations (NGOs) play a crucial role in disaster relief and recovery efforts. They provide essential services, support, and resources to affected communities.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#1F2937] text-base">
            <li><b><a href="https://www.fema.gov" target="_blank" rel="noopener noreferrer">FEMA</a></b>: Offers disaster assistance and support services. Contact FEMA at 1-800-621-3362 or visit their website for more information.</li>
            <li><b><a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer">American Red Cross</a></b>: Provides disaster assistance and support. Visit their website or call 1-800-RED CROSS (733-2767).</li>
            <li><b><a href="https://www.rescue.org" target="_blank" rel="noopener noreferrer">International Rescue Committee (IRC)</a></b>: Helps people whose lives and livelihoods are shattered by conflict and disaster to survive, recover, and gain control of their future.</li>
            <li><b><a href="https://edhi.org" target="_blank" rel="noopener noreferrer">Edhi Foundation</a></b>: Offers emergency relief, health care, and other essential services in affected communities.</li>
          </ul>
          <Image src="https://www.verywellhealth.com/thmb/77HJGrZqmvNoDUo8RlgjUoBdHIE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-136811314-5b5d393346e0fb00506237d3.jpg" alt="Aid and Recovery" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        
      </div>
    </div>
  );
}

export default Resources;