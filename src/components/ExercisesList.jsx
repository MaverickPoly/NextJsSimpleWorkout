import React from "react";

const ExercisesList = ({workout}) => {
    return (
        <div id="exercises" className="container mx-auto px-4 py-8">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12">
                {workout.title}
            </h1>

            <div 
                className="container mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
                {workout.exercises.map((exercise, index) => (
                    <div
                        className="relative h-[20rem] flex-col items-end justify-center overflow-hidden rounded-lg 
                                bg-white shadow-lg cursor-pointer transfrom hover:scale-105 transition-transform 
                                duration-200 border-solid border-gray-900"
                        href={``}
                        key={index}
                    >
                        {/* BG Image */}
                        <div
                            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent"
                            style={{
                                backgroundImage: `url("${exercise.imageUrl}")`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/70 via-black/30"></div>

                            {/* Content */}
                            <div className="relative text-center p-6 px-6 py-10 md:px-8">
                                <h5 className="mb-2 text-xl font-semibold text-slate-300">
                                    Exercise {index + 1}
                                </h5>
                                <h3 className="mb-2 text-2xl font-medium text-cyan-500">
                                    {exercise.name}
                                </h3>
                                <p className="text-md font-semibold text-white">
                                    {exercise.sets} Sets of {exercise.reps} Reps
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExercisesList;