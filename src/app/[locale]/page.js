import Landing from '../../components/home/Landing'
import Do from '../../components/home/Do'
import WhyUs from '../../components/home/WhyUs'
import ChatWidget from '../../components/chat/ChatWidget'
import Work from '../../components/home/Work'
import Process from '../../components/home/Process'
import Pricing from '../../components/home/Pricing'

export default function Home() {
  return (
    <>
      <Landing />
      <Do/>
      <ChatWidget />
      <Work />
      <Process />
      <Pricing/>
    </>
  );
}