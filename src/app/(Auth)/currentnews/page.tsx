import React from 'react'

function CurrentNews() {
  return (
    <div>


   
    <div className="bg-[#F3F4F6] my-14 mx-3 py-7 px-8 space-y-4">
    <h2 className="text-[#1E3A8A] text-2xl font-semibold">Recent Hurricane Updates</h2>
    
    <div className="text-[#1F2937] text-base pb-8">
      <h3 className="text-[#1E3A8A] text-xl font-semibold">Hurricane Leslie:</h3>
      <p>Leslie has degenerated into a trough. The National Hurricane Center issued its last advisory on Leslie, noting that it is now moving northeast at 31 mph with maximum sustained winds of 50 mph.</p>
    </div>

    <div className="text-[#1F2937] text-base pb-8">
      <h3 className="text-[#1E3A8A] text-xl font-semibold">Hurricane Kirk:</h3>
      <p>Currently a Category 1 hurricane, Kirk is approximately 1070 miles from the Cabo Verde Islands. It has been active for the past two days.</p>
    </div>

    <div className="text-[#1F2937] text-base pb-8">
      <h3 className="text-[#1E3A8A] text-xl font-semibold">Tropical Rainstorm Joyce:</h3>
      <p>Joyce is currently a tropical rainstorm located approximately 970 miles from the northern Leeward Islands. It has been active for the past four days.</p>
    </div>

    <div className="text-[#1F2937] text-base pb-8">
      <h3 className="text-[#1E3A8A] text-xl font-semibold">Tropical Depression 11E:</h3>
      <p>This tropical depression is approximately 85 miles from Salina Cruz, Mexico. It has been active for the past hour.</p>
    </div>

    <p className="text-[#1F2937] text-base">
      For more detailed and up-to-date information, you can visit the <a className="text-[#3B82F6] hover:underline" href="https://www.nhc.noaa.gov/" target="_blank" rel="noopener noreferrer">National Hurricane Center</a> or <a className="text-[#3B82F6] hover:underline" href="https://www.accuweather.com/en/hurricane" target="_blank" rel="noopener noreferrer">AccuWeathers Hurricane Tracker</a>.
    </p>
  </div>




  <div className="bg-white p-6 space-y-10">
      
      <div className="bg-[#F3F4F6] mb-14 mx-3 py-7 px-8 space-y-4">
        <h2 className="text-[#1E3A8A] text-2xl font-semibold">Hurricane Milton</h2>
        <p className="text-[#1F2937] text-base">
          <strong>Impact:</strong> The hurricane caused widespread destruction, particularly in cities like Orlando, Tampa, Lakeland, Sarasota, and Daytona Beach. The damage to Florida&apos;s homebuilding sector is estimated to be between <b>$1.7 billion and $2.5 billion</b>.
        </p>
        <p className="text-[#1F2937] text-base">
          <strong>Casualties:</strong> At least <b>14 deaths</b> have been confirmed due to Hurricane Milton.
        </p>
        <p className="text-[#1F2937] text-base">
          <strong>Damage:</strong> The hurricanes powerful winds and flooding led to significant property damage, including the roof of Tropicana Field being blown off.
        </p>
        <p className="text-[#1F2937] text-base">
          <strong>Response:</strong> President Joe Biden visited the affected areas and announced over <b>$600 million in recovery funds</b> for the states impacted by the hurricane.
        </p>
      </div>
      
      <div className="bg-[#F3F4F6] my-14 mx-3 py-7 px-8 space-y-4">
        <h2 className="text-[#1E3A8A] text-2xl font-semibold">Hurricane Helene</h2>
        <p className="text-[#1F2937] text-base">
          <strong>Impact:</strong> Helene caused widespread flooding, wind damage, and power outages. The storm affected six states, with North Carolina, Georgia, and South Carolina being the hardest hit.
        </p>
        <p className="text-[#1F2937] text-base">
          <strong>Casualties:</strong> The death toll from Hurricane Helene has risen to <b>227</b>, making it one of the deadliest storms to hit the U.S. mainland since Hurricane Katrina in 2005.
        </p>
        <p className="text-[#1F2937] text-base">
          <strong>Damage:</strong> The hurricane destroyed homes, roads, and infrastructure, leaving millions without electricity and cell phone service.
        </p>
        <p className="text-[#1F2937] text-base">
          <strong>Response:</strong> President Joe Biden also announced recovery efforts for the states affected by Hurricane Helene, with a focus on providing aid and assistance to the affected communities.
        </p>
      </div>
      </div>


  </div>
  )
}

export default CurrentNews;