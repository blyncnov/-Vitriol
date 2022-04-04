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
color: white;
box-shadow: rgb(98 98 98 / 24%) 0px 3px 8px;

@media (max-width: 768px) {
  padding: 0;
}
`

export const DonateBox  = styled.div`
width: auto;
// height: 200px;
background-color: #0B192E;
border-radius: 4px;
position: absolute;
top: 0;
left: 0;
right: 0;
box-shadow: rgb(98 98 98 / 24%) 0px 3px 8px;

@media (max-width: 768px) {
    position: relative;
}
`

export const DetailedDonateBox  = styled.div`
background-color: #45DBB7;
padding: 2em 1em;
border-radius: 4px 4px 0 0;
font-weight: bold;
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
  border: none;
}

button {
      background-color: #45DBB7;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

`

export default HeroContainerSection