import React, { useState, useRef } from 'react'
import { ethers } from "ethers"

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
    const AmountRef = useRef("")

    const onSubmitHandlerDeposit = async (e) => {
        e.preventDefault();
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()

            const DonateAmount = AmountRef.current.value
            const tx = signer.sendTransaction({
                to: "0xd18e71fe543e23Fe56C34b9750391cf6Ccb54BF8",
                value: ethers.utils.parseEther(DonateAmount)
            });
            console.log(tx);
        }
    }

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
                                    GIVE A HAND TO MAKE THE BETTER WORLD
                                </HeadingOne>
                                <br />
                                <Paragraph color="#8892B0">
                                    The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.
                                    inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct especially
                                    workplace.
                                </Paragraph>

                                <br />
                                <FlexBoxToRow>
                                    <Button full="100%" bg="#45DBB7" tittle="Explore" urlData="/blogs" />
                                    <Button full="100%" bgHover="#45DBB7" tittle="Contact us" urlData="mailto:bholuwatife00@gmail.com" />
                                </FlexBoxToRow>
                                <br />
                            </Divider>

                            <Divider order="1">
                                <DonateontainerSection>
                                    <DonateBox>
                                        <DetailedDonateBox>
                                            <h2>Vitriol Charity Funds</h2>
                                            <br />
                                            <p>Be the light to the world while you can.</p>
                                        </DetailedDonateBox>
                                        <DetailedDonateForm>
                                            <form onSubmit={onSubmitHandlerDeposit}>
                                                <div>
                                                    <label htmlFor="Name">Amount to Give </label>
                                                    <br />
                                                    <br />
                                                    <input type="number" placeholder="Enter Amout To Give" ref={AmountRef} />
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