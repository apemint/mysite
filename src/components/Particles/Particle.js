import Particles from 'react-particles-js';
import particlesConfig from '../../configs/particlesConfig';
function Background() {

    return (
        <div className='bg' >
<Particles
 
      params={particlesConfig}
    />

        </div>

    )
}

export default Background;