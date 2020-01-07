import React, { FC } from 'react';

interface IProps {
    name?: string;
    year?: number;
}

const Header: FC<IProps> = (props: IProps) => (
<h1>Hello, {props.name}! Welcome to React and TypeScript. Let's begun our jurney since {props.year}</h1>
);

Header.defaultProps = {
    name: 'Magda',
    year: 1987,
};
  
export default Header;