import { useEffect , useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios"


function ImgRendering({url}) {
    const [ImgAllPoke, setImgAllPoke] = useState(null)
    
    const FetchDetail = async () => {
        try {
            const data = await axios.get(url);
            const ImgFrontDefault = data.data?.sprites?.front_default;
            setImgAllPoke(ImgFrontDefault)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        FetchDetail();
    },[]);
    
    return <img src={ImgAllPoke} alt="#" />
}

ImgRendering.propTypes = {
    url: PropTypes.string.isRequired,
};

export default ImgRendering;