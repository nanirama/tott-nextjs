import Link from "next/link";
import ImgLoader from '../Image';
import Client1 from "../../assets/images/client1-1.png"
import Client2 from "../../assets/images/client2-1.png"
import Client3 from "../../assets/images/client3-1.png"
import Client4 from "../../assets/images/client4-1.png"
import Client5 from "../../assets/images/client5-1.png"
import Client6 from "../../assets/images/client6-1.png"
import Client7 from "../../assets/images/client12-1.png"
import Client8 from "../../assets/images/client13-1.png"
import Client9 from "../../assets/images/client14-1.png"

import Button from "../../components/Button/index"

export default function CtaSection8() {

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto flex flex-col px-4 lg:py-20 py-10">           
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                    <div className=''><h2 className='text-gray-900 lg:text-4xl text-2xl font-semibold tracking-tight leading-tight mb-3'>Join over 4,000+ startups growing with Untitled</h2>
                        <p className='text-zinc-500 text-xl mb-8'>Start your 30-day free trial today.</p>
                        <div className=" flex md:flex-row flex-col justify-start">
                            <Link href="/"><a className="inline-block rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full">Learn More</a></Link>
                            <Button/>
                            </div>
                    </div>
                    <div className="flex lg:flex-row flex-wrap  justify-center gap-5 items-center">
                        <div className=' w-auto text-center flex items-center'>
                            <ImgLoader src={Client1} width={134} height={24} alt="Client1" />
                        </div>
                        <div className='w-auto text-center flex items-center'>
                            <ImgLoader src={Client2} width={140} height={42} alt="Client2" />
                        </div>

                        <div className='w-auto text-center flex items-center'>
                            <ImgLoader src={Client3} width={121} height={45} alt="Client3" />
                        </div>
                        <div className='w-auto text-center flex items-center'>
                            <ImgLoader src={Client4} width={163} height={45} alt="Client4" />
                        </div>
                        <div className='w-auto text-center flex items-center'>
                            <ImgLoader src={Client5} width={119} height={30} alt="Client5" />
                        </div>
                        <div className='w-auto text-center flex items-center'>
                            <ImgLoader src={Client6} width={93} height={21} alt="Client5" />
                        </div>

                        <div className='w-auto text-center flex items-center'>
                            <ImgLoader src={Client7} width={79} height={33} alt="Client4" />
                        </div>

                        <div className='w-auto text-center flex items-center'>
                            <ImgLoader src={Client8} width={163} height={48} alt="Client5" />
                        </div>
                        <div className='w-auto text-center flex items-center'>
                            <ImgLoader src={Client9} width={95} height={43} alt="Client5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

