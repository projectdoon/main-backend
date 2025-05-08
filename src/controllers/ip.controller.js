// import { getLocalIP } from '../services/ipServices.js';
import ipServices from '../services/ip/ip.services.js'

class ipController {
    getServerIp  (req, res) {
        res.json({ ip: ipServices.getLocalIP() });
    };
}
// export const getServerIp = (req, res) => {
//     res.json({ ip: ipServices.getLocalIP() });
// };
export default new ipController();