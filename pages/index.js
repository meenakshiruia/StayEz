
import React from 'react'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Image from "next/image";
import Head from 'next/head';
import Header4 from '@/components/Header4';
import Footer1 from '@/components/Footer1';

// index ka i capital hoga
const HOME = () => {
  return (
    <div>
      <Head>
        <title>StayEZ : Your Ultimate Accommodation Solution</title>
        
      </Head> 
      <Header1/>
      <Header2/>
      <Header3/>
      <div className="mx-20">
      <div className= "my-14">
        <Image
        src={"/banner5.jpg"}
        alt="banner5"
        width={200}
        height={200}
        className="h-80 w-full"
        />
      </div>
      
      <div className="mb-14 w-full">
      <Image
        src={"/banner2.jpg"}
        alt="banner2"
        width={200}
        height={200}
        className="h-40 w-full"
        />
      </div>
      
      <div className="flex bg-gray-200">
      <div className=" w-1/2  mr-5">
      <Image
        src={"/banner4.jpg"}
        alt="banner4"
        width={200}
        height={200}
        className="h-full w-full bg-black"
        />
      </div>
      <div className=" flex top-5  text-black">
          <h3 className="text-2xl font-bold mr-5">
            "stayEZ : your ultimate Accommodation solution"
        <div>
        <p className=" font-bold text-xl mb-5 justify-center ml-20 items-center">
        World's leading chain of hotels and homes
        </p>
      </div>
          </h3>
      </div>
      </div>
      <Header4/>
      {/* <div>
       
      </div> */}
      </div>
      <Footer1/>
    </div>
  );
};

export default HOME