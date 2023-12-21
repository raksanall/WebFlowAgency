import Section1Features from "../../Components/FeaturesSections/Section1Features"
import HeaderBottom from "../../Components/HeaderBottom"
import Section2Features from "../../Components/FeaturesSections/Section2Features"
import Section3Features from "../../Components/FeaturesSections/Section3Features"
import Section4Features from "../../Components/FeaturesSections/Section4Features"
import Section5Features from "../../Components/FeaturesSections/Section5Features"
import Section6Features from "../../Components/FeaturesSections/Section6Features"

const Features = () => {
  return (
    <div>
     <HeaderBottom src="Konu.png" h2title="All the features you need" ptitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
      <Section1Features/>
      <Section2Features/>
      <Section3Features/>
      <Section4Features/>
      <Section5Features/>
      <Section6Features/>
    </div>
  )
}

export default Features
