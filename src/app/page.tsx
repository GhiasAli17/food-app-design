import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-lighDark">
      <div className="px-[100px] z-10 ">
        <nav className="mt-12 flex items-center ">
          <div className="w-[1117px] h-[1117px] rounded-full -z-50 bg-lightPink -top-[105%] absolute ml-[223px] mb-[258px]"></div>
          <div className="flex gap-[5px] items-center cursor-pointer">
            <div className="relative">
              <div className="w-4 h-4 bg-yellow rounded-xl"></div>
              <svg
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[5px] left-[5px] right-[5px] bottom-0"
              >
                <path
                  d="M6 8C6 6.34315 3 0.5 3 0.5C3 0.5 0 6.34315 0 8C0 9.65685 1.34315 11 3 11C4.65685 11 6 9.65685 6 8Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="font-medium text-lg">FoodSpin</h3>
          </div>
          {/* middle section  */}
          <div className="ml-[170px]">
            <ul className="list-none flex text-sm gap-x-[60px]">
              <li className="hover:underline transition-all ease-in-out duration-500 ">
                <Link href="#">Breakfast</Link>
              </li>
              <li className="hover:underline transition-all ease-in-out duration-500 ">
                <Link href="#">Lunch</Link>
              </li>
              <li className="hover:underline transition-all ease-in-out duration-500 ">
                <Link href="#">Dinner</Link>
              </li>
            </ul>
          </div>
          {/* right section  */}
          <div className="ml-auto cursor-pointer">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_28)">
                <path
                  d="M4 7V5C4 3.67392 4.52678 2.40215 5.46447 1.46447C6.40215 0.526784 7.67392 0 9 0C10.3261 0 11.5979 0.526784 12.5355 1.46447C13.4732 2.40215 14 3.67392 14 5V7H17C17.2652 7 17.5196 7.10536 17.7071 7.29289C17.8946 7.48043 18 7.73478 18 8V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H1C0.734784 21 0.48043 20.8946 0.292893 20.7071C0.105357 20.5196 0 20.2652 0 20V8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H4ZM4 9H2V19H16V9H14V11H12V9H6V11H4V9ZM6 7H12V5C12 4.20435 11.6839 3.44129 11.1213 2.87868C10.5587 2.31607 9.79565 2 9 2C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5V7Z"
                  fill="#090909"
                />
                <circle cx="17" cy="19" r="3" fill="#FF922C" />
              </g>
              <defs>
                <clipPath id="clip0_5_28">
                  <rect width="20" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </nav>

        <div className="mt-[212px] flex justify-between">
          <div className="max-w-[367px]">
            <h2 className="text-yellow text-[44px]">$32</h2>
            <h3 className="text-4xl  font-medium">
              Green Goddess Chicken Salad
            </h3>
            <p className="mt-3">
              It is a non vegetarian salad which consists of the green goddess
              dressing mixed with chicken, peppers, olives and celery.
            </p>
            <button className="mt-7 bg-yellow text-white py-3 transition-all ease-in-out duration-300 px-10 rounded-full hover:scale[1.2]">
              ORDER NOW
            </button>
          </div>
          <div className="max-w-[560px] -mt-[150px] relative">
            <div className="grid place-items-center relative -z-50 w-full aspect-square">
              <div className="absolute inset-0 border-2 rounded-full border-yellow mask-circle"></div>
              <Image
                alt="center image"
                src="/images/01.png"
                sizes="100vw"
                width={0}
                height={0}
                className="w-full object-cover z-30"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* <!-- Example of an image on the border, you can replicate this for multiple images --> */}
                  <Image
                    alt="border image"
                    src="/images/01.png"
                    sizes="100vw"
                    width={150}
                    height={150}
                    className="absolute -top-[55px] left-1/2 transform -translate-x-1/2"
                  />
                  {/* <!-- Add more images here with appropriate positioning -->
                  <!-- For example, at 45 degrees --> */}
                  <Image
                    alt="border image"
                    src="/images/02.png"
                    sizes="100vw"
                    width={150}
                    height={150}
                    className="absolute top-[12.5%] left-[80.5%] transform -translate-x-1/2 -translate-y-1/2"
                  />
                  <Image
                    alt="border image"
                    src="/images/03.png"
                    sizes="100vw"
                    width={150}
                    height={150}
                    className="absolute top-[12.5%] left-[47.5%] transform -translate-x-[245px] -translate-y-1/2"
                  />
                  <Image
                    alt="border image"
                    src="/images/04.png"
                    sizes="100vw"
                    width={150}
                    height={150}
                    className="absolute top-[35%] left-0 transform -translate-x-1/2 -translate-y-1/2"
                  />
                  <Image
                    alt="border image"
                    src="/images/05.png"
                    sizes="100vw"
                    width={150}
                    height={150}
                    className="absolute top-[35%] left-[95%] transform -translate-x-1/2 -translate-y-1/2"
                  />
                  {/* <!-- Add other images similarly --> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm mt-[142px] mb-7">Watch the Video</p>
        </div>
      </div>
    </main>
  );
}
