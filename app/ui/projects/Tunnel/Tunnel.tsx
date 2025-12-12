import Project from '../../Project/Project';
import TunnelTags from './TunnelTags';

const Tunnel = () => {
  return <Project linkUrl='http://flatline.hopto.org/fx0/' 
    title="2d Tunnel Fx"
    image="/flatline-website/projectTunnel.webp">
    <div className='p-5'>
      Classic 2d Tunnel Effect implemented in canvas2d and javascript      
      <TunnelTags></TunnelTags>
    </div>
  </Project>
}

export default Tunnel
