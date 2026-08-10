import Landing from '../../components/home/Landing'
import Do from '../../components/home/Do'
import WhyUs from '../../components/home/WhyUs'
import ChatWidget from '../../components/chat/ChatWidget'

export default function Home() {
  return (
    <>
      <Landing />
      <Do/>
      <WhyUs />
      <ChatWidget />
    </>
  );
}