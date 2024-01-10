import React from "react";
import styled from "styled-components";

const Map = () => {
  return (
    <MapCotainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d51136.37102578357!2d74.01442385621775!3d17.71004447206168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc239a2ce1d1ffd%3A0x19b6c1ad1a020344!2sfyx%20architec%20satara!3m2!1d17.6927762!2d74.0244427!5e0!3m2!1sen!2sin!4v1703225271872!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{border: 0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapCotainer>
  );
};

export default Map;

const MapCotainer = styled.div`
  iframe {
    width: 100%;
  }
`;