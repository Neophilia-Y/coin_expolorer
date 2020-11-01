import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`

`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    gap: 15px;
`;
const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 30px;
`;


const Section = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>
            {children}
        </Grid>
    </Container>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Section;