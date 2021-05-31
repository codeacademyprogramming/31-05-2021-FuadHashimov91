import React from 'react';
import ReactDom from 'react-dom';
import Weather from '../Weather';
import WeatherList from '../WeatherLIst';

// import {getByText} from '@testing-library/jest-dom';

// import WeatherList from '../WeatherLIst';


//Example Testing
// const expected = true;
// const actual = true;

// test("should test dummy function",()=>{
//     expect(actual).toBe(expected);
// })


test("Test Weather Header", () => {
    const root = document.createElement('div');
    ReactDom.render(
        <WeatherList />,
        root
    );

    expect(
        root.querySelector('#humidity').textContent
    ).toBe(typeof "string");
})



