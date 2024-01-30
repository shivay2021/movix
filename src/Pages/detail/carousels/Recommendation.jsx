import React from "react";
import Carousel from '../../../component/carousel/Carousel'
import Usefetch from "../../../hooks/Usefetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = Usefetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;