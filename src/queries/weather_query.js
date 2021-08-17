import gql from 'graphql-tag';

const WEATHER_QUERY = gql`
  query GetCityByName($name: String!, $config: ConfigInput!) {
    getCityByName(name: $name, config: $config) {
      name
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
        }
        clouds {
          humidity
        }
      }
    }
  }
`;

export default WEATHER_QUERY;
