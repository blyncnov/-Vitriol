import React from 'react';

// Components
import Button from "../constants/Button"

// Data
// import { HeroData } from "../data/HeroData"

// styled-components
import {
    HeroContainerSection, DonateontainerSection,
    DonateBox, DetailedDonateBox, DetailedDonateForm
} from "../styles/styled/HeroIntro"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"


const HeroIntro = () => {
    return (
        <>
            <HeroContainerSection>
                <Constraints max="90%">
                    <Section>
                        <SectionInner align="none">
                            <Divider>
                                <HeadingOne
                                    size="2.5rem"
                                    color="#ccd6f6">
                                    OUR HELPING TO THE WORLD TO HEAL HUMANITY
                                </HeadingOne>
                                <br />
                                <Paragraph color="#8892B0">
                                    The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.
                                    inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct especially
                                    workplace.
                                </Paragraph>

                                <br />
                                <FlexBoxToRow>
                                    <Button full="100%" tittle="Donate" bgHover="#45DBB7" urlData="mailto:bholuwatife00@gmail.com" />
                                    <Button full="100%"  bg="#45DBB7" tittle="Contact us" urlData="" />
                                </FlexBoxToRow>
                                <br />
                            </Divider>

                            <Divider order="1">
                                <DonateontainerSection>
                                    <DonateBox>
                                        <DetailedDonateBox>
                                            <h2>Vitriol Charity Funds</h2>
                                            <br />
                                            <p>Be the light to thw world while you can.</p>
                                        </DetailedDonateBox>
                                        <DetailedDonateForm>
                                            <form >
                                                <div>
                                                    <label htmlFor="Name">Amount to Give </label>
                                                    <br />
                                                    <br />
                                                    <input type="number" placeholder="Enter Amout To Give" />
                                                </div>
                                                <br />
                                                <button type="submit">Make Donation</button>
                                            </form>
                                        </DetailedDonateForm>
                                    </DonateBox>
                                </DonateontainerSection>
                            </Divider>

                        </SectionInner>
                    </Section>
                </Constraints>
            </HeroContainerSection>

        </>
    )
}

export default HeroIntro