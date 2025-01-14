import React from "react";

function Testimonials() {
  return (
    <>
      <h1 className=" text-3xl p-4 m-2 text-gray-300 ">Testimonials</h1>

      <div className="flex max-md:flex-col">
        <div className=" ">
          <div className=" flex-col p-12 items-center justify-center bg-[#333] m-4 rounded-xl ">
            <div className="flex m-2">
              <img
                src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"
                className=" h-[40px] w-[40px] rounded-full "
                alt="img"
              />
              <h1 className=" text-2xl m-2 text-gray-300 ">Nicolas John</h1>
            </div>

            <div>
              <i class="bx bxs-quote-alt-left text-4xl text-gray-500"></i>
              <p className="m-2 text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quos perspiciatis ducimus qui omnis excepturi et quasi
                dignissimos quis recusandae, labore tempora similique debitis
                fugit, nobis at, iusto itaque ex.
              </p>
              <div className="m-2">
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star-half text-yellow-500"></i>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className=" flex-col p-12 items-center justify-center bg-[#333] m-4 rounded-xl ">
            <div className="flex m-2">
              <img
                src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600"
                className=" h-[40px] w-[40px] rounded-full "
                alt="img"
              />
              <h1 className=" text-2xl m-2 text-gray-300 ">
                Cassandra Natalie
              </h1>
            </div>

            <div>
              <i class="bx bxs-quote-alt-left text-4xl text-gray-500"></i>
              <p className="m-2 text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quos perspiciatis ducimus qui omnis excepturi et quasi
                dignissimos quis recusandae, labore tempora similique debitis
                fugit, nobis at, iusto itaque ex.
              </p>
              <div className="m-2">
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bx-star text-yellow-500"></i>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className=" flex-col p-12 items-center justify-center bg-[#333] m-4 rounded-xl ">
            <div className="flex m-2">
              <img
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600"
                className=" h-[40px] w-[40px] rounded-full "
                alt="img"
              />
              <h1 className=" text-2xl m-2 text-gray-300 ">John Newman</h1>
            </div>

            <div className="">
              <i class="bx bxs-quote-alt-left text-4xl text-gray-500"></i>
              <p className="m-2 text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quos perspiciatis ducimus qui omnis excepturi et quasi
                dignissimos quis recusandae, labore tempora similique debitis
                fugit, nobis at, iusto itaque ex.
              </p>
              <div className="m-2">
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star text-yellow-500"></i>
                <i class="bx bxs-star text-yellow-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
