import React from 'react'
import programsData from "@/data/programs.json";
import ExercisesList from '@/components/ExercisesList';

const WorkoutPage = ({ params }) => {
    const { program: programSlug, workout: workoutSlug } = params;
    const programData = programsData.programs.find((p) => p.slug === programSlug);
    console.log(programData);
    const workoutData = programData.workouts.find((w) => w.slug === workoutSlug);
    console.log(workoutData);
    return (
        <div>
            <h1>WorkoutPage</h1>
            <ExercisesList workout={workoutData} />
        </div>
    )
}

export default WorkoutPage

