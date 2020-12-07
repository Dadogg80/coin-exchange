import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
    font-family: sans-serif;
    color: #FFFF;
`;

const Button = styled.button`
    border-radius: 9px;
    padding: 7px;
    color: #fff;
    background-color: blue;
`;

export default function AccountBalance(props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if ( props.showBalance ) {
        content = <>Balance: ${props.amount}</>;
    }
    return (
        <Section>
            <h4>
            {content}
            </h4>
            <Button onClick={props.handleBalanceVisibilityChange}>{buttonText}</Button>             
        </Section>
    );
}





AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}