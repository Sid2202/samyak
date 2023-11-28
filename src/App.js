import particle from './particle.mp4'
function App() {
  return (
    <div className="w-screen h-screen flex flex-col text-white">
      <video autoPlay loop muted className="absolute fixed w-screen h-screen object-cover top-0 left-0">
        <source src={particle} type="video/mp4" />
      </video>
      <div className="absolute w-screen top-0 flex justify-between p-4 ">
        <p className="sm:ml-20 font-revalia text-2xl text-rose-100">
          Samyak
        </p>
        <div className="flex sm:mr-20 mt-2">
          <p className="mx-4 text-md font-bold font-albert">
            About us
          </p>
          <p className="mx-4 text-md font-bold font-albert">
            Contact
          </p>
          {/* Continuous Manufacturing (Pharma) */}
        </div>
      </div>
      <div className="mt-52 absolute flex flex-col items-center">
        <p className="text-center sm:text-4xl text-3xl font-albert text-white mx-2">
          Bringing to the world the next generation of manufacturing technology.
        </p>
        <p className="text-center mt-6 sm:mx-44 font-albert mx-4">
          <span className='font-bold italic text-lg'>Continuous Manufacturing</span> is the future of pharmaceutical manufacturing. It is a paradigm shift from the traditional batch manufacturing to a continuous process. It is a technology that will bring about a revolution in the pharmaceutical industry.
        </p> 
        {/* </div>
        <div className=""> */}
        {/* <p>
          Samyak Technologies is a company that is working on this technology. We are developing a continuous manufacturing technology that will be the next generation of manufacturing technology for the pharmaceutical industry.
        </p> */}
        {/* <p className="text-center mt-60">
          We are a team of highly motivated and experienced professionals with a passion to bring this technology to the world.
        </p> */}
        <a href="mailto:ajit@samyaktech.co" className="mt-20 bg-white p-2 px-4 rounded-lg font-albert text-purple-900 font-bold hover:bg-purple-900 hover:text-white">
          Sounds interesting? Let's talk.
        </a>
      </div>
      {/* <div>
        Contact Us at 
      </div>
      <div>
        Ajit Patil
        +91 9880225885
        ajit@samyaktech.co
      </div> */}
    </div>
  );
}

export default App;
