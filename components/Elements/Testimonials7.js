import Link from "next/link";
import ImgLoader from "../Image";

import Logo from "../../assets/images/logo.png";
import Author1 from "../../assets/images/Avatar.png";

export default function Testimonials7() {
  return (
    <>
      <div className="py-5 lg:px-10 px-5 flex items-center text-center flex-col justify-center h-full">
        <div className="flex gap-2 mb-5 justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646446 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
              fill="#FEC84B"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646446 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
              fill="#FEC84B"
            />
          </svg>

          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646446 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
              fill="#FEC84B"
            />
          </svg>

          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646446 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
              fill="#FEC84B"
            />
          </svg>

          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646446 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
              fill="#FEC84B"
            />
          </svg>
        </div>
        <h2 className="lg:text-3xl text-xl  text-gray-900 font-medium mb-10">
          Untitled has saved us thousands of hours of work. We&lsquo;re able to
          spin up projects and features much faster.
        </h2>
        <div className="w-16 mb-2">
          <ImgLoader src={Author1} width={64} height={64} alt="Logo" />
        </div>
        <h4 className="text-lg text-gray-900 font-medium mb-1">
          Kelly Williams
        </h4>
        <p className="text-base text-gray-500 font-normal mb-4">
          Head of Design, Layers
        </p>

        {/* <ImgLoader src={Pagination} width={592} height={36} alt="Logo" /> */}
      </div>
      <div className="flex sm:flex-row flex-col justify-between w-full gap-2 items-center p-3">
        <p className="text-gray-500 text-sm">© Untitled UI 2077</p>
        <p className="flex items-center text-gray-500 text-sm">
          <svg
            className="mr-2"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6673 2.00033C14.6673 1.26699 14.0673 0.666992 13.334 0.666992H2.66732C1.93398 0.666992 1.33398 1.26699 1.33398 2.00033M14.6673 2.00033V10.0003C14.6673 10.7337 14.0673 11.3337 13.334 11.3337H2.66732C1.93398 11.3337 1.33398 10.7337 1.33398 10.0003V2.00033M14.6673 2.00033L8.00065 6.66699L1.33398 2.00033"
              stroke="#667085"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          help@untitledui.com
        </p>
      </div>
    </>
  );
}
