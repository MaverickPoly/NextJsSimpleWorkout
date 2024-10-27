"use client"

const Hero = () => {
    const scrollToPrograms = () => {
      const section = document.getElementById('programs');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div className="bg-white min-h-screen flex items-center justify-center px-4">
        <section className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
              Discover Your Perfect <br />
              <span className="text-indigo-500">Workout Program</span>
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Choose from our range of expertly designed workout plans. Whether you’re a beginner or an athlete, we’ve got you covered.
            </p>
            <div className="pt-6">
              <button
                onClick={scrollToPrograms}
                className="px-7 py-3 bg-indigo-500 text-white rounded-md shadow-lg hover:bg-indigo-600 transition"
              >
                Get Started
              </button>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="flex-1 mt-8 lg:mt-0">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              alt="Workout Illustration"
              className="w-full mx-auto sm:w-10/12 lg:w-full"
            />
          </div>
        </section>
      </div>
    );
  };
  
  export default Hero;
  