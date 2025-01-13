import React from "react";

function Info() {
  return (
    <>
      <div>
        <div className=" text-gray-300 p-3  ">
          <h1 className=" text-3xl p-4 ">Explore</h1>
          <div className="flex items-center justify-evenly max-md:flex-col">
            <div className=" flex-col p-12 items-center justify-center bg-[#333] m-4 rounded-xl ">
              <i class="bx bx-edit-alt text-3xl"></i>
              <br />
              <br />
              <div>
                <h1 className=" text-2xl ">Renting</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  quos perspiciatis ducimus qui omnis excepturi et quasi
                  dignissimos quis recusandae, labore tempora similique debitis
                  fugit, nobis at, iusto itaque ex.
                </p>
              </div>
            </div>
            <div className=" p-12 items-center justify-center bg-[#333] m-4 rounded-xl ">
              <i class="bx bxs-car-mechanic text-3xl"></i>
              <br />
              <br />
              <div>
                <h1 className=" text-2xl ">Maintaining and Repairing</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  quos perspiciatis ducimus qui omnis excepturi et quasi
                  dignissimos quis recusandae, labore tempora similique debitis
                  fugit, nobis at, iusto itaque ex.
                </p>
              </div>
            </div>
            <div className=" p-12 items-center justify-center bg-[#333] m-4 rounded-xl ">
              <i class="bx bx-credit-card text-3xl"></i>
              <br />
              <br />
              <div>
                <h1 className=" text-2xl ">Buying And Selling</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  quos perspiciatis ducimus qui omnis excepturi et quasi
                  dignissimos quis recusandae, labore tempora similique debitis
                  fugit, nobis at, iusto itaque ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
