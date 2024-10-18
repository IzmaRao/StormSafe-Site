
import React from 'react';
import Image from 'next/image'
import Map from '@/components/Map/';

function History() {
  return (
    <div className="bg-white p-6 space-y-10">
    <div className="bg-[#F3F4F6] my-14 mx-3 py-7 px-8 space-y-4">
      <h2 className="text-[#1E3A8A] text-2xl font-semibold">Historical Data on Past Hurricanes</h2>
      
      <div className="space-y-3">
        <h3 className="text-[#1E3A8A] text-xl font-semibold">Comprehensive Reports</h3>
        <p className="text-[#1F2937] text-base">
          The National Hurricane Center (NHC) provides detailed reports on each hurricane, including synoptic history, meteorological statistics, casualties, damages, and post-analysis best tracks. These reports offer valuable insights into the behavior and impact of past hurricanes.
        </p>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-[#1E3A8A] text-xl font-semibold">Historical Hurricane Tracks</h3>
        <p className="text-[#1F2937] text-base">
          NOAA&apos;s National Ocean Service offers an interactive tool that allows users to explore over 150 years of hurricane tracking data. This tool provides information on hurricane paths, categories, wind speeds, and minimum pressures.
        </p>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-[#1E3A8A] text-xl font-semibold">Significant Hurricanes</h3>
        <p className="text-[#1F2937] text-base">
          Some of the most notable hurricanes in history include Hurricane Katrina (2005), Hurricane Andrew (1992), and the Galveston Hurricane (1900). These hurricanes caused significant loss of life and property damage, highlighting the importance of preparedness and effective response strategies.
        </p>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-[#1E3A8A] text-xl font-semibold">Climate Change Impact</h3>
        <p className="text-[#1F2937] text-base">
          Studying historical hurricane data helps scientists understand the impact of climate change on hurricane frequency and intensity. This information is crucial for developing strategies to mitigate the effects of future hurricanes.
        </p>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-[#1E3A8A] text-xl font-semibold">Interactive Maps</h3>
        <p className="text-[#1F2937] text-base">
          Tools like NOAA&apos;s Historical Hurricane Tracks and GIS Map Viewer allow users to visualize hurricane paths and analyze patterns over time. These maps are valuable resources for researchers, emergency management officials, and the general public.
        </p>
      </div>
    </div>


    <div className="bg-[#F3F4F6] my-14 mx-3 py-7 px-8">
      <Map/>
    </div>


   
      <div className="bg-[#F3F4F6] my-20 mx-3 py-7 px-8 space-y-4 lg:px-10">
        <h2 className="text-[#1E3A8A] text-2xl font-semibold">Significant Impacts of Major Hurricanes</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-20 md:gap-8 gap-8 ">
        <div className="space-y-3">
          <h3 className="text-[#1E3A8A] text-xl font-semibold">Storm Surge and Flooding</h3>
          <p className="text-[#1F2937] text-base">
            One of the most destructive aspects of hurricanes is the storm surge, which is a rise in sea level that can cause severe coastal flooding. This can lead to loss of life, destruction of buildings, and erosion of beaches and dunes.
          </p>
          <Image src="https://m.economictimes.com/thumb/msid-94484534,width-1200,height-1200,resizemode-4,imgsize-63250/what-is-a-storm-surge-all-you-need-to-know-about-its-causes-and-impact.jpg" alt="Storm Surge" width={170} height={170} className="rounded-lg shadow-lg" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-[#1E3A8A] text-xl font-semibold">Heavy Rainfall and Inland Flooding</h3>
          <p className="text-[#1F2937] text-base">
            Hurricanes often bring intense rainfall, which can result in widespread flooding far inland. This can cause rivers and streams to overflow, leading to further damage to infrastructure and agriculture.
          </p>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Katrina-new-orleans-flooding3-2005.jpg" alt="Inland Flooding" width={250} height={300} className="rounded-lg shadow-lg" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-[#1E3A8A] text-xl font-semibold">High Winds</h3>
          <p className="text-[#1F2937] text-base">
            The strong winds associated with hurricanes can cause significant damage to buildings, trees, and power lines. This can lead to power outages, communication disruptions, and hazardous conditions for residents.
          </p>
          <Image src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_related_resources/v1638882727/EducationHub/photos/hurricane-pummeling-building.jpg" alt="High Winds" width={200} height={200} className="rounded-lg shadow-lg" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-[#1E3A8A] text-xl font-semibold">Rip Currents and Tornadoes</h3>
          <p className="text-[#1F2937] text-base">
            Hurricanes can generate dangerous rip currents and tornadoes, which pose additional threats to life and property. Rip currents can pull swimmers out to sea, while tornadoes can cause localized but intense damage.
          </p>
          <Image src="https://media.wired.com/photos/5af0d136c59ba151c77c2948/1:1/w_1800,h_1800,c_limit/tornado.jpg" alt="Tornado" width={200} height={200} className="rounded-lg shadow-lg" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-[#1E3A8A] text-xl font-semibold">Economic Impact</h3>
          <p className="text-[#1F2937] text-base">
            The economic toll of hurricanes can be enormous, including the cost of rebuilding infrastructure, homes, and businesses, as well as the loss of income due to business interruptions and agricultural damage.
          </p>
          <Image src="https://static.vecteezy.com/system/resources/previews/039/613/145/non_2x/global-economy-growth-concept-illustration-vector.jpg" alt="Economic Impact" width={200} height={200} className="rounded-lg shadow-lg" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-[#1E3A8A] text-xl font-semibold">Environmental Impact</h3>
          <p className="text-[#1F2937] text-base">
            Hurricanes can also have significant environmental impacts, such as saltwater intrusion into freshwater systems, damage to wildlife habitats, and increased pollution from debris and runoff.
          </p>
          <Image src="https://static6.depositphotos.com/1029473/605/i/450/depositphotos_6058501-stock-photo-environment-concept.jpg" alt="Environmental Impact" width={200} height={200} className="rounded-lg shadow-lg" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-[#1E3A8A] text-xl font-semibold">Public Health</h3>
          <p className="text-[#1F2937] text-base">
            The aftermath of hurricanes can lead to public health crises, including outbreaks of waterborne diseases, injuries from debris, and mental health issues due to the stress and trauma of the event.
          </p>
          <Image src="https://www.strokecommunityalliance.org/wp-content/uploads/go-x/u/b597120c-21ba-41c8-9ff2-8caca5d0d254/l68,t0,w476,h476/image.jpg" alt="Public Health" width={200} height={200} className="rounded-lg shadow-lg" />
        </div>
      </div>
      </div>




    
  </div>
  )
}

export default History;