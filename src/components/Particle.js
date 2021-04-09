import Particles from 'react-particles-js';
import particlesConfig from '../configs/particlesConfig';
function Background() {

    return(
    
        <Particles
        height='100vh'
        width="100%"
        params={particlesConfig}/>
 
    )
}

export default Background;