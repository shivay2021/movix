import React from "react";

import Carousel from "../../../component/carousel/Carousel"
import Usefetch from "../../../hooks/Usefetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = Usefetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;