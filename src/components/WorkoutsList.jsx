import Link from 'next/link'
import React from 'react'


const WorkoutsList = ({program}) => {
  return (
    <div id='programs' className="container mx-auto px-4 py-8">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12">
             {program.title}
        </h1>
        <div className="container mx-auto px-4 py-8 grid gap-6 
        grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {program.workouts.map((workout, index) => (
            <Link 
              className="relative grid h-[24rem] max-w-xl flex-col items-end justify-center overflow-hidden rounded-lg bg-white cursor-pointer" 
              href={`/${program.slug}/${workout.slug}`}
              key={index}
              >
            <div 
              className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent" 
              style={{backgroundImage: `url("${workout.imageUrl}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative text-center p-6 px-6 py-14 md:px-12">
              <h5 className="mb-4 text-2xl font-semibold text-slate-300">
                {`Day ${index + 1}`}
              </h5>
              <h3 className="mb-6 text-2xl font-medium text-cyan-500">
                {workout.title}
              </h3>
            </div>
          </Link>
        ))}
        </div>
    </div>
  )
}

export default WorkoutsList