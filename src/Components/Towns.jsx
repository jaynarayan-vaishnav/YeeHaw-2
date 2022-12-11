/* eslint-disable react/prop-types */

export default function Towns({item}) {
  console.log(item.cityDetails, item.cityName)
  return (
        <div className='flex gap-5 bg-gray-800/80 text-white'>
          <img className=' w-60' src={item.image} alt="" />
          <div className='grid pt-2' >
            <h3>{item.cityName}</h3>
            <h3>{item.cityDetails}</h3>
          </div>
        </div>
  )
}