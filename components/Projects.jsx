import React from 'react'

import { AllProjectData } from "../data/Projects"

import {
    ProjectContainer, ProjectTech
} from "../styles/styled/Projects"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    return (
        <>
            <ProjectContainer>
                <Constraints>
                    <FlexBoxToRow>
                        <HeadingOne color="#0B192E"
                            size="clamp(16px,5vw,2rem)"
                        > <span>02.</span> Projects
                        </HeadingOne>
                        <div className="hr"></div>
                    </FlexBoxToRow>
                    {AllProjectData.map((project) => {
                        return (
                            <div key={project.id} >
                                <Section padding="1.7em 0">
                                    <SectionInner >
                                        <Divider order={project.order} orderM="0">
                                            <br />
                                            <HeadingOne
                                                color="#0B192E"
                                                size="clamp(16px,5vw,2rem)"
                                            ><span> |</span> {" "} {project.ProjectName}</HeadingOne>
                                            <br />
                                            <Paragraph color="#636b83">
                                                {project.ProjectDescription}
                                            </Paragraph>
                                            <br />
                                            <ProjectTech>
                                                {project.ProjectTechUsed.map((tech, index) => {
                                                    return <li key={index}>{tech} <span> |</span>  {" "}</li>
                                                })}
                                            </ProjectTech>
                                        </Divider>
                                        <Divider order="0" style={{ cursor: "pointer" }}>
                                            <Link href={project.ProjectUrl} passHref={true} target="_blank">
                                                <div>
                                                    <Image style={{ borderRadius: "3px" }}
                                                        src={project.ProjectImage}
                                                        placeholder="blur"
                                                        blurDataURL={project.ProjectImage}
                                                        alt="banner"
                                                        layout="responsive" />
                                                </div>
                                            </Link>
                                        </Divider>
                                    </SectionInner>
                                </Section>
                            </div>
                        )
                    })}
                </Constraints>
            </ProjectContainer>
        </>

    )
}

export default Projects