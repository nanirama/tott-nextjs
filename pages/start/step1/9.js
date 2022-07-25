import React from "react";
import ImgLoader from "../../../components/Image";
import Logo from "../../../assets/images/trady-logo.png"





const Step9 = () => {

    return (
        <>

            <div className="w-full h-screen flex flex-col justify-between bg-gray-50">

                <div className="flex justify-center py-6 bg-white border-b border-solid border-gray-200 ">
                    <ImgLoader src={Logo} width={97} height={32} />
                </div>
                <div className="md:max-w-screen-sm w-full mx-auto bg-gray-50  h-screen flex flex-col justify-between">

                    <div className="px-5 h-full py-6 flex flex-col justify-between">

                        <a href="#"> <p className="flex gap-3 items-center"><svg width="23" height="8" viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM23 3.5H1V4.5H23V3.5Z" fill="#555555" />
                        </svg> Back</p></a>
                        <div className="">
                            <h2 className="text-black font-medium text-xl mb-4">Upload your logo</h2>
                            <div className="relative inline-block overflow-hidden flex flex-col mb-5">

                                <button className="flex gap-3 justify-center w-full btn border border-solid border-gray-200 bg-gray-200 rounded py-3 px-4 text-base font-normal">Upload a file <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.84212 14.2105H11.1579V7.89473H15.3684L8.00001 0.526306L0.631592 7.89473H4.84212V14.2105Z" fill="#574A4A" />
                                    <path d="M15.3684 16.3158H0.631592V18.421H15.3684V16.3158Z" fill="#574A4A" />
                                </svg>
                                </button>
                                <input type="file" name="myfile" className="absolute left-0 top-0 opacity-0" />
                            </div>
                            <div className="relative inline-block overflow-hidden flex flex-col">

                                <button className="w-36 btn text-white bg-green-400 rounded py-2 px-4 text-base font-medium">Upload logo</button>
                                <input type="file" name="myfile" className="absolute left-0 top-0 opacity-0" />
                            </div>


                        </div>
                        <div className="flex flex-col py-3">
                            <p className="font-normal text-base text-gray-400 -mb-2">50% done</p>
                            <div className="flex flex-col py-3">
                                <p className="font-normal text-base text-gray-400 mb-2">50% done</p>
                                <div className='w-full'>
                                    <div className="w-1/2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div className="bg-green-500 h-1.5 rounded-full" style={{ 'width': '50%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Step9;