import { services } from "../constants"
import ServiceCard from "../component/ServiceCard"

const Services = () => {
  return (
    <section className="max-conatiner flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard key={service.label} index={index} {...service} />
      ))}
    </section>
  )
}

export default Services