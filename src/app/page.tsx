import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">

      <div className="bg-[#F3F4F6] my-14 mx-3 py-7 px-8 space-y-3">
        <h2 className="text-[#1E3A8A] text-3xl font-[550]">Introduction to StormSafe</h2>
        <p className="text-[#1F2937] text-base">
          Welcome to StormSafe! Your trusted resource for hurricane preparedness and safety. We provide up-to-date information on current hurricanes, essential safety tips, historical data, and much more. Our goal is to help you stay informed and stay safe in the face of hurricane disasters.
        </p>
        <h3 className="text-[#1E3A8A] text-xl">Why StormSafe?</h3>
        <p className="text-[#1F2937] text-base">
          Hurricanes are unpredictable and often devastating. StormSafe is here to equip you with the knowledge and tools you need to protect yourself, your family, and your community. From real-time updates to comprehensive guides and survivor stories, we cover all aspects of hurricane preparedness and response.
        </p>
        <h4 className="text-[#1E3A8A] text-lg">What You’ll Find:</h4>
        <p className="text-[#1F2937] text-base"><b>Current News:</b> Stay updated with the latest information on active hurricanes.</p>
        <p className="text-[#1F2937] text-base"><b>Safety Tips:</b> Learn how to prepare before, during, and after a hurricane.</p>
        <p className="text-[#1F2937] text-base"><b>Historical Data:</b> Explore past hurricanes and their impacts.</p>
        <p className="text-[#1F2937] text-base"><b>Community Resources:</b> Find links to shelters, emergency services, and more.</p>
        <p className="text-[#1F2937] text-base"><b>Personal Stories:</b> Read experiences and survival stories from people who have faced hurricanes.</p>
        <h4 className="text-[#1E3A8A] text-lg">Our Mission</h4>
        <p className="text-[#1F2937] text-base">
          To empower individuals and communities with accurate information and practical advice for hurricane preparedness, response, and recovery. We aim to create a safer world, one storm at a time.
        </p>
      </div>



      <div className="bg-[#F3F4F6] my-14 mx-3 py-7 px-8 space-y-4">
        <h2 className="text-[#1E3A8A] text-2xl font-semibold">Brief Overview of Recent Hurricanes in Florida and North Carolina</h2>
        <h3 className="text-[#1E3A8A] text-xl font-semibold">Florida:</h3>
        <p className="text-[#1F2937] text-base pb-8">
          <Image className="lg:pr-2 ml-4 float-right" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VQ6l8_w1Pr4nTAcI33vjKymVnoJVumCveg&s" width="150" height="150" />
          Hurricane Milton struck Florida in early October 2024 as a powerful Category 3 storm.</p>
          <ol className="list-decimal pl-5">
            <li>With winds exceeding 100 miles per hour and a near-record storm surge, Milton caused widespread devastation.</li>
            <li>The hurricane resulted in at least 21 fatalities, primarily due to intense tornadoes that preceded its landfall.</li>
            <li>The storm left nearly four million people without electricity and caused significant damage to infrastructure.</li>
            <li>Recovery efforts are ongoing, with communities working to restore normalcy.</li>
          </ol>
        
        <h3 className="text-[#1E3A8A] text-xl font-semibold">North Carolina:</h3>
        <p className="text-[#1F2937] text-base pb-8">
          <Image className="lg:pr-2 ml-4 float-right" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VQ6l8_w1Pr4nTAcI33vjKymVnoJVumCveg&s" width="150" height="150" />
          Hurricane Helene made landfall in North Carolina just two weeks before Hurricane Milton as a Category 4 storm.</p>
          <ol className="list-decimal pl-5">
            <li>Helene brought severe flooding and mudslides, particularly affecting the western part of the state.</li>
            <li>The hurricane resulted in at least 42 deaths in North Carolina alone, with the total death toll across multiple states reaching over 100.</li>
            <li>The storm caused extensive damage to roads, power lines, and homes, leaving many residents without power and in need of aid.</li>
            <li>Recovery efforts continue as communities rebuild and recover from the extensive damage.</li>
          </ol>
        
        <p className="text-[#1F2937] text-base">
          Both hurricanes highlighted the importance of preparedness and the need for robust disaster response systems. They also underscored the challenges of dealing with back-to-back major storms and the long-term recovery efforts required to rebuild affected communities.
        </p>
      </div>



      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Important Hurricane Safety Tips</h2>
        <ul className="list-none p-0">
          <li className="mb-4 p-4 bg-[#F3F4F6] rounded">
            <strong>Prepare an Emergency Kit:</strong> Include essentials like water, non-perishable food, medications, first aid supplies, flashlights, batteries, and important documents.
          </li>
          <li className="mb-4 p-4 bg-[#F3F4F6] rounded ">
            <strong>Create a Family Emergency Plan:</strong> Plan evacuation routes and designate a safe meeting place. Ensure all family members know how to communicate during an emergency.
          </li>
          <li className="mb-4 p-4 bg-[#F3F4F6] rounded  ">
            <strong>Stay Informed:</strong> Keep a battery-powered radio handy for weather updates. Sign up for local alert systems and follow reliable news sources.
          </li>
          <li className="mb-4 p-4 bg-[#F3F4F6] rounded">
            <strong>Secure Your Property:</strong> Install storm shutters or board up windows. Trim trees and shrubs to reduce the risk of debris. Secure outdoor items that could become projectiles.
          </li>
          <li className="mb-4 p-4 bg-[#F3F4F6] rounded">
            <strong>Evacuate When Advised:</strong> Don’t delay if authorities instruct you to evacuate. Follow recommended routes and avoid flooded areas.
          </li>
          <li className="mb-4 p-4 bg-[#F3F4F6] rounded ">
            <strong>Prepare Your Home:</strong> Turn off utilities (electricity, gas, and water) if instructed to do so. Elevate valuable items to prevent water damage. Store important documents in a waterproof container.
          </li>
          <li className="mb-4 p-4 bg-[#F3F4F6] rounded ">
            <strong>Stay Indoors During the Storm:</strong> Avoid using electrical appliances. Keep away from windows and doors.
          </li>
          <li className="mb-4 p-4 bg-[#F3F4F6] rounded ">
            <strong>After the Storm:</strong> Avoid floodwaters, which can contain harmful debris and contaminants. Check for updates from local authorities before returning home. Document any damage for insurance claims.
          </li>
        </ul>
      </div>







    </div>
  );
}
