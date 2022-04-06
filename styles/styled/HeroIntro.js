import styled from "styled-components"

export const HeroContainerSection  = styled.div`
width: auto;
background-color: #0A192F;
position: relative;
box-shadow: rgb(98 98 98 / 24%) 0px 3px 8px;


`

export const DonateontainerSection  = styled.div`
width: auto;
position: relative;
// background-color: white;
padding: 1em;
border-radius: 2px;
margin-top: 5%;
color: #0A192F;
box-shadow: 0 4px 30px -5px black ;


@media (max-width: 768px) {
  padding: 0;
}
`

export const DonateBox  = styled.div`
width: auto;
background-color: white;
border-radius: 4px;
position: absolute;
top: 0;
left: 0;
right: 0;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

@media (max-width: 768px) {
    position: relative;
}
`

export const DetailedDonateBox  = styled.div`
background-color: #45DBB7;
padding: 2em 1em;
border-radius: 4px 4px 0 0;
font-weight: bold;
color: #333333;
`

export const DetailedDonateForm  = styled.div`
padding:  1em;

label{
    margin: 1em 0;
}

input{
  outline: none;
  width: 100%;
  border-radius: 2px;
  padding:  1em;
  border: 1px solid #ccc;
  border-radius: 2px;
}

button {
  background-color: #45DBB7;
  border: none;
  color: white;
  padding: 1em ;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
}



`

export default HeroContainerSection