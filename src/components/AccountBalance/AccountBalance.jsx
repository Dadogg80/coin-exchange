import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 3rem;
    color: #FFFF;
`;

const Balance = styled.div`
    min-width: 250;
    margin: 0.5rem 0 0 2.5rem;
    font-size: 1.5em;
    vertical-align: middle;
    text-align: left;
`;

const Button = styled.button`
    margin: 0 8px;
    
`;

const BalanceToggleButton = styled(Button)`
    width: 150px;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});



export default function AccountBalance(props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = '\u00A0';
    if (props.showBalance) {
        content = <>{ formatter.format(props.amount) } </>
    }
    const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');
    return (
        <>
            <Balance>{content}</Balance>
            <Section>
                <BalanceToggleButton 
                    onClick={props.handleBalanceVisibilityChange}
                    className= {buttonClass}>
                    {buttonText}
                </BalanceToggleButton>
                <Button className="btn btn-success"
                    onClick = {props.handleBrrr}>
                    <i className="fas fa-helicopter"></i>    
                </Button>
            </Section>
        </>
    );
}





AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}