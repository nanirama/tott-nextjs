import Layout from "../components/layout"
import Image from 'next/image'
import BlogHeroImg from "../assets/images/blog-heroimg.png";
import BlogSingleImg from "../assets/images/blog-single.jpg";
import Icon1 from "../assets/images/author2.png";


import RecentPosts from "../components/Blog/RecentPosts";
import StartUpBlk from "../components/Blog/Startups";



export default function Blog(props) {

   return (
      <Layout>

         <div className="md:mt-16 md:mb-20 mb-12 mt-0 mb-5">
            <div className="top_content mb-10">
               <div className="max-w-7xl mx-auto">
                  <div className="flex md:flex-row flex-col-reverse items-center">
                     <div className="w-full md:w-5/12 px-4">
                        <div className="bg-gray-200 rounded-2xl p-1 w-auto inline-block inline-flex gap-1 mb-4">
                           <a href="#" className="bg-white text-gray-700 font-medium rounded-2xl text-xs py-1 px-2 inline-block">Product</a>
                           <a href="#" className="text-gray-700 text-xs font-medium py-1 px-2 inline-block">8 min read</a>
                        </div>
                        <h1 className="text-5xl text-gray-900 font-semibold mb-6">Migrating to Linear 101</h1>
                        <p className="text-xl text-gray-400">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
                     </div>
                     <div className="w-full md:w-7/12 px-4">
                        <div className="w-full">
                           <Image src={BlogHeroImg} width={950} height={726} alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="relative">
               <div className="max-w-6xl mx-auto">
                  <div className="flex md:flex-row flex-col-reverse gap-8 relative">
                     <div className="md:w-4/12 px-4">
                        <div className="blog-sidebar w-full sticky top-0">
                           <hr className="mb-8" />
                           <h6 className="mb-3">Table of contents</h6>
                           <ul>
                              <li className="text-base font-medium text-gray-500 mb-2"><a href="#">Introduction</a></li>
                              <li className="text-base font-medium text-gray-500 mb-2"><a href="#">Software and tools</a></li>
                              <li className="text-base font-medium text-gray-500 mb-2"><a href="#">Other resources</a></li>
                              <li className="text-base font-medium text-gray-500 mb-2"><a href="#">Conclusion</a></li>
                           </ul>
                           <hr className="my-8" />
                           <h6 className="mb-5">Contributors</h6>
                           <div className="flex flex-row items-center gap-3 mb-6">
                              <Image src={Icon1} width={48} height={48} alt="" />
                              <h6 className="flex flex-col text-gray-900">Phoenix Baker
                                 <span className="font-normal">Product Manager</span>
                              </h6>
                           </div>
                           <div className="flex flex-row items-center gap-3 mb-5">
                              <Image src={Icon1} width={48} height={48} alt="" />
                              <h6 className="flex flex-col text-gray-900">Lori Bryson
                                 <span className="font-normal">Product Manager</span>
                              </h6>
                           </div>
                           <div className="flex flex-row items-center gap-3 mb-5">
                              <Image src={Icon1} width={48} height={48} alt="" />
                              <h6 className="flex flex-col text-gray-900">Loki Bright
                                 <span className="font-normal">Frontend Engineer</span>
                              </h6>
                           </div>
                           <hr className="my-8" />
                           <h6 className="mb-5">Try out Tott free for 14 days:</h6>
                           <a href="#" className="w-full text-center hover:bg-zinc-500 bg-zinc-600 rounded-lg shadow border hover:border-zinc-500 border-zinc-600 py-3 px-5 text-white inline-block">Sign up now</a>
                           <hr className="my-8" />
                           <div className="flex flex-row gap-3">
                              <a href="" className="border rounded-lg p-2.5">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.3335 10.833C8.69138 11.3114 9.14796 11.7073 9.67229 11.9938C10.1966 12.2802 10.7764 12.4506 11.3724 12.4933C11.9683 12.5359 12.5665 12.45 13.1263 12.2411C13.6861 12.0323 14.1944 11.7055 14.6168 11.283L17.1168 8.78298C17.8758 7.99714 18.2958 6.94463 18.2863 5.85214C18.2768 4.75965 17.8386 3.7146 17.0661 2.94207C16.2935 2.16953 15.2485 1.73133 14.156 1.72184C13.0635 1.71234 12.011 2.13232 11.2252 2.89131L9.79183 4.31631M11.6668 9.16631C11.309 8.68787 10.8524 8.29199 10.328 8.00553C9.80371 7.71906 9.22391 7.54871 8.62796 7.50603C8.032 7.46335 7.43384 7.54934 6.87405 7.75816C6.31425 7.96698 5.8059 8.29375 5.3835 8.71631L2.8835 11.2163C2.12451 12.0022 1.70453 13.0547 1.71402 14.1472C1.72352 15.2396 2.16172 16.2847 2.93426 17.0572C3.70679 17.8298 4.75184 18.268 5.84433 18.2775C6.93681 18.2869 7.98932 17.867 8.77517 17.108L10.2002 15.683" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </a>
                              <a href="" className="border rounded-lg p-2.5">
                                 <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.2918 17.1246C13.8371 17.1246 17.9652 10.8719 17.9652 5.45118C17.9652 5.2754 17.9613 5.09572 17.9535 4.91993C18.7566 4.33918 19.4496 3.61985 20 2.79572C19.2521 3.12847 18.458 3.34579 17.6449 3.44025C18.5011 2.92706 19.1421 2.12086 19.4492 1.17111C18.6438 1.64843 17.763 1.98514 16.8445 2.16681C16.2257 1.50927 15.4075 1.0739 14.5164 0.92801C13.6253 0.782122 12.711 0.933842 11.9148 1.35971C11.1186 1.78559 10.4848 2.46189 10.1115 3.28406C9.73825 4.10623 9.64619 5.02848 9.84961 5.90822C8.21874 5.82638 6.62328 5.40272 5.16665 4.66472C3.71002 3.92671 2.42474 2.89083 1.39414 1.62423C0.870333 2.52734 0.710047 3.596 0.945859 4.61304C1.18167 5.63008 1.79589 6.51917 2.66367 7.09962C2.01219 7.07894 1.37498 6.90353 0.804688 6.5879V6.63868C0.804104 7.58643 1.13175 8.50512 1.73192 9.23861C2.3321 9.97209 3.16777 10.4751 4.09687 10.6621C3.49338 10.8272 2.85999 10.8513 2.2457 10.7324C2.50788 11.5475 3.01798 12.2604 3.70481 12.7716C4.39164 13.2828 5.22093 13.5668 6.07695 13.584C4.62369 14.7256 2.82848 15.3447 0.980469 15.3418C0.652739 15.3413 0.325333 15.3212 0 15.2817C1.87738 16.4861 4.06128 17.1258 6.2918 17.1246Z" fill="#98A2B3" />
                                 </svg>
                              </a>
                              <a href="" className="border rounded-lg p-2.5">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#98A2B3" />
                                 </svg>
                              </a>
                              <a href="" className="border rounded-lg p-2.5">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="#98A2B3" />
                                 </svg>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="blog_content w-full md:w-8/12 px-4">
                        <div>
                           <p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p>
                           <hr className="mt-8 mb-12" />
                           <h2>Introduction</h2>
                           <h3>Introduction</h3>
                           <h4>Introduction</h4>
                           <h5>Introduction</h5>
                           <h6>Introduction</h6>
                           <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>

                           <Image src={BlogSingleImg} alt="" />
                           <p className="small">Image courtesy of Laura Davidson via Unsplash</p>
                           <quote>
                              <p>“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</p>
                              <span>— Olivia Rhye, Product Designer</span>
                           </quote>
                           <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
                           <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                           </p>
                        </div>
                        <div>
                           <h3>Software and tools</h3>
                           <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                           <h3>Other resources</h3>
                           <p>Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.</p>
                           <ol>
                              <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                              <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                              <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                           </ol>

                           <Image src={BlogSingleImg} alt="" />
                           <p className="small">Image courtesy of Leon via Unsplash</p>

                           <p>Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus.</p>

                           <h3>Conclusion</h3>
                           <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse. </p>
                           <hr className="my-8" />
                           <div className='flex gap-2'>
                              <a href="#" className="bg-slate-100 text-gray-700 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Product</a>
                              <a href="#" className="bg-pink-100 text-pink-600 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Tools</a>
                              <a href="#" className="bg-pink-100 text-pink-700 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Sass</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>



         <div className="">

            <RecentPosts />
            <StartUpBlk />

            <div className="bg-gray-50 lg:py-24 py-16">
               <div className="max-w-3xl mx-auto justify-center items-center text-center px-4">
                  <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 md:tracking-tight mb-5">Sign up for our newsletter</h2>
                  <p className="md:text-xl text-lg font-normal text-gray-500 md:mb-10 mb-8">Be the first to know about releases and industry news and insights.</p>
                  <div className="flex md:flex-row flex-col items-stretch max-w-md mx-auto">
                     <div className="flex flex-col mb-2 w-full">
                        <input className="bg-white rounded-lg text-base leading-none text-gray-500 dark:text-white p-4 md:w-11/12 w-full border border-gray-300 focus:outline-none focus:border-gray-500 shadow mr-4 mb-2 h-12" type="email" placeholder="Enter your email" />
                        <p className="text-sm text-gray-500 text-left md:mb-0 mb-2">We care about your data in our <a href="#" className="underline">privacy policy</a>.</p>
                     </div>
                     <button className="md:w-32 w-full hover:bg-zinc-500 bg-zinc-600 rounded-lg text-base font-medium leading-none text-white p-4 shadow h-12">subscribe</button>
                  </div>
               </div>
            </div>
         </div>

      </Layout>
   )
}
