
import renderer from 'react-test-renderer';
import SearchComponent from './component/SearchComponent';
import HeaderComponent from './component/HeaderComponent';
import { cleanup } from '@testing-library/react';
import CurrentWeatherComponent from './component/CurrentWeatherComponent';
import { SelectUnits } from './component/SelectUnits';

afterEach(cleanup);

describe('Render Search Component', () => {

  it('snapshot testing for Search component', () => {
    const component = renderer.create(
      <SearchComponent />,
    );
    let Searchtree = component.toJSON();
    expect(Searchtree).toMatchSnapshot();
  })
})

describe('renders header component', () => {

  it('snapshot testing for Header component', () => {
    const component1 = renderer.create(
      <HeaderComponent />,
    );
    let Header = component1.toJSON();
    expect(Header).toMatchSnapshot();
  })
})

describe.skip('renders Todays weather component', () => {
  let weatherdata = {

    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d"
      }
    ],
    main: {
      temp: 14.6,
      "feels_like": 13.87,
      "humidity": 67
    },

    wind: {
      speed: 4.92,
    },

    dt: 1660791659,
    name: "Richmond",

  }

  it('snapshot testing for Header component', () => {
    
    const component3 = renderer.create(
      <CurrentWeatherComponent weatherData={weatherdata} />,
    );

    let Header1 = component3.toJSON();
    expect(Header1).toMatchSnapshot();
  })
})

describe('renders select Units component', () => {

  it('snapshot testing for SelectUnits component', () => {
    const component2 = renderer.create(
      <SelectUnits />,
    );
    let unitsTree = component2.toJSON();
    expect(unitsTree).toMatchSnapshot();
  })
})



