"use client";

import React from 'react';
import programsData from "@/data/programs.json";
import ProgramIntro from '@/components/ProgramIntro';
import WorkoutsList from '@/components/WorkoutsList';


const WorkoutProgram = ({ params }) => {
    const { program } = params;
    const programData = programsData.programs.find((p) => p.slug === program)
    return (
        <>
            <ProgramIntro program={programData} />
            <WorkoutsList program={programData} />
        </>
    )
}

export default WorkoutProgram