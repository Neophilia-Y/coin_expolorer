import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 30px;
`;
const Link = styled.a`
    color: black;
`;

const Exchanges = ({ name, description, links }) => (
    <Container>
        <h3>{name}</h3>
        <p>{description && `${description.substring(0, 50)}...`}</p>
        {links && links.website && (links.website.length > 0) && (
            links.website.map(web => (
                <a href="{web}">{web}</a>
            ))
        )}
    </Container>
);

export default Exchanges;