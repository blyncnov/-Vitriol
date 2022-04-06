import React from 'react'

import { NavigationLists } from "../data/Navigation"

import {
  Constraints, Section,
  SectionInner, Divider,
  HeadingOne, Paragraph,
  FlexBoxToRow
} from "../styles/constants/Constants"

import { FooterContainer } from "../styles/styled/Footer"

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Constraints>
          <Section>
            <SectionInner align="flex-start">
              <Divider>
                <h1><span>!Vitriol</span></h1>
                <br />
                <Paragraph color="#8892B0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Modi cumque tenetur inventore veniam, hic vel ipsa
                  necessitatibus ducimus architecto fugiat!
                </Paragraph>
                <br />
              </Divider>
              <SectionInner align="flex-start">
                <Divider>
                  <h3><span>Quick Links</span></h3>
                  <br />
                  {NavigationLists.map((item) => {
                    return <Paragraph color="#8892B0" key={item.id}><a style={{ color: "inherit" }} href={item.navigate}>{item.name}</a></Paragraph>
                  })}
                </Divider>

                <Divider >
                  <h3><span>Contact Us</span></h3>
                  <br />
                  <Paragraph color="#8892B0">183 Agbede St. Funaab gate, Funaab, Alabata</Paragraph>
                  <br />
                  <Paragraph color="#8892B0">bholuwatife00@gmail.com</Paragraph>
                  <br />
                  <li>+234 (814) 9055 068</li>
                  <br />
                  <Paragraph color="#8892B0">	Monday — Friday 8:00am - 5:00pm</Paragraph>
                </Divider>
              </SectionInner>

            </SectionInner>
          </Section>
        </Constraints>
      </FooterContainer>
    </>
  )
}

export default Footer