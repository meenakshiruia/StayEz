import React from 'react'
import Image from "next/image"
import Link from "next/link";

const Hotel2 = () => {
  return (
    <div className=" border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={
            "https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0="
          }
          alt="hotel"
          width={200}
          height={200}
          className=" w-96 h-60 mr-3"
        />
       <div className="grid grid-rows-3 gap-2">
       <Image
          src={
            "https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0="
          }
          alt="hotel"
          width={200}
          height={200}
          className=" w-28 "
        />
        <Image
          src={
            "https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0="
          }
          alt="hotel"
          width={200}
          height={200}
          className=" w-28 "
        />
        <Image
          src={
            "https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0="
          }
          alt="hotel"
          width={200}
          height={200}
          className=" w-28 "
        />
        <Image
          src={
            "https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0="
          }
          alt="hotel"
          width={200}
          height={200}
          className=" w-28 "
        />
       </div>
          <div className="ml-10">
            <h2 className="font-bold text-3xl line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptates.
            </h2>
            <p className="text justify my-5 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus eos, error ut mollitia itaque molestias rem odio natus facere aperiam. Nobis, numquam quae. Ad, libero cumque excepturi saepe impedit laboriosam?</p>
            <p className="text-2xl my-5">
              <span className="font-bold">
                Facilities :
              </span>
              <span> Free Wifi,Pet Care,Swimming pool,Beaches,Resort</span>
            </p>
            <div className="flex item-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price :Rs. 4500
            </button>
            <Link href={"/hotels/2"} className="text-xl font-bold text-red-600 ml-10">See Details</Link>
            </div>

          </div>
      </div>
    </div>
  );
};

export default Hotel2;
         
         