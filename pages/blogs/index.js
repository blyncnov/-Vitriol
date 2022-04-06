import React from 'react'
import styled from "styled-components"

import Button from '../../constants/Button'

import { BiCheckboxSquare } from 'react-icons/bi'

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
} from "../../styles/constants/Constants"


const BlogPosts = ({posts}) => {
  return (
      <>
            <Container>
                <Constraints>
                    <Section>
                        <SectionInner>

                            {posts.map((post) => {
                                return (
                                    <div key={post.id}>
                                        <Divider>
                                            <BlogDetails>
                                                <BlogContainerBox>
                                                    <BiCheckboxSquare style={{ fontSize: "4em", color: "#44D9B6", fontweight: "bold" }} />
                                                    <HeadingOne
                                                        size="1.5rem"
                                                        sizeM="1.5rem"
                                                        color="#0A192F"
                                                    >
                                                        {post.title}
                                                    </HeadingOne>
                                                    <Paragraph color="#8892B0">
                                                        {post.body}
                                                    </Paragraph>
                                                    <br />
                                                    <Button urlData={`blogs/${post.id}`} bg="#44D9B6" colorHover="black" tittle="Read More" />
                                                </BlogContainerBox>
                                            </BlogDetails>

                                        </Divider>
                                    </div>
                                )
                            })}

                        </SectionInner>
                    </Section>
                </Constraints>
            </Container>
    </>
  )
}

export default BlogPosts




const Container = styled.div`
width: auto
`

export const AttributeContainer = styled.div`
width: auto;
background-color: rgb(17,34,64, .1);
position: relative;
padding: 2em 0;
`

export const BlogDetails = styled.div`
position: relative;
`

export const BlogContainerBox = styled.div`
width: 100%;
padding: 1em 2em;
border-radius: 3px;
background-color: rgb(17,34,64, .1);
color: white;
line-height: 1.5;
box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
transition: all 0.8s ease 0s;


&:hover{
    transform: translateY(-15px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 10px -5px, rgba(0, 0, 0, 0.02) 0px 5px 4px -5px;
}
`


export const getStaticProps = async () => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();

    return {
        props: {
            posts: data
        },
    };
};