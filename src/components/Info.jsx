import React from "react";

function Info() {
  return (
    <>
      <div id="services"></div>
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
                  Experience the ease of renting with our trusted service.
                  Whether it’s for a quick trip or a long-term need, we provide
                  affordable and reliable options tailored to suit you. With
                  flexible plans and a seamless process, we make sure you’re on
                  the road without any hassle.
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
                  Keep your car in top shape with our trusted repair and
                  maintenance services. From routine checkups to complex fixes,
                  we offer reliable, affordable solutions tailored to your
                  needs. With skilled technicians and a seamless process, your
                  car is in good hands.
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
                  Experience the simplicity of buying or selling your car with
                  us. Whether you’re searching for your next ride or ready to
                  sell, we provide transparent, hassle-free solutions. With fair
                  pricing and a smooth process, we ensure your experience is
                  quick and stress-free.
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
