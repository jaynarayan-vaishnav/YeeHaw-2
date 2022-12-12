/* eslint-disable react/prop-types */

export default function Towns({item}) {
  console.log(item.cityDetails, item.cityName)
  return (
        <div className='flex gap-5 bg-gray-800/80 text-white'>
          <img className=' w-60' src={item.image} alt="" />
          <div className='grid pt-2' >
            <p>{item.cityName}</p>
            <p>{item.cityDetails}</p>
          </div>
        </div>
  )
}